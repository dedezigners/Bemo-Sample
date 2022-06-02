<template>
  <div class="col">
    <div class="col-content">
      <div class="col-content__header">
        <input type="text" :readonly="canEdit" v-model="updatedName" @keypress.enter="updateName" @click="canEdit = false" />
        <span class="material-symbols-outlined icon">close</span>
      </div>

      <modal name="modal"> This is my first modal </modal>

      <button class="btn" @click="showModal">Create Card</button>
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
  components: {
    CardModal: () => import('./CardModal.vue'),
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
    },
    showModal() {
      this.$modal.show('modal')
    }
  }
};
</script>
