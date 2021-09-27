<template>
    <div>
        <div class="card mb-3" style="max-width: 100%">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img :src="product.image" class="card-image">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text" v-if="product.sale === true">Precio Original: ${{ (product.price).toLocaleString('de-DE') }}</p>
                        <p class="card-text" v-else>Precio: ${{ (product.price).toLocaleString('de-DE') }}</p>
                        <p class="card-text" v-if="product.sale === true">Precio con {{ product.discount }}% de descuento: ${{ parseInt(product.price * (1 - product.discount / 100)).toLocaleString('de-DE') }}</p>
                        <p class="card-text">Total: ${{ parseInt(product.price * (1 - product.discount / 100) * product.amount).toLocaleString('de-DE') }}</p>
                        <div class="counter">
                            <button class="counter-button" @click="$store.dispatch('cart/removeFromCart', product)">-</button>
                            <input class="counter-input" type="text" :value="product.amount" min="1" max="100">
                            <button class="counter-button" @click="$store.dispatch('cart/addToCart', product)">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShoppingCartCard",
    props: {
        product: { type: Object, required: true }
    },
}
</script>

<style scoped>
.counter {
    display: flex;
    justify-content: center;
}
.counter-button {
    background-color: #EEEEEE; 
    border: 1px solid #CCCCCC;
    height: 30px;
    width: 30px;
    transition-duration: 0.4s;
}
.counter-button:hover {
    background-color: #CCCCCC;
}
.counter-input {
    background-color: white; 
    border: 1px solid #CCCCCC;
    height: 30px;
    width: 35px;
    text-align: center;
}
.card-image {
    width: 200px;
    height: 200px;
}
</style>