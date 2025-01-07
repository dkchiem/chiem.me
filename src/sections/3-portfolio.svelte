<script lang="ts">
	import Project from '$lib/components/portfolio/Project.svelte';
	import { technologies } from '$lib/components/portfolio/technologies';
</script>

<section id="portfolio">
	<h2>Portfolio</h2>
	<div id="projects">
		<Project
			title="Autonomous Robot Chessboard"
			description="An autonomous robotic chessboard designed to play against a human opponent. It employs a Hall effect sensor matrix to detect the magnetic chess pieces, enabling player move tracking. To determine best moves, the chessboard communicates with a server running the Stockfish chess engine in real-time via WebSockets. The chess pieces are moved using a CoreXY system, guided by a Breadth-First Search algorithm for efficient pathfinding."
			date="Oct. 2024 - Dec. 2024"
			image="chessboard-robot.jpg"
			projectLink="https://youtu.be/LnojWRyRbmM?si=iN_nVTtNvg4E-fvV"
			sourceCodeLink="https://git.uwaterloo.ca/b27dai/se101_group_project"
			technologies={[technologies.C, technologies.JavaScript]}
		/>
		<Project
			title="Paper on SLAM and autonomous navigation"
			description="This paper serves as an introduction to understanding Simultaneous Localization and Mapping (SLAM) and autonomous navigation in the ROS2 framework using a TurtleBot3 robot. It provides an analysis of the underlying mathematical foundations and algorithms used."
			date="Jan. 2024 - May 2024"
			image="implementing-slam-and-autonomous-navigation-on-a-turtlebot3.jpg"
			projectLink="https://s3.chiem.me/implementing-slam-and-autonomous-navigation-on-a-turtlebot3.pdf"
			technologies={[technologies.ROS2, technologies.Python]}
			imageFit
		/>
		<Project
			title="Wall Climbing Robot"
			description="A Raspberry Pi-controlled wall-climbing robot, leveraging pressure differentials for adhesion to smooth vertical surfaces, addressing the challenge of stable wall climbing. This project was created in collaboration with Samuel Martineau."
			date="2021 - 2022"
			image="robot-grimpeur.jpg"
			projectLink="https://www.tv5unis.ca/videos/les-inventifs/saisons/2/episodes/5"
		/>
		<Project
			title="Capture the Flag"
			description="A multiplayer capture-the-flag game built using JavaScript and WebSockets. Players joining the game are assigned to a team in an alternating manner. Each team has two flags to defend while attempting to capture the opposing team's flags. Players can fire bullets to eliminate opponents, adding a strategic combat element to the game."
			date="Apr. 2022 - Jun. 2022"
			image="capture-the-flag.jpg"
			sourceCodeLink="https://github.com/dkchiem/Capture-the-Flag"
			projectLink="https://ctf.chiem.me"
			technologies={[technologies.JavaScript, technologies.HTML, technologies.CSS]}
		/>
		<Project
			title="Chez Tomio Website"
			description="A website for the Chez Tomio restaurant and food truck built with React. Customers are able to order from the menu and pay using Stripe. There is an admin panel for the restaurant to manage the website. This project was created in collaboration with Samuel Martineau."
			date="Mar. 2021 - Jan. 2022"
			image="chez-tomio-website.jpg"
			sourceCodeLink="https://github.com/Chez-Tomio/Chez-Tomio"
			technologies={[
				technologies.React,
				technologies.TypeScript,
				technologies.HTML,
				technologies.CSS
			]}
		/>
		<Project
			title="EyeRest"
			description="A MacOS application that helps you take regular breaks for your eyes using the 20-20-20 rule built using JavaScript and Electron."
			date="Apr. 2020 - May 2020"
			image="eyerest.png"
			sourceCodeLink="https://github.com/dkchiem/EyeRest"
			technologies={[
				technologies.Electron,
				technologies.JavaScript,
				technologies.HTML,
				technologies.CSS
			]}
			imageFit
		/>
		<Project
			title="CodingForYou"
			description="A website built with Svelte and Sapper that contains an integrated payment system. This project was created in collaboration with Samuel Martineau."
			date="Feb. 2020 - Apr. 2020"
			image="codingforyou.jpg"
			sourceCodeLink="https://github.com/CodingForYou-net/CodingForYou.net"
			technologies={[
				technologies.Svelte,
				technologies.SCSS,
				technologies.JavaScript,
				technologies.HTML
			]}
		/>
		<Project
			title="Pac-Man"
			description="A Pac-Man game written in JavaScript. There are two different maps to choose from. To win, the player must eat all the dots while avoiding the ghosts."
			date="Sep. 2021 - Jan. 2022"
			image="pac-man.jpg"
			sourceCodeLink="https://github.com/dkchiem/Pac-Man"
			projectLink="https://pac-man-game-js.netlify.app/"
			technologies={[technologies.JavaScript, technologies.HTML, technologies.CSS]}
		/>
		<Project
			title="Tetris 13KB Game"
			description="A 13KB Tetris game written in TypeScript. This game was built in collaboration with Samuel Martineau."
			date="Jul. 2020"
			image="tetris-3kb-game.jpg"
			sourceCodeLink="https://github.com/Samuel-Martineau/Tetris-13kB-Game"
			projectLink="https://tetris-13kb-game.netlify.app/"
			technologies={[technologies.TypeScript, technologies.HTML, technologies.CSS]}
		/>
		<Project
			title="make-icns"
			description="A CLI written in JavaScript to convert a PNG image into an ICNS image."
			date="May. 2020"
			image="cli.jpg"
			technologies={[technologies.JavaScript]}
			sourceCodeLink="https://github.com/dkchiem/make-icns"
		/>
		<Project
			title="generator-svelte"
			description="A Yeoman generator that generates boilerplate Svelte 3 apps. This project was created in collaboration with Samuel Martineau."
			date="Jun. 2020 - Jul. 2020"
			image="generator-svelte.gif"
			sourceCodeLink="https://github.com/Samuel-Martineau/generator-svelte"
			technologies={[technologies.JavaScript, technologies.Svelte]}
			imageFit
		/>
		<!-- <Project
			title="MC-Config-Controller"
			description="A tool written in Dart to create Minecraft server networks easily. This project was created in collaboration with Samuel Martineau."
			image="mc-config-controller.png"
			sourceCodeLink="https://github.com/Samuel-Martineau/MC-Config-Controller"
			technologies={[technologies.Dart]}
			imageFit
		/> -->
		<!-- <Project
			title="drive-flasher"
			description="A CLI written in JavaScript to flash an OS onto a removable drive for MacOS and Linux."
			image="cli.jpg"
			technologies={[technologies.JavaScript]}
			sourceCodeLink="https://github.com/dkchiem/drive-flasher"
		/> -->
	</div>
</section>

<style lang="scss">
	section {
		h2 {
			text-align: center;
			margin-bottom: 30px;
		}
		padding: 50px 10%;
		overflow: hidden;
		#projects {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 30px;
		}
	}
</style>
