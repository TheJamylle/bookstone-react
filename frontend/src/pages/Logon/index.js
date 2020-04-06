import React, { useState } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logo.png';
import booksImg from '../../assets/bookstone.png';
import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogon(e){
        e.preventDefault();

        try {
            const response = await api.post('session', { id, password });
            localStorage.setItem('userId', id);
            localStorage.setItem('userName', response.data.name);

            history.push('/profile');

        } catch (error) {
            alert('Erro');
        }    
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="BookStone"/>

                <form onSubmit={handleLogon}>
                    <input placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}/>
                    <br/>
                    <br/>
                    <input placeholder="Sua senha"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#4BA995"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={booksImg} alt="Books" />
        </div>
    );
}