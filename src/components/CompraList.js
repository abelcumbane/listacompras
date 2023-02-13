import React, { useState } from 'react'
import CompraForm from './CompraForm'
import Compra from './Compra'

function CompraList() {
    const [compras, setCompras] = useState([]);

    const addCompra = compra => {
        if (!compra.text || /^\s*$/.test(compra.text)) {
            return;
        }
        const newCompras = [compra, ...compras];

        setCompras(newCompras);
    };

    const removeCompra = id => {
        const removeArr = [...compras].filter(compra => compra.id !== id);
        setCompras(removeArr);
    }

    const completeCompra = id => {
        let updatedCompras = compras && compras.map(compra => {
            if (compra.id === id) {
                compra.isComplete = !compra.isComplete;
            }
            return compra;
        });
        setCompras(updatedCompras);
    }
    return (
        <div>
            <h1>Lista de compras: </h1>
            <CompraForm onSubmit={addCompra} />
            <Compra compras={compras} completeCompra={completeCompra} removeCompra={removeCompra} />
        </div>
    )
}

export default CompraList