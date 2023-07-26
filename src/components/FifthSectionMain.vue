<script>
   import { store } from '../store.js';
    export default {
        name: "FifthSectionMain",
        data() {
            return {
               store
            }
        },
        methods: {
            getImgUrl(image) {
                return `src/assets/img/${image}`
                
            }
        }
    }
</script>

<template>

     <!-- fifth section main -->
     <section class="fifth-section-main">
            <div class="my-container">

                <div class="row">
                    <div class="col-4 ">
                        <small class="text-uppercase text-secondary">
                            Enjoyable Insights
                        </small>
                        <h3 class="fw-bold my-3">
                            Most Viewed 
                            <span>
                                Best Blogs
                            </span>
                        </h3>
                        <ul class="list-unstyled">
                            <li v-for="(singlelist, index) in store.lists" :key="index">
                                <i class="bi bi-arrow-right"></i> {{singlelist}}
                            </li>
                        </ul>
                    </div>

                    <div class="col-3 bg ms-3" v-for="(singlecard, index) in store.secondCards" :key="index">
                        <div class="fifth-image-container">
                            <img :src="getImgUrl(singlecard.img)" alt="">
                        </div>
                        <div class="my-2">
                            <small class="text-uppercase text-secondary">
                                {{ singlecard.profession }}
                            </small>
                            <h6 class="fw-bold my-2">
                                {{singlecard.title}}
                            </h6>
                            <small class="text-secondary">
                                <i class="bi bi-calendar"></i> {{singlecard.date}}
                                <span class="text-secondary">
                                    <i class="bi bi-eye"></i> {{singlecard.views}} views
                                </span>
                            </small>
                        </div>
                    </div>

                </div>

            </div>
        </section>

</template>

<style lang="scss" scoped>
    .fifth-section-main {
        padding: 100px 0;
        background-color: #F5F1ED;
        height: 500px;

        li {
            font-size: 13px;
            color: #3F3A64;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .fifth-image-container {
            width: 100%;
            height: 50%;
            display: inline-block;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .bg {
            background-color: white;
            width: 300px;
        }

        
    }

</style>