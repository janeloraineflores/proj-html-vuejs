<script>
   
    export default {
        name: "FourthSectionMain",
        data() {
            return {
               cards: [
                    {
                        title: 'Succesfully Trained',
                        number: '1790',
                        text: 'Enrolled Learners',
                    },
                    {
                        title: 'Proudly Received',
                        number: '19',
                        text: 'Countryward Awards',
                    },
                    {
                        title: 'Firmly Established',
                        number: '24',
                        text: 'Local Branches',
                    },
                    {
                        title: 'Getting Featured on',
                        number: '1090',
                        text: 'Blog Posts',
                    },
               ]
            }
        },
        methods: {

        }
    }
</script>

<template>

     <!-- fourth section main -->
     <section class="fourth-section-main">
            <div class="my-container">

                <div class="row">
                    <div class="col-3 text-center border-start border-end py-5" v-for="(singlecard, index) in cards" :key="index">
                        <h6 class="fw-bold">
                           {{singlecard.title}}
                        </h6>
                        <h2 class="fw-bold my-2">
                            {{singlecard.number}}
                        </h2>
                        <small class="text-uppercase text-secondary">
                            {{singlecard.text}}
                        </small>
                    </div>
                </div>

            </div>
        </section>

</template>

<style lang="scss" scoped>
     .fourth-section-main {
        h2 {
            color: #20ad96;
        }
    }
</style>