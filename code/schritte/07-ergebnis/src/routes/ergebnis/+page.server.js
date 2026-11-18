import { liesStimmen } from '#lib/server/speicher.js';

// load läuft am Server, bevor die Seite ausgeliefert wird.
export function load() {
	const stimmen = liesStimmen();

	let summe = 0;
	for (const stimme of stimmen) {
		summe += stimme.sterne;
	}

	return {
		anzahl: stimmen.length,
		durchschnitt: stimmen.length > 0 ? summe / stimmen.length : 0,
		texte: stimmen.map((stimme) => stimme.text).filter((text) => text !== '')
	};
}
