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

export const removeItemToCart = (cartItems, cartItemtoRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemtoRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemtoRemove.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === cartItemtoRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem 
     )
};