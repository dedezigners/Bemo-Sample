<template>
  <button class="btn btn-add_card" v-if="!addColumn" @click="addColumn = true">
    <span class="material-symbols-outlined"> add </span>
    Add Column
  </button>
  <div v-else class="column column-add">
    <input type="text" v-model="columnName" @keypress.enter="createColumn" />
    <button class="btn btn-primary" @click="createColumn">Add Column</button>
    <button class="btn btn-icon" @click="addColumn = false">
      <span class="material-symbols-outlined"> close </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "AddColumn",
  data: () => ({
    addColumn: false,
    columnName: "",
  }),
  methods: {
    createColumn() {
      if (this.columnName) {
        this.$emit('create-column', this.columnName);
        this.columnName = '';
        this.addColumn = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/_variables.scss";

.btn {
  &-add_card {
    width: $column-size;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      margin-right: 1rem;
    }
  }
}
</style>