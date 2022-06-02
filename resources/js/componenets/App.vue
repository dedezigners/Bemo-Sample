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
      @update-column-name="updateColumn"
      @delete-column="deleteColumn"
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
    columns: [],
    showModal: false,
  }),
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get(`column`).then(res => {
        this.columns = res.data.data;
      }).catch(err => console.log(err.response.data))
    },
    createColumn(name) {
      axios.post(`column`, {
        'name': name
      }).then(res => {
        this.columns.push(res.data.data);
      }).catch(err => console.log(err.response.data));
    },
    updateColumn(id, name) {
      axios.put(`column/${id}`, {
        'name': name
      }).then(res => {
        console.log(res.data.data);
      }).catch(err => console.log(err.response.data));
    },
    deleteColumn(id) {
      console.log(id);
      // axios.delete(`column/${id}`).then(res => {
      //   // this.getData();
      // }).catch(err => console.log(err.response.data));
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