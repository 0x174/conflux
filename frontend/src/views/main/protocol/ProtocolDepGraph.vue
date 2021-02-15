<template>
  <v-container>
    <v-card outlined>
      <div id="app">
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
      </div>
    </v-card>
  </v-container>
</template>


<style scoped>
.node {
  label: "data(id)"
}

.protocol-amplifying {
  font-size: 18px;
}

.protocol-checkbox {
  transform: scale(2.0);
}

.subprotocol-checkbox {
  transform: scale(1.25);
}

.subprotocol-description {
  font-size: 18px !important;
}

.subprotocol-location {
  font-size: 16px !important;
}

</style>


<script lang="ts">

export default {
  name: 'ProtocolGraph',
  methods: {
    addNode(event) {
      console.log(event.target, this.$refs.cyRef.instance);
      if (event.target === this.$refs.cyRef.instance)
        console.log("adding node", event.target);
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
  },
  data: () => ({
    elements: [
      {
        data: {
          id: "Peanut Butter",
          type: 'resource',
          color: 'brown'
        },
        position: {x: 100, y: 100},
        group: "nodes"
      },
      {
        data: {
          id: "Jelly",
          type: 'resource',
        },
        position: {x: 200, y: 100},
        group: "nodes"
      },
      {
        data: {
          id: "Bread Slice (Bottom)",
          type: 'resource',
        },
        position: {x: 300, y: 100},
        group: "nodes"
      },
      {
        data: {
          id: "Bread Slice (Top)",
          type: 'resource',
        },
        position: {x: 400, y: 100},
        group: "nodes"
      },
      {
        data: {id: "b"},
        position: {x: 689, y: 282},
        group: "nodes"
      },
      {
        data: {id: "c"},
        position: {x: 489, y: 282},
        group: "nodes"
      },
      {
        data: {id: "ab", source: "Peanut Butter", target: "Jelly"},
        group: "edges"
      }
    ],
    style: [
      {
        selector: "node",
        style: {"background-color": "#666", label: "data(id)"}
      },
      {
        selector: "edge",
        style: {
          width: 3,
          "line-color": "#ccc",
          "target-arrow-color": "#ccc",
          "target-arrow-shape": "triangle"
        }
      }
    ],
    layout: {name: "grid", rows: 1}
  })
}
</script>
