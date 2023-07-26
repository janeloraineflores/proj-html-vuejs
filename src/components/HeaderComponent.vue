<script>
   import HeaderTopComponent from './HeaderTopComponent.vue';
   import HeaderBottomComponent from './HeaderBottomComponent.vue';
   import { store } from '../store.js';
    export default {
        name: "HeaderComponent",
        data() {
            return {
               store,
            }

        },

        components: {
            HeaderTopComponent,
            HeaderBottomComponent
        },

    }
</script>

<template>

    <!-- HEADER -->
    <header>
        <HeaderTopComponent />
        <HeaderBottomComponent />
    </header>

</template>

<style lang="scss" scoped>

    
</style>