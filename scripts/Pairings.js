import { getChildren, getCelebrities} from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebrity = null

    for (const currentCelebrity of celebrityArray) {
        if (currentCelebrity.id === kidObject.celebrityId) {
            celebrity = currentCelebrity
        }
    }

    return celebrity
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li
                data-type="pairing"
                data-kid-id="${kid.id}"
                data-celebrity-id="${kidsStar.id}">
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

