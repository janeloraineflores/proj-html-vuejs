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
                    <li class="d-inline-block ms-3">
                        <a href="#" class="text-decoration-none text-dark ">
                            Home 
                            <span class="chevron">
                                <i class="bi bi-chevron-down"></i>
                            </span>
                        </a>
                    </li>
                    <li class="d-inline-block ms-3">
                        <a href="#" class="text-decoration-none text-dark">
                            Pages
                            <span class="chevron">
                                <i class="bi bi-chevron-down"></i>
                            </span>
                        </a>
                    </li>
                    <li class="d-inline-block ms-3">
                        <a href="#" class="text-decoration-none text-dark">
                            Courses
                            <span class="chevron">
                                <i class="bi bi-chevron-down"></i>
                            </span>
                        </a>
                    </li>
                    <li class="d-inline-block ms-3">
                        <a href="#" class="text-decoration-none text-dark">
                            Features
                            <span class="chevron">
                                <i class="bi bi-chevron-down"></i>
                            </span>
                        </a>
                    </li>
                    <li class="d-inline-block ms-3">
                        <a href="#" class="text-decoration-none text-dark">
                            Blog
                            <span class="chevron">
                                <i class="bi bi-chevron-down"></i>
                            </span>
                        </a>
                    </li>
                    <li class="d-inline-block ms-3">
                        <a href="#" class="text-decoration-none text-dark">
                            Shop
                            <span class="chevron">
                                <i class="bi bi-chevron-down"></i>
                            </span>
                        </a>
                    </li>
                    <li class="d-inline-block ms-3">
                        <a href="#" class="text-decoration-none text-dark">
                            <i class="bi bi-person-circle"></i>
                        </a>
                    </li>
                    <li class="d-inline-block ms-3">
                        <input class="py-2 ps-3 rounded-2" type="text" placeholder="Search...." >  
                        <span class="magnifying-glass ">
                            <i class="bi bi-search"></i>
                        </span>
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
                            <span class="ms-2 text-light">
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
                        <img class="logo08" src="../assets/img/maxcoach-shape-08.png" alt="">
                        <img class="logo07" src="../assets/img/maxcoach-shape-07-100x100.png" alt="">
                        <img class="logo02" src="../assets/img/maxcoach-shape-02.png" alt="">
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

        .chevron {
            font-size: 7px;
            color: black;

        }

        .magnifying-glass {
            position: relative;
            right: 25px;
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