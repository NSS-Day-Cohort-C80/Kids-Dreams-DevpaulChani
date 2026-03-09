import { Pairings } from "./Pairings.js"
import { Celebrities } from "./CelebrityList.js"
import { Kids } from "./Kids.js"
import { getCelebrities, getChildren } from "./database.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${Kids()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>

    <article class="assignments">
        <h2>Pairings</h2>
        ${Pairings()}
    </article>
`

mainContainer.innerHTML = applicationHTML

const celebrities = getCelebrities()
const children = getChildren()

// document.addEventListener("click", (clickEvent) => {
//     const itemClicked = clickEvent.target

//     if (itemClicked.dataset.type === "celebrity") {
//         for (const celebrity of celebrities) {
//             if (celebrity.id === parseInt(itemClicked.dataset.id)) {
//                 window.alert(`${celebrity.name} is a ${celebrity.sport} star`)
//             }
//         }
//     }

//     if (itemClicked.dataset.type === "child") {
//         for (const child of children) {
//             if (child.id === parseInt(itemClicked.dataset.id)) {
//                 window.alert(`${child.name}'s wish is: ${child.wish}`)
//             }
//         }
//     }

//     if (itemClicked.dataset.type === "pairing") {
//     const kid = children.find(child => child.id === parseInt(itemClicked.dataset.kidId))
//     const celebrity = celebrities.find(celeb => celeb.id === parseInt(itemClicked.dataset.celebrityId))
//     window.alert(`${kid.name} will be making memories with ${celebrity.name}, a ${celebrity.sport} star, by ${kid.wish}`)
//     }
// })

