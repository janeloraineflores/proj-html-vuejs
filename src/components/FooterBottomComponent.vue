<script>
   
    export default {
        name: "FooterBottomComponent",
        data() {
            return {
            }
        },
        methods: {

        }
    }
</script>

<template>

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
                                        <a href="#" class="prova">
                                            Start here
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" >
                                            Blog 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" >
                                            About Us
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-6">
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#" >
                                            Success story
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" >
                                            Courses 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" >
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
                                <a href="#">
                                     Membership
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Purchase Guide 
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#">
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

</template>

<style lang="scss" scoped>
    .footer-bottom {
        background-color: #F5F7FA;

        span {
            color: rgba(0, 0, 0, 0.249);
            margin-right: 20px;
            font-size: 20px;
            cursor: pointer;
        }

        span:hover {
            color: #20ad96;
        }

        a{ 
            text-decoration: none;
            color: rgba(0, 0, 0, 0.499);
            
        }

        a:hover {
            color:#20ad96;
            font-weight: bold;
        }

    }

</style>