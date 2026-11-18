<script>
	import { refreshAll } from '$app/navigation';

	// data ist das, was load() am Server zurückgegeben hat.
	let { data } = $props();

	// Alle 2 Sekunden neu vom Server holen. $effect läuft nur im Browser.
	$effect(() => {
		const takt = setInterval(refreshAll, 2000);
		return () => clearInterval(takt);
	});
</script>

<h1>{data.durchschnitt.toFixed(1)} von 5 Sternen</h1>
<p class="sterne">{'★'.repeat(Math.round(data.durchschnitt))}</p>
<p>{data.anzahl} Stimmen</p>

<ul>
	{#each data.texte as text}
		<li>{text}</li>
	{/each}
</ul>

<style>
	.sterne {
		font-size: 3rem;
		color: gold;
		margin: 0;
	}

	ul {
		text-align: left;
	}
</style>
