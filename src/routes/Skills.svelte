<script>
	import { fly } from 'svelte/transition';
	import IconWithName from './IconWithName.svelte';
</script>

<div in:fly={{ x: 100, duration: 500 }} class="flex flex-col gap-2">
	<h2 class="text-xl">Languages / Markup</h2>
	<ul class="flex gap-2">
		<IconWithName icon="skill-icons:javascript" iconName="JavaScript" />
		<IconWithName icon="skill-icons:typescript" iconName="TypeScript" />
		<IconWithName icon="skill-icons:java-dark" iconName="Java" />
		<IconWithName icon="skill-icons:python-dark" iconName="Python" />
		<IconWithName icon="skill-icons:golang" iconName="Go" />
		<IconWithName icon="skill-icons:rust" iconName="Rust" />
		<IconWithName icon="skill-icons:css" iconName="CSS" />
		<IconWithName icon="skill-icons:html" iconName="HTML" />
		<IconWithName icon="skill-icons:cs" iconName="C#" />
	</ul>
	<h2 class="text-xl">Frameworks</h2>
	<ul class="flex gap-2">
		<IconWithName icon="skill-icons:react-dark" iconName="JavaScript" />
		<IconWithName icon="skill-icons:svelte" iconName="Svelte" />
		<IconWithName icon="skill-icons:angular-dark" iconName="Angular" />
		<IconWithName icon="skill-icons:nextjs-dark" iconName="Next.js" />
		<IconWithName icon="skill-icons:spring-dark" iconName="Spring" />
		<IconWithName icon="skill-icons:unity-dark" iconName="Unity" />
		<IconWithName icon="skill-icons:flask-dark" iconName="Flask" />
		<IconWithName icon="skill-icons:expressjs-dark" iconName="Express.js" />
	</ul>
	<h2 class="text-xl">Tools</h2>
	<ul class="flex gap-2">
		<IconWithName icon="skill-icons:git" iconName="Git" />
		<IconWithName icon="skill-icons:docker" iconName="Docker" />
		<IconWithName icon="skill-icons:graphql-dark" iconName="GraphQL" />
		<IconWithName icon="skill-icons:tailwindcss-dark" iconName="Tailwind" />
		<IconWithName icon="skill-icons:githubactions-dark" iconName="Github Actions" />
	</ul>
	<h2 class="text-xl">Database</h2>
	<ul class="flex gap-2">
		<IconWithName icon="skill-icons:mysql-dark" iconName="MySql" />
		<IconWithName icon="skill-icons:postgresql-dark" iconName="Postgres" />
		<IconWithName icon="skill-icons:mongodb" iconName="MongoDB" />
		<IconWithName icon="skill-icons:prisma" iconName="Prisma" />
	</ul>
	<h2 class="text-xl">Cloud</h2>
	<ul class="flex gap-2">
		<IconWithName icon="skill-icons:aws-dark" iconName="AWS" />
		<IconWithName icon="skill-icons:gcp-dark" iconName="GCP" />
	</ul>
</div>
