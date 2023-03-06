<script lang="ts" >
    export let name: string
    export let done: boolean
    export let parent_color: string
    function edit_name(){

    }
</script>

<main title={name} style={`background-color:${parent_color};`} class={` w-full flex justify-between rounded-md p-2`} >
    <form  >
        <input bind:value={name} on:change={edit_name} type="text" class={` caret-white hover:cursor-text bg-transparent focus:outline-none  w-[70%] overflow-x-clip ${done?"line-through":""} `} />
    </form>
    <button class="" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
        </svg>      
    </button>
</main>