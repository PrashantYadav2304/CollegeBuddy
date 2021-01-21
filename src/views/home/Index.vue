<template>   
  <div >
    <Header />
    <Features />
    <Businessfeature />
    <Business />

    
    
  </div> 
  
    

    
</template>

<script>
// @ is an alias to /src
import Header from "./Header.vue"
import Features from "./Features.vue"
import Businessfeature from "./Businessfeature.vue"
import Business from "./Business.vue"

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    Header,
    Features,
    Businessfeature,
    Business
    
  }

}
</script>