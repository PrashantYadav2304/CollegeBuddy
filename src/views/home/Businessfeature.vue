<template>
  <section class="white">
    <div class="container">
      <v-tabs centered class="pt-2">
        <v-tab class="display-1 black--text">College Buddy</v-tab>
      </v-tabs>
          <p class=" text-center pt-5 pb-10">"Make your College Life easier, let us handle the unnecessary stuff"</p>
      <div class="row">
        <div class="col-md-5 col-12">
          <h2 class="mb-4 headline">"A one time investment could be your biggest investment to shape your future." </h2>
          <p class="subtitle-1"> Alternate Girls is a great platform for girls community. We offer huge opportunities to girls in every field and earn from a 100 to 10,000+ INR each day. Build a strong profile with alternate girls, have real world work experiences, get hired easily, be popular more than ever.  </p><p class="mb-5"> The business depression marked the death of one age, and the birth of another. This changed world requires practical dreamers who can, and will put their dreams into action. There is no perfect time than present, to look for alternate ways of income resources that could bring you a fortune. </p>
          <button type="button" class="px-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--large primary--text">
            <span class="v-btn__content"> SIGN IN </span>
          </button>
        </div>
        <div class="col-md-6 offset-md-1 col-12">
        <div class="v-card v-sheet theme--light">
        <div class="v-responsive v-image">
        <div class="v-responsive__sizer" style="padding-bottom: 66.75%;"></div>
        <div class="v-image__image v-image__image--cover">
          <v-img src="@/assets/featuregirl.jpg" aspect-ratio="1.5"></v-img>
        </div>
        <div class="v-responsive__content" style="width: 400px;">
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row" >
          <div v-for="feature in features" :key="feature.indx" class="col-md-4 col-12">
          <div class="container pa-0">
            <div class="row no-gutters justify-start">
              <!---->
              <div class="col col-9">
                <div class="body-1 font-weight-regular mb-1 text-left grey--text"> {{ feature.tag }} 
                </div>
                <h3 class="text-uppercase subtitle-1 font-weight-bold mb-1 text-left"> {{ feature.title }} </h3>
                <div class="v-responsive base-divider primary mr-auto mb-6" style="max-width: 28px;">
                  <div class="v-responsive__content"><hr role="separator" aria-orientation="horizontal" class="v-divider theme--light">
                  </div>
                  </div>
                  <p class="base-body body-1 grey--text text--darken-1 text-left mb-6">
                    {{ feature.content }}
                  </p>
                 <v-layout row justify-center>
                  <v-dialog v-model="feature.dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                  <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Discover More</v-btn>
                  </template>
                  <v-card>                   
                    <section id="welcome">
                      <div class="section-header text-center">
                        <div class="text-uppercase caption mb-4 primary--text pt-4">Welcome
                        </div>
                        <h2 class="display-1 font-weight-light">{{ feature.title }}</h2>
                        <hr role="separator" aria-orientation="horizontal" class="mt-5 mb-4 mx-auto v-divider theme--light">
                        <p class="title font-weight-light mx-auto" style="max-width: 800px;">{{ feature.mainheading2 }}</p>
                        </div>
                        <div class="container px-0 pb-0">
                          <div class="v-responsive v-image mx-auto" style="height: 400px; max-width: 700px;">
                            <div class="v-responsive__sizer" style="padding-bottom: 100%;">
                            </div>
                          <div class="v-image__image v-image__image--contain">
                            <v-img :src="require('@/assets/' + feature.imagesrc)" aspect-ratio="1" ></v-img>
                          </div>
                          <div class="v-responsive__content" style="width: 512px;">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 col-12">
                            <section class="row pa-0 ma-0 text-center text-sm-left justify-center">
                              <v-layout justify-space-around>
                                <v-icon class="mdi-48px" color="blue-grey">{{ feature.icon1 }}</v-icon>
                              </v-layout>
                                    <div class="col-md-10 col-12">
                                      <h3 class="title font-weight-regular mb-3 mt-2">{{ feature.paraheading1 }}</h3>
                                      <p class="body-1 font-weight-light">{{ feature.para1 }}</p>
                                    </div>
                                  </section>
                                </div>
                              <div class="col-md-6 col-12">
                            <section class="row pa-0 ma-0 text-center text-sm-left justify-center">
                              <v-layout justify-space-around>
                                <v-icon  class="mdi-48px" color="green">{{ feature.icon2 }}</v-icon>
                              </v-layout>
                                <div class="col-md-10 col-12">
                                  <h3 class="title font-weight-regular mb-3 mt-2">{{ feature.paraheading2 }}</h3>
                                  <p class="body-1 font-weight-light">{{ feature.para2 }}</p>
                                </div>
                              </section>
                            </div>
                          <div class="col-md-6 col-12">
                            <section class="row pa-0 ma-0 text-center text-sm-left justify-center">
                              <v-layout justify-space-around>
                                <v-icon  class="mdi-48px" color="deep-orange accent-3">{{ feature.icon3 }}</v-icon>
                              </v-layout>
                                <div class="col-md-10 col-12">
                                  <h3 class="title font-weight-regular mb-3 mt-2">{{ feature.paraheading3 }}</h3>
                                  <p class="body-1 font-weight-light">{{ feature.para3 }} </p>
                                </div>
                              </section>
                            </div>
                          <div class="col-md-6 col-12">
                            <section class="row pa-0 ma-0 text-center text-sm-left justify-center">
                              <v-layout justify-space-around>
                                <v-icon  class="mdi-48px" color="cyan accent-4">{{ feature.icon4 }}</v-icon>
                              </v-layout>
                                  <div class="col-md-10 col-12">
                                    <h3 class="title font-weight-regular mb-3 mt-2">{{ feature.paraheading4 }}</h3>
                                    <p class="body-1 font-weight-light">{{ feature.para4 }}</p>
                                  </div>
                                </section>
                              </div>
                            <div class="col-md-6 col-12">
                              <section class="row pa-0 ma-0 text-center text-sm-left justify-center">
                                <v-layout justify-space-around>
                                  <v-icon  class="mdi-48px" color="black lighten-2">{{ feature.icon5 }}</v-icon>
                              </v-layout>                                                     
                              <div class="col-md-10 col-12">
                                <h3 class="title font-weight-regular mb-3 mt-2">{{ feature.paraheading5 }}</h3>
                                <p class="body-1 font-weight-light">{{ feature.para5 }}</p>
                              </div>
                            </section>
                          </div>
                          <div class="col-md-6 col-12">
                            <section class="row pa-0 ma-0 text-center text-sm-left justify-center">
                              <v-layout justify-space-around>
                                <v-icon  class="mdi-48px" color="red accent-4">{{ feature.icon6 }}</v-icon>
                              </v-layout>
                                <div class="col-md-10 col-12">
                                  <h3 class="title font-weight-regular mb-3 mt-2">{{ feature.paraheading6 }}</h3>
                                  <p class="body-1 font-weight-light">{{ feature.para6 }}</p>
                                  </div>
                                </section>
                              </div>
                              <v-btn @click="feature.dialog = false">Back</v-btn>
                            </div>
                          </div>
                        </section>
                      </v-card>
                    </v-dialog>
                  </v-layout>
                  </div>
                  <div class="col col-2">
                <div class="display-3 grey--text text--lighten-4 font-weight-bold pr-8">{{ feature.indx }}
                </div>
              </div>
            </div>
          </div>
          <!--------------->
        </div>     
      </div>
    </div>
  </section>
  
