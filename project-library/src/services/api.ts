/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3001'
});
export const getbooks = () => api.get('/Livros');
export const getbookById = (id: string) => api.get(`/Livros/${id}`);
export const createbooks = (books: any) => api.post('/Livros', books);
export const updatebooks = (id: string, books: any) => api.put(`/Livros/${id}`, books);
export const deletebooks = (id: string) => api.delete(`/Livros/${id}`);