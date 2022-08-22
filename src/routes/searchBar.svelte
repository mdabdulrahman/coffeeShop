<script>
import { createEventDispatcher } from "svelte";


    export let color
    export let focusColor
    export let bgColor
    export let placeholder
   $: search=""
   let dispatch=createEventDispatcher()
   let goSearch=()=>{
dispatch("search",search)
   }

</script>
<div class={bgColor+" flex justify-center gap-2 "+color}>
    <svg xmlns="http://www.w3.org/2000/svg" class={color+" h-6 w-6  "} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    <input type="search" class={"px-2 "+focusColor+" "+bgColor+"  focus:outline-0 placeholder-current py- rounded "} name="searhLocation" bind:value={search} on:input={()=>goSearch()} placeholder={placeholder} >
</div>