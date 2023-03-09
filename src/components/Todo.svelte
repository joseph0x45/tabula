<script lang="ts" >
    export let name: string
    export let done: boolean
    export let parent_color: string
    
    function edit_name(){

    }
</script>

<main title={name} style={`background-color:${parent_color};`} class={` w-full items-center flex justify-between rounded-md p-2`} >
    <form  >
        <input bind:value={name} on:change={edit_name} type="text" class={` caret-white hover:cursor-text bg-transparent focus:outline-none w-[95%] overflow-x-clip ${done?"line-through":""} `} />
    </form>
    <input type="checkbox" name="" id="">
</main>