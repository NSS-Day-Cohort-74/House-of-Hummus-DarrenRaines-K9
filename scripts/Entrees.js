import { setEntreeId } from "./transientState.js"

export const Entrees = async () => {
    const entreesObject = await fetch("http://localhost:8088/entrees").then(res => res.json())

    document.addEventListener("change", handleEntreeChange)

    let entreeChoicesHTML = "<h2>Entrees</h2>"

    const entreesArray = entreesObject.map((entree) => { return `<div><input type="radio" name="entrees" value="${entree.id}">${entree.name}</div>` })

    entreeChoicesHTML += entreesArray.join("")

    return entreeChoicesHTML
}

const handleEntreeChange = (changeEvent) => {
    if (changeEvent.target.name === "entrees") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setEntreeId(convertedToInteger)

    }
}