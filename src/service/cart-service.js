export const getAllOrdersByUserIdApi = async (userId) => {
    const promise = await fetch(`https://fakestoreapi.com/carts/user/${userId}`);
    return await promise.json();
}