// https://unsplash.com/documentation#search-photos - API
// https://www.npmjs.com/package/tui-pagination - Бібліотека "tui-pagination"

import axios from 'axios';

export class UnsplashAPI {
  // Приватні властивості
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
  #query = '';

  constructor() {
    this.page = 1;
    this.#query = null;
  }

  // Запит для відображення картинок, при загрузці сторінки
  getPopularPhotos() {
    return axios.get(`${this.#BASE_URL}/search/photos`, {
      params: {
        query: 'random',
        page: this.page,
        per_page: 12,
        client_id: this.#API_KEY,
      },
    });
  }

  // Запит картинок по ключовому слову
  fetchPhotosByQuery() {
    return axios.get(`${this.#BASE_URL}/search/photos`, {
      params: {
        query: this.#query,
        page: this.page,
        per_page: 12,
        client_id: this.#API_KEY,
      },
    });
  }

  // Сетер для запису searchQuery
  set query(newQuery) {
    this.#query = newQuery;
  }
}
