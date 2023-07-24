<script>
   import { store } from '../store.js';
    export default {
        name: "MainComponent",
        data() {
            return {
               store
            }
        },
        methods: {

        }
    }
</script>

<template>
    <!-- MAIN -->
    <main>

        <!-- first section main -->
        <section class="first-section-main pt-5">
            <div class="my-container">
                <div class="row pb-5">
                    <div class="col text-center">
                        <p class="text-uppercase text-secondary">
                            Stimulated to learn?
                        </p>

                        <h3 class="fw-bold">
                            Featured Online Courses
                        </h3>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        <div class="d-flex align-items-center">
                            <div class="first-image-container me-3">
                                <img src="../assets/img/course-02-480x298.jpg" alt="">
                            </div>

                            <div>
                                <h4 class="fw-bold">
                                    $40.00
                                </h4>
                                <h6 class="fw-bold">
                                    Learning to write as a Professional <br> Author
                                </h6>

                                <small>
                                    <span class="text-secondary">
                                        <i class="bi bi-file-earmark-ruled"></i>
                                        20 Lessons
                                    </span>
                                    <span class="text-secondary">
                                        <i class="bi bi-person"></i>
                                        50 Students
                                    </span>
                                </small>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 ">
                        <div class="d-flex  align-items-center">
                            <div class="first-image-container me-3">
                                <img src="../assets/img/stock-full-hd-03-480x298.jpg" alt="">
                            </div>

                            <div>
                                <h4 class="fw-bold">
                                    Free
                                </h4>
                                <h6 class="fw-bold">
                                    Cutomer-centric Info-Tech <br> Strategies
                                </h6>

                                <small>
                                    <span class="text-secondary">
                                        <i class="bi bi-file-earmark-ruled"></i>
                                        24 Lessons
                                    </span>
                                    <span class="text-secondary">
                                        <i class="bi bi-person"></i>
                                        769 Students
                                    </span>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-6">
                        <div class="d-flex align-items-center">
                            <div class="first-image-container me-3">
                                <img src="../assets/img/stock-full-hd-04-480x298.jpg" alt="">
                            </div>

                            <div>
                                <h4 class="fw-bold">
                                    $19.00
                                </h4>
                                <h6 class="fw-bold">
                                    Open Programming Courses for <br> Everyone: Phyton
                                </h6>

                                <small>
                                    <span class="text-secondary">
                                        <i class="bi bi-file-earmark-ruled"></i>
                                        17 Lessons
                                    </span>
                                    <span class="text-secondary">
                                        <i class="bi bi-person"></i>
                                        62 Students
                                    </span>
                                </small>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 ">
                        <div class="d-flex  align-items-center">
                            <div class="first-image-container me-3">
                                <img src="../assets/img/stock-full-hd-06-480x298.jpg" alt="">
                            </div>

                            <div>
                                <h4 class="fw-bold">
                                    $26.00
                                </h4>
                                <h6 class="fw-bold">
                                    Academic Listening and Note- <br> taking
                                </h6>

                                <small>
                                    <span class="text-secondary">
                                        <i class="bi bi-file-earmark-ruled"></i>
                                        14 Lessons
                                    </span>
                                    <span class="text-secondary">
                                        <i class="bi bi-person"></i>
                                        67 Students
                                    </span>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-6">
                        <div class="d-flex align-items-center">
                            <div class="first-image-container me-3">
                                <img src="../assets/img/course-featured-image-01-480x298.jpg" alt="">
                            </div>

                            <div>
                                <h4 class="fw-bold">
                                    $39.00
                                </h4>
                                <h6 class="fw-bold">
                                    Master JQuery in a Short Period of <br> Time
                                </h6>

                                <small>
                                    <span class="text-secondary">
                                        <i class="bi bi-file-earmark-ruled"></i>
                                        6 Lessons
                                    </span>
                                    <span class="text-secondary">
                                        <i class="bi bi-person"></i>
                                        51 Students
                                    </span>
                                </small>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 ">
                        <div class="d-flex  align-items-center">
                            <div class="first-image-container me-3">
                                <img src="../assets/img/stock-full-hd-05-480x298.jpg" alt="">
                            </div>

                            <div>
                                <h4 class="fw-bold">
                                    $59.00
                                </h4>
                                <h6 class="fw-bold">
                                    Introduction to Javscript for <br> Beginners
                                </h6>

                                <small>
                                    <span class="text-secondary">
                                        <i class="bi bi-file-earmark-ruled"></i>
                                        14 Lessons
                                    </span>
                                    <span class="text-secondary">
                                        <i class="bi bi-person"></i>
                                        76 Students
                                    </span>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col text-center my-5">
                        <button class="px-5 py-2 rounded-2 my-3">
                            View All Courses <i class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    .first-section-main {
        background-color: #F5F7FA;

        h3 {
            color: #3F3A64;
        }

        .first-image-container {
            width: 150px;
            height: 150px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                object-fit: cover;
            }
        }

        h4 {
            color:  #20ad96;
        }

        h6 {
            color: #3F3A64;
        }

        button {
            background-color: #20ad96;
            color: white;
            border: none
        }

    }
</style>