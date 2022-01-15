export const addItemToCart = (cartItems, cartItemtoAdd) => {
    const existingCartItem = cartItems.find(
        cartItems => cartItems.id === cartItemtoAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemtoAdd.id
             ? { ...cartItem, quantity: cartItem.quantity + 1 }
             : cartItem 
            )
    }

    return [...cartItems, { ...cartItemtoAdd, quantity: 1 }]
};