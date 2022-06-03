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
      <add-column @create-column="createColumn"></add-column>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Column: () => import("./Column.vue"),
    AddColumn: () => import("./AddColumn.vue"),
  },
  data: () => ({
    columns: [
      {
        id: 1,
        name: "Col-1",
        cards: [
          {
            id: 1,
            title: "Card 1-1",
          },
          {
            id: 2,
            title: "Card 1-2",
          },
        ],
      },
      {
        id: 1,
        name: "Col-2",
        cards: [
          {
            id: 1,
            title: "Card 2-1",
          },
          {
            id: 2,
            title: "Card 2-2",
          },
        ],
      },
    ],
  }),
  mounted() {
    this.getEvents();
    this.getData();
  },
  methods: {
    getEvents() {
      EventBus.$on("update-card", (cardId, data) => {
        let columnId = null;
        this.columns.forEach((col) => {
          col.cards.forEach((card) => {
            if (card.id === cardId) {
              columnId = col.id;
              return true;
            }
          });
          if (columnId) return true;
        });

        let columnIndex = this.columns.findIndex((col) => col.id === columnId);
        let cardIndex = this.columns[columnIndex].cards.findIndex(
          (c) => c.id === cardId
        );
        this.columns[columnIndex].cards[cardIndex] = data;
        console.log(this.columns[columnIndex].cards[cardIndex]);
      });
    },
    getData() {
      axios
        .get(`column`)
        .then((res) => {
          this.columns = res.data.data;
        })
        .catch((err) => console.log(err.response.data));
    },
    createColumn(name) {
      axios
        .post(`column`, {
          name: name,
        })
        .then((res) => {
          this.columns.push(res.data.data);
        })
        .catch((err) => console.log(err.response.data));
    },
    updateColumn(id, name) {
      axios
        .put(`column/${id}`, {
          name: name,
        })
        .then((res) => {
          console.log(res.data.data);
        })
        .catch((err) => console.log(err.response.data));
    },
    deleteColumn(id) {
      console.log(id);
      // axios.delete(`column/${id}`).then(res => {
      //   // this.getData();
      // }).catch(err => console.log(err.response.data));
    },
    createCard(id, title) {
      let column = this.columns.find((c) => c.id === id);

      if (column) {
        axios
          .post(`card`, {
            column_id: id,
            title: title,
            // position:
            //   column.cards.length > 0
            //     ? column.cards[column.cards.length - 1].id
            //     : 0,
          })
          .then((res) => {
            column.cards.push(res.data.data);
          })
          .catch((err) => console.log(err.response.data));
      }
    },
  },
};
</script>

<style>
</style>