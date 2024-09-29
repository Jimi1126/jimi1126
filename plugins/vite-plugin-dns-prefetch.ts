import { Plugin } from "vite";

export default function dnsPretchPlugin(): Plugin {
  const links = new Set<string>();
  function parse(code: string) {
    const urlMatches = code.match(/https?:\/\/[^\s]+/g) || [];
    urlMatches.forEach((url) => {
      const urlObj = new URL(url);
      links.add(`<link rel="dns-prefetch" href="${urlObj.hostname}" />`);
    });
  }
  return {
    name: "dns-pretch",
    async transform(code, id) {
      if (!/node_modules/.test(id) && /\.[vue]|[js]|[css]|[html]$/.test(id)) {
        parse(code);
      }
      return null;
    },
    async transformIndexHtml(html: string) {
      parse(html);
      return html.replace("<head>", `<head>\n${Array.from(links).join("")}\n`);
    },
  };
}
