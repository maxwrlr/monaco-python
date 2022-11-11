import {currentScript, LanguageClient} from './LanguageClient';

export class WorkerLanguageClient extends LanguageClient {
	protected _url;
	protected _worker!: Worker;

	constructor(path: string) {
		super();
		const url = new URL(currentScript.src);
		url.pathname = path;
		this._url = url.toString();
	}

	async init(): Promise<void> {
		this._worker = new Worker(this._url);
		this._worker.addEventListener('message', event => {
			this.emitMessage(event.data);
		});
		this.emit('connected');
	}

	send(message: string) {
		const json = JSON.parse(message);
		if(json.method === 'initialized') {
			this.emit('initialized');
		}

		this._worker.postMessage(json);
	}

	close() {
		this._worker.terminate();
		this.emit('disconnected');
	}
}
