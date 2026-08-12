import React, { useState } from 'react';
import CardCompra from "./CardCompra";
import { CARD_COMPRA } from "./CARD_COMPRA.js";

const CATEGORIAS_FILTRO = [
    { label: "Canudos descartáveis", valor: "Canudo descartável" },
    { label: "Canudos reutilizáveis", valor: "Canudo Reutilizável" },
    { label: "Canudos de piscina", valor: "Canudo de Piscina" },
    { label: "Canudos comestíveis", valor: "Canudo Comestível" },
    { label: "Canudos de formatura", valor: "Canudo Formatura" },
    { label: "Canudos divertidos", valor: "Canudo Divertido" },
];

export default function Compra({ quantidades, onAdicionar, termoBusca = '', onChangeBusca = () => {} }) {
    const [paginaAtiva, setPaginaAtiva] = useState(1);
    const [filtroAberto, setFiltroAberto] = useState(false);
    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);

    function alternarCategoria(valor) {
        setCategoriasSelecionadas((prev) =>
            prev.includes(valor)
                ? prev.filter((c) => c !== valor)
                : [...prev, valor]
        );
    }

    function paginaAnterior() {
        setPaginaAtiva((prev) => (prev === 1 ? 3 : prev - 1));
    }

    function proximaPagina() {
        setPaginaAtiva((prev) => (prev === 3 ? 1 : prev + 1));
    }

    const busca = termoBusca.trim().toLowerCase();

    const produtosFiltrados = CARD_COMPRA.filter((produto) => {
        const passaCategoria =
            categoriasSelecionadas.length === 0 ||
            categoriasSelecionadas.includes(produto.classificacao);
        const passaBusca =
            busca === "" ||
            produto.nome.toLowerCase().includes(busca) ||
            produto.classificacao.toLowerCase().includes(busca);
        return passaCategoria && passaBusca;
    });

    return (
        <section className="compra" id="comprar">
            <div className="pesquisa-compra">
                <form className="form-pesquisa" onSubmit={(e) => e.preventDefault()}>
                    <input
                        id="pesquisa-compra"
                        type="text"
                        placeholder="Pesquisar canudo"
                        value={termoBusca}
                        onChange={(e) => onChangeBusca(e.target.value)}
                    />
                    <button type="submit">
                        <img src="imagens_canoodles/Lupa_compra.png" alt="Lupa cinza" />
                    </button>
                </form>

                <div className="filtro-wrapper">
                    <button
                        className="botãofiltro"
                        onClick={() => setFiltroAberto((prev) => !prev)}
                    >
                        Filtrar
                        <img src="imagens_canoodles/seta filtro.png" alt="Seta para baixo" />
                    </button>

                    {filtroAberto && (
                        <div className="filtro-dropdown">
                            {CATEGORIAS_FILTRO.map((categoria) => (
                                <label key={categoria.valor} className="filtro-linha">
                                    {categoria.label}
                                    <input
                                        type="checkbox"
                                        checked={categoriasSelecionadas.includes(categoria.valor)}
                                        onChange={() => alternarCategoria(categoria.valor)}
                                    />
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="grid-compra">
                {produtosFiltrados.length === 0 ? (
                    <p className="sem-resultados">Nenhum canudo encontrado.</p>
                ) : (
                    produtosFiltrados.map((produto) => (
                        <CardCompra
                            key={produto.id}
                            {...produto}
                            quantidade={quantidades[produto.id]}
                            onAdicionar={() => onAdicionar(produto.id)}
                        />
                    ))
                )}
            </div>

            <section className="números">
                <img
                    src="imagens_canoodles/seta_esquerda_compra.png"
                    alt="Seta para a esquerda"
                    onClick={paginaAnterior}
                />
                <ul>
                    {[1, 2, 3].map((numero) => (
                        <li
                            key={numero}
                            className={numero === paginaAtiva ? "ativo" : ""}
                            onClick={() => setPaginaAtiva(numero)}
                        >
                            {numero}
                        </li>
                    ))}
                </ul>
                <img
                    src="imagens_canoodles/seta_direita_compra.png"
                    alt="Seta para a direita"
                    onClick={proximaPagina}
                />
            </section>
        </section>
    );
}