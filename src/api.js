import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:4000/meme',
});
export const insertMeme = payload => api.post('/meme', payload);
export const getAllMemes = () => api.get('/meme');
const apis = {
    insertMeme,
    getAllMemes,
}
export default apis;

