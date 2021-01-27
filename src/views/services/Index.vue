<template>   
  <div >
    <Header />
    <Detailedfeature />
    <Business /> 
  </div>  
</template>

<script>
// @ is an alias to /src
import Header from "./Header.vue"
import Detailedfeature from "./Detailedfeature.vue"
import Business from "@/views/home/Business.vue"

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    Header,
    Business,
    Detailedfeature,
    
  }

}
</script>