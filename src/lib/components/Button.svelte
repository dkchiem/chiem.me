<script lang="ts">
	interface Props {
		text: string;
		href: string;
		newTab?: boolean;
	}

	let { text, href, newTab = true }: Props = $props();
</script>

<a class="button" target={newTab ? '_blank' : '_self'} {href}>
	<div class="button-container">
		{text}
	</div>
</a>

<style lang="scss">
	.button {
		display: inline-block;
		text-decoration: none;
		.button-container {
			padding: 10px 20px;
			background-color: #3e64ff;
			color: white;
			border-radius: 10px;
			margin: 15px 10px 15px 0;
			cursor: pointer;
			transition: 0.3s;
			min-width: 70px;
			width: fit-content;
			display: flex;
			align-items: center;
			justify-content: center;
			&:hover {
				background-color: darken(#3e64ff, 25%);
			}
		}
	}
</style>
