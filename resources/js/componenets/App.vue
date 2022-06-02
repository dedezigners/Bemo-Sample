<template>
  <div class="main">
    <header>BeMo Sample Task</header>
    <div class="board-section">
      <column
      v-for="(column, i) in columns"
      :key="i"
      :name="column.name"
      ></column>
      <add-column
      @create-column="createColumn"></add-column>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Column: () => import('./Column.vue'),
    AddColumn: () => import('./AddColumn.vue'),
  },
  data: () => ({
    columns: [
      { name: 'Test' },
      { name: 'Column Name' }
    ],
  }),
  methods: {
    createColumn(columnName) {
      this.columns.push({
        name: columnName,
      });
    }
  }
};
</script>

<style>
</style>