import { counterControlsPanelEl, storagePanelEl, displayEl } from "./refs.js";
import lokalStorageAPI from "./storage.js";

let currentCounter = Number(displayEl.textContent);
const LOCAL_KEY = "LOCAL_COUNTER";

counterControlsPanelEl.addEventListener("click", onCounterControlsPanelClick);
storagePanelEl.addEventListener("click", onStoragePanelClick);
document.addEventListener("DOMContentLoaded", renderPage);

function onCounterControlsPanelClick({ target }) {
  if (target.nodeName !== "BUTTON") {
    return;
  }

  const clickedBtn = target.dataset.action;

  switch (clickedBtn) {
    case "increase":
      currentCounter++;
      break;
    case "decrease":
      currentCounter--;
      break;
    case "reset":
      currentCounter = 0;
      break;
    default:
      alert("Unknown value!");
  }

  displayEl.textContent = currentCounter;
}

function onStoragePanelClick({ target }) {
  if (target.nodeName !== "BUTTON") {
    return;
  }

  const clickedBtn = target.dataset.action;

  if (clickedBtn === "save") {
    lokalStorageAPI.save(LOCAL_KEY, currentCounter);
    return;
  }

  lokalStorageAPI.remove(LOCAL_KEY);
}

function renderPage() {
  const lsData = lokalStorageAPI.load(LOCAL_KEY);

  if (lsData) {
    currentCounter = Number(lsData);
    displayEl.textContent = currentCounter;
  }
}
