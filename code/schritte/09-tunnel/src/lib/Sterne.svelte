<script>
	// $bindable: Die Seite darf bind:wert schreiben und bekommt Änderungen zurück.
	let { wert = $bindable(0) } = $props();
</script>

{#each [1, 2, 3, 4, 5] as stufe}
	<!-- type="button": Ein Klick schickt später kein Formular ab. -->
	<button
		type="button"
		class={wert >= stufe ? 'voll' : ''}
		aria-label="{stufe} Sterne"
		onclick={() => (wert = stufe)}
	>
		★
	</button>
{/each}

<style>
	button {
		font-size: 3rem;
		background: none;
		border: none;
		color: lightgray;
		cursor: pointer;
	}

	.voll {
		color: gold;
	}
</style>
