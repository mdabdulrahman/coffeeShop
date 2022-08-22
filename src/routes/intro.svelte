<script>
    import {slide,fade} from "svelte/transition"
import ConnectDown from "./connectDown.svelte";
import OrderBtn from "./orderBtn.svelte";
let color1="#fef3c7"
</script>
<div>
<div class="flex ">
<div class="w-full py-11 md:py-0 md:h-[35rem] bg-amber-100 flex items-center justify-center">
<div >

<h1 class="text-center text-amber-600  text-2xl md:text-5xl" >Coffee smells like freshly ground heaven</h1>
<h1 class="text-center text-amber-600 text-lg md:text-xl p-6 font-semibold  " >Get 30% off on your first order</h1>
<span class="flex md:my-11 justify-center">
<OrderBtn />
</span>

</div>
</div>
<div class="bg-amber-100 hidden md:block flex items-center">
<img src="./Intro2.png" alt="">
</div>
</div>
<div  class="bg-amber-100 pb-3 px-24 hidden md:block  flex  justify-center">
    <div class="w-full">
        
        <h1 class="h-8 text-center animate-bounce text-amber-600 text-semibold">Scroll down</h1>
  <center>  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8  text-amber-600 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg></center>
    
    </div>
    </div>
    <div class="bg-amber-600 ">
    <ConnectDown {color1}/>
    </div>
</div>