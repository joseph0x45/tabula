<script lang="ts`" >
    import { add_task_modal_is_visible } from "../../store";
    function toggle_show_modal(){
        add_task_modal_is_visible.set(!$add_task_modal_is_visible) 
    }

    function add_task(){
        alert("bozo")
    }
</script>

{#if $add_task_modal_is_visible}
    <main  class=" w-72  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md shadow-2xl shadow-black dark:shadow-white flex flex-col items-center justify-center" >
        <div class="  w-full rounded-md p-2 flex flex-col bg-gray-500 dark:bg-black" >
            <div class=" p-1 select-none text-white flex justify-between" >
                <h1>New Task</h1>
                <button on:click={toggle_show_modal} class=" text-white " >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                    </svg>  
                </button>
            </div>
            <form class=" flex flex-col p-1 gap-3" on:submit={add_task} >
                <input class=" dark:text-white  dark:caret-white rounded-md p-2 focus:outline-none w-full text-gray-800 dark:bg-transparent dark:border dark:border-gray-200 caret-gray-800" type="text" placeholder="Task title"  >
                <div class=" flex justify-between items-center w-full " >
                    <input class=" w-[80%] focus:outline-none rounded-md p-2 text-gray-800 dark:text-white dark:caret-white dark:bg-transparent dark:border dark:border-gray-200 caret-gray-800" type="text" placeholder="Add Todo">
                    <button type="submit" class=" text-white bg-gray-400 dark:bg-white dark:text-black hover:dark:bg-transparent hover:dark:text-white dark:border dark:border-white p-2 rounded-md" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>                      
                    </button>
                </div>
                <button type="button" class=" text-center rounded-md w-full bg-gray-400 text-white dark:bg-white dark:text-black hover:dark:bg-transparent hover:dark:text-white dark:border dark:border-white p-2" >
                    Done
                </button>
            </form>
        </div>
    </main>
    
{/if}