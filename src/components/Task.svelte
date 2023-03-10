<script lang="ts"  >
    import Todo from "../components/Todo.svelte"
    import type { Task } from "../types";
    import { remove_task, update_task_name, update_task_position } from "../store/board";
    import { idling } from "../store";
    export let task: Task
    let moving = false

    function start(){
        moving = true
    }

    function stop(){
        moving = false
        update_task_position(task.id, task.posx, task.posy)
    }

    function drag(e: MouseEvent){
        if(moving){
            task.posy += e.movementY
            task.posx += e.movementX
        }
    }
</script>

<svelte:window on:mouseup={stop} on:mousemove={drag} />

<main style={`background-color:${task.color.primary}; left: ${task.posx}px; top: ${task.posy}px; `} class={` select-none text-white w-62 h-min rounded-xl p-2 absolute `} >
    <section 
        class={` h-[15%] focus: w-full flex items-center justify-between mb-1 ${moving?"hover:cursor-grabbing":"hover:cursor-grab"}  `} 
        on:mousedown={start}
    >
        <input title={task.name} on:focusout={()=>{ idling.set(true) }} on:focus={()=>{ idling.set(false) }} bind:value={task.name} on:change={()=>{ update_task_name(task.id, task.name) }} type="text" class={`" w-[70%] bg-transparent focus:outline-none text-white select-none ${moving?"hover:cursor-grabbing":"hover:cursor-grab"} `} />
        <div class=" flex gap-2" >
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clip-rule="evenodd" />
                </svg>
            </button>
            <button on:click={()=>{ remove_task(task.id) } } >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                </svg>              
            </button>
        </div>
    </section>
    <section class="no-scroll-bar  flex flex-col gap-1 h-[95%] w-full overflow-hidden overflow-y-scroll " >
        {#each task.todos as todo}
            <Todo {todo} parent_id={task.id} parent_color={task.color.secondary} />
        {/each}
    </section>
</main>