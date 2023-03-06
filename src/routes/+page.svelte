<script lang="ts" >
    import Task from "../components/Task.svelte"
    import { colors } from "../lib/";
    const tasks = [
        {
            id:1,
            name:"Test",
            color:colors[4]
        }
    ]
</script>

<main class=" relative h-screen w-full " >
    {#each tasks as task}
        <Task parent_color={task.color} />
    {/each}
</main>