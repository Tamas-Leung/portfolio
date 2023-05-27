<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	export let onClickProjectsTab: any;
</script>

<div class="grid grid-cols-3 gap-4">
	<span in:fly={{ x: -100, duration: 500 }} class="col-span-2 flex flex-col gap-4">
		<p>
			<bold class=" text-xl font-bold highlight">Welcome!</bold> I am a software Engineer based in Toronto,
			Canada. I have worked for companies such as Amazon and IBM from backend to full-stack web development.
		</p>

		<div class="my-2">
			<a
				href="/Tamas-Leung_Resume_05-18-2023.pdf"
				target="_blank"
				class="px-4 py-2 flex max-w-fit items-center gap-1 bg-zinc-700 rounded border border-zinc-500 hover:border-lime-200"
				>Resume <Icon icon="material-symbols:download" width="20" /></a
			>
		</div>

		<p>
			With a main focus on web development, I have worked on multiple web application projects.
			Check them at the <button
				on:click={onClickProjectsTab}
				class="text-lime-300 hover:text-lime-100">Projects Tab!<button /></button
			>
		</p>

		<p>
			Currently looking for Full-Time positions! Contact me at <bold class="highlight"
				>tamasleung2000@gmail.com
			</bold>
		</p>
	</span>
	<img
		in:fly={{ x: 100, duration: 500 }}
		class="image-border rotated"
		style="--deg: 3deg"
		src="https://media.licdn.com/dms/image/C4E03AQEwFa_fkwTneA/profile-displayphoto-shrink_800_800/0/1652105523006?e=1690416000&v=beta&t=MVE1LMfx93RnjS5GTGKU0PI5uj00D9mAlX9sjlRwNP8"
		alt="Tamas Leung"
	/>
</div>
