<template>
  <div class="col col-add">
    <div class="col-content">
      <button
        class="btn btn-add_card"
        v-if="!addColumn"
        @click="addColumn = true"
      >
        <span class="material-symbols-outlined"> add </span>
        Add Column
      </button>
      <div v-else class="column column-add">
        <input
          type="text"
          v-model="columnName"
          @keypress.enter="createColumn"
        />
        <button class="btn btn-primary" @click="createColumn">
          Add Column
        </button>
        <button class="btn btn-icon" @click="addColumn = false">
          <span class="material-symbols-outlined"> close </span>
        </button>
      </div>
    </div>
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
        this.$emit("create-column", this.columnName);
        this.columnName = "";
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
    width: 100%;
    height: 100%;
    vertical-align: top;
    white-space: nowrap;
    background-color: rgba($color: $white-color, $alpha: 0.35);
    border-radius: 0.25rem;
    border: 1px solid rgba($color: $dark-gray, $alpha: 0.35);

    span {
      margin-right: 1rem;
    }

    &:hover {
      background-color: rgba($color: $dark-gray, $alpha: 0.35);
    }
  }
}
</style>