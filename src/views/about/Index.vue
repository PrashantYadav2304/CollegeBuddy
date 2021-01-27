<template>
  <div>
    <section>
    <v-img
      :min-height="minHeight"
      height="920"
      :src="require('@/assets/header2.jpg')"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, .4), rgba(5, 11, 31, .4)"
      
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="700"
          width="100%"
        >
        <div class="display-1 font-weight-normal" >We are here to</div>
        <div class="display-4 font-weight-medium" >Make your College Life Easier</div>
        
          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            
          <!-- <p style="padding:15px; padding-right:20px;"
          class="font-weight-regular mb-12  theme--light  white rounded-pill  mt-4" ><span class=" blue--text text-darken-1"><v-icon color="blue" left>mdi-arrow-down-bold</v-icon> Scroll for more </span></p> -->
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
    <Goals/>
    <Inspiration/>
    <Team/>
    
  </div>
</template>

<script>
import Goals from './Goals.vue'
import Inspiration from './Inspiration.vue'
import Team from './Team.vue'




export default {
  name: 'App',
  components:{
    Goals,
    Inspiration,
    Team
  },
   computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
}
</script>

<style>

</style>