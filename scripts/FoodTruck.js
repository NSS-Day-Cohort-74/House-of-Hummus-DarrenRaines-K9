import { Sides } from "./SideDishes.js"
import { Vegetables } from "./Vegetables.js"
import { Entrees } from "./Entrees.js"
import { placeOrder } from "./placeOrderButton.js"
import { Sales } from "./Sales.js"


export const FoodTruck = async () => {
    const entreeHTML = await Entrees()
    const vegetableHTML = await Vegetables()
    const sidesHTML = await Sides()
    const orderButtonHTML = placeOrder()
    const salesHTML = await Sales()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="menu__choices">
           ${entreeHTML}
        </article>
        <article class="menu__choices">
           ${vegetableHTML}
        </article>
        <article class="menu__choices">
           ${sidesHTML}
        </article>
        <article>
            ${orderButtonHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
