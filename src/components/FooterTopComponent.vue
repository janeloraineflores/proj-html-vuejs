<script>
   
    export default {
        name: "FooterTopComponent",
        data() {
            return {
               
            }
        },
        methods: {

        }
    }
</script>

<template>

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

</template>

<style lang="scss" scoped>
    .footer-top {

        input {
            background-color: #f8f8f8;
            border: none;
        }
        .spaninput {
            background-color: #20ad96;
            cursor: pointer;
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
    
</style>