<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import IconWithName from './IconWithName.svelte';
	import Experience from './Experience.svelte';
	import Projects from './Projects.svelte';
	import Education from './Education.svelte';
	import Skills from './Skills.svelte';
	import About from './About.svelte';

	enum Options {
		About = 'About',
		Experience = 'Experience',
		Projects = 'Projects',
		Education = 'Education',
		Skills = 'Skills'
	}

	const navOptions = [
		Options.About,
		Options.Experience,
		Options.Projects,
		Options.Education,
		Options.Skills
	];

	let selected = Options.About;
</script>

<title>Tamas Leung</title>

<div class="page flex flex-col items-center justify-center bg-zinc-900 text-zinc-50">
	<div
		class=" module w-full h-full relative max-w-7xl flex flex-col justify-start overflow-x-hidden"
	>
		<div class="px-4 py-4 flex z-10 gap-4 md:flex-row">
			<div class="flex w-full gap-4 items-center flex-col md:flex-row">
				<div class="flex flex-col items-start justify-start">
					<span
						class="flex"
						on:click={() => {
							selected = Options.About;
						}}
						on:keypress={() => {
							selected = Options.About;
						}}
					>
						<button><h1 class="text-3xl font-extrabold highlight">Tamas Leung</h1></button>
					</span>
					<h1 class="text-md">Software Engineer</h1>
					<h2 class="text-sm">tamasleung2000@gmail.com</h2>
				</div>
				<div class="flex gap-2">
					<a target="_blank" href="https://github.com/Tamas-Leung"
						><Icon icon="skill-icons:github-light" width="30" /></a
					>
					<a target="_blank" href="https://www.linkedin.com/in/tamasleung/"
						><Icon icon="skill-icons:linkedin" width="30" /></a
					>
				</div>
			</div>

			<ul class="flex items-center flex-col md:flex-row md:gap-4 w-full">
				{#each navOptions as option}
					<li>
						<button
							on:click={() => {
								selected = option;
							}}
							class:highlight={selected == option}>{option}</button
						>
					</li>
				{/each}
			</ul>
		</div>
		<div class="px-4 flex-1 overflow-y-auto overflow-x-hidden">
			{#if selected == Options.About}
				<About
					onClickProjectsTab={() => {
						selected = Options.Projects;
					}}
				/>
			{:else if selected == Options.Experience}
				<Experience />
			{:else if selected == Options.Projects}
				<Projects />
			{:else if selected == Options.Education}
				<Education />
			{:else if selected == Options.Skills}
				<Skills />
			{/if}
		</div>
		<!-- <div class="bg-image" /> -->
	</div>
</div>

<style lang="scss">
	:root {
		--angle: 0deg;
	}

	@property --angle {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}

	@keyframes rotate {
		to {
			--angle: 360deg;
		}
	}

	.page {
		width: 100%;
		height: 100vh;
		@media (min-width: 768px) {
			padding: 4rem 4rem;
		}
	}

	.module {
		@media (min-width: 768px) {
			border: 1rem solid;
			border-style: solid;
			min-height: 70vh;
			border-image-slice: 1;
			// background-color: aqua;
			border-image-source: conic-gradient(
				from var(--angle),
				hsl(100 100% 60%),
				hsl(200 100% 60%),
				hsl(100 100% 60%)
			);
			animation: rotate 4s linear infinite, fadeInAnimation ease-in 1.5s,
				clipInAnimation cubic-bezier(1, 0, 0.87, 0.01) 1.5s;
		}
	}

	.bg-image {
		width: 100%;
		height: 100%;
		position: absolute;
		background-image: url('https://media.licdn.com/dms/image/C4E03AQEwFa_fkwTneA/profile-displayphoto-shrink_800_800/0/1652105523006?e=1690416000&v=beta&t=MVE1LMfx93RnjS5GTGKU0PI5uj00D9mAlX9sjlRwNP8');
		background-position: 10% 70%;
		background-size: cover;
		filter: grayscale(100%) brightness(30%);
	}

	@keyframes clipInAnimation {
		0% {
			clip-path: ellipse(0% 100%);
		}
		100% {
			clip-path: ellipse(100% 100%);
		}
	}

	@keyframes fadeInAnimation {
		0% {
			opacity: 0.1;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes textclip {
		to {
			background-position: 200% center;
		}
	}

	/* ===== Scrollbar CSS ===== */
	/* Firefox */
	* {
		scrollbar-color: white;
	}

	/* Chrome, Edge, and Safari */
	*::-webkit-scrollbar {
		width: 12px;
	}

	*::-webkit-scrollbar-track {
		background: transparent;
	}

	*::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-left: 12px solid;
		border-right: none;
		border-image-slice: 1;
	}
</style>
