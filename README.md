# Vanilla Extract Design System

This is an example of a library that can be bundled into a package that you can import into next.js and vite without installing vanilla extract in the consuming application.

For **Vite** you'll need to create a `styles.ts` file and update `index.html` to import it in the header, then inside the `styles.ts` you'll want to put `import @whero/tahua`. This is just to handle the import order so that global styles are imported first, then classes afterwards.

For **Next.js** you'll need to update either the root `layout.tsx` or `_app.tsx` to include `import @whero/tahua`

## Install w/ Next

- `npm install @whero/tahua`
- Follow instructions above
- Add the DesignSystemProvider with Link and Image components passed through

---

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
