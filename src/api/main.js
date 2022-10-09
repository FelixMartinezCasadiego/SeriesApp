import axios from 'axios';

/* Retrive Series */

export const retriveAllPopularSeries = () => axios.get('https://api.themoviedb.org/3/tv/popular?api_key=c6aeee577586ba38e487b74dfede5deb&language=en-US&page=1').then(({data}) => data);

export const retriveAllTopRateSeries = () => axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=c6aeee577586ba38e487b74dfede5deb&language=en-US&page=1').then(({data}) => data);

export const retriveAllOnAir = () => axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=c6aeee577586ba38e487b74dfede5deb&language=en-US&page=1').then(({data}) => data);

/* Serie details */

export const retriveSerieByName = (tv_id) => axios.get(`
https://api.themoviedb.org/3/tv/${tv_id}?api_key=c6aeee577586ba38e487b74dfede5deb&language=en-US`).then(({data}) => data);

/* Pagination */

export const Pages = (page) => axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=c6aeee577586ba38e487b74dfede5deb&language=en-US&page=${page}`).then(({data}) => data);

export const pagesTopRatedSeries = (page) => axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=c6aeee577586ba38e487b74dfede5deb&language=en-US&page=${page}`).then(({data}) => data);

export const pagesAiringToday = (page) => axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=c6aeee577586ba38e487b74dfede5deb&language=en-US&page=${page}`).then(({data}) => data);

