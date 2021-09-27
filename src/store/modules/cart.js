export const cartModule = {
    namespaced: true,
    state: {
        allProducts: [],
    },
    getters: {
        totalShoppingCart(state) {
            return state.allProducts.reduce((accumulator, product) => {
                accumulator += product.price * (1 - product.discount / 100) * product.amount;
                return accumulator;
            }, 0);
        },
    },
    mutations: {
        ADD_TO_CART(state, newProduct) {
            state.allProducts.push(newProduct)
        },
        ADD_AMOUNT(state, productIndex) {
            state.allProducts[productIndex].amount++;
        },
        REMOVE_FROM_CART(state, productIndex) {
            state.allProducts.splice(productIndex, 1);
        },
        REDUCE_AMOUNT(state, productIndex) {
            state.allProducts[productIndex].amount--;
        },
        ERASE_CART(state) {
            state.allProducts = []
        },
    },
    actions: {
        addToCart(context, product) {        
            const foundProductIndex = context.state.allProducts.findIndex(
                (productInCart) => productInCart.name === product.name
            );
            if (foundProductIndex === -1) {
            // eslint-disable-next-line no-unused-vars
                const { stock, ...newProduct } = product
                context.commit('ADD_TO_CART', { ...newProduct, amount: 1 });
            } else {
                context.commit("ADD_AMOUNT", foundProductIndex);
            }
        },
        removeFromCart(context, product) {
            const foundProductIndex = context.state.allProducts.findIndex(
                (productInCart) => productInCart.name === product.name
            );
            if (foundProductIndex >= 0) {
                if (context.state.allProducts[foundProductIndex].amount > 1) {
                    context.commit("REDUCE_AMOUNT", foundProductIndex);
                } else {
                    context.commit("REMOVE_FROM_CART", foundProductIndex);
                }
            }
        },
        buyProducts(context) {
            return new Promise ((resolve)=>{
                setTimeout(()=>{
                    context.commit('ERASE_CART')
                    resolve()
                }, 2000)

            })
        },
    },
};