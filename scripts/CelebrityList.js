import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li 
                    data-id="${star.id}" 
                    data-type="celebrity"
                    data-sport="${star.sport}"
                    id="star--${star.id}">
                    ${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.dataset.type === "celebrity") {
    for (const celebrity of celebrities) {
      if (celebrity.id === parseInt(itemClicked.dataset.id)) {
        window.alert(`${celebrity.name} is a ${celebrity.sport} star`);
      }
    }
  }
});
