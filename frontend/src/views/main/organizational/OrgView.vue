<template>
  <v-container>
    <!--Organizational Page Header -->
    <v-row>
      <!--Organizational Logo -->
      <v-col class="d-flex flex-column" md='4' cols="3">
        <!--Logic here to to switch to a default logo if one is not present -->
        <v-card outlined>
          <v-flex justify-center>
            <v-img
                :src="require('../../../assets/damp-logo.png')"
                width="100"
                contain
                class="mx-auto"
                style="margin-bottom: 15px"
            />
          </v-flex>
          <v-divider class="mx-4"></v-divider>
          <v-flex text-xs-center>
            <v-card-subtitle class="text-center" style="font-size:16px">
              <b>Design, Automation, Manufacturing, Prototyping Lab</b>
            </v-card-subtitle>
          </v-flex>
          <v-divider class="mx-4"></v-divider>

          <!--          <v-divider class="mx-4"></v-divider>-->
          <!--          <v-flex text-xs-center>-->
          <!--            <v-card-subtitle class="text-left" style="font-size:16px">-->
          <!--              Location: Boston, Massachusetts-->
          <!--            </v-card-subtitle>-->
          <!--          </v-flex>-->
          <!--          <v-flex text-xs-center>-->
          <!--            <v-card-subtitle class="text-left" style="font-size:16px">-->
          <!--              Affiliation: Boston University-->
          <!--            </v-card-subtitle>-->
          <!--          </v-flex>-->
          <v-list two-line class="organizational-info">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-school
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Boston University</v-list-item-title>
                <v-list-item-subtitle>Affiliation</v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-city
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Boston, Massachusetts</v-list-item-title>
                <v-list-item-subtitle>Organization Location</v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-flask-outline
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Private Research Lab</v-list-item-title>
                <v-list-item-subtitle>Organizational Type</v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-email
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>damplab@bu.edu</v-list-item-title>
                <v-list-item-subtitle>Contact</v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>
          </v-list>


        </v-card>
      </v-col>
      <v-col class="d-flex flex-column" md="8">
        <v-card outlined height="582px">
          <v-card-title class="justify-center" style="font-size:60px;margin-top: 15px">
            <b>DAMP Lab</b>
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text style="font-size: 22px">
            The mission of the DAMP lab is to develop novel biological systems
            using formal representations of protocols and experiments for the
            specify-design-build-test cycle. <br/><br/>
            This will allow for faster, more scalable, and reproducible research
            results that can be transitioned from academia to society.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-column" md="12">
        <v-card outlined>
          <v-card-title
              class="justify-center"
              style="font-size:60px;margin-top: 15px;margin-bottom: 15px">
            <b>Protocols</b>
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
        </v-card>
      </v-col>
      <v-col
          v-for="(item, i) in protocols"
          :key="i"
          cols="12"
      >
        <v-card
            :color="item.color"
            dark
            :to="item.url_location"
            link
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                  class="headline"
                  v-text="item.title"
              >
              </v-card-title>
            </div>
            <br/>
            <v-card-subtitle v-text="item.artist"></v-card-subtitle>

          </div>
          <v-divider dark/>
          <div>

            <v-card-actions>
              <v-card-text>
                {{item.description}}
              </v-card-text>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>


  </v-container>
</template>

<style scoped>
.organizational-info {
  font-size: 18px;


}
</style>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'OrgView',

  data: () => ({
    protocols: [
      {
        color: 'accent',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Spreadable Sandwich Assembly',
        artist: 'Earl of Sandwich',
        description: 'Rap Game Strong',
        url_location: '/protocol/test'
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
        description: 'Dicks',
      },
    ],
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
})
</script>
