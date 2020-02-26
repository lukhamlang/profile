<template>
  <div id="app">
    <Nav />

    <router-view />
    <br />
    <br />


  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
// import footer from "@/components/footer.vue"
export default {
  components: {
    Nav,
  
  }
};
</script>

<style>
</style>
