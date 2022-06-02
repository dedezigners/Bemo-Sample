<template>
  <modal :name="name" :clickToClose="false">
    
  </modal>
</template>

<script>
export default {
  name: "CardModal",
  data: () => ({
    name: 'new-card'
  }),
  mounted() {
    this.show();
  },
  methods: {
    show() {
      this.$modal.show(this.name);
    },
    hide() {
      this.$modal.hide(this.name);
    },
  },
};
</script>