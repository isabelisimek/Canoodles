import React, { useState } from 'react';
import { CARD_COMPRA } from './CARD_COMPRA.js';

export default function Carrinho({ quantidades, onFechar, onAdicionar, onRemover, onLimpar }) {
    const itensNoCarrinho = CARD_COMPRA.filter((produto) => quantidades[produto.id] > 0);
    const totalPreco = itensNoCarrinho.reduce(
        (soma, produto) => soma + produto.preco * quantidades[produto.id],
        0
    );
    const [mensagemCompra, setMensagemCompra] = useState('');

    function efetuarCompra() {
        setMensagemCompra('Compra realizada!');
        onLimpar();

        setTimeout(() => {
            setMensagemCompra('');
        }, 3500);
    }

    return (
        <div className="carrinho-overlay" onClick={onFechar}>
            <div className="carrinho-painel" onClick={(e) => e.stopPropagation()}>
                <div className="carrinho-cabecalho">
                    <h2>Seu carrinho</h2>
                    <button className="carrinho-fechar" onClick={onFechar}>×</button>
                </div>

                {mensagemCompra && (
                    <p className="carrinho-sucesso">{mensagemCompra}</p>
                )}

                {itensNoCarrinho.length === 0 ? (
                    <p id='vazio'>Seu carrinho está vazio.</p>
                ) : (
                    <>
                        <ul className="carrinho-lista">
                            {itensNoCarrinho.map((produto) => (
                                <li key={produto.id} className="carrinho-item">
                                    <img src={produto.img} alt={produto.nome} />
                                    <div>
                                        <p className="carrinho-nome">{produto.nome}</p>
                                        <div className="carrinho-qtd-controle">
                                            <button
                                                type="button"
                                                className="carrinho-qtd-botao"
                                                onClick={() => onRemover(produto.id)}
                                            >
                                                −
                                            </button>
                                            <span>{quantidades[produto.id]}</span>
                                            <button
                                                type="button"
                                                className="carrinho-qtd-botao"
                                                onClick={() => onAdicionar(produto.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p>
                                            Subtotal: R${(produto.preco * quantidades[produto.id])
                                                .toFixed(2)
                                                .replace('.', ',')}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <p className="carrinho-total">
                            Total: R${totalPreco.toFixed(2).replace('.', ',')}
                        </p>

                        <button type="button" className="carrinho-comprar" onClick={efetuarCompra}>
                            Efetuar compra
                        </button>

                        <button type="button" className="carrinho-limpar" onClick={onLimpar}>
                            Limpar carrinho
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}