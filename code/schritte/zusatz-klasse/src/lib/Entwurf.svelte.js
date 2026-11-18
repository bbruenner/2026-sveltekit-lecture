// Die Endung .svelte.js erlaubt Runes auch außerhalb von Komponenten.
export class Entwurf {
	sterne = $state(0);
	text = $state('');

	// $derived rechnet neu, sobald sich text bzw. sterne ändern.
	rest = $derived(300 - this.text.length);
	fertig = $derived(this.sterne > 0);

	leeren() {
		this.sterne = 0;
		this.text = '';
	}
}
