<script>
import Header from "./header.svelte";
import Intro from "./intro.svelte";
import Locations from "./locations.svelte";
import TypeCoffee from "./typeCoffee.svelte"
let logo="../src/logo.png"
let logoStyle="w-11 p-2"

</script>

<Header {logo} {logoStyle}/>

<Intro/>
<TypeCoffee/>
<Locations/>