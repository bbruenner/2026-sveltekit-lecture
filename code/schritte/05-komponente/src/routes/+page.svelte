<script>
	import Sterne from '#lib/Sterne.svelte';

	let sterne = $state(0);
	let text = $state('');
	let rest = $derived(300 - text.length);
</script>

<h1>Wie fit fühlen Sie sich in JavaScript?</h1>

<Sterne bind:wert={sterne} />

<label>
	Was erwarten Sie sich von heute?
	<textarea bind:value={text} maxlength="300" rows="4"></textarea>
</label>
<p>Noch {rest} Zeichen</p>

{#if sterne > 0}
	<p>Ihre Stimme: {sterne} Sterne – „{text}“</p>
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
