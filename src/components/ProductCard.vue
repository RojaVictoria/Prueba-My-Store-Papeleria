<template>
        <div>
            <img class="card-img-top" :src="product.image" alt="Card image cap">
            <div class="card-body py-2 px-0">
                <h5 class="card-title">{{ product.name }}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item px-0">Categoría: {{ product.category }}</li>
                    <li class="list-group-item px-0">Color: {{ product.color }}</li>
                    <li class="list-group-item px-0">Precio: ${{ product.price }}</li>
                    <li class="list-group-item px-0" v-if="product.sale === true">Este producto está con descuento</li>
                    <li class="list-group-item px-0" v-else >Producto sin descuento disponible</li>
                    <li class="list-group-item px-0" v-if="product.sale === true">Descuento: {{ product.discount }}%</li>
                </ul>
                <button href="#" class="button" @click="addProductToCart">Agregar al carrito</button>
            </div>
        </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        product: { type: Object, required: true }
    },
    methods: {
        addProductToCart() {
            this.$store.dispatch("cart/addToCart", this.product);
        },
    },
}
</script>

<style scoped lang="scss">
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