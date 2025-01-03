<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { glow } from '$lib/glowingMouse';
	import '$lib/styles/app.scss';
	import '$lib/styles/fonts.scss';
	import '$lib/styles/colors.scss';

	let { children } = $props();
</script>

<svelte:head>
	<title>Dan Chiem</title>
</svelte:head>

<svelte:body use:glow={{ glowColor: 'var(--glow)', backgroundColor: 'var(--black-1)' }} />

<Header />
<main>
	{@render children()}
</main>
<Footer />
