import pythonScript from './worker.py';
import type * as pyodide from './lib/pyodide/pyodide';

declare const globalThis: Worker;

const [
	      initScript,
	      messageScript
      ] = pythonScript.split(/\n# -+.*\n(?:#.*|\n)*/);

type Pyodide = Awaited<ReturnType<typeof pyodide.loadPyodide>>;
let py!: Pyodide;

/**
 * Entrypoint of worker.
 */
function main() {
	let task = init();
	globalThis.addEventListener('message', event => {
		task = task.then(() => handle(event.data));
	});
}

/**
 * Setup Python and Start Language Server.
 */
async function init() {
	const sourceDirectory = location.href.replace(/^(.*)\/.*$/, '$1');
	const pyodideRoot     = sourceDirectory + '/lib/pyodide';

	const pkg = await import(/* webpackIgnore: true */ `${pyodideRoot}/pyodide.js`) as typeof pyodide;

	py = await pkg.loadPyodide({ indexURL: pyodideRoot });
	await py.loadPackage(['micropip', 'setuptools']);
	await py.runPythonAsync(`__pyodide_root__ = """${pyodideRoot}"""`);
	await py.runPythonAsync(initScript);
}

/**
 * Handle Language Server Requests.
 */
async function handle(message: object) {
	(globalThis as any).__pyls_message__ = JSON.stringify(message);

	const response = await py.runPythonAsync(messageScript) as unknown;
	if(typeof response === 'string') {
		const json = response.substring(0, response.lastIndexOf('}') + 1);
		if(json) {
			globalThis.postMessage(json);
		}
	}
}

main();
