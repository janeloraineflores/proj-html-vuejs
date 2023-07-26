<script>
   
    export default {
        name: "FirstSectionMain",
        data() {
            return {
                cards: [
                    {
                        img: '../assets/img/course-02-480x298.jpg',
                      price: '$40.00'  ,
                      title: 'Learning to write as a Professional Author',
                      lessons: 20,
                      students: 50
                    },
                    {
                        img: '../assets/img/stock-full-hd-03-480x298.jpg',
                      price: 'Free'  ,
                      title: 'Customer-centric Info-Tech Strategies',
                      lessons: 24,
                      students: 769
                    },
                    {
                        img: '../assets/img/stock-full-hd-04-480x298.jpg',
                      price: '$19,00'  ,
                      title: 'Open Programming Courses for Everyone: Phyton',
                      lessons: 17,
                      students: 62
                    },
                    {
                        img: '../assets/img/stock-full-hd-06-480x298.jpg',
                      price: '$26.00'  ,
                      title: ' Academic Listening and Note-taking',
                      lessons: 14,
                      students: 67
                    },
                    {
                        img: '../assets/img/course-featured-image-01-480x298.jpg',
                      price: '$39.00'  ,
                      title: '  Master JQuery in a Short Period of  Time',
                      lessons: 6,
                      students: 51
                    },
                    {
                        img: '../assets/img/stock-full-hd-05-480x298.jpg',
                      price: '$59.00'  ,
                      title: ' Introduction to Javascripts for Beginners',
                      lessons: 14,
                      students: 76
                    },
               ]
            }
        },
        methods: {

        }
    }
</script>

<template>
    
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
                <div class="col-6" v-for="(singleCard, index) in cards" :key="index">
                    <div class="d-flex align-items-center">
                        <div class="first-image-container me-3">
                            <img :src="singleCard.img" alt="">
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


    }
</style>