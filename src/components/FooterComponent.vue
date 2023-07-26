<script>
    import FooterTopComponent from './FooterTopComponent.vue';
    import FooterBottomComponent from './FooterBottomComponent.vue';
   import { store } from '../store.js';
    export default {
        name: "FooterComponent",
        data() {
            return {
               store
            }
        },

        components: {
            FooterTopComponent,
            FooterBottomComponent
        },

        methods: {

        }
    }
</script>

<template>
    <!-- FOOTER -->
    <footer>

        <FooterTopComponent />
        <FooterBottomComponent />

        

        


    </footer>
</template>

<style lang="scss" scoped>
</style>