# spinnaker-deck-plugin-proof-of-concept

This is a proof of concept Spinnaker Deck plugin with library sharing and code splitting.

This plugin exports a React component which lazy loads a second React component after 2 seconds.
The second React component uses components 
`SpinFormik`, `FormikFormField`, `TextInput`, and `NumberInput` (from `@spinnaker/core`).
This plugin does not bundle any React or `@spinnaker/core` code (the bundle size is 8kb).
Instead, it uses the already loaded modules exposed by deck in this pr: https://github.com/spinnaker/deck/pull/7662 .

## Getting started

Clone this repository and install its dependencies.
Build the library bundles into `dist`, generating a file for each code split point.

```bash
yarn
yarn build
```

Copy (or symlink) the plugin's `dist` directory into deck
```
mkdir ~/deck/plugin
cp dist/* deck/plugin
```
or
```
ln -s dist ~/deck/plugin
```

After loading deck (with [this PR](https://github.com/spinnaker/deck/pull/7662) included),
use native dynamic `import()` to load the code.
Then render the exported React components somewhere.

From the javascript console:
```js
import('/plugin/main.js').then(module => {
    const { react, react_dom } = spinnaker.plugins.sharedLibraries;
    react_dom.render(react.createElement(module.plugin.component), document.querySelector('.navbar-inverse'))
});
```

