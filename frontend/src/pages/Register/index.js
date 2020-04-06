import React, { useState } from 'react';

import logoImg from '../../assets/logo.png';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function Register(){
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name, country, password
        };

        try {
            const response = await api.post('users', data);

            alert(`Seu ID de acesso: ${response.data.id}, guarde esse ID pois você fará login com ele.`);
            history.push('/');
        } catch (error) {
            alert('Erro ao criar usuário.');
        }    
    }

    return(

        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="BookStone"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e tenha um controle maior da sua estante.</p>

                    <Link to="">
                        <FiArrowLeft size={16} color="#4BA995"/>
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Seu nome" value={name}
                    onChange={e => setName(e.target.value)}/>
                    <input placeholder="Seu país"
                    value={country}
                    onChange={e => setCountry(e.target.value)}/>
                    <input placeholder="Senha" type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}