<script>
	let sterne = $state(0);
</script>

<h1>Wie fit fühlen Sie sich in JavaScript?</h1>

{#each [1, 2, 3, 4, 5] as stufe}
	<button class={sterne >= stufe ? 'voll' : ''} onclick={() => (sterne = stufe)}>★</button>
{/each}

<p>{sterne} von 5 Sternen</p>

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
