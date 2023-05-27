<script>
	import { fly } from 'svelte/transition';

	import IconWithName from './IconWithName.svelte';
</script>

<span in:fly={{ x: 100, duration: 500 }} class="flex flex-col gap-6">
	<div>
		<div class="experience-top-row">
			<h2 class="text-xl">Amazon</h2>
			<p class="experience-date">May 2022 - August 2022</p>
		</div>
		<div class="flex justify-between">
			<h2 class="text-md mb-2">Software Development Intern</h2>
			<p>Toronto, Canada</p>
		</div>
		<ul>
			<li class="list-item">
				Developed 4+ Java microservices focused on MAC Address management for Amazon Devices
			</li>
			<li class="list-item">
				Reduced costs by an estimated <div class="highlight">$100,000</div>
				annually by implementing support for MAC Address recycling
			</li>
			<li class="list-item">
				Self-Architectured features using AWS (Lambda, ECS, CloudFormations, Step Functions)
			</li>
			<li class="list-item">
				Presented the feature virtually to 100+ colleagues describing the challenges faced,
				solutions developed and lessons learned
			</li>
		</ul>
		<div class="flex gap-2 mt-2">
			<IconWithName icon="skill-icons:aws-light" iconName="AWS" />
			<IconWithName icon="skill-icons:java-light" iconName="Java" />
			<IconWithName icon="logos:aws-cloudformation" iconName="Cloud Formation" />
			<IconWithName icon="logos:aws-dynamodb" iconName="Dynamo DB" />
			<IconWithName icon="logos:aws-lambda" iconName="Lambda" />
			<IconWithName icon="logos:aws-step-functions" iconName="Step Functions" />
			<IconWithName icon="logos:aws-s3" iconName="Amazon S3" />
		</div>
	</div>

	<div>
		<div class="experience-top-row">
			<h2 class="text-xl">IBM</h2>
			<p class="experience-date">May 2021 - April 2022</p>
		</div>
		<div class="flex justify-between">
			<h2 class="text-md mb-2">Software Development Intern</h2>
			<p>Markham, Canada</p>
		</div>
		<ul>
			<li class="list-item">
				Developed React components used in UI workflows for IBM Security Guardium Insights
			</li>
			<li class="list-item">
				Enhanced support for complex SQL queries on customer audit reports by implementing nested
				report querying
			</li>
			<li class="list-item">
				Implemented GCM encryption in 20+ microservices (Go, Python, Java) preventing critical
				security flaws
			</li>
			<li class="list-item">
				Completed 150+ Jira tickets ranging from bug fixes and features on the React front-end and
				microservices backend
			</li>
		</ul>
		<div class="flex gap-2 mt-2">
			<IconWithName icon="skill-icons:react-light" iconName="React" />
			<IconWithName icon="skill-icons:typescript" iconName="TypeScript" />
			<IconWithName icon="skill-icons:nextjs-light" iconName="NextJs" />
			<IconWithName icon="skill-icons:golang" iconName="Go" />
			<IconWithName icon="skill-icons:python-light" iconName="Python" />
			<IconWithName icon="skill-icons:mysql-light" iconName="MySql" />
		</div>
	</div>

	<div>
		<div class="experience-top-row">
			<h2 class="text-xl">RCATSONE</h2>
			<p class="experience-date">
				May 2020 - August 2020, May 2019 - August 2019, July 2018 - Augusy 2018
			</p>
		</div>
		<div class="flex justify-between">
			<h2 class="text-md mb-2">Software Development Intern</h2>
			<p>Mississauga, Canada</p>
		</div>
		<ul>
			<li class="list-item">
				Full-cycle development on a mobile telecommunication test platform on both Linux and
				Windows.
			</li>
			<li class="list-item">Resolved 100+ Jira tickets using PHP, C++, Java</li>
		</ul>
		<div class="flex gap-2 mt-2">
			<IconWithName icon="devicon:android" iconName="Android" />
			<IconWithName icon="skill-icons:androidstudio-light" iconName="Android Studio" />
			<IconWithName icon="skill-icons:java-light" iconName="Java" />
			<IconWithName icon="skill-icons:cpp" iconName="C++" />
			<IconWithName icon="skill-icons:php-light" iconName="PHP" />
		</div>
	</div>
</span>

<style lang="scss">
	.list-item {
		list-style-type: circle;
		margin-left: 2rem;
		font-size: 14px;
	}

	.experience-date {
		font-size: 0.8rem;
	}

	.experience-top-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
</style>
