<script>
   
    export default {
        name: "FirstSectionMain",
        data() {
            return {
                cards: [
                    {
                        img: 'course-02-480x298',
                      price: '$40.00'  ,
                      title: 'Learning to write as a Professional Author',
                      lessons: 20,
                      students: 50
                    },
                    {
                        img: 'stock-full-hd-03-480x298',
                      price: 'Free'  ,
                      title: 'Customer-centric Info-Tech Strategies',
                      lessons: 24,
                      students: 769
                    },
                    {
                        img: 'stock-full-hd-04-480x298',
                      price: '$19,00'  ,
                      title: 'Open Programming Courses for Everyone: Phyton',
                      lessons: 17,
                      students: 62
                    },
                    {
                        img: 'stock-full-hd-06-480x298',
                      price: '$26.00'  ,
                      title: ' Academic Listening and Note-taking',
                      lessons: 14,
                      students: 67
                    },
                    {
                        img: 'course-featured-image-01-480x298',
                      price: '$39.00'  ,
                      title: '  Master JQuery in a Short Period of  Time',
                      lessons: 6,
                      students: 51
                    },
                    {
                        img: 'stock-full-hd-05-480x298',
                      price: '$59.00'  ,
                      title: ' Introduction to Javascripts for Beginners',
                      lessons: 14,
                      students: 76
                    },
               ]
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
                <div class="col-6 my-col" v-for="(singleCard, index) in cards" :key="index">
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