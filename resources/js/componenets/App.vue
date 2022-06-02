<template>
  <div class="main">
    <header>BeMo Sample Task</header>
    <div class="board-section">
      <column
      v-for="(column, i) in columns"
      :key="i"
      :id="column.id"
      :name="column.name"
      :cards="column.cards"
      @create-card="createCard"
      ></column>
      <add-column
      @create-column="createColumn"></add-column>
    </div>
    <card-modal v-if="showModal"></card-modal>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Column: () => import('./Column.vue'),
    AddColumn: () => import('./AddColumn.vue'),
    CardModal: () => import('./CardModal.vue'),
  },
  data: () => ({
    columns: [
      { id: 1, name: 'Test', cards: [] },
      { id: 2, name: 'Column Name', cards: [] },
      { id: 3, name: 'Column Three', cards: [] },
    ],
    showModal: false,
  }),
  methods: {
    createColumn(columnName) {
      this.columns.push({
        name: columnName,
      });
    },
    createCard(id, title) {
      console.log(id);
      console.log(title);

      let column = this.columns.find(i => i.id === id);
      column.cards.push({
        id: null,
        title: title,
      });
    }
  }
};
</script>

<style>
</style>