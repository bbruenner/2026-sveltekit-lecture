import QRCode from 'qrcode';
import { liesStimmen } from '#lib/server/speicher.js';

// load läuft am Server, bevor die Seite ausgeliefert wird.
export async function load({ url }) {
	const stimmen = liesStimmen();

	let summe = 0;
	for (const stimme of stimmen) {
		summe += stimme.sterne;
	}

	// url.host ist die Adresse, unter der die Seite gerade aufgerufen wurde.
	const adresse = `https://${url.host}`;

	return {
		anzahl: stimmen.length,
		durchschnitt: stimmen.length > 0 ? summe / stimmen.length : 0,
		texte: stimmen.map((stimme) => stimme.text).filter((text) => text !== ''),
		adresse,
		qr: await QRCode.toDataURL(adresse, { width: 600 })
	};
}
