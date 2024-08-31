/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createbooks, getbookById, updatebooks } from '../services/api';
interface books {
    name: string;
    author: string;
    description: string;
    price: number;
    quantity: number;
}
function BooksForm() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [books, setbooks] = useState<books>({
        name: '',
        author: '',
        description: '',
        price: 0,
        quantity: 0,
    });
    useEffect(() => {
        if (id) {
            loadbooks();
        }
    }, [id]);
    const loadbooks = async () => {
        try {
            const response = await getbookById(id as string);
            setbooks(response.data);
        } catch (error) {
            console.error("Error loading books data", error);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setbooks({
            ...books,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (id) {
                await updatebooks(id, books);
            } else {
                await createbooks(books);
            }
            navigate('/');
        } catch (error) {
            console.error("Error saving books", error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className='formulario'>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={books.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Author</label>
                    <input
                        type="text"
                        name="author"
                        value={books.author}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        value={books.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={books.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={books.quantity}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Save</button>
            </div>
        </form>
    );
}
export default BooksForm;