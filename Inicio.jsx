import React from 'react';

export default function Inicio({ termoBusca, onChangeBusca, onPesquisar }) {
    return (
        <div className="inicio">
            <main>
                <section className="hero" id="hero">
                    <h1>Canoodles</h1>
                    <p>Para qualquer canudo, Canoodles</p>

                    <form className="form-hero" onSubmit={onPesquisar}>
                        <input
                            type="text"
                            id="Pesquisar"
                            placeholder="Pesquisar canudo"
                            value={termoBusca}
                            onChange={(e) => onChangeBusca(e.target.value)}
                        />
                        <button id="Lupa_pesquisa" type="submit" className="botao-hero">
                            <img src="imagens_canoodles/Lupa_pesquisa.png" alt="Lupa" />
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
}