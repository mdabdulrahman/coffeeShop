<script>
    import OrderBtn from "./orderBtn.svelte";
    
    export let type
</script>
<div  class="bg-amber-100  group rounded shadow-lg py-3 px-3 h-fit">
    <h1 class="text-center text-lg p-3 text-amber-600 font-semibold">{type.name}</h1>
 
  <!--   <img  src={type.img} class="hidden group-hover:block transition-all  rounded-lg w-5/6 p-3 mx-auto h-1/3 "  alt={type.name}> -->

    <p class="p-3  text-amber-600">{type.des}</p>
   <span class="flex justify-center py-3 ">
    <OrderBtn/>
    </span>
</div>
