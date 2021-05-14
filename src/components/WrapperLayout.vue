<template>
  <div class="container">
    <Counter />
    <History />
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
import History from "@/components/History.vue";

export default {
  name: "WrapperLayout",
  components: {
    Counter,
    History,
  },
};
</script>

<style lang="scss" scoped>
.container {
  //   border-radius: 5px solid black;
}
</style>
