import { counterControlsPanelEl, storagePanelEl, displayEl } from "./refs.js"

let currentCounter = 0

counterControlsPanelEl.addEventListener('click', onCounterControlsPanelClick)
storagePanelEl.addEventListener('click', onStoragePanelClick)

function onCounterControlsPanelClick({ target }) {
    if (target.nodeName !== 'BUTTON') {
        return
    }
    const clickedBtn = target.dataset.action
    switch (clickedBtn) {
        case "increase": currentCounter++
            break
        case "decrease": currentCounter--
            break
        case "reset": currentCounter = 0
            break
        default :
            alert("Unknown value!")
    }
    displayEl.textContent = currentCounter
}

function onStoragePanelClick({ target }) {}

