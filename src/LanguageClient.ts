import {EventEmitter} from 'events';

export const currentScript = (document.currentScript as HTMLScriptElement);

/**
 * This LanguageClient is dedicated to connect the monaco editor to any client-side executed LS.
 * Subclasses must handle setup and actual communication.
 */
export abstract class LanguageClient extends EventEmitter {
	// WebSocket compatibility
	onmessage = (message: any) => void 0;
	onclose = (event: any) => void 0;

	// WebSocket compatibility
	private set onopen(handler: () => void) {
		this.init().then(handler);
		this.emit('connected');
	}

	on(event: 'connected', listener: () => void): this;
	on(event: 'initialized', listener: () => void): this;
	on(event: 'disconnected', listener: () => void): this;
	on(eventName: string | symbol, listener: (...args: any[]) => void): this;
	on(eventName: string | symbol, listener: (...args: any[]) => void): this {
		return super.on(eventName, listener);
	}

	abstract init(): Promise<void>;

	/**
	 * Send a message to this LS instance.
	 * @param message - Preferably a JSON string.
	 */
	abstract send(message: string): void;

	/**
	 * Send message to message listener.
	 * @protected
	 */
	protected emitMessage(message: string | object): void {
		this.onmessage({
			data: typeof message === 'string' ? message : JSON.stringify(message)
		});
	}

	close() {
	}

	/**
	 * This function is just a type-safe way to express some compatibility with WebSocket.
	 * It's at least as compatible as required by monaco-jsonrpc.
	 */
	toFakeWebSocket(): WebSocket {
		return this as any;
	}
}
