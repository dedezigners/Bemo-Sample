<template>
  <div class="column">
    <div class="column-header">
      <input type="text" :readonly="canEdit" v-model="updatedName" @keypress.enter="updateName" @click="canEdit = false" />
      <span class="material-symbols-outlined icon">close</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  created() {
    this.updatedName = this.name;
  },
  data: () => ({
    canEdit: true,
    updatedName: '',
  }),
  methods: {
    updateName() {
      if (this.updatedName) {
        this.$emit('update-column-name', this.updatedName);
      } else {
        this.updatedName = this.name;
      }
      this.canEdit = true;
    }
  }
};
</script>

<style>
</style>