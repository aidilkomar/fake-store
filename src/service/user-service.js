export const getAllUsersApi = async () => {
    const promise = await fetch('https://fakestoreapi.com/users');
    return await promise.json();
}

export const getContactByUserApi = async (id) => {
    const promise = await fetch(`https://fakestoreapi.com/users/${id}`);
    const data = await promise.json();
    const {name: {firstname, lastname}, username, phone, email, address:{city,street, zipcode, geolocation:{lat, long}}} = data;
    // console.log(name, email, city, street, zipcode, lat, lng);
    return {firstname, lastname, username, phone, email, city, street, zipcode, lat, long};
}