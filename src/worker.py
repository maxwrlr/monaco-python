import micropip

await micropip.install(__pyodide_root__ + '/wheels/pygls-0.11.2-py3-none-any.whl')
await micropip.install(__pyodide_root__ + '/wheels/jedi_language_server-0.34.3-py3-none-any.whl')

# Polyfill multiprocessing for pygls: https://github.com/pyodide/pyodide/issues/1603
import sys

sys.modules['_multiprocessing'] = object

# import language server requirements
from jedi_language_server.server import SERVER as JediLangServer
from pygls.server import deserialize_message
import json


# Helper to retrieve the server response
class TransportHelper:
	def write(self, message):
		global lsp_result
		lsp_result = message


JediLangServer.lsp.transport = TransportHelper()
JediLangServer.lsp._send_only_body = True

# ------------[ Initialization done, message handler follows]------------

from js import __pyls_message__

lsp_result = None
JediLangServer.lsp._procedure_handler(
	json.loads(__pyls_message__, object_hook=deserialize_message)
)

# Will serve as return value
lsp_result
