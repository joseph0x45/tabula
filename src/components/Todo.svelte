<script lang="ts" >
    import type { Todo } from "../types";
    export let todo: Todo
    export let parent_color: string
    export let parent_id: number

</script>

<main title={todo.name} style={`background-color:${parent_color};`} class={` w-full items-center flex justify-between rounded-md p-2`} >
    <form  >
        <input bind:value={todo.name} type="text" class={` caret-white hover:cursor-text bg-transparent focus:outline-none w-[95%] overflow-x-clip ${todo.done?"line-through":""} `} />
    </form>
    <input type="checkbox" name="" id="">
</main>