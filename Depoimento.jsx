import React from 'react';
export default function Depoimento() {
    return (
    <section className="depoimento" id="avaliacoes">
        <h2>Relato dos nossos clientes</h2>

        <div className="depoimento_texto">
            <p id="texto_joao">"Os melhores canudos de piscina que ja comprei na vida,
                além dos canudos de maionese mais gostosos!"</p>
            <p id="nome_joao">João Pedro Amaral, 27 anos</p>
            <p id="texto_julia">"Nunca mais fiquei sem canudo após comprar os canudos da Canoodles."</p>
            <p id="nome_julia">Júlia Rosa, 17 anos</p>
            <p id="texto_clara">"Sempre que eu precisava de algum tipo de canudo, eu tinha muita dificuldade em achar,
                mas, agora, com a Canoodles, isso se tornou muito mais fácil."</p>
            <p id="nome_clara">Clara da Silva, 32 anos</p>
        </div>

        <div className="depoimento_mobile">
            <div className="depoimento_item">
                <p className="texto_depoimento" id="texto_piscina">"Os melhores canudos de piscina que ja comprei na vida,
                    além dos canudos de maionese mais gostosos!"</p>
                <p className="nome_depoimento" id="nome_piscina">João Pedro Amaral, <br /> 27 anos</p>
            </div>

            <div className="depoimento_item">
                <p className="texto_depoimento" id="texto_formatura">"Sempre que eu precisava de algum tipo de canudo, eu
                    tinha muita dificuldade em achar,
                    mas, agora, com a Canoodles, issso se tornou muito mais fácil."</p>
                <p className="nome_depoimento" id="nome_formatura">Clara da Silva, <br /> 32 anos</p>
            </div>

            <div className="depoimento_item">
                <p className="texto_depoimento" id="texto_canudo">"Nunca mais fiquei sem canudo após comprar os canudos da
                    Canoodles."</p>
                <p className="nome_depoimento" id="nome_canudo">Júlia Rosa, <br /> 17 anos</p>
            </div>
        </div>
    </section>
    )
}