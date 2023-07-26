<script>
   
    export default {
        name: "HeaderBottomComponent.vue",
        data() {
            return {
               images: [
                    {image: "client-logo-01"},
                    {image: "client-logo-02"},
                    {image: "client-logo-03"},
                    {image: "client-logo-04"},
                    {image: "client-logo-05"},
                    {image: "client-logo-06"},
                    {image: "client-logo-07"},
               ]
            }
        },
        methods: {

            getImgUrl(image) {
                return `src/assets/img/${image}.png`
            }

        }
    }
</script>

<template>

    <!-- header-bottom -->
    <section class="header-bottom">
            <div class="my-container py-5">
                <div class="row align-items-center mb-5">
                    <div class="col">
                        <h1 class="fw-bold">
                            Distant learning for further expansion
                        </h1>

                        <p class="text-secondary">
                            Learning is a life-long journey that in fact we never find the terminate stop. Stop searching, enjoy the process.
                        </p>

                        <button class="px-4 py-2 rounded-2 my-3">
                            <i class="bi bi-printer"></i> 
                             Download free guide
                        </button>
                        
                        <div class="text-secondary">
                            Have questions?
                            <span>
                               <a href="#" class="fw-bold">
                                    Get Free Sample 
                                    <i class="bi bi-arrow-right"></i>
                               </a>
                            </span>
                        </div>
                    </div>

                    <div class="col">
                        <img class="logo08" src="../assets/img/maxcoach-shape-08.png" alt="">
                        <img class="logo07" src="../assets/img/maxcoach-shape-07-100x100.png" alt="">
                        <img class="logo02" src="../assets/img/maxcoach-shape-02.png" alt="">
                        <div class="header-bottom-image-container">
                            <img src="../assets/img/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="header-bottom-logo-container pe-5" v-for="(Singleimage, index) in images" :key="index">
                        <img :src= "getImgUrl(Singleimage.image)">
                    </div>
                </div>
            </div>
        </section>

</template>

<style lang="scss" scoped>
    .header-bottom {
        background-color: #F8F8F8; 

        .header-bottom-image-container {
            width: 450px;
            height: 450px;
        

            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                position: relative;
                bottom: 60px;
                
            }
        }

        h1 {
            color: #3F3A64;
        }

        span a{
            color: #20ad96;
        } 

        .logo08 {
            position: relative;
            top: 150px;
            right: 50px;
        }
       .logo07 {
        position: relative;
        left: 200px;
        top: 350px;
       }

       .logo02 {
        position: relative;
        top: 90px;
        bottom: 50px;
        left: 200px;
       }

    }
    
</style>