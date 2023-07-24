
<script>
    import HeaderComponent from './components/HeaderComponent.vue';
    import MainComponent from './components/MainComponent.vue'
    import FooterComponent from './components/FooterComponent.vue'
    import { store } from './store.js';

    export default {
      name: "App",
      components: {
        HeaderComponent,
        MainComponent,
        FooterComponent,
      },
      data() {
        return {
          store
        };
      },
    }
</script>

<template>
  <HeaderComponent />

  <MainComponent/>

  <FooterComponent />
</template>

<style lang="scss">
@use "assets/scss/main.scss"
</style>
