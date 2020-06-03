<template>
    <v-app class="Container"  color="transparent">
      <Cards />  
      <plot/>
      <Table/>
    </v-app>
</template>
<script>
import Cards from "./cards"
import plot from "./plot"
import Table from "./table"
export default {
    name:"Container",
    components:{
        Cards,
        plot,
        Table
        
    }
  
}
</script>

<style scoped>

.theme--light.v-application {
    background: none;
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: transparent;
    color: rgba(0, 0, 0, 0.87);
}
</style>