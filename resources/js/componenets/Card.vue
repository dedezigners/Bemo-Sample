<template>
  <div class="card">
      <h5 v-text="title"></h5>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
    padding: 10px;
    border-radius: 0.5rem;
}
</style>