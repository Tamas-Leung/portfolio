<script lang="ts">
	import { fly } from 'svelte/transition';

	import IconWithName from './IconWithName.svelte';
	import Icon from '@iconify/svelte';

	const Projects = {
		ETERNALRETURNMAP: 'Erbsmap.com',
		TALGG: 'Tal.GG',
		CODECHAMP: 'CodeChamp',
		PATHIFY: 'Pathify',
		TUTORFY: 'Tutorfy'
	};

	let selected = Projects.ETERNALRETURNMAP;
</script>

<span in:fly={{ x: 100, duration: 500 }} class="flex flex-col gap-6">
	<div>
		<span class="text-xl">Projects: </span>
		<ul class="flex gap-4">
			{#each Object.values(Projects) as option}
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

	<div>
		{#if selected == Projects.ETERNALRETURNMAP}
			<div in:fly={{ x: 100, duration: 500 }}>
				<div class="grid grid-cols-2 gap-4">
					<div class="">
						<h2 class="text-xl flex items-end gap-2 mb-4">
							Eternal Return Map <a
								class="text-sm text-lime-200"
								target="_blank"
								href="https://www.erbsmap.com/">(erbsmap.com)</a
							>
							<a target="_blank" href="https://github.com/Tamas-Leung/erbs-map"
								><Icon icon="skill-icons:github-light" width="30" /></a
							>
						</h2>
						<p>
							An interactive map made for the game Eternal Return. Visited by <bold
								class="highlight">1,000+</bold
							> unique users monthly. Calculates and displays loot distributions and chance of recieving
							each item in every part of the map.
						</p>
						<div class="flex gap-2 mt-2">
							<IconWithName icon="skill-icons:react-dark" iconName="React" />
							<IconWithName icon="skill-icons:css" iconName="React" />
							<IconWithName icon="skill-icons:html" iconName="Html" />
							<IconWithName icon="skill-icons:styledcomponents" iconName="Styled Components" />
						</div>
					</div>
					<img
						class="image-border rotated w-full"
						style="--deg: 2deg"
						src="/erbsmap.png"
						alt="erbsmap.com"
					/>
				</div>
			</div>
		{:else if selected == Projects.TALGG}
			<div in:fly={{ x: 100, duration: 500 }}>
				<div class="grid grid-cols-2 gap-4">
					<div class="">
						<h2 class="text-xl flex items-end gap-2 mb-4">
							Tal.GG<a class="text-sm text-lime-200" target="_blank" href="https://www.tal.gg/"
								>(tal.gg)</a
							>
						</h2>
						<p>
							A gaming analytics site for player statistics, profile pages, and game data analysis
							on <bold class="highlight">10,000,000+</bold> games for the game Eternal Return. Contains
							a season end styled profile summary for players to share. "Spotify Wrapped" but for Eternal
							Return.
						</p>
						<p />
						<div class="flex gap-2 mt-2">
							<IconWithName icon="skill-icons:svelte" iconName="Svelte" />
							<IconWithName icon="skill-icons:aws-dark" iconName="AWS" />
							<IconWithName icon="skill-icons:gcp-dark" iconName="GCP" />
							<IconWithName icon="logos:google-cloud-run" iconName="Cloud Run" />
							<IconWithName icon="skill-icons:mysql-dark" iconName="MySql" />
							<IconWithName icon="skill-icons:tailwindcss-dark" iconName="Tailwind" />
							<IconWithName icon="skill-icons:prisma" iconName="Prisma" />
						</div>
					</div>
					<img
						class="image-border rotated w-full"
						style="--deg: -2deg"
						src="/talgg.png"
						alt="tal.gg"
					/>
				</div>
			</div>
		{:else if selected == Projects.CODECHAMP}
			<div in:fly={{ x: 100, duration: 500 }}>
				<div class="grid grid-cols-2 gap-4">
					<div class="">
						<h2 class="text-xl flex items-end gap-2 mb-4">
							CodeChamp <a target="_blank" href="https://github.com/Tamas-Leung/CodeChamp"
								><Icon icon="skill-icons:github-light" width="30" /></a
							>
						</h2>
						<p>
							A real-time live multiplayer web game for players to practice and compete in
							algorithmic challenges. A battle royale round based system with "Leetcode" styled
							questions where players can compete to solve the questions the fastest.
						</p>
						<p>
							Trailer: <a href="https://www.youtube.com/watch?v=BgMl9Ztr5u0"
								>https://www.youtube.com/watch?v=BgMl9Ztr5u0</a
							>
						</p>
						<div class="flex gap-2 mt-2">
							<IconWithName icon="skill-icons:angular-dark" iconName="Angular" />
							<IconWithName icon="skill-icons:expressjs-dark" iconName="Express.js" />
							<IconWithName icon="skill-icons:nodejs-dark" iconName="Node.Js" />
							<IconWithName icon="skill-icons:mongodb" iconName="MongoDB" />
							<IconWithName icon="logos:websocket" iconName="Web Socket" />
							<IconWithName icon="skill-icons:docker" iconName="Docker" />
							<IconWithName icon="skill-icons:githubactions-dark" iconName="Github Actions" />
						</div>
					</div>
					<div>
						<img
							class="image-border rotated w-full"
							style="--deg: -2deg"
							src="/codechamp1.png"
							alt="CodeChamp lobby screen"
						/>
						<img
							class="image-border rotated w-full"
							style="--deg: 3deg"
							src="/codechamp2.png"
							alt="CodeChamp game screen"
						/>
					</div>
				</div>
			</div>
		{:else if selected == Projects.PATHIFY}
			<div in:fly={{ x: 100, duration: 500 }}>
				<div class="grid grid-cols-2 gap-4">
					<div class="">
						<h2 class="text-xl flex items-end gap-2 mb-4">
							Pathify <a target="_blank" href="https://github.com/Tamas-Leung/Pathify"
								><Icon icon="skill-icons:github-light" width="30" /></a
							>
						</h2>
						<p>
							A web application that finds the shortest path between multiple destinations for the
							Colorado region. Implemented Dijkstra's algorithm and a Binary Heap to evaluate a road
							dataset with 400,000+ nodes.
						</p>
						<p>
							Demo:
							<a href="https://www.youtube.com/watch?v=lE599IFsKck"
								>https://www.youtube.com/watch?v=lE599IFsKck</a
							>
						</p>
						<p />
						<div class="flex gap-2 mt-2">
							<IconWithName icon="skill-icons:spring-dark" iconName="Spring" />
							<IconWithName icon="skill-icons:java-dark" iconName="Java" />
							<IconWithName icon="skill-icons:react-dark" iconName="React" />
						</div>
					</div>
					<div>
						<img
							class="image-border rotated w-full"
							style="--deg: 2deg"
							src="/pathify.png"
							alt="Pathify"
						/>
					</div>
				</div>
			</div>
		{:else if selected == Projects.TUTORFY}
			<div in:fly={{ x: 100, duration: 500 }}>
				<div class="grid grid-cols-2 gap-4">
					<div class="">
						<h2 class="text-xl flex items-end gap-2 mb-4">
							Tutorfy <a target="_blank" href="https://github.com/Tamas-Leung/Tutorfy"
								><Icon icon="skill-icons:github-light" width="30" /></a
							>
						</h2>
						<p>
							Online advertising service web application for Tutors and Teachers to connect with
							clients.
						</p>
						<p />
						<div class="flex gap-2 mt-2">
							<IconWithName icon="skill-icons:flask-dark" iconName="Flask" />
							<IconWithName icon="skill-icons:python-dark" iconName="Python" />
							<IconWithName icon="skill-icons:react-dark" iconName="React" />
						</div>
					</div>
					<div>
						<img
							class="image-border rotated w-full"
							style="--deg: -2deg"
							src="/tutorfy.png"
							alt="Tutorfy"
						/>
					</div>
				</div>
			</div>
		{/if}
	</div>
</span>

<style lang="scss">
	.list-item {
		list-style-type: circle;
		margin-left: 2rem;
		font-size: 14px;
	}
</style>
