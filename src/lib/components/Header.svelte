<script lang="ts">
	import { onMount } from 'svelte';

	let headerBackgroundColor = $state('transparent');
	let navOpen = $state(false);

	/**
	 * Update the header background color based on scroll position
	 */
	onMount(() => {
		const updateBackground = () => {
			if (window.scrollY > 0) headerBackgroundColor = 'var(--black-1)';
			else headerBackgroundColor = 'transparent';
		};
		updateBackground();
		document.addEventListener('scroll', updateBackground);
	});

	/**
	 * Open the sidenav
	 */
	function openSidenav() {
		navOpen = true;
	}

	/**
	 * Close the sidenav
	 */
	function closeSidenav() {
		navOpen = false;
	}

	/**
	 * Handle click outside of the sidenav
	 */
	function clickOutside(node: HTMLElement) {
		const handleClick = (event: Event) => {
			if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('clickoutside', { detail: node }));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<header style="background-color: {headerBackgroundColor}">
	<!-- Left side -->
	<h3 id="brand">DC</h3>

	<!-- Right side -->
	<svg
		width="35"
		height="35"
		viewBox="0 0 24 24"
		id="hamburger-menu"
		fill="none"
		onclick={openSidenav}
	>
		<path d="M9 5H22M2 12H22M2 19H22" stroke="white" stroke-width="2" stroke-linecap="round" />
	</svg>

	<nav class:open={navOpen} use:clickOutside onclickoutside={closeSidenav}>
		<svg
			width="35"
			height="35"
			viewBox="0 0 24 24"
			id="x-hamburger-menu"
			fill="none"
			class:on={navOpen}
			onclick={closeSidenav}
		>
			<path
				d="M5.41421 5.00001L19.5563 19.1421M5 19.1421L19.1421 5"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
			/>
		</svg>

		<ul>
			<li>
				<a class="drawline" onclick={closeSidenav} href="#about">About Me</a>
			</li>
			<li>
				<a class="drawline" onclick={closeSidenav} href="#portfolio">Portfolio</a>
			</li>
			<li><a class="drawline" onclick={closeSidenav} href="#contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		height: 100px;
		width: 100%;
		padding: 0 10%;
		z-index: 500;
		display: flex;
		align-items: center;
		position: fixed;
		transition: background-color 0.3s;
		#brand {
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 900;
			font-size: 2rem;
			height: 2rem;
			margin-right: auto;
			user-select: none;
		}
		#hamburger-menu {
			display: none;
		}
		nav {
			display: flex;
			overflow: hidden;
			transition:
				right 0.3s,
				width 0.5s;
			#x-hamburger-menu {
				display: none;
			}
			ul {
				display: flex;
				li {
					list-style: none;
					padding: 20px 30px;
					a {
						text-decoration: none;
						white-space: nowrap;
					}
				}
			}
		}
	}

	// Small screens
	@media only screen and (max-width: 920px) {
		header {
			#hamburger-menu {
				display: block;
				cursor: pointer;
			}
			nav {
				flex-direction: column;
				position: fixed;
				height: 100vh;
				width: 0;
				top: 0;
				right: 0;
				background-color: var(--dark-1);
				z-index: 1000;
				// Overlay
				&::after {
					content: '';
					position: fixed;
					box-shadow: 0 0 0 max(100vh, 100vw) rgba(0, 0, 0, 0.5);
					width: 100%;
					height: 100%;
					opacity: 0;
					z-index: 999;
					transition: opacity 0.3s ease-in-out;
				}
				* {
					z-index: 1001;
				}
				#x-hamburger-menu {
					display: block;
					margin: 30px;
					cursor: pointer;
				}
				ul {
					flex-direction: column;
					width: 100%;
				}
				&.open {
					width: 50%;
				}
				&.open::after {
					opacity: 1;
				}
				@media only screen and (max-width: 600px) {
					&.open {
						width: 100%;
					}
				}
			}
		}
	}
</style>
