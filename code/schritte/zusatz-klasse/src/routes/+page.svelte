<script>
	import Sterne from '#lib/Sterne.svelte';
	import { Entwurf } from '#lib/Entwurf.svelte.js';

	// Ein Objekt statt dreier einzelner Variablen.
	const entwurf = new Entwurf();
</script>

<h1>Wie fit fühlen Sie sich in JavaScript?</h1>

<Sterne bind:wert={entwurf.sterne} />

<label>
	Was erwarten Sie sich von heute?
	<textarea bind:value={entwurf.text} maxlength="300" rows="4"></textarea>
</label>
<p>Noch {entwurf.rest} Zeichen</p>

{#if entwurf.fertig}
	<p>Ihre Stimme: {entwurf.sterne} Sterne – „{entwurf.text}“</p>
	<button onclick={() => entwurf.leeren()}>Zurücksetzen</button>
{/if}

<style>
	label {
		display: block;
		margin-top: 1.5rem;
	}

	textarea {
		display: block;
		width: 100%;
		box-sizing: border-box;
		margin-top: 0.5rem;
		padding: 0.5rem;
		font: inherit;
	}
</style>
