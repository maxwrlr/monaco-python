import * as monaco from 'monaco-editor-core';
import 'monaco-languages';
import {CloseAction, createConnection, ErrorAction, MonacoLanguageClient, MonacoServices} from 'monaco-languageclient';
import {listen} from '@codingame/monaco-jsonrpc';
import {WorkerLanguageClient} from './WorkerLanguageClient';

Object.assign(window, {
	MonacoEnvironment: {
		getWorker(moduleId: string, label: string) {
			switch(label) {
				case 'editorWorkerService':
					return new Worker(new URL('monaco-editor/esm/vs/editor/editor.worker', import.meta.url));
				default:
					throw new Error(`Unknown label ${label}`);
			}
		}
	}
});

MonacoServices.install(monaco as any);

const editor = monaco.editor.create(
	document.getElementById('editor')!,
	{
		model:    monaco.editor.createModel('', 'python'),
		readOnly: true,
		minimap:  {
			enabled: false
		}
	}
);

const langClient = new WorkerLanguageClient('/python.ls.worker.min.js');
langClient.on('initialized', () => editor.updateOptions({ readOnly: false }));

listen({
	webSocket:    langClient.toFakeWebSocket(),
	onConnection: connection => {
		// create and start the language client
		const languageClient = new MonacoLanguageClient({
			name:          'Worker Language Client',
			clientOptions: {
				documentSelector: ['python'],
				errorHandler:     {
					error:  () => ErrorAction.Continue,
					closed: () => CloseAction.DoNotRestart
				}
			},
			// create a language client connection from the JSON RPC connection on demand
			connectionProvider: {
				get: (errorHandler, closeHandler) => {
					return Promise.resolve(createConnection(connection, errorHandler, closeHandler));
				}
			}
		});

		const disposable = languageClient.start();
		connection.onClose(() => {
			disposable.dispose();
		});
	}
});
