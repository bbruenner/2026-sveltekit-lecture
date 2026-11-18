import { fail } from '@sveltejs/kit';
import { speichereStimme } from '#lib/server/speicher.js';

export const actions = {
	// Läuft am Server, sobald das Formular abgeschickt wird.
	default: async ({ request }) => {
		const daten = await request.formData();
		const sterne = Number(daten.get('sterne'));
		const text = String(daten.get('text')).slice(0, 300);

		// Dem Browser nie vertrauen: am Server noch einmal prüfen.
		if (![1, 2, 3, 4, 5].includes(sterne)) {
			return fail(400, { fehler: 'Bitte 1 bis 5 Sterne vergeben.' });
		}

		speichereStimme({ zeit: new Date().toLocaleString('de-AT'), sterne, text });

		return { gespeichert: true };
	}
};
