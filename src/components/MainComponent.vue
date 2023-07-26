<script>
   import FirstSectionMain from './FirstSectionMain.vue';
   import SecondSectionMain from './SecondSectionMain.vue';
   import ThirdSectionMain from './ThirdSectionMain.vue';
   import FourthSectionMain from './FourthSectionMain.vue';
   import FifthSectionMain from './FifthSectionMain.vue';
   import { store } from '../store.js';
    export default {
        name: "MainComponent",
        data() {
            return {
               store,
            
            }
        },

        components: {
            FirstSectionMain,
            SecondSectionMain,
            ThirdSectionMain,
            FourthSectionMain,
            FifthSectionMain
        },

        methods: {

        }
    }
</script>

<template>

    <!-- MAIN -->
    <main>
        <FirstSectionMain />
        <SecondSectionMain />
        <ThirdSectionMain />
        <FourthSectionMain />
        <FifthSectionMain />  
    </main>

</template>

<style lang="scss" scoped>
</style>