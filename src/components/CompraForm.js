/* eslint-disable no-undef */
import React, { useState } from 'react'

function CompraForm(props) {
    const [input, setInput] = useState('');
    //funcao responsavel por actualizar o estado a cada vez que o botao é clicado:
    const handleChange = e => {
        setInput(e.target.value);
    }
    //funcao responsavel por obter o valor actual de estado e fazer a submisao:
    const handleSubmit = e => {
        e.preventDefault();

        // props.onSubmit({
        //     id: Math.floor(Math.random()*10000),
        //     text: input
        // });

        setInput('');
    };
    return (
        <form className='compra-form' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Adicionar'
                value={input}
                name='text'
                className='compra-form'
                onChange={handleChange}
            />
            <button className='compra-button'>Adicionar</button>
        </form>
    )
}

export default CompraForm