// tailwind.config.ts
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";
import svgToDataUri from "mini-svg-data-uri";

// Build a flat color map like { "red-500": "#ef4444", ... }
const flatten = (obj: any, prefix = ""): Record<string, string> =>
  Object.entries(obj || {}).reduce((acc: any, [k, v]) => {
    const key = prefix ? `${prefix}-${k}` : k;
    if (typeof v === "string") acc[key] = v;
    else Object.assign(acc, flatten(v, key));
    return acc;
  }, {});

// Custom plugin to create bg-grid, bg-grid-small, bg-dot utilities
const bgPatterns = plugin(function ({ matchUtilities, theme }) {
  const colors = flatten(theme("colors"));

  matchUtilities(
    {
      "bg-grid": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-grid-small": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-dot": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" cx="10" cy="10" r="1.6257413380501518"/></svg>`
        )}")`,
      }),
    },
    { values: colors, type: "color" }
  );
});

export default {
  // Keep class-based dark mode (you’re setting tokens via `.dark` in globals.css)
  darkMode: "class",

  // In v4, content globs aren’t required. Add only if you want to restrict scanning.
  // content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],

  plugins: [animate, bgPatterns],
} satisfies Config;
