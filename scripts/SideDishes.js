import { setSideId } from "./transientState.js"

export const Sides = async () => {
    const sidesObject = await fetch("http://localhost:8088/sides").then(res => res.json())

    document.addEventListener("change", handleSideChange)

    let sideChoicesHTML = "<h2>Sides</h2>"

    const sidesArray = sidesObject.map((side) => { return `<div><input type="radio" name="sides" value="${side.id}">${side.title}</div>` })

    sideChoicesHTML += sidesArray.join("")

    return sideChoicesHTML
}

const handleSideChange = (changeEvent) => {
    if (changeEvent.target.name === "sides") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSideId(convertedToInteger)
    }
}