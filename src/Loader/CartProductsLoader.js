import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loaderProducts = await fetch('products.json');
    const products = await loaderProducts.json();

    // if cart data is in database, you have to use async await.
    const storedCart = getShoppingCart();
    const savedCart = [];

    console.log(storedCart);
    for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id)
            if (addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
    }

    return savedCart;
}

export default cartProductsLoader;