import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

export default function Profile(){
    const [books, setBooks] = useState([]);

    const history = useHistory();
    const userId = localStorage.getItem('userId');

    const userName = localStorage.getItem('userName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userId
            }
        }).then(response => {
            setBooks(response.data);
        })
    }, []);

    async function handleDeleteBook(isbn) {
        try {
            await api.delete(`books/${isbn}`, {
                headers: {
                    Authorization: userId
                }
            });

            setBooks(books.filter(book => book.isbn != isbn));
        } catch (error) {
            alert('Erro ao deletar livro.');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="BookStone"/>
                <span>Bem-vinda, {userName}</span>
                <Link className="button" to="/books/new">Cadastrar novo livro</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#4BA995"/>
                </button>
            </header>
            <h1>Seus livros cadastrados</h1>

            <ul>
                {books.map(book => (
                <li key={book.isbn}>
                    <strong>TÍTULO: </strong>
                    <p>{book.title}</p>
                    <strong>AUTOR: </strong>
                    <p>{book.autor}</p>
                    <strong>EDITORA: </strong>
                    <p>{book.editora}</p>
                    <button onClick={() => handleDeleteBook(book.isbn)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}