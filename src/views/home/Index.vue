<template>   
  <div >
    <Header />
    <Features />
    <Businessfeature />
    <Socialmedia />
    <Business />
    <Individual />

    
    
  </div> 
  
    

    
</template>

<script>
// @ is an alias to /src
import Header from "./Header.vue"
import Features from "./Features.vue"
import Businessfeature from "./Businessfeature.vue"
import Socialmedia from "./Socialmedia.vue"
import Business from "./Business.vue"
import Individual from "./Individual.vue"

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
    Socialmedia,
    Business,
    Individual
  }

}
</script>