// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerTextEditorCommand('vuetify-gotodocs.goToDoc', (textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) => {

		if (!textEditor.selection) { return; }
		const text: string = textEditor.document.getText(textEditor.selection).trim();

		// vuetify doc
		if (text.startsWith('v-')) {
			openLink(`https://vuetifyjs.com/en/api/${text}/`);
			return;
		}
	});

	context.subscriptions.push(disposable);
}

function openLink(link: string) {
	vscode.env.openExternal(vscode.Uri.parse(link));
}

// this method is called when your extension is deactivated
export function deactivate() { }
