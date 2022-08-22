<script>
import Form from "./form.svelte";
import Header from "./header.svelte";
import Intro from "./intro.svelte";
import Locations from "./locations.svelte";
import PageConnect from "./pageConnect.svelte";
import TypeCoffee from "./typeCoffee.svelte"
let logo="./logo.png"
let logoStyle="w-11 p-2"
let primary="bg-amber-600"
let secondary="bg-amber-100"
</script>

<Header {logo} {logoStyle}/>

<Intro/>
<TypeCoffee/>

<Locations/>
<!-- <PageConnect {primary}{secondary}/> -->
<Form/>