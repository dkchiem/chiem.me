<script lang="ts">
	import type { Technology } from './technologies';

	interface Props {
		technology: Technology;
	}

	let { technology }: Props = $props();
</script>

<div class="technology-badge">
	{#if technology.icon}
		<div class="icon" style="mask-image: url({technology.icon})" />
	{/if}
	<span>{technology.text}</span>
</div>

<style lang="scss">
	.technology-badge {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.2rem;
		font-size: 0.8rem;
		background-color: var(--accent-1);
		padding: 0 0.5rem;
		border-radius: 0.3rem;
		.icon {
			height: 0.8rem;
			width: 0.8rem;
			background-position: 0 100%;
			background-color: var(--dark-1);
			mask-repeat: no-repeat;
			mask-size: contain;
			mask-position: center;
		}
		span {
			color: var(--dark-1);
			font-weight: 500;
		}
	}
</style>
