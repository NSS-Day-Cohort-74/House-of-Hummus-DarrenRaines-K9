const transientState = {

    "entreeId": 0,
    "vegetableId": 0,
    "sideId": 0

}

export const setOrderId = (orderNumber) => {
    transientState.orderId = orderNumber
    console.log(transientState)
}
export const setEntreeId = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(transientState)
}
export const setVegetableId = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    console.log(transientState)
}
export const setSideId = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(transientState)
}


export const createPlacedOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side", postOptions)

    const customEvent = new CustomEvent("newOrderPlaced")

    document.dispatchEvent(customEvent)
}