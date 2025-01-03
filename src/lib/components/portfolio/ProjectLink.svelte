<script lang="ts">
	import { ProjectLinkType } from '$lib/enums';

	interface Props {
		href: string;
		type: ProjectLinkType;
	}

	let { href, type }: Props = $props();
</script>

<a {href} target="_blank">
	{#if type === ProjectLinkType.SourceCode}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentcolor"
			><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
				d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
			/>
		</svg>
	{:else if type === ProjectLinkType.Project}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentcolor"
			><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
				d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
			/>
		</svg>
	{/if}
</a>

<style lang="scss">
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--accent-1);
		height: 1.5rem;
		padding: 0.35rem 0.8rem;
		border-radius: 5rem;
		transition: 0.3s;
		* {
			height: 100%;
			color: var(--dark-1);
			transition: 0.3s;
		}
		&:hover {
			background-color: var(--white);
		}
	}
</style>
