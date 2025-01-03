<script lang="ts">
	import ProjectLink from './ProjectLink.svelte';
	import { ProjectLinkType } from '$lib/enums';
	import TechnologyBadge from './TechnologyBadge.svelte';
	import type { Technology } from './technologies';

	interface Props {
		title: string;
		description: string;
		date?: string;
		image?: string;
		imageFit?: boolean;
		projectLink?: string;
		sourceCodeLink?: string;
		technologies?: Technology[];
	}

	let {
		title,
		description,
		date = '',
		image = '',
		imageFit = false,
		projectLink = '',
		sourceCodeLink = '',
		technologies = []
	}: Props = $props();
</script>

<div class="project">
	<div class="content">
		<!-- Project Title and Links -->
		<div class="header">
			<div class="title-link">
				<h3>{title}</h3>
				<div class="links">
					{#if sourceCodeLink}
						<ProjectLink href={sourceCodeLink} type={ProjectLinkType.SourceCode} />
					{/if}
					{#if projectLink}
						<ProjectLink href={projectLink} type={ProjectLinkType.Project} />
					{/if}
				</div>
			</div>
			<div class="date">{date}</div>
		</div>
		<!-- Technology Badges -->
		{#if technologies.length > 0}
			<div class="technologies">
				{#each technologies as technology}
					<TechnologyBadge {technology} />
				{/each}
			</div>
		{/if}
		<!-- Project Description -->
		<p>{description}</p>
	</div>
	<div
		class="image"
		style="background-image: url(/projects/{image}); background-size: {imageFit
			? 'contain'
			: 'cover'}"
	/>
</div>

<style lang="scss">
	.project {
		display: flex;
		flex-direction: column;
		background-color: var(--dark-1);
		border-radius: 10px;
		overflow: hidden;
		height: 600px;
		width: 500px;
		max-width: 100%;
		.content {
			display: flex;
			flex-direction: column;
			gap: 10px;
			padding: 20px;
			.header {
				.title-link {
					display: flex;
					justify-content: space-between;
					h3 {
						font-size: 1.5rem;
					}
					.links {
						display: flex;
						gap: 10px;
						margin-left: 10px;
					}
				}
				.date {
					font-size: 0.8rem;
					font-weight: 600;
					color: var(--gray-1);
					text-transform: uppercase;
				}
			}
			.technologies {
				display: flex;
				gap: 5px;
			}
		}
		.image {
			width: 100%;
			height: 200px;
			background-position: center;
			background-repeat: no-repeat;
			background-color: white;
			flex: 1;
		}
	}
</style>
