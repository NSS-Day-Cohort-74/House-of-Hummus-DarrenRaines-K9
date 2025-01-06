export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side").then(res => res.json())

    let salesDivsHTML = ""

    const salesDivsArray = sales.map((purchase) => {

        const purchasePrice = parseInt(purchase.entree.price) + parseInt(purchase.vegetable.price) + parseInt(purchase.side.price);

        return `<section name="orders" value="${purchase.id}">Order #${purchase.id} costs $${purchasePrice}</section>`
    })

    salesDivsHTML = salesDivsArray.join("")

    return salesDivsHTML
}

