import React, { useState } from 'react'
import CompraForm from './CompraForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Compra({ compras, completeCompra, removeCompra, updateCompra }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateCompra(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };


    if (edit.id) {
        return <CompraForm edit={edit} onSubmit={submitUpdate} />;
    }

    return compras.map((compra, index) => (
        <div
            className={compra.isComplete ? 'compra-row complete' : 'compra-row'}
            key={index}
        >
            <div key={compra.id} onClick={() => completeCompra(compra.id)}>
                {compra.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => removeCompra(compra.id)}
                    className='delete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: compra.id, value: compra.text })}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
}

export default Compra