<script>
import { each } from "svelte/internal";
import ViewLess from "./viewLess.svelte";
    import {locations} from "./locationData"
import ViewAll from "./viewAll.svelte";
import SearchBar from "./searchBar.svelte";
   let search="";
   $: viewAll=false
   let color=" text-amber-600"
   let focusColor="outline-amber-600"
   let bgColor="bg-amber-100"
   let placeholder="Search Location"
$: find=()=>{
 
    let beginSearch=(l)=>{
        
return l.startsWith(search.toLowerCase())||l.endsWith(search.toLowerCase())||l.includes(search.toLowerCase())?true:false
    }
    let beginSearchAdd=(l)=>{
     
return l.startsWith(search.toLowerCase())||l.endsWith(search.toLowerCase())||l.includes(search.toLowerCase())?true:false
    }
    let finds=locations.filter((location)=>{return beginSearch(location.place.toLowerCase())||beginSearchAdd(location.add.toLowerCase())})

    let finding=()=>{
        let n=[]
        
finds.forEach(element => {
       if(element.place.startsWith(search)||element.place.endsWith(search)&&element.place.includes(search)){
n=[element,...n]
        }
        else {
n=[...n,element]
        }
    });
    return n
}
    console.log(search)
console.log(finding())

    return finding()
   
}

$: console.log(find())

</script>
<span class="bg-amber-100 text-amber-600 py-11 flex justify-center items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd" />
      </svg>
    <h1 class="font-bold text-2xl">
        Our Locations</h1>
        </span>
       <SearchBar on:search={(e)=>search=e.detail} {color} {focusColor} {bgColor} {placeholder} />
<div class="bg-amber-100 flex text-amber-100 py-11">
   
        <div class="lg:w-1/4 ">
        <img src="./locLogo.png" alt="">
       
        </div>
        <div class="lg:w-3/4 ">


           
        

    {#each find() as location,i}
    {#if i==0}  
    <div class="h-5/6 w-full  grid lg:grid-cols-4 md:grid-cols-3  gap-4  ">
    {#each find() as location,i}


{#if i<4}

    <span class="bg-amber-600 shadow-lg rounded-lg p-3 h-fit">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    <h1>{location.place}</h1>
    <p>{location.add}</p>
</span>
{/if}

{/each}
{#if viewAll}
{#each find() as location,i}


{#if i>3}

    <span class="bg-amber-600 shadow-lg rounded-lg p-3 h-fit">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    <h1>{location.place}</h1>
    <p>{location.add}</p>
</span>
{/if}

{/each}
{/if}
</div>

{#if !viewAll}

<ViewAll on:show={(e)=>viewAll=e.detail} {color}/>
    {:else}
    <ViewLess on:less={(e)=>viewAll=e.detail} {color}/>
    {/if}

{/if}
{:else}
<span class=" flex justify-center text-amber-600 items-center gap-2 h-full w-full">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>
    <h1 class="text-5xl text-amber-600">Not Found</h1>
    <h1 class="text-xl">Try with different keywords or check spelling of search word</h1>
</span>
</span>

{/each}

        </div>
</div>