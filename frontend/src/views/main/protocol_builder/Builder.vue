<template>
  <v-container>
    <v-card width="2200px" height="1000px">
      <cytoscape
          ref="cyRef"
          :config="config"
          v-on:mousedown="addNode"
          v-on:cxttapstart="updateNode"
      >
        <cy-element
            v-for="def in elements"
            :key="`${def.data.id}`"
            :definition="def"
            v-on:mousedown="deleteNode($event, def.data.id)"
        />
      </cytoscape>
      <v-navigation-drawer
          absolute
          permanent
          right
      >
        <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Conflux Protocol Builder</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
              v-for="item in items"
              :key="item.title"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-container>
</template>

<script>
import config from "./example-config";

const elements = [...config.elements];
delete config.elements;

export default {
  name: 'ProtocolBuilder',
  data() {
    return {
      config,
      elements
    };
  },
  methods: {
    addNode(event) {
      let x_pos = event.position.x
      let y_pos = event.position.y
      console.log(event);
      let rand_id = Math.random()
      console.log(event.target, this.$refs.cyRef.instance);
      if (event.target === this.$refs.cyRef.instance)
        console.log("adding node", event.target);
      let node_obj = {
        data: {
          id: rand_id.toString(),
          type: 'resource',
          color: 'brown'
        },
        position: {x: x_pos, y: y_pos},
        group: "nodes"
      }
      this.elements.push(node_obj)
    },
    deleteNode(id) {
      console.log("node clicked", id);
    },
    updateNode(event) {
      console.log("right click node", event);
    },
    preConfig(cytoscape) {
      console.log("calling pre-config", cytoscape);
    },
    afterCreated(cy) {
      // cy: this is the cytoscape instance
      console.log("after created", cy);
    }
  }
};
</script>