<script>
   
    export default {
        name: "HeaderTopComponent",
        data() {
            return {
               navs : [
                    {nav: 'Home'},
                    {nav: 'Pages'},
                    {nav: 'Courses'},
                    {nav: 'Features'},
                    {nav: 'Blog'},
                    {nav: 'Shop'},
                    
               ]
            }
        },
        methods: {

        }
    }
</script>

<template>
    <!-- header top -->
    <section class="header-top">
        <div class="my-container d-flex justify-content-between pt-3 pb-1">
            <div class="header-top-logo-container">
                <img src="../assets/img/dark-logo.png" alt="">
            </div>
            
            <ul >
                <li class="d-inline-block ms-3" v-for="(singlenav, index) in navs" :key="index">
                    <a href="#" class="text-decoration-none text-dark ">
                        {{ singlenav.nav }}
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
</style>