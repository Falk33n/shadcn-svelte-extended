<script lang="ts">
	import type { WithChildren } from 'bits-ui';
	import { SidebarProvider } from '../sidebar';
	import { TooltipProvider } from '../tooltip';

	let { children }: WithChildren = $props();
</script>

<TooltipProvider delayDuration={0}>
	<SidebarProvider>
		{@render children?.()}
	</SidebarProvider>
</TooltipProvider>
