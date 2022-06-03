<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable class="list-group" :list="list1" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list1"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable class="list-group" :list="list2" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="(element, index) in list2"
          :key="element.name"
        >
          {{ element.name }} {{ index }}
        </div>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" />
  </div>
</template>
<script>
import draggable from "@/vuedraggable";

export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "Card 1- 1", id: 1 },
        { name: "Card 1- 2", id: 2 },
        { name: "Card 1- 3", id: 3 },
        { name: "Card 1- 4", id: 4 }
      ],
      list2: [
        { name: "Card 2- 5", id: 5 },
        { name: "Card 2- 6", id: 6 },
        { name: "Card 2- 7", id: 7 }
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "New Card" });
    },
    replace: function() {
      this.list = [{ name: "Card Replace" }];
    },
    clone: function(el) {
      return {
        name: el.name + " Cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>