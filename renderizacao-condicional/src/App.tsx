import React, { useState } from 'react';
import './App.css';

// Definindo a interface para os itens da lista
interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
// Componente de Lista que renderiza itens com base em uma condição
//Componente (componente funciona) de list que renderiza itens com base em uma condição e que não apresenta props "não tem nada depois do React.FC"
const ItemList: React.FC = () => {
  const [items] = useState<Item[]>([
    { id: 1, name: 'Apple', price: 2.50, quantity: 10 },
    { id: 2, name: 'Banana', price: 1.50, quantity: 15},
    { id: 3, name: 'Cherry', price: 3.00, quantity: 20},
    { id: 3, name: 'Pineaple', price: 3.00, quantity: 30},
    { id: 3, name: 'Grape', price: 3.00, quantity: 5}
  ])

const [showItems, setShowItems] = useState<boolean>(true);
return (
  <div>
    <h1>Lista de Itens</h1>
    <button onClick={() => setShowItems(!showItems)}>
      {showItems ? 'Esconder Itens' : 'Mostrar Itens'}
    </button>
    {/* Renderização Condicional */}
    {showItems ? (
      <ul>
        {/* Renderizando a lista de itens */}
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    ) : (<p>A lista está oculta</p>
    )}
  </div>
);
}
function App() {
  return (
    <div className='App'>
      <ItemList />
    </div>
  );
}

export default App
