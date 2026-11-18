# Velon Ecosystem Explorer

A small source navigator for Velon's authority intelligence stack. Select a component,
read its role and evidence boundary, then open the implementation or its contract.

The first version includes Cataloger, Catalyst SDK, ARM, the Indexer and Console.
Search filters components; URL fragments link directly to a component, such as `#indexer`.
Source links are pinned to an explicit Velon commit. The live console has its own release.

## Run

```sh
python3 -m http.server 4179 --bind 127.0.0.1
```

Open http://127.0.0.1:4179. No build, installation or credentials are required.

## Structure

- `components.js`: component descriptions, relationships and pinned source paths.
- `app.js`: selection, filtering and URL navigation.
- `index.html` and `styles.css`: accessible static interface.

This project does not connect wallets or query Solana. Follow the source links for
implementation and validation evidence; use the existing console for wallet workflows.
