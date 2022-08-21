<script>
import { createEventDispatcher } from "svelte";
export let color

    let dispatch=createEventDispatcher()
    let show=()=>{
dispatch("show",true)
    }
</script>
<div class={"flex justify-center py-2 "+color}>
    <span on:click={show} class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6   " viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    <h1  class="text-center cursor-pointer ">Show all</h1>
</span>
</div>