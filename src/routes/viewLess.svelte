<script>
    import { createEventDispatcher } from "svelte";
    export let color
    
        let dispatch=createEventDispatcher()
        let less=()=>{
    dispatch("less",false)
        }
    </script>
    <div class={"flex justify-center py-2 "+color}>
        <span on:click={less} class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6   " viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            <h1  class="text-center cursor-pointer">Show Less</h1>
        </span>
    </div>