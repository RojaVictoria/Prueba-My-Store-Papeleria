export const productsModule = {
    namespaced: true,
    state: {
        allProducts: [
            {name: 'Planner', stock: '20', category: 'Cuadernos', color: 'Rosado', price: 15000, sale: true, discount: 30, image: 'https://cdn.shopify.com/s/files/1/0345/0513/0029/products/867655_5_planner_600x.jpg?v=1584556266'},
            {name: 'Brush pen', stock: '10', category: 'Lápices', color: 'Rojo', price: 20000, sale: false, discount: 0, image: 'https://www.artenostro.cl/wp-content/uploads/2021/05/tom_56219_1_1.jpg'},
            {name: 'Tijeras', stock: '50', category: 'Accesorios', color: 'Amarillo', price: 3000, sale: false, discount: 0, image: 'https://tiendatoois.cl/wp-content/uploads/2020/06/tijera-princesas-3-min.png'},
            {name: 'Tiralineas', stock: '30', category: 'Lápices', color: 'Negro', price: 12000, sale: true, discount: 20, image: 'https://cdnx.jumpseller.com/dibu/image/9455556/resize/570/765?1614548543'},
            {name: 'Libreta', stock: '40', category: 'Cuadernos', color: 'Azul', price: 8000, sale: false, discount: 0, image: 'https://cdn.shopify.com/s/files/1/0345/0513/0029/products/867649_6_libreta_de_viaje.jpg?v=1597249190'},
            {name: 'Carpeta', stock: '60', category: 'Accesorios', color: 'Verde', price: 5000, sale: true, discount: 50, image: 'https://muymolon.com/wp-content/uploads/2014/07/mrwonderful_carp-anilla-02_carpeta-anilla-hojas-tu-puedes-con-todo-2-2.jpg'},    
        ],
        filteredList: '',
    },
    getters: {
        filteredProducts(state) {
            if (state.filteredList === '') {
              return state.allProducts;
            } else {
                return state.allProducts.filter((product) =>
                    product.name.toLowerCase().includes(state.filteredList.toLowerCase()) ||
                    product.category.toLowerCase().includes(state.filteredList.toLowerCase()) ||
                    product.color.toLowerCase().includes(state.filteredList.toLowerCase())
                )
            }
        },
    },
    mutations: {
        FILTER_PRODUCTS(state, newFilter) {
            state.filteredList = newFilter
        },
        ADD_NEW_PRODUCT(state, newProduct) {
            state.allProducts.push(newProduct)
        }
    },
    actions: {
        filterProducts(context, newFilter) {
            context.commit('FILTER_PRODUCTS', newFilter)
        },
        addNewProduct(context, product) {
            context.commit('ADD_NEW_PRODUCT', product)
        },
    },
};