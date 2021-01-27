<template>

 <section class="pb-10 blue-grey lighten-4">
    <div class="container mt-10 pt-4">
      
        <div class="display-1 black--text text-center mt-4">OUR TEAM</div>
        <hr class="mx-auto primary" width="200px">
      
       <p class=" text-center pt-5 pb-10">"Team work makes the dream work."</p>
  <v-card
    flat
    tile
  >

      <v-spacer></v-spacer>

    <v-container>

      <v-row>
        <v-spacer></v-spacer>
        <v-col
           class="blue-grey lighten-4"
          v-for="teamMember in teamMembers"
          :key="teamMember.name"
          cols="12"
          sm="6"
          md="4"
               >
          <v-card elevation="0">
            <v-img
              :src="require('@/assets/' + teamMember.profileImage)"
              max-height="400px"
            >
              <!-- <span
                class="headline white--text pl-4 pt-4 d-inline-block"
                v-text="teamMember.title"
              ></span> -->
            </v-img>

      <v-card-title>{{ teamMember.name }}</v-card-title>
        <v-card-text>
          <div>
             {{ teamMember.bio }}
          </div>
        </v-card-text>
            <v-card-actions class="white justify-center">

              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                :href="social.links[teamMember.id]"
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
        <v-col class="blue-grey lighten-4"
        cols="12"
          sm="6"
          md="4">
          <v-card elevation="0">
            <v-img src="@/assets/team1.svg"
             max-height="500px" contain></v-img>
             <v-card-title>Whatever it takes!</v-card-title>
            <v-card-text>
              <p class="mx-auto my-4">"We push ourselves to get things done and we love to get feeedback to make them better. We work together and celebrate small steps with full excitement. We are open minded and we like to discuss on anything that will make College Buddy better. We trust each other and value humanity. We respect differences and we love to connect with student communities. We experiment constantly to make student's life easy and fun with creative learning and connecting approach"</p>
            </v-card-text>

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
      teamMembers: [
        { id: 0, name:'Prashant Yadav', title:'Hard working', profileImage: 'prashantyadav.jpeg', bio: 'Tech Lover, Researcher and Web developer, Leading an incredible team with fascinating goals.'},
        { id: 1, name: 'Vaibhav Kumar', title: 'Quirky', profileImage: 'vaibhavkumar.jpeg', bio: 'Most awesome developer, designer, motivator and leader on the face of planet earth.'},
        { id: 2, name: 'Subhashish Anand', title:'Technical', profileImage: 'subhashishanand.jpeg', bio: 'He is the most technical playboy out there. Writing code and breaking hearts all at once.',},
        { id: 3, name:'Rahul Raj', title: 'Helping', profileImage: 'rahulraj.jpeg', bio: 'A passionate engineer and android developer. Exploring journey with College Buddy',},
        { id: 4, name:'Vaibhav deep', title: 'Chill one', profileImage: 'vaibhavdeep.jpeg', bio: 'Web Developer, student & rationale thinker.Trying to be the best version of myself',}
        ],
       
      socials: [
        {
          icon: 'mdi-facebook',
          color: 'indigo',
          links: ['https://www.facebook.com/people/Prashant-Yadav/100010926617516','https://www.facebook.com/vaibhav.kumar.7921', 'https://www.facebook.com/subhashish.anand.1','https://www.facebook.com/rahulrarauniyar','https://www.facebook.com/vaibhav.deep.50'],
        },
        {
          icon: 'mdi-linkedin',
          color: 'cyan darken-1',
          links:['https://www.linkedin.com/in/prashant-yadav-2304/','https://www.linkedin.com/in/vaibhav-kumar-25b35241/', 'www.linkedin.com/in/subhashish-anand/','https://www.linkedin.com/in/rahul-raj-12107515b', 'https://www.linkedin.com/in/vaibhav-deep-b6b4471a2'],

        },
        {
          icon: 'mdi-instagram',
          color: 'red lighten-3',
          links:['https://instagram.com/prashantyadav7390?igshid=wj36ulry8vpt','https://instagram.com/vaibhav__kumar_?igshid=neeod1m5sp2d', 'https://instagram.com/subhashishanand?igshid=1hd8zcypw48fr', 'https://instagram.com/rahul_rauni?igshid=35u8b61fnk3b', 'https://instagram.com/vd.shady?igshid=14pmy3z4657an'],

        },
        {
          icon: 'mdi-github',
          color: 'brown lighten-1',
          links:['https://github.com/PrashantYadav2304','https://github.com/vaibhavvats1000', 'https://github.com/subhashishanand', 'https://github.com/rahulrauni', 'https://github.com/vaibhavdeep319'],
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