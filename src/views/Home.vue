<template>
    <div >
        <header class="hero">
            <h1 class="font-weight-bold display-4">Inicio</h1>
        </header>
        <div class="row p-4">
            <section class="col-12 col-md-4">
                <h2>Búsqueda</h2>
                <form>
                    <div class="form-group">
                        <label for="name">Buscar por nombre, categoría o color:</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="name" 
                            placeholder="Buscar" 
                            :value="$store.state.products.filteredList" 
                            @input="$store.dispatch('products/filterProducts', $event.target.value)">
                    </div>
                </form>
            </section>
            <section class="col-12 col-md-8">
                <h2>Productos</h2>
                <div class="row justify-content-center py-4 px-3 ">
                    <div class="card col-12 col-sm-6 col-md-4 col-lg-3 m-1" v-for="(product, index) of filteredProducts" :key="index">
                        <ProductCard :product="product"/>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
export default {
    components: {
        ProductCard,
    },
    name: "Home",
    computed: {
        filteredProducts(){
            return this.$store.getters['products/filteredProducts']
        } 
    }
};
</script>

<style lang="scss">
body, html {
    margin: 0;
    text-align: center;
}
.hero {
    width: 100vw;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(https://images.unsplash.com/photo-1558478551-08d1b7078b94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.button {
    background-color: white; 
    color: #e4917b; 
    font-weight: 700;
    border: 2px solid #edb5a6;
    padding: 5px 10px;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    transition-duration: 0.4s;
};
.button:hover {
    background-color: #e4917b;
    color: white;
    text-decoration: none;
};
</style>