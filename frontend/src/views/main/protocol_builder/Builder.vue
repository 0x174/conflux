<template>
  <v-container>


  </v-container>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css?family=Montserrat");


</style>


<script lang="ts">
import Vue from 'vue'
import cytoscape from 'cytoscape'
Vue.component('network', {
  props: {
    elements: {
      type: Array,
      required: true
    }
  },
  template: '<div id="cy" class="cy"></div>',
  mounted: function () {
    cy1 = cytoscape({
      container: document.getElementById("cy"),
      elements: this.elements,
      layout: {
        name: 'dagre'
      },
      style: [
        // what a node looks like?
        {
          selector: 'node',
          style: {
            'content': 'data(name)',
            'text-valign': 'center',
            'background-color': '#ededed'
          }
        },
        // what an edge looks like?
        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'width': 1,
            'target-arrow-shape': 'triangle',
            'line-color': '#333333',
            'target-arrow-color': '#333333'
          }
        }
      ]
    });
  }
});
export default Vue.extend({
  name: 'ProtocolBuilder',
  components: {},
  data: () => ({
    tabs: null,
    protocols: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Molecular Cloning',
        artist: 'Rita Chen',
      },
      {
        color: '#952175',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Halcyon Days',
        artist: 'Ellie Goulding',
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
