<template>
<div class="container-fluid" style="background-color: black"><br>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner rounded" style="width: 90%; margin: 0 auto">
    <div class="carousel-item active">
      <img src="../assets/img/c1.jpg"  alt="..." width="1920" height="800">
    </div>
    <div class="carousel-item">
      <img src="../assets/img/h1.jpg"  alt="..." width="1920" height="800">
    </div>
    <div class="carousel-item">
      <img src="../assets/img/hh2.jpg" alt="..." width="1920" height="800">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div><br>
</div>

<!-- Owl Carousel -->
<div class="container-fluid my-5" style="background-color:black;">
        <h1 class="text-center fw-bold display-1 mb-5">Inspiración <span class="text-danger">para tu viaje</span></h1>
        <div class="row">
            <div class="col-12 m-auto">
                <div class="owl-carousel owl-theme">
                    <div class="item mb-4">
                        <div class="card border-0 shadow">
                            <img src="../assets/img/c1.jpg" alt="" class="card-img-top">
                            <div class="card-body">
                              <h5 class="card-title">Cerro verde</h5>
                                <p class="card-text">Some quick example text to build.</p>
                                <a href="#" class="btn btn-primary">Ir</a>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="card border-0 shadow">
                            <img src="../assets/img/h1.jpg" alt="" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">Cerro verde</h5>
                                <p class="card-text">Some quick example text to build.</p>
                                <a href="#" class="btn btn-primary">Ir</a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card border-0 shadow">
                            <img src="../assets/img/c1.jpg" alt="" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">Cerro verde</h5>
                                <p class="card-text">Some quick example text to build.</p>
                                <a href="#" class="btn btn-primary">Ir</a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="card border-0 shadow">
                            <img src="../assets/img/hh2.jpg" alt="" class="card-img-top">
                            <div class="card-body">
                              <h5 class="card-title">Cerro verde</h5>
                                <p class="card-text">Some quick example text to build.</p>
                                <a href="#" class="btn btn-primary">Ir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>

export default {
  name: "App",
  mounted() {
    $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

  }
  
}

</script>

<style scoped>
.slide {
  margin-top: 80px;
}
.slide img {
  height: 80vh;
}
   @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

        * {
            font-family: 'Poppins', sans-serif;
        }

        img {
            height: 250px;
        }

        body {
            background: hsl(0, 0, 94%);
        }
</style>