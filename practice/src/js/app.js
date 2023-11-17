// Імпорт API
import { UnsplashAPI } from './UnsplashAPI';
// Імпорт tui
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// Імпорт hbs
import createGalleryCards from '../templates/gallery-card.hbs';
// Імпорт notiflix
import { Report } from 'notiflix/build/notiflix-report-aio';

// Refs
const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

// Робимо екземпляр з API
const unsplashAPI = new UnsplashAPI();

// Обовязково, щоб такий же id був у html
const container = document.querySelector('#tui-pagination-container');
// Налаштування з бібліотеки
const options = {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
};

// Підключаємо пагінацію
const paganation = new Pagination(container, options);

// Для відображення поточної сторінки пагінації
const page = paganation.getCurrentPage();
// console.log(page)
/**
  |============================
  | //! Стартове відображення
  |============================
*/
// Фун-ція для відображення при загрузці сторінки
const onRenderPage = async () => {
  try {
    // робимо запит
    const response = await unsplashAPI.getPopularPhotos();

    // Перевірка, якщо нічого не повернулось приховуємо пагінацію

    // Після відповіді відмальовуємо розмітку
    galleryEl.innerHTML = createGalleryCards(response.data.results);

    // Вказуємо скільки кнопок пагінації відмалювати
    // console.log(response.data.total)
    paganation.reset(response.data.total);
    // Якщо все добре, додаємо пагінацію
    container.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

// Метод для відображення на яку кнопку натиснули. Подальша підгрузка данних за допомгою пагінації
const createPopularPaganation = async event => {
  // console.log(event.page)
  const currentPage = event.page;
  unsplashAPI.page = currentPage;
  try {
    // робимо запит
    const response = await unsplashAPI.getPopularPhotos();

    // Після відповіді відмальовуємо розмітку
    galleryEl.innerHTML = createGalleryCards(response.data.results);

    // Вказуємо скільки кнопок пагінації відмалювати
    // console.log(response.data.total)
  } catch (err) {
    console.log(err);
  }
};
// Додаємо слухача на пагінацію
paganation.on('afterMove', createPopularPaganation);
// Запускаємо фун-ію
document.addEventListener('DOMContentLoaded', onRenderPage);
/**
  |============================
  | //! Пошук по формі
  |============================
*/

// Прописуємо повторно функцію для п aаганіції для інших запросів
const createPhotosByQueryPagination = async event => {
  const currentPage = event.page;
  unsplashAPI.page = currentPage;
  try {
    // робимо запит
    const response = await unsplashAPI.fetchPhotosByQuery();

    // Після відповіді відмальовуємо розмітку
    galleryEl.innerHTML = createGalleryCards(response.data.results);

    // Вказуємо скільки кнопок пагінації відмалювати
    // console.log(response.data.total)
  } catch (err) {
    console.log(err);
  }
};

// Фун-ція для пошуку з інпуту
const onSearchFormSubmit = async event => {
  event.preventDefault();

  // Достаємо значення інпуту
  const searchQuery =
    event.currentTarget.elements['user-search-query'].value.trim();
  unsplashAPI.page = 1;

  // Додаємо через сетер
  unsplashAPI.query = searchQuery;

  // Робимо перевірку на пустий інпут
  if (!searchQuery) {
    return Report.warning(
      'Empty query!',
      'To search and display, enter your query in the search field....'
    );
  }

  // Відписуємось від попередніх пагінацій
  paganation.off('afterMove', createPopularPaganation);

  // Робимо запрос по ключовому слову
  try {
    const response = await unsplashAPI.fetchPhotosByQuery();

    // Перевірка на невірний ввод!
    if (response.data.results.length === 0) {
      // Чистимо розмітку
      galleryEl.innerHTML = '';
      // Прибираємо пагінацію
      container.classList.add('is-hidden');
      // Чистимо інпут
      searchFormEl.reset();
      // Виводимо повідомлення
      return Report.failure(
        `Your search: "${searchQuery}"`,
        'Nothing was found for your search!'
      );
    }

    // Робимо ще одну перевірку, якщо знайдено картинок, меньше ніж відмальвуємо на сторінці
    if (response.data.results.length < options.itemsPerPage) {
      // Прячемо пагінацію
      container.classList.add('is-hidden');

      // Відмальвуємо розмітку
      galleryEl.innerHTML = createGalleryCards(response.data.results);
      return;
    }

    // Оновлюємо пагінацію, щоб при новому запросі, відображалась з 1 сторінки
    paganation.reset(response.data.total);

    // Додаємо відображення пагінації
    container.classList.remove('is-hidden');

    // Відмальовуємо розмітку
    galleryEl.innerHTML = createGalleryCards(response.data.results);

    // Робимо підписку на нову пагінацію, для подальших запросів
    paganation.on('afterMove', createPhotosByQueryPagination);
  } catch (err) {
    console.log(err);
  }
};

// Додаємо слухача на форму, наш інпут!
searchFormEl.addEventListener('submit', onSearchFormSubmit);

/**
  |============================
  //! Підключення теми!
  |============================
*/
import onCheckboxClick from './isChangeTheme';

const checkBoxEl = document.querySelector('#theme-switch-toggle');
checkBoxEl.addEventListener('change', onCheckboxClick);
