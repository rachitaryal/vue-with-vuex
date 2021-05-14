<template>
  <div class="home">
    <h4>Learn Vuex</h4>
    <img alt="Vue logo" src="../assets/logo.png" />
    <WrapperLayout />
  </div>
</template>

<script>
// @ is an alias to /src
import WrapperLayout from "@/components/WrapperLayout.vue";

export default {
  name: "Home",
  components: {
    WrapperLayout,
  },
};
</script>
