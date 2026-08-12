import React from 'react';

export default function CardSobre({ img, descrição, nome }) {
    return (
        <div className="card-canudo">
            <img src={img} alt={descrição} />
            <p>{nome}</p>
        </div>
    );
}