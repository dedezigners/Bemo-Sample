<template>
  <div class="card" @click="show">
    <h5 v-text="title"></h5>

    <modal :name="modalName" :clickToClose="false" class="modal">
      <div class="modal-content">
        <input type="text" v-model="editTitle" />
        <textarea v-model="editDescription"></textarea>

        <button class="btn" @click="save">Save</button>
        <button class="btn" @click="hide">Close</button>
        <button class="btn">Delete Card</button>
      </div>
    </modal>
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
  computed: {
    modalName: function () {
      return this.title.toLowerCase() + "-" + this.id;
    },
  },
  mounted() {
    this.editTitle = this.title;
    this.editDescription = this.desc;
  },
  data: () => ({
    editTitle: "",
    editDescription: "",
  }),
  methods: {
    show() {
      this.$modal.show(this.modalName);
    },
    hide() {
      this.editDescription = "";
      this.$modal.hide(this.modalName);
    },
    save() {
      axios
        .put(`card/${this.id}`, {
          title: this.editTitle,
          desc: this.editDescription,
        })
        .then((res) => {
          let data = res.data.data;
          EventBus.$emit("update-card", data.id, data);
          this.hide();
        })
        .catch((err) => console.log(err.response.data));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/_variables.scss";
.card {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: $white-color;
  margin-bottom: 10px;
  cursor: pointer;

  .modal {
    &-content {
      padding: 20px;
    }
  }
}
</style>