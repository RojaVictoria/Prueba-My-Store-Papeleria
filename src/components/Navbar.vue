<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 px-5">
        <a class="navbar-brand" href="#">Papelería</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                     <router-link class="nav-link" :to="{name: 'Home'}">INICIO</router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" :to="{name: 'Cart'}">CARRITO</router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" :to="{name: 'NewProduct'}">NUEVO PRODUCTO</router-link>
                </li>
            </ul>
        </div>

    </nav>
  </div>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style scoped>
.navbar-brand {
    font-size: 25px;
}
.navbar-nav {
    font-size: 20px
}
</style>