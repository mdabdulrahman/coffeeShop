<script>
import Coffees from "./coffees.svelte";
import {types} from "./typesData"
import ViewAll from "./viewAll.svelte";
import ViewLess from "./viewLess.svelte";
import SearchBar from "./searchBar.svelte"
$: viewAll=false
let focusColor="outline-amber-100"
let bgColor="bg-amber-600"
let color="text-amber-100"
let search=""
let placeholder="Search Coffee"
$: find=()=>{
 
 let beginSearch=(l)=>{
     
return l.startsWith(search.toLowerCase())||l.endsWith(search.toLowerCase())||l.includes(search.toLowerCase())?true:false
 }
 let beginSearchAdd=(l)=>{
  
return l.startsWith(search.toLowerCase())||l.endsWith(search.toLowerCase())||l.includes(search.toLowerCase())?true:false
 }
 let finds=types.filter((type)=>{return beginSearch(type.name.toLowerCase())||beginSearchAdd(type.des.toLowerCase())})

 let finding=()=>{
     let n=[]
     
finds.forEach(element => {
    if(element.name.startsWith(search)){
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

<div class=" bg-amber-600">
    <h1 class="text-center pt-14 text-amber-100 text-2xl font-bold ">Coffee Menu</h1>
    <div class="py-6">
    <SearchBar on:search={(e)=>search=e.detail} {color} {focusColor} {bgColor} {placeholder}/>
</div>
{#each find() as type ,i}
{#if i==0}
        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 m-6 ">
{#each find() as type ,i}
    
    {#if i<4}
    <Coffees {type}/>


    {/if}
  

   
{/each}


{#if viewAll}
{#each types as type ,i}
    
    {#if i>3}
    <Coffees {type}/>


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
    <div class=" flex justify-center text-amber-100 items-center gap-2 h-full py-16 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-11 w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
        <h1 class="text-2xl text-amber-100">Not Found</h1>
        <h1 class="text-xl">Try with different keywords or check spelling of search word</h1>
    </span>
</div>
    
    {/each}
</div>

