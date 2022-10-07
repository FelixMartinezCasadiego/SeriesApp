import axios from 'axios';

export const retriveAllPopularSeries = () => axios.get('https://api.themoviedb.org/3/tv/popular?api_key=c6aeee577586ba38e487b74dfede5deb&language=en-US&page=1').then(({data}) => data);

export const retriveSerieByName = (tv_id) => axios.get(`
https://api.themoviedb.org/3/tv/${tv_id}?api_key=c6aeee577586ba38e487b74dfede5deb&language=en-US`).then(({data}) => data);

export const Pages = (page) => axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=c6aeee577586ba38e487b74dfede5deb&language=en-US&page=${page}`).then(({data}) => data);