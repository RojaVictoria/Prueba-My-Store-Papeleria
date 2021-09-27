<template>
    <div >
        <header class="hero">
            <h1 class="font-weight-bold display-4">Nuevo Producto</h1>
        </header>
        <section class="mx-5 my-3">
            <h2>Agregar nuevo producto</h2>
            <form @submit.prevent="addProduct">
                <div class="form-group">
                    <label for="name">Nombre</label>
                    <input type="text" class="form-control" id="name" placeholder="Ingrese un nombre" required v-model="product.name">
                </div>
                <div class="form-group">
                    <label for="category">Categoría</label>
                    <select class="form-control" id="category" required v-model="product.category">
                        <option :value="null" disabled selected>Elija una categoría</option>
                        <option value="Cuadernos">Cuadernos</option>
                        <option value="Lápices">Lápices</option>
                        <option value="Accesorios">Accesorios</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="color">Color</label>
                    <input type="text" class="form-control" id="color" placeholder="Ingrese un color" required v-model="product.color">
                </div>
                <div class="form-group">
                    <label for="image">URL de la imagen</label>
                    <input type="text" class="form-control" id="image" placeholder="Ingrese una URL" required v-model="product.image"/>
                </div>
                <div class="form-group">
                    <label for="price">Precio</label>
                    <input type="number" class="form-control" id="price" placeholder="Ingrese un precio" min="100" max="99999" step="100" required v-model.number="product.price"/>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="sale" id="sale" :value="true" v-model="product.sale">
                    <label class="form-check-label" for="sale">Con descuento</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="sale" id="sale" :value="false" v-model="product.sale">
                    <label class="form-check-label" for="sale">Sin descuento</label>
                </div>
                <div class="form-group" v-if="product.sale">
                    <label for="discount">Descuento (%)</label>
                    <input type="number" class="form-control" id="discount" placeholder="Ingrese un descuento" min="0" max="99" step="1" required v-model.number="product.discount"/>
                </div>
                <br>
                <button type="submit" class="button">Agregar Producto</button>
            </form>
        </section>
    </div>
</template>

<script>
export default {
    name: "NewProduct",
    data: () => ({
        product: {
            name: null,
            category: null,
            color: null,
            price: null,
            sale: false,
            discount: null,
            image: ''
        }
    }),
    methods: {
        addProduct() {
            this.$store.dispatch('products/addNewProduct', { ...this.product })
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
body, html {
    margin: 0;
}
.hero {
    width: 100vw;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(https://images.unsplash.com/photo-1529320734811-3f529679d12a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>