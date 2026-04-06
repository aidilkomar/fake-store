export const getAllProductsApi = async () => {
    const promise = await fetch('https://fakestoreapi.com/products');
    return await promise.json();
}

export const getProductByIdApi = async (productId) => {
    const promise = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const {id, title, price, image, rating: {rate, count}, category, description} = await promise.json();
    return {id, title, price, image, rate, category, count, description};
}