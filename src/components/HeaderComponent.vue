<script>
   import { store } from '../store.js';
    export default {
        name: "HeaderComponent",
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
    <!-- HEADER -->
    <header>
        
        <!-- header top -->
        <section class="header-top">
            <div class="my-container d-flex justify-content-between pt-3 pb-1">
                <div class="header-top-logo-container">
                    <img src="../assets/img/dark-logo.png" alt="">
                </div>

                
                <ul >
                    <li class="d-inline mx-2">
                        <a href="#" class="text-decoration-none text-dark">
                            Home
                        </a>
                    </li>
                    <li class="d-inline mx-2">
                        <a href="#" class="text-decoration-none text-dark">
                            Pages
                        </a>
                    </li>
                    <li class="d-inline mx-2">
                        <a href="#" class="text-decoration-none text-dark">
                            Courses
                        </a>
                    </li>
                    <li class="d-inline mx-2">
                        <a href="#" class="text-decoration-none text-dark">
                            Features
                        </a>
                    </li>
                    <li class="d-inline mx-2">
                        <a href="#" class="text-decoration-none text-dark">
                            Blog
                        </a>
                    </li>
                    <li class="d-inline mx-2">
                        <a href="#" class="text-decoration-none text-dark">
                            Shop
                        </a>
                    </li>
                    <li class="d-inline mx-2">
                        <a href="#" class="text-decoration-none text-dark">
                            <i class="bi bi-person-circle"></i>
                        </a>
                    </li>
                    <li class="d-inline mx-2">
                        <input class="py-2 ps-3 rounded-2" type="text" placeholder="Search...." >  
                    </li>
                </ul>
            </div>
        </section>

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
                            <span class="ms-2">
                                Download free guide
                            </span>
                        </button>
                        
                        <div class="text-secondary">
                            Have questions?
                            <span>
                               <a href="#">
                                    Get Free Sample 
                                    <i class="bi bi-arrow-right"></i>
                               </a>
                            </span>
                        </div>
                    </div>

                    <div class="col">
                        <div class="header-bottom-image-container">
                            <img src="../assets/img/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="header-bottom-logo-container">
                        <img src="../assets/img/client-logo-01.png" alt="">
                    </div>
                
                
                    <div class="header-bottom-logo-container">
                        <img src="../assets/img/client-logo-02.png" alt="">
                    </div>
                
                
                    <div class="header-bottom-logo-container">
                        <img src="../assets/img/client-logo-03.png" alt="">
                    </div>
                
                
                    <div class="header-bottom-logo-container">
                        <img src="../assets/img/client-logo-05.png" alt="">
                    </div>
                
                
                    <div class="header-bottom-logo-container">
                        <img src="../assets/img/client-logo-06.png" alt="">
                    </div>
                
                    <div class="header-bottom-logo-container">
                        <img src="../assets/img/client-logo-07.png" alt="">
                    </div>
                </div>
            </div>
        </section>

    </header>
</template>

<style lang="scss" scoped>
    .header-top {
        .header-top-logo-container {
            width: 150px;
            height: 25px;

            img {
                width: 100%;
                height: 100%;
            }
        }
        input {
           background-color: #F8F8F8 ;
           border: none;
        }
    }

    .header-bottom {
        background-color: #F8F8F8; 

        .header-bottom-image-container {
            width: 450px;
            height: 450px;

            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                
            }
        }

        h1 {
            color: #3F3A64;
        }

        button {
            background-color: #20ad96;
            color: white;
            border: none
        }

        span a{
            color: #20ad96;
        } 

       
    }
    
</style>