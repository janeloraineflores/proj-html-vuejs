<script>
   import { store } from '../store.js';
    export default {
        name: "ThirdSectionMain",
        data() {
            return {
              store
            }
        },
        methods: {
            getImgUrl(image) {
                return `src/assets/img/${image}.jpg`
                
            }
        }
    }
</script>

<template>

     <!-- third section main -->
     <section class="third-section-main py-5 px-5">

            <div class="row">
                <div class="col text-center">
                    <p class="text-uppercase text-secondary">
                        Great words about maxcouch
                    </p>
                    <h3 class="fw-bold">
                        Our 
                        <span class="fw-normal">
                            top learner's
                        </span>
                        verbatim
                    </h3>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-4 bg" v-for="(singleCard, index) in store.commentsCards" :key="index">
                    <h6 class="fw-bold">
                        {{singleCard.title}}
                    </h6>
                    <p class="py-2">
                        {{ singleCard.text }}
                    </p>
                    <div class="d-flex align-items-center">
                        <div class="third-image-container me-3">
                            <img :src="getImgUrl(singleCard.img)" alt="">
                        </div>
                        <h6 class="fw-bold">
                            {{singleCard.name}}
                            <br>
                            <small class="fw-normal text-secondary">
                               {{singleCard.profession}}
                            </small>
                        </h6>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col text-center">
                    <span class="dot text-dark">
                        <i class="bi bi-dot"></i>
                    </span>
                    <span class="dot text-secondary ">
                        <i class="bi bi-dot"></i>
                        <i class="bi bi-dot"></i>
                        <i class="bi bi-dot"></i>
                    </span>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-3">
                    <img class="logo01" src="../assets/img/maxcoach-shape-01.png" alt="">
                </div>
                <div class="col-6 text-center">
                    <h6 class="fw-bold">
                        Start today for getting
                        <span class="fw-normal">
                            Online Certification
                        </span>
                    </h6>
                    <h3 class="fw-bold">
                        You can be your own guiding star with our help!
                    </h3>
                    <button class="px-5 py-2 rounded-2 my-3">
                        Get started now
                    </button>
                </div>
                <div class="col-3">
                    <img src="../assets/img/maxcoach-shape-02.png" alt="">
                </div>
            </div>

        </section>

</template>

<style lang="scss" scoped>
        .third-section-main {
        background-color: #F8F8F8;

        .third-image-container {
            width: 60px;
            height: 60px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .bg {
            background-color: white;
            padding: 30px;
        }
        .dot {
            font-size: 50px;
            cursor: pointer;
        }

        .logo01 {
            position: relative;
            left: 150px;
            top: 50px;
        }
    }
</style>