<template>

 <section class="white">
    <div class="container">
      <v-tabs centered class="pt-2">
        <v-tab class="display-1 black--text">Our Team</v-tab>
      </v-tabs>
       <p class=" text-center pt-5 pb-10">"Teamwork makes the dream work."</p>
  <v-card
    flat
    tile
  >

      <v-spacer></v-spacer>

    <v-container>

      <v-row>
        <v-spacer></v-spacer>
        <v-col
          v-for="card in cards"
          :key="card"
          cols="12"
          sm="6"
          md="3"
               >
          <v-card>
            <v-img
              :src="`https://picsum.photos/200/300?image=${getImage()}`"
              height="300px"
            >
              <span
                class="headline white--text pl-4 pt-4 d-inline-block"
                v-text="card"
              ></span>
            </v-img>
  <v-card-actions>
      <v-btn
        color="blue darken-2"
        text
      >
        Click for Info.
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
               Most awesome developer, designer and motivator on the face of planet earth.        </v-card-text>
      </div>
    </v-expand-transition>
            <v-card-actions class="white justify-center">
              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                :color="social.color"
                class="white--text"
                fab
                icon
                small
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </v-card-actions>
          
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
    </div>
 </section>
</template>

<script>
  export default {
    data: () => ({
      cards: ['Prashant Yadav', 'Vaibhav Kumar', 'Vaibhav Deep', 'Rahul Raj', 'Subhashish Anand'],
      images:[ '@/assets/prashantyadav.jpeg','@/assets/vaibhavkumar.jpeg','@/assets/vaibhavdeep.jpeg','@/assets/rahulraj.jpeg','@/assets/subhashishanand.jpeg'],
       bio:['Love my work and family, Leading an incredible team with fascinating goals','Most awesome developer, designer, motivator and leader on the face of planet earth','Web Developer, student & rationale thinker.Trying to be the best version of myself', 'Love my work and family, Leading an incredible team with fascinating goalLove my work and family', 'He is the most technical playboy out there. Writing code and breaking hearts all at once.'],
       
      socials: [
        {
          icon: 'mdi-facebook',
          color: 'indigo',
          fblinks: ['https://www.facebook.com/profile.php?id=100010926617516','https://www.facebook.com/vaibhav.kumar.7921','https://www.facebook.com/vaibhav.deep.50','https://www.facebook.com/rahulrarauniyar','https://www.facebook.com/subhashish.anand.1'],
        },
        {
          icon: 'mdi-linkedin',
          color: 'cyan darken-1',
          linkedinlinks:['https://www.linkedin.com/in/vaibhav-kumar-25b35241/','https://www.linkedin.com/in/vaibhav-deep-b6b4471a2','https://www.linkedin.com/in/rahul-raj-12107515b','https://www.linkedin.com/in/subhashish-anand/'],

        },
        {
          icon: 'mdi-instagram',
          color: 'red lighten-3',
          instalinks:['https://instagram.com/prashantyadav7390?igshid=wj36ulry8vpt','https://instagram.com/vaibhav__kumar_?igshid=neeod1m5sp2d','https://instagram.com/vd.shady?igshid=14pmy3z4657an','https://instagram.com/rahul_rauni?igshid=35u8b61fnk3b','https://instagram.com/subhashishanand?igshid=1hd8zcypw48fr'],

        },
        {
          icon: 'mdi-github',
          color: 'brown lighten-1',
          gitlinks:['https://github.com/PrashantYadav2304','https://github.com/vaibhavvats1000','https://github.com/vaibhavdeep319',],
        },
      ],
      show: false,
    }),

    methods: {
      getImage () {
        const min = 550
        const max = 560

        return Math.floor(Math.random() * (max - min + 1)) + min
      },
    },
  }
</script>