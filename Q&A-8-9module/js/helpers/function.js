import { bodyEl, checkBoxEl } from "../refs.js";

function changeDarkTheme() {
    bodyEl.classList.replace('light', 'dark');
    checkBoxEl.checked = true;
};

function changeLightTheme() {
    bodyEl.classList.replace('dark', 'light');
    checkBoxEl.checked = false;
};



export {changeDarkTheme, changeLightTheme};