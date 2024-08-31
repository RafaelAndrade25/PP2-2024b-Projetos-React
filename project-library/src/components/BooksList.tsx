import { useEffect, useState } from 'react';
import { getbooks, deletebooks } from '../services/api';
import { Link } from 'react-router-dom';
interface books {
    id: string;
    name: string;
    author: string;
    description: string;
    price: number;
    quantity: number;
}
function BooksList() {
    const [books, setbooks] = useState<books[]>([]);
    useEffect(() => {
        loadbooks();
    }, []);
    const loadbooks = async () => {
        const response = await getbooks();
        setbooks(response.data);
    };
    const handleDelete = async (id: string) => {
        await deletebooks(id);
        loadbooks();
    };
    return (
        <div>
            <h1>books List</h1>
            <Link to="/add">Add books</Link>
            <ul>
                {books.map((books) => (
                    <li key={books.id}>
                        {books.name} | ${books.price} | {books.quantity} units |
                        <button><Link to={`/edit/${books.id}`}> Edit </Link></button>
                        <button onClick={() => handleDelete(books.id)}> Delete </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default BooksList;