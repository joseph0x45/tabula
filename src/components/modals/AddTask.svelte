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
    <main  class=" w-72  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col items-center justify-center" >
        <div class="  w-full rounded-md p-2 flex flex-col bg-gray-400" >
            <div class=" select-none text-white flex justify-between" >
                <h1>New Task</h1>
                <button on:click={toggle_show_modal} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                    </svg>  
                </button>
            </div>
            <form on:submit={add_task} >
                
            </form>
        </div>
    </main>
    
{/if}