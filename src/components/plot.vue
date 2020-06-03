<template>
  <v-card class="ma-12 rounded-border"  :elevation="5" outlined >
  <apexchart height="400" type="area" :options="options" :series="series"></apexchart>
</v-card>
</template>

<script>
export default {
    name:"plot",
data: function() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },theme: {
     palette: 'palette1'
   },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'Manufactured Products',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  }
}
</script>

<style scoped>
.rounded-border{
  
  border-radius: 10px !important;
}
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 0px;
}
</style>