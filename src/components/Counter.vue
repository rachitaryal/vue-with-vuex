<template>
  <div>
    <h1>Vuex Counter</h1>
    <h1 class="counter">{{ counter }}</h1>
    <button @click="subtractFromCounter(parseInt(incrementValue))">-</button>
    <input type="number" v-model="incrementValue" />
    <button @click="addToCounter(parseInt(incrementValue))">+</button>
    <div>
      <button @click="addRandomNumber()" class="btn">
        Add by Random Number
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Counter",
  data() {
    return {
      incrementValue: 1,
    };
  },
  computed: {
    ...mapState(["counter"]),
  },
  methods: {
    ...mapMutations(["addToCounter", "subtractFromCounter"]),
    ...mapActions(["addRandomNumber"]),
  },
};
</script>

<style lang="scss" scoped>
.counter {
  font-size: 5rem;
}

button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 700;
  cursor: pointer;
}

input {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
}

.btn {
  border-radius: 0.5rem;
  width: auto;
  background-color: #42b883;
  margin-top: 1rem;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #4dcf95;
  }
}
</style>
