<script>
	import favicon from '#lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Feedback</title>
</svelte:head>

{@render children()}

<style>
	/* :global = gilt für die ganze App, nicht nur für diese Datei */
	:global(body) {
		font-family: system-ui, sans-serif;
		text-align: center;
		max-width: 28rem;
		margin: 2rem auto;
		padding: 0 1rem;
	}
</style>
