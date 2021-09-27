<template>
    <div>
        <header class="hero">
            <h1 class="font-weight-bold display-4">Carrito</h1>
        </header>
        <div class="row m-4 content" v-if="$store.state.cart.allProducts.length > 0">
            <section class="col-12 col-md-8">
                <h2>Carrito de compras</h2>
                    <ShoppingCartCard v-for="(product, index) in $store.state.cart.allProducts" :key="index" :product="product"/>
            </section>
            <section class="col-12 col-md-4">
                <h2>Total</h2>
                <div class="py-3">
                    <p>Monto total a pagar: ${{ ($store.getters['cart/totalShoppingCart']).toLocaleString('de-DE') }} </p>
                    <button class="button" @click="buyCart">Comprar</button>
                </div>
            </section>
        </div>
        <div v-else class="m-5">
            <h3 class="p-3">No hay productos en tu carro.</h3>
            <router-link to="/" tag="button" class="button">Seguir comprando</router-link>
        </div>
    </div>
</template>

<script>
import ShoppingCartCard from '../components/ShoppingCartCard.vue';
export default {
    components: {
        ShoppingCartCard,
    },
    name: "Cart",
    methods: {
        async buyCart () {
            await this.$store.dispatch('cart/buyProducts')
            alert("¡Muchas gracias por su compra!")
            this.$router.push('/')
        }
    }
};
</script>

<style lang="scss" scoped>
body, html {
    margin: 0;
}
.hero {
    width: 100vw;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(https://images.unsplash.com/photo-1522836924445-4478bdeb860c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
};
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