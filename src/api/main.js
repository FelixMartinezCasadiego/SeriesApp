import axios from 'axios';

/* Retrive Series */

export const retriveSeries = (categorySeries, page = 1) => axios.get(`https://api.themoviedb.org/3/tv/${categorySeries}?api_key=c6aeee577586ba38e487b74dfede5deb&language=en-US&page=${page}`).then(({data}) => data);

/* Serie details */

export const retriveSerieById = (serieId) => axios.get(`
https://api.themoviedb.org/3/tv/${serieId}?api_key=c6aeee577586ba38e487b74dfede5deb&language=en-US`).then(({data}) => data);

/* Search */

export const searchSeries = ( page, search ) => axios.get(`https://api.themoviedb.org/3/search/tv?api_key=c6aeee577586ba38e487b74dfede5deb&language=en-US&page=${page}&include_adult=false&query=${search}`); 