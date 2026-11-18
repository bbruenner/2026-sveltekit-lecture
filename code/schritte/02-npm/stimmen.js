// Start im Terminal:  node stimmen.js
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

// 1. Bisherige Stimmen aus der Datei lesen (falls es sie schon gibt)
let stimmen = [];
if (existsSync('stimmen.json')) {
	stimmen = JSON.parse(readFileSync('stimmen.json', 'utf-8'));
}

// 2. Eine neue Stimme anhängen
stimmen.push({
	zeit: new Date().toLocaleString('de-AT'),
	sterne: 4,
	text: 'JavaScript läuft auch ohne Browser!'
});

// 3. Alles zurück in die Datei schreiben
writeFileSync('stimmen.json', JSON.stringify(stimmen, null, 2));

console.log(`${stimmen.length} Stimmen gespeichert.`);
