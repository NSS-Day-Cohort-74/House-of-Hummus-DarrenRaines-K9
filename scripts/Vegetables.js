import { setVegetableId } from "./transientState.js"

export const Vegetables = async () => {
    const vegetablesObject = await fetch("http://localhost:8088/vegetables").then(res => res.json())

    document.addEventListener("change", handleVegetableChange)

    let vegetableChoicesHTML = "<h2>Vegetables</h2>"

    const vegetablesArray = vegetablesObject.map((vegetable) => { return `<div><input type="radio" name="vegetables" value="${vegetable.id}">${vegetable.type}</div>` })

    vegetableChoicesHTML += vegetablesArray.join("")

    return vegetableChoicesHTML
}

const handleVegetableChange = (changeEvent) => {
    if (changeEvent.target.name === "vegetables") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setVegetableId(convertedToInteger)
    }
}