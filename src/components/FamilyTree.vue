<template>
<div>
  <vo-basic :data="chartData"></vo-basic>
  </div>
</template>

<script>
import { VoBasic } from 'vue-orgchart'
export default {
  components: { VoBasic },
  created () {
    this.chartData = {
      name: 'Rama Mohana Rao',
        children: [
          { 
            name: 'Lakshmi Bhargava',
            spouse:'Vindhya Sri Bhavya',
            children:[{name:'Manohara Sandilya'}]
            },
          {
            name: 'Chaitanya'
          },
          {
            name: 'Gouthama'
          }
        ]
    }
}
}
</script>