<script lang="ts" >
    import type { Todo } from "../types";
    import { toggle_todo_done, update_todo_name, remove_todo } from "../store/board"
    export let todo: Todo
    export let parent_color: string
    export let parent_id: number
    
</script>

<main title={todo.name} style={`background-color:${parent_color};`} class={` w-full items-center flex justify-between rounded-md p-2`} >
    <form  >
        <input bind:value={todo.name} type="text" class={` caret-white hover:cursor-text bg-transparent focus:outline-none w-[95%] overflow-x-clip ${todo.done?"line-through":""} `} />
    </form>
    <input checked={todo.done} on:change={()=>{ toggle_todo_done(parent_id, todo.id) }} type="checkbox" name="" id="">
</main>