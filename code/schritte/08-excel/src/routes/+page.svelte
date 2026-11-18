<script>
	import { enhance } from '$app/forms';
	import Sterne from '#lib/Sterne.svelte';

	// form ist das, was die Action am Server zurückgegeben hat.
	let { form } = $props();

	let sterne = $state(0);
	let text = $state('');
	let rest = $derived(300 - text.length);
</script>

<h1>Wie fit fühlen Sie sich in JavaScript?</h1>

{#if form?.gespeichert}
	<p>Danke für Ihre Stimme!</p>
{:else}
	<form method="POST" use:enhance>
		<Sterne bind:wert={sterne} />
		<input type="hidden" name="sterne" value={sterne} />

		<label>
			Was erwarten Sie sich von heute?
			<textarea name="text" bind:value={text} maxlength="300" rows="4"></textarea>
		</label>
		<p>Noch {rest} Zeichen</p>

		{#if form?.fehler}
			<p class="fehler">{form.fehler}</p>
		{/if}

		<button disabled={sterne === 0}>Abschicken</button>
	</form>
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

	form > button {
		padding: 0.6rem 2rem;
		font: inherit;
	}

	.fehler {
		color: crimson;
	}
</style>
