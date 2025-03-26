<script lang="ts">
	import { Providers } from '../lib/components/ui/providers';
	import '../styles/app.css';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<Providers>
	{@render children()}
</Providers>
