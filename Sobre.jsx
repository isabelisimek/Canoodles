import React, { useState, useEffect } from 'react';
import CardSobre from './CardSobre.jsx';
import { CARD_SOBRE } from './CARD_SOBRE.js';

const CARDS_VISIVEIS_DESKTOP = 3;
const CARDS_VISIVEIS_MOBILE = 2;
const LARGURA_CARD_REM = 16;
const GAP_REM = 2;
const PASSO_REM = LARGURA_CARD_REM + GAP_REM;

export default function Sobre() {
    const [indice, setIndice] = useState(0);
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' && window.matchMedia('(max-width: 850px)').matches
    );

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 850px)');
        const atualizar = (e) => setIsMobile(e.matches);
        mq.addEventListener('change', atualizar);
        return () => mq.removeEventListener('change', atualizar);
    }, []);

    const cardsVisiveis = isMobile ? CARDS_VISIVEIS_MOBILE : CARDS_VISIVEIS_DESKTOP;
    const maxIndice = CARD_SOBRE.length - cardsVisiveis;

    useEffect(() => {
        setIndice((i) => Math.min(i, maxIndice));
    }, [maxIndice]);

    function anterior() {
        setIndice((i) => (i <= 0 ? maxIndice : i - 1));
    }

    function proximo() {
        setIndice((i) => (i >= maxIndice ? 0 : i + 1));
    }

    return (
        <section className="sobre" id="sobre">
            <h2 id="sobre_besktop">
                Um único lugar que reúne todo <br className="quebra" /> e qualquer tipo de canudo
            </h2>
            <div className="cards">
                <img src="imagens_canoodles/Seta_esquerda.png" alt="Anterior" className="seta" onClick={anterior} />
                <div className="cards-viewport">
                    <div
                        className="cards-track"
                        style={{ transform: `translateX(-${indice * PASSO_REM}rem)` }}
                    >
                        {CARD_SOBRE.map((produto) => (
                            <CardSobre key={produto.nome} {...produto} />
                        ))}
                    </div>
                </div>
                <img src="imagens_canoodles/Seta_direita.png" alt="Próximo" className="seta" id='seta-direita' onClick={proximo} />
            </div>
        </section>
    );
}