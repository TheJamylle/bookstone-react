import React, { useState } from 'react';
import logoImg from '../../assets/logo.png';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function NewBook(){
    const [title, setTitle] = useState('');
    const [autor, setAutor] = useState('');
    const [editora, setEditora] = useState('');

    const history = useHistory();

    const userId = localStorage.getItem('userId');

    async function handleNew(e){
        e.preventDefault();

        const data = {
            title, autor, editora
        };

        try {
            await api.post('books', data, {
                headers: {
                    Authorization: userId
                }
            });

            history.push('/profile');
        } catch (error) {
            alert('Erro');
        }

        
    }
    return (
        <div className="new-book-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="BookStone"/>
                    <h1>Cadastrar livro</h1>
                    <p>Coloque os principais dados do seu livro.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#4BA995"/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNew}>
                    <input 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Título do livro" />
                    <input 
                    value={autor}
                    onChange={e => setAutor(e.target.value)}
                    placeholder="Autor" />
                    <input 
                    value={editora}
                    onChange={e => setEditora(e.target.value)}
                    placeholder="Editora" />

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}