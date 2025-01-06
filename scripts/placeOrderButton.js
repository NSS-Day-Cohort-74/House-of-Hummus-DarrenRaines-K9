import { createPlacedOrder } from "./transientState.js"

const handlePlaceOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        createPlacedOrder()
    }
}

export const placeOrder = () => {

    document.addEventListener("click", handlePlaceOrderClick)

    return "<div><button id='purchase'>Place Order</button></div>"
}