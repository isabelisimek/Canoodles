import React, { useState } from 'react';
import Nav from './components/Nav.jsx';
import Inicio from './components/Inicio.jsx';
import Sobre from './components/Sobre.jsx';
import Diferencial from './components/Diferencial.jsx';
import Depoimento from './components/Depoimento.jsx';
import Compra from './components/Compra.jsx';
import Footer from './components/Footer.jsx';
import Carrinho from './components/Carrinho.jsx';
import { CARD_COMPRA } from './components/CARD_COMPRA.js';

function Canoodles() {
    const [quantidades, setQuantidades] = useState(
        Object.fromEntries(CARD_COMPRA.map((produto) => [produto.id, 0]))
    );
    const [carrinhoAberto, setCarrinhoAberto] = useState(false);
    const [termoBusca, setTermoBusca] = useState('');

    function irParaCompra(e) {
        e.preventDefault();
        document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
    }

    function adicionarAoCarrinho(id) {
        setQuantidades((prev) => ({
            ...prev,
            [id]: prev[id] + 1,
        }));
    }

    function removerDoCarrinho(id) {
        setQuantidades((prev) => ({
            ...prev,
            [id]: Math.max(0, prev[id] - 1),
        }));
    }

    function limparCarrinho() {
        setQuantidades(
            Object.fromEntries(CARD_COMPRA.map((produto) => [produto.id, 0]))
        );
    }

    const totalItens = Object.values(quantidades).reduce((soma, qtd) => soma + qtd, 0);

    return (
        <div>
            <Nav totalItens={totalItens} onAbrirCarrinho={() => setCarrinhoAberto(true)} />
            <Inicio termoBusca={termoBusca} onChangeBusca={setTermoBusca} onPesquisar={irParaCompra} />
            <Sobre />
            <Diferencial />
            <Depoimento />
            <Compra
                quantidades={quantidades}
                onAdicionar={adicionarAoCarrinho}
                termoBusca={termoBusca}
                onChangeBusca={setTermoBusca}
            />
            <Footer onAbrirCarrinho={() => setCarrinhoAberto(true)} />

            {carrinhoAberto && (
                <Carrinho
                    quantidades={quantidades}
                    onFechar={() => setCarrinhoAberto(false)}
                    onAdicionar={adicionarAoCarrinho}
                    onRemover={removerDoCarrinho}
                    onLimpar={limparCarrinho}
                />
            )}
        </div>
    );
}

export default Canoodles;