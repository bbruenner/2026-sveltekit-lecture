// Der Ordner "server" garantiert: Dieser Code landet nie im Browser.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

export function liesStimmen() {
	if (!existsSync('data/stimmen.json')) return [];
	return JSON.parse(readFileSync('data/stimmen.json', 'utf-8'));
}

export function speichereStimme(stimme) {
	const stimmen = liesStimmen();
	stimmen.push(stimme);

	mkdirSync('data', { recursive: true });
	writeFileSync('data/stimmen.json', JSON.stringify(stimmen, null, 2));
}
