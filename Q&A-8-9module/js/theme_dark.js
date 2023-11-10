import { checkBoxEl } from "./refs.js";
import localStorageApi from "./storage.js";
import { changeDarkTheme, changeLightTheme } from "./helpers/function.js";

const STORAGE_THEME = "theme";
// light theme is default, that's why themeSwitcher is unchecked
// checkBoxEl.checked = false;

checkBoxEl.addEventListener("click", onCheckBoxChange);
document.addEventListener("DOMContentLoaded", setThemeOnLoad);

function onCheckBoxChange() {
  if (checkBoxEl.checked) {
    changeDarkTheme();
    localStorageApi.save(STORAGE_THEME, "dark");
  } else {
    changeLightTheme();
    localStorageApi.save(STORAGE_THEME, "light");
  }

  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class
}

function setThemeOnLoad() {
  const lSData = localStorageApi.load(STORAGE_THEME);
  lSData === "dark" ? changeDarkTheme() : changeLightTheme();

  // variant 2
  // if (lSData === 'dark') {
  //     changeDarkTheme();

  // } else {
  //     changeLightTheme();

  // }
  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // don't forget about themeSwitcher, if current theme is dark, it should be checked
}