</template>

<script>
export default {
  data: ()=> ({
     features: [
        { indx:'01', tag: ' Best Productivity ', title:' JOIN OUR BRAND ', content:'Join our social media platforms (Youtube, Facebook, Instagram etc) and hit a millions of views. Be a part our brand, earn more, get famous and learn a lot from people like you. ', dialog: false, mainheading2:'Explore our features to generate alternate ways of income. Meet passionate people and learn from them. Create a strong profile professionally and earn to live a better life. Be unstoppable, Make your dream true with us. We work hard for you and spend a good money to make you your best version because we exist together.  ', imagesrc:'featuregirl.jpeg', icon1:'mdi-weight-lifter', icon2:'mdi-food', icon3:'mdi-lipstick', icon4:'mdi-island', icon5:'mdi-cast-education', icon6:'mdi-film', paraheading1:'Fitness', paraheading2:'Food', paraheading3:'Beauty', paraheading4:'Travel', paraheading5:'Education', paraheading6:'Entertainment', para1:"Wake up beauty, it's time to beast. Gym, Yoga, Exercise, Health, Diet, Nutrition, Sports, Mental Fitness, Phychology. Be young and motivate others to achieve their best version.", para2:'South Indian, Street Food, Sweets, Non-Veg, Vegetables,  and much more. Tell recipies of super delicious food you cook and spread the taste of love around the world.', para3:'Beauty is a light in the heart. Let the world know your secrets of Skin care, Hair style, Dressup, Makeup tips and Home decoration. Let your confidence shine pretty girl.', para4:'Explore diverse Culture, Traditions, Best Food Corners, Monuments, Places around the world. Help people find the best places to spend their happiest moments of joy.', para5:'Educaton is the most essential part of our lives. Teach Personality Development, English Speaking, Coding, Marketing, Finance and whatever you know at best.', para6:"Let's entertain the world with Creative Writing, Acting, Music, Drama, Comedy and the Artist within you. Be ready to get famous, Show your talent and Win hearts."},

        { indx:'02', tag: ' Income Flow ', title:' WORK WITH BUSINESSES ', content:'Help people grow their business and start-ups. Advertise for them, help creating awareness, manage teams, code for them, sell their products and much more. Get paid.',  dialog: false, mainheading2:'Build a strong profile at alternate girls and work with a lot of companies with great value. Get hired easily for full time, internships, short durations and for particular work basis. Learn skills and earn money', imagesrc:'businessfeature.jpg', icon1:'mdi-handshake', icon2:'mdi-finance', icon3:'mdi-hail', icon4:'mdi-teach', icon5:'mdi-monitor-dashboard', icon6:'mdi-content-save-edit-outline', paraheading1:'Marketing', paraheading2:'Business', paraheading3:'Lifestyle', paraheading4:'Design & Editing', paraheading5:'Programming & Tech', paraheading6:'Creative Writing', para1:'Sell products, social media marketing, influencer marketing, public relations, official launch, promotions, content marketing. Make your marketing useful people will pay for it.', para2:'Financial consultant, market research, product research, branding, legal services, business consultant, data entry. Explore the true potential of excellent businesses.', para3:'Fitness, health, beauty & care, counselling, food, kids & babysit, travel, gaming, creativity. Do it professionally for companies/people and earn what you deserve.', para4:'Logo/poster design, photoshop, audio & video editing, photography, architecture & interior design, industrial & product design, Design future but start with yourself.', para5:'App development, Web development, IT support, cyber security and data protection, data analysis, electronics, game development. Make your skill count in era of technology.', para6:'Website content, article & blog writing, technical & legal content, social media writing, speech & podcast writing, script writing. Content worth millions, grab your part.'},

        { indx:'03', tag: ' Special Offers ', title:'COLLABORATE WITH INDIVISUALS', content:'Collaborate with indivisuals or a group of people. Help them to build their profile and status for their personal work or business. Do marketing for them and get paid.',  dialog: false, mainheading2:'Every individual or group is doing something to create wealth and believe us, they can not do it alone. People need a lot of help for customer attention and for their own welfares. We are dedicated to provide them value to expand thier wealth and status.', imagesrc:'home-hero.jpg', icon1:'mdi-chevron-right', icon2:'mdi-chevron-right', icon3:'mdi-chevron-right', icon4:'mdi-chevron-right', icon5:'mdi-chevron-right', icon6:'mdi-chevron-right', paraheading1:'Do marketing for people around you', paraheading2:'Provide political advantages', paraheading3:'Promote general activities and campaigns', paraheading4:'Provide technical support', paraheading5:'Help grow their business', paraheading6:'Establish yourself, earn value and money ', para1:'', para2:'', para3:'', para4:'', para5:'', para6:'',}
      ],

  }),

}
</script>

<style>

</style>

