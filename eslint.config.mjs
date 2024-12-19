export default [
  {
    ignores: ["**/.pnp.cjs", "**/dist/*.**", "scripts/templates/**"],
    settings: {
      next: {
        rootDir: ["src/*/"],
      },
    },
  },
];
