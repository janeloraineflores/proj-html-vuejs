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
            <div class="my-container d-flex justify-content-between pt-4 pb-2">
                <div class="header-logo-container">
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
                        <input class="py-2 ps-3" type="text" placeholder="Search...." >  
                    </li>
                </ul>
            </div>
        </section>

    </header>
</template>

<style lang="scss" scoped>
    .header-logo-container {
        width: 150px;
        height: 30px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .header-top {

        input {
           background-color: #F5F7FA; ;
           border: none;
        }
    }
    
</style>