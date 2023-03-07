<script lang="ts" >
    import Task from "../components/Task.svelte"
    import ToolTip from "../components/modals/ToolTip.svelte";
    import { colors, load_tabula } from "../lib/";
	import { onMount } from "svelte";
	import type { Board } from "../types";
    let loading = true
    let loaded_data : Board[] = []
    onMount(()=>{
        loaded_data[0] = load_tabula()
        loading = false
    })
    const tasks = []
</script>

<main class=" p-1 relative h-screen w-full " >
    <ToolTip/>
    {#if !loading}
        <!-- {#each tasks as task}
            <Task parent_color={task.color} />
        {/each} -->
    {:else}
        <h1>Loading data</h1>
    {/if}
</main>