# Python Support for the Monaco Editor

This project demonstrates how Python Code can be written in the
Browser while static code analysis features are provided.

The implementation is using the Monaco editor as a base and the jedi-language-server as the
language server. This project is basically about building the interface between both packages.

The most important parts are:

- [index.ts](src/index.ts): The main script which instantiates the Monaco editor
  and implements the interface to the WebWorker that is the Language Server.
- [worker.ts](src/worker.ts): The web worker script, that manages Pyodide and the Language Server.
- [worker.py](src/worker.py): The python code, that is actually running the Language Server.
- [Pyodide and its packages](src/lib/pyodide): Further information is in [a separate README](src/lib/pyodide/README.md).

I originally wrote this code inside a larger project for my (undisclosed) bachelor thesis.

## Usage

The start command is defined in the [package.json](package.json). Therefore, just run `yarn start`.
