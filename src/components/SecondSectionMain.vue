<script>
   import { store } from '../store.js';
    export default {
        name: "SecondSectionMain",
        data() {
            return {
              store
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

    <!-- second section main-->
    <section class="second-main-section py-5">
        <div class="my-container">

            <div class="row">
                <div class="col text-center">
                    <p class="text-uppercase text-secondary">
                        Maxcouch available courses
                    </p>
                    <h3 class="fw-bold">
                        Access
                        <span>
                            Smart Tutoring
                        </span>
                        Program For Benefits.
                    </h3>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-4" v-for="(singleCard, index) in store.availableCoursescards" :key="index">
                    <div>
                        <img :src="getImgUrl(singleCard.img)" alt="">
                    </div>
                    <h6 class="fw-bold mt-4">
                        {{singleCard.title}}
                    </h6>
                    <p class="text-secondary">
                        {{ singleCard.text }}
                    </p>
                    <a href="#" class="text-decoration-none hover fw-bold">
                        {{ singleCard.button }} <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>


            <div class="row mt-5 pt-5">
                <div class="col-7">
                    <img class="logo02" src="../assets/img/maxcoach-shape-02.png" alt="">
                    <img class="logo05" src="../assets/img/maxcoach-shape-05.png" alt="">
                    <img class="logo07" src="../assets/img/maxcoach-shape-07.png" alt="">
                    <div class="second-image-container">
                        <img src="../assets/img/home-2-popup-video-poster.jpg" alt="">
                    </div>
                    <div class="youtube-container">
                        <img src="../assets/img/icon-youtube-play.png" alt="">
                    </div>
                </div>

                <div class="col-5">
                    <p class="text-uppercase text-secondary">
                        Get started
                        <span class="text-dark">
                            Effortlessly
                        </span>
                    </p>
                    <h2 class="fw-bold">
                        Enjoy Our
                        <br>
                        <span class="fw-normal">
                            Companionship
                        </span>
                    </h2>
                    <p class="text-secondary mb-5">
                        Sneek peek into what has in store for you on outr online teaching and mentoring portal. Seek for some hidden hints of early-bird rewards as well.
                    </p>
                    <a href="#" class="a fw-bold">
                        Downloand free guidebook <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>

        </div>
    </section>

</template>

<style lang="scss" scoped>
     .second-main-section {

        .second-image-container {
            width: 450px;
            height: 300px;
            position: absolute;

            img {
                width: 100%;
                height: 100%;
            }
        }

        a {
            color: #20ad96;
        }

        .youtube-container {
            width: 50px;
            height: 40px;
            position: relative;
            top: 140px;
            left: 210px;
            
        

            img{
                width: 100%;
                height: 100%;
            
            }
        }

        .hover{
            color: rgba(0, 0, 0, 0.359);
        }

        .hover:hover {
            color: #20ad96;
        }

        .logo05{ 
            position: absolute;
            top: 2200px;
            left: 200px;
        }

        .logo07 {
            position: absolute;
            top: 2410px;
            left: 600px;
        }

        .logo02 {
            position: absolute;
            top: 2200px;
            left: 700px;
        }

    }
</style>