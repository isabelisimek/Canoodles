import React, { useState } from 'react';
export default function Nav({ totalItens, onAbrirCarrinho }) {
    const [menuAberto, setMenuAberto] = useState(false);

    function fecharMenu() {
        setMenuAberto(false);
    }

    return (
        <nav>
            <a href="#hero" id="title">Canoodles</a>
            <ul className={`ul-nav ${menuAberto ? 'ativo' : ''}`}>
                <li id='home' className="li-nav">
                    <a href="#hero" onClick={fecharMenu}>Home</a>
                </li>
                <li className="li-nav">
                    <a href="#comprar" onClick={fecharMenu}>Comprar</a>
                </li>
                <li className="li-nav">
                    <a href="#sobre" onClick={fecharMenu}>Sobre</a>
                </li>
                <li className="li-nav">
                    <a href="#diferencial" onClick={fecharMenu}>Diferencial</a>
                </li>
                <li className="li-nav">
                    <a href="#avaliacoes" onClick={fecharMenu}>Avaliações</a>
                </li>
                <li className="li-nav">
                    <a href="#carrinho" id='carro' onClick={onAbrirCarrinho}>
                        Carrinho
                        {totalItens > 0 && <span className="carrinho-badge">{totalItens}</span>}
                    </a>
                </li>
            </ul>
            <img
                src="imagens_canoodles/Hamburguer.png"
                alt="Menu"
                className="hamburguer"
                onClick={() => setMenuAberto(!menuAberto)}
            />
            <div className="icones-nav">
                <a href="#comprar">
                    <img src="imagens_canoodles/Lupa.png" alt="Lupa azul" />
                </a>
                <a href="#carrinho" className="carrinho-botao" onClick={onAbrirCarrinho}>
                    <img src="imagens_canoodles/Carrinho.png" alt="Carrinho azul" />
                    {totalItens > 0 && <span className="carrinho-badge">{totalItens}</span>}
                </a>
            </div>
        </nav>
    );
}