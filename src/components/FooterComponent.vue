<script>
   import { store } from '../store.js';
    export default {
        name: "FooterComponent",
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
    <!-- FOOTER -->
    <footer>

        <!-- footer-top -->
        <section class="footer-top py-5">
            <div class="my-container">
                <div class="row ">
                    <div class="col-3">
                        <img class="logo01" src="../assets/img/maxcoach-shape-01.png" alt="">
                    </div>

                    <div class="col-6 text-center">
                        <h3 class="fw-bold">
                            Subscribe
                            <span>
                                Newsletter
                            </span>
                        </h3>
                        <p class="text-secondary">
                            Enter your email address to register to our newsletter subscription delivered on a regular basis!
                        </p>
                        <div class="input-group mb-3 my-4">
                            <input class="text-secondary form-control px-3 py-2" type="text"  placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <span class=" spaninput fw-bold text-light input-group-text" id="basic-addon2" >Subscribe</span>
                        </div>
                    </div>

                    <div class="col-3">
                        <img class="logo02" src="../assets/img/maxcoach-shape-02.png" alt="">
                    </div>
                </div>
            </div>
        </section>

        <!-- footer bottom -->
        <section class="footer-bottom py-5">
            <div class="my-container">
                <div class="row">
                    <div class="col-3">
                        <h6 class="fw-bold">
                            Address
                        </h6>
                        <small>
                            382 NE 191st St # 87394 Miami, FL 33179-3899
                        </small><br>
                        <small>
                            +1(305) 547-9909 (9am - 5pm EST, Monday - Friday)
                        </small><br>
                        <small>
                            support@maxcoach.com
                        </small>
                        <div class="mt-2">
                            <span>
                                <i class="bi bi-facebook"></i>
                            </span>
                            <span>
                                <i class="bi bi-twitter"></i>
                            </span>
                            <span>
                                <i class="bi bi-instagram"></i>
                            </span>
                            <span>
                                <i class="bi bi-linkedin"></i>
                            </span>
                        </div>
                    </div>

                    <div class="col-3 offset-3">
                        <h6 class="fw-bold">
                            Explore
                        </h6>
                        <div class="row">
                            <div class="col-6">
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#" class="text-secondary">
                                            Start here
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-secondary">
                                            Blog 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-secondary">
                                            About Us
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-6">
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#" class="text-secondary">
                                            Success story
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-secondary">
                                            Courses 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-secondary">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-3">
                        <h6 class="fw-bold">
                            Information
                        </h6>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#" class="text-secondary">
                                     Membership
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-secondary">
                                    Purchase Guide 
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-secondary">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-secondary">
                                    Terms of services
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col text-center">
                        <small class="text-secondary">
                            <i class="bi bi-c-circle"></i> 2020 Maxcoach. All Rights Reserved
                        </small>
                    </div>
                </div>
            </div>
        </section>


    </footer>
</template>

<style lang="scss" scoped>

    .footer-top {

        input {
            background-color: #f8f8f8;
            border: none;
        }
        .spaninput {
            background-color: #20ad96;;
        }

        .logo01 {
            width: 100px;
            position: relative;
            top: 50px;
        }

        .logo02 {
            width: 50px;
            position: relative;
            top: 50px;
            left: 50px;
        }
       
    }

    .footer-bottom {
        background-color: #F5F7FA;

        span {
            color: rgba(0, 0, 0, 0.249);
            margin-right: 20px;
            font-size: 20px;
        }

        a{ 
            text-decoration: none;
            
        }

    
    }
</style>