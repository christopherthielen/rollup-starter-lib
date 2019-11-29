# spinnaker-deck-plugin-proof-of-concept

This is a proof of concept Spinnaker Deck plugin with library sharing and code splitting.

This plugin exports a React component which lazy loads a second React component after 2 seconds.
The second React component uses a components from `@spinnaker/core`: `FormField` and `TextInput`.
This plugin does not bundle any React or `@spinnaker/core` code.
Instead, it uses the already loaded modules exposed by deck in this pr: https://github.com/spinnaker/deck/pull/7662 .

## Getting started

Clone this repository and install its dependencies.
Build the library bundles into `dist`, generating a file for each code split point.

```bash
yarn
yarn build
```

Copy (or symlink) the plugin `dist` directory into deck
```
mkdir ~/deck/plugins
cp dist/* deck/plugins
```
or
```
ln -s dist ~/deck/plugins
```

After loading deck (with [this PR](https://github.com/spinnaker/deck/pull/7662) included), use native dynamic `import()` to load the code.
Then render the exported React components somewhere.

From the javascript console:
```
import('/plugin/main.js').then(module => {
    const { react, react_dom } = spinnaker.plugins.sharedLibraries;
    react_dom.render(react.createElement(module.plugin.component), document.querySelector('.navbar-inverse'))
});
```

