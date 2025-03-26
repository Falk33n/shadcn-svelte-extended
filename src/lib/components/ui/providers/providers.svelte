<script lang="ts">
	import { Tooltip as TooltipPrimitive, type WithChildren } from 'bits-ui';

	let { children }: WithChildren = $props();
</script>

<TooltipPrimitive.Provider>
	{@render children?.()}
</TooltipPrimitive.Provider>
