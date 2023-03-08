<script lang="ts"  >
    import Todo from "../components/Todo.svelte"

    export let top = 100
    export let left = 100
    let moving = false

    function start(){
        moving = true
    }

    function stop(){
        moving = false
    }

    function drag(e: MouseEvent){
        if(moving){
            top += e.movementY
            left += e.movementX
        }
    }


    export let parent_color: {
        primary:string,
        secondary: string
    }
    const todos = [
        {
            name:"task1",
            done:false
        },
        {
            name:"task2",
            done:false
        },
        {
            name:"task2",
            done:false
        },
    ]
</script>

<svelte:window on:mouseup={stop} on:mousemove={drag} />

<main style={`background-color:${parent_color.primary}; left: ${left}px; top: ${top}px; `} class={` select-none text-white w-52 h-min rounded-xl shadow-2xl p-2 absolute `} >
    <section 
        class={` h-[15%] focus: w-full flex items-center justify-between mb-1 ${moving?"hover:cursor-grabbing":"hover:cursor-grab"}  `} 
        on:mousedown={start}
    >
        <h1 title="Name is too long so it shows in here" >Name</h1>
        <div class=" flex gap-2" >
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clip-rule="evenodd" />
                </svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                </svg>              
            </button>
        </div>
    </section>
    <section class="no-scroll-bar  flex flex-col gap-1 h-[80%] w-full overflow-hidden overflow-y-scroll " >
        {#each todos as todo}
            <Todo name={todo.name} done={todo.done} parent_color={parent_color.secondary} />
        {/each}
    </section>
</main>