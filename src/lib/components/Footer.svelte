<script lang="ts">
	import Social from './Social.svelte';
</script>

<footer>
	<div id="menu">
		<h3>Dan Chiem</h3>
		<ul>
			<li><a class="drawline" href="#about">About Me</a></li>
			<li><a class="drawline" href="#portfolio">Portfolio</a></li>
			<li><a class="drawline" href="#contact">Contact</a></li>
		</ul>
	</div>
	<Social />
</footer>

<style lang="scss">
	footer {
		padding: 50px 25%;
		background-color: var(--dark-1);
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		align-items: end;
		#menu {
			display: flex;
			flex-direction: column;
			justify-content: center;
			h3 {
				padding: 15px 0;
				color: var(--accent-1);
			}
			ul {
				display: flex;
				flex-direction: column;
				li {
					list-style: none;
					padding: 15px 40px;
					a {
						text-decoration: none;
					}
				}
			}
		}
	}

	// Medium screens
	@media only screen and (max-width: 920px) {
		footer {
			padding: 50px 20%;
		}
	}

	// Small screens
	@media only screen and (max-width: 600px) {
		footer {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
	}
</style>
