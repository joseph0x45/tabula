<script lang="ts" >
    import Task from "../components/Task.svelte"
    import ToolTip from "../components/modals/ToolTip.svelte";
    import Socials from "../components/modals/Socials.svelte";
    import AddTask from "../components/modals/AddTask.svelte";
    import { add_task_modal_is_visible } from "../store";
    import { colors, load_tabula } from "../lib/";
	import { onMount } from "svelte";
	import type { Board } from "../types";
	import { browser } from "$app/environment";
    let loaded_data : Board
    let loading = true
    onMount(()=>{
        if(browser){
            loaded_data = load_tabula()
            loading = false
        }
    })
    function toggle_show_modal(){
        add_task_modal_is_visible.set(!$add_task_modal_is_visible) 
    }

    function handle_click( e: KeyboardEvent ){
        switch (e.key) {
            case "t":
                toggle_show_modal()
                break;
            default:
                break;
        }
    }
    const tasks = [
        {
            name:"Breh",
            color: colors[0]
        },
        {
            name:"Breh",
            color: colors[1]
        },
        {
            name:"Breh",
            color: colors[2]
        },
        {
            name:"Breh",
            color: colors[3]
        },
        {
            name:"Breh",
            color: colors[4]
        }
    ]
</script>

<svelte:window on:keypress={handle_click} />

<svelte:head>
    <title>Tabula | Prima</title>
</svelte:head >

<main class=" p-1 relative h-screen w-full dark:text-slate-300 " >
    <ToolTip/>
    <Socials/>
    <AddTask/>
    {#if !loading && loaded_data}

        {#if tasks.length===0 && !$add_task_modal_is_visible}

            <div class=" text-gray-500 dark:text-gray-300 h-full w-fit  m-auto flex flex-col items-center justify-center gap-1 "  >
                <div class=" flex items-center justify-center w-full" >
                    <img src="icon.png" width="100px" alt="" srcset="">
                    <h1 class=" font-bold text-3xl" >Tabula <sup class=" text-sm" >Prima </sup></h1>
                </div>
                <h1 class=" font-bold " >Tabula is your place to organize your tasks with ease</h1>
                <div class=" flex flex-col w-[70%] gap-2 text-sm font-thin mt-5" >
                    <button 
                        class="welcome_screen_button" 
                        on:click={toggle_show_modal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>                          
                        <h1>New Task</h1>
                    </button>
                    <button title="Coming soon" class="welcome_screen_button cursor-not-allowed " >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z" clip-rule="evenodd" />
                        </svg>
                        <h1>New Board</h1>
                    </button>
                    <button class="welcome_screen_button" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
                        </svg>                          
                        Shortcuts and Tips
                    </button>
                    <a href="https://tabula.lol" class="welcome_screen_button " >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
                        </svg>                          
                        More
                    </a>
                </div>
            </div>
        
        {:else}

            {#each tasks as task}
                <Task parent_color={task.color} />
            {/each}
        
        {/if}
        
    {:else}

        <div class=" h-full w-full flex flex-col items-center justify-center" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 animate-spin">
                <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd" />
            </svg>              
        </div>

    {/if}
</main>