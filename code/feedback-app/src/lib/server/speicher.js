// Der Ordner "server" garantiert: Dieser Code landet nie im Browser.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import ExcelJS from 'exceljs';

export function liesStimmen() {
	if (!existsSync('data/stimmen.json')) return [];
	return JSON.parse(readFileSync('data/stimmen.json', 'utf-8'));
}

export async function speichereStimme(stimme) {
	const stimmen = liesStimmen();
	stimmen.push(stimme);

	mkdirSync('data', { recursive: true });
	writeFileSync('data/stimmen.json', JSON.stringify(stimmen, null, 2));

	// Die Excel-Datei wird jedes Mal komplett neu erzeugt.
	const mappe = new ExcelJS.Workbook();
	const blatt = mappe.addWorksheet('Feedback');
	blatt.columns = [
		{ header: 'Zeit', key: 'zeit', width: 22 },
		{ header: 'Sterne', key: 'sterne', width: 8 },
		{ header: 'Text', key: 'text', width: 60 }
	];
	blatt.addRows(stimmen);

	// Erst im Arbeitsspeicher bauen, dann in einem Zug schreiben:
	// So kommen sich zwei gleichzeitige Stimmen nicht in die Quere.
	const inhalt = await mappe.xlsx.writeBuffer();
	writeFileSync('data/feedback.xlsx', inhalt);
}
