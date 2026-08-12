import React from 'react';
export default function CardCompra ({ img, classificacao, nome, preco, quantidade, onAdicionar }) {
    return (
        <section className="item">
            <img src={img} alt={nome} />
            <p className="classificação">{classificacao}</p>
            <p className="nome-produto">{nome}</p>
            <div className="avaliacao">
                <span className="estrelas">★★★★★</span>
                <button className="botãomais" onClick={onAdicionar}>
                    <img src="imagens_canoodles/Botão +.png"
                        alt="Botão circular azul com um símbolo de mais branco no meio" />
                </button>
            </div>
            <p className="preço">R${preco.toFixed(2).replace('.', ',')}</p>
        </section>
    )
}