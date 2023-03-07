<script lang="ts`" >
    import { add_task_modal_is_visible } from "../../store";
</script>

{#if $add_task_modal_is_visible}
    <main  class="  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col items-center justify-center" >
        <div class=" bg-indigo-500" >
            <h1>Je suis un modal et je suis centré</h1>
        </div>
    </main>
    
{/if}