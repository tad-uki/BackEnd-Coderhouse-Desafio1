class ProductManager{
    constructor(){
        this.products = [];
    };

    addProduct(newProd){
        let check = this.products.some((product) => product.code === newProd.code);
        if(!newProd.title || !newProd.description || !newProd.price || !newProd.thumbnail || !newProd.code || !newProd.stock ){
            console.log("Por favor completar los detalles del producto");
        }
        else if(check){
            console.log("Este producto ya se encuentra en la lista");
        }
        else{
            newProd.id = this.products.length;
            this.products.push(newProd);
        };
    };

    getProducts(){
        return this.products;
    };

    getProductById(id){
        let product = this.products.find((p) => p.id === id);
        if(!product){
            console.log("Este producto no se encuentra en la lista");
        }
        else{
            return product;
        };
    };

};

const prodManager = new ProductManager();

console.log(prodManager.getProducts());

const product1 = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail:"Sin imagen",
    code: "abc123",
    stock: 25,
};

prodManager.addProduct(product1);

console.log(prodManager.getProducts());



const product2 = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail:"Sin imagen",
    code: "abc123",
    stock: 25,
};

prodManager.addProduct(product2);

prodManager.getProductById(1);


