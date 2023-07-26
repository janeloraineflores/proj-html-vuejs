<script>
   import { store } from '../store.js';
    export default {
        name: "FirstSectionMain",
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
    
    <!-- first section main -->
    <section class="first-section-main py-5">
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
                <div class="col-6 my-col" v-for="(singleCard, index) in store.onlineCoursesCards" :key="index">
                    <div class="d-flex align-items-center">
                        <div class="first-image-container p-3">
                            <img :src="getImgUrl(singleCard.img)" alt="">
                        </div>

                        <div>
                            <h4 class="fw-bold">
                                {{singleCard.price}}
                            </h4>
                            <h6 class="fw-bold">
                                {{singleCard.title}}
                            </h6>

                            <small>
                                <span class="text-secondary">
                                    <i class="bi bi-file-earmark-ruled"></i>
                                    {{ singleCard.lessons }} Lessons
                                </span>
                                <span class="text-secondary">
                                    <i class="bi bi-person"></i>
                                    {{singleCard.students}} Students
                                </span>
                            </small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row my-4">
                <div class="col text-center">
                    <button class="px-4 py-2 rounded-2 my-3">
                        View all courses <i class="bi bi-arrow-right"></i> 
                    </button>
                </div>
            </div>
            
        </div>
    </section>

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

        .my-col:hover {
            background-color: white;
            cursor: pointer;
        }

    }
</style>