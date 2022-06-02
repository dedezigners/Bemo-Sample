<template>
  <div class="col">
    <div class="col-content">
      <div class="col-content__header">
        <input
          type="text"
          :readonly="canEdit"
          v-model="updatedName"
          @keypress.enter="updateName"
          @click="canEdit = false"
        />
        <span class="material-symbols-outlined icon">close</span>
      </div>

      <card
      v-for="(card, i) in cards"
      :key="i"
      :id="card.id"
      :title="card.title"
      :desc="card.desc"
      ></card>

      <button v-if="!addCard" class="btn btn-add-card" @click="addCard = true">
        <span class="material-symbols-outlined icon"> add </span>
        <span class="text"> Add a card </span>
      </button>
      <div v-else class="add-card">
        <textarea
          v-model="cardTitle"
          placeholder="Enter a title of this card..."
          @keypress.enter="createCard"
        ></textarea>
        <button class="btn btn-secondary" @click="createCard">
          Add Card
        </button>
        <button class="btn btn-icon" @click="addCard = false">
          <span class="material-symbols-outlined"> close </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    cards: {
      type: Array,
      default: []
    }
  },
  components: {
    Card: () => import("./Card.vue"),
  },
  created() {
    this.updatedName = this.name;
  },
  data: () => ({
    canEdit: true,
    updatedName: "",
    addCard: false,
    cardTitle: "",
  }),
  methods: {
    updateName() {
      if (this.updatedName) {
        this.$emit("update-column-name", this.updatedName);
      } else {
        this.updatedName = this.name;
      }
      this.canEdit = true;
    },
    createCard() {
      if (this.cardTitle) {
        this.$emit('create-card', this.id, this.cardTitle);
        this.cardTitle = '';
      }
    }
  },
};
</script>
