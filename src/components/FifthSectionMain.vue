<script>
   
    export default {
        name: "FifthSectionMain",
        data() {
            return {
               lists: [
                     {list: ' Become a Better Blogger: Content Planning' },
                     {list:' Promoting Your Online Business on Pinterest'},
                     {list:'Gamification and Game-Based on Learning'},
                     {list:'Designing an Online Course from Expert'},
                     {list:'Why Online Courses Are The Future of Education'}
               ],

               cards: [
                     {
                        img: '../assets/img/artist-blog-03-480x352.jpeg',
                        profession: 'Artist',
                        title: 'Brush Strokes Energize Trees in Paintings',
                        date: 'May 15, 2020',
                        views: 688
                     },
                     {
                        img: '../assets/img/artist-blog-01-480x352.jpg',
                        profession: 'Artist',
                        title: 'Pocket-Sized Notebooks Hold Miniature Paintings',
                        date:'May 15, 2020',
                        views: 603
                     },
                     

               ]
            }
        },
        methods: {

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
                            <li v-for="(singlelist, index) in lists" :key="index">
                                <i class="bi bi-arrow-right"></i> {{singlelist.list}}
                            </li>
                        </ul>
                    </div>

                    <div class="col-3 bg mx-3 " v-for="(singlecard, index) in cards" :key="index">
                        <div class="fifth-image-container">
                            <img :src="singlecard.img" alt="">
                        </div>
                        <div class="my-2 ">
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

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .bg {
            width: 300px;
            background-color: white;
        }
    }

</style>