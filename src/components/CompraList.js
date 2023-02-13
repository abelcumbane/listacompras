import React, { useState } from 'react'
import CompraForm from './CompraForm'

function CompraList() {
    const [compras, setCompras] = useState([]);

    const addCompra = compra => {
        if (!compra.text || /^\s*$/.test(compra.text)) {
            return;
        }
        const newCompras = [compra, ...compras];

        setCompras(newCompras);
    };
    return (
        <div>
            <h1>Lista de compras: </h1>
            <CompraForm onSubmit={addCompra} />
        </div>
    )
}

export default CompraList