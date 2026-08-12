import React from 'react';
export default function Diferencial() {
    return (
    <section className="diferencial" id="diferencial">
        <h2>Diferencial</h2>
        <div className="grid-diferencial">

            <div className="box card_mat">
                <h3 id="Mat">
                    Materiais de <br /> qualidade:
                    <img src="imagens_canoodles/simbolo_mat.png" alt="símbolo de tecido" id="icone_mat" />
                </h3>
                <p>Desde o metal dos canudos reutilizáveis, a espuma dos canudos de piscina e os ingredientes
                    dos canudinhos de maionese, todos os produtos são rigorosamente e éticamente selecionados,
                    para garantir uma boa experiência para você e para o mundo.</p>
            </div>

            <div className="box card_pers">
                <h3 id="Pers">
                    Personálizavel:
                    <img src="imagens_canoodles/simbolo_pers.png" alt="símbolo de lápis e régua" id="icone_pers" />
                </h3>
                <p>Para os canulovers de todo o Brasil, com a Canoodles, é possível fazer o seu próprio canudo,
                    100% personálizavel!</p>
            </div>

            <div className="box card_facil">
                <h3 id="Facil">
                    Facilidade:
                    <img src="imagens_canoodles/simbolo_facil.png" alt="símbolo de verificação" id="icone_facil" />
                </h3>
                <p>Um lugar feito para todos os fãs de canudos que tinham dificuldade de encontrar todos os produtos
                    que precisavam em um lugar só. Agora, tudo se tornou mais fácil.</p>
            </div>

        </div>
    </section>
    )
}