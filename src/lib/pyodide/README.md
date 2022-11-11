# Pyodide to run Python in the Browser

This directory contains all utilities for python execution in the browser.
It basically is a copy of the release assets from [the GitHub repository](https://github.com/pyodide/pyodide).

## Changelog

- Renamed `pyodide.mjs` to `pyodide.js` (for Webpack and TypeScript compatibility)
- Added modified wheels for `jedi-language-server` and `pygls`:
	- Removed `pygls` from `METADATA` file of original `jedi-language-server` wheel
	- Wrapped `asyncio.set_event_loop` in try-catch in `server.py` of `pygls`
- Added modified wheels for `python-language-server` and `python-jsonrpc-server`:
    - Removed dependency `ujson` from `METADATA` files of original wheels

Modified wheels for `jedi-language-server` and `python-language-server`
are included although only one package is necessary for running a language server with WebAssembly.
However both packages were tested, with the result that `jedi-language-server` is faster,
yet none of both are really usable in production, because they are really slow due to missing
multithreading / processing power of the browser.
