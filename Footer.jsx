import React, { useState, useEffect } from 'react';
export default function Footer({ onAbrirCarrinho }) {
    const [mensagem, setMensagem] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [enviando, setEnviando] = useState(false);
    const [status, setStatus] = useState(null);

    async function handleEnviar(e) {
        e.preventDefault();
        setEnviando(true);
        setStatus(null);

        try {
            const resposta = await fetch('https://formspree.io/f/mzepdkpr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({ mensagem, email, numero }),
            });

            if (resposta.ok) {
                setStatus('sucesso');
                setMensagem('');
                setEmail('');
                setNumero('');
            } else {
                setStatus('erro');
            }
        } catch {
            setStatus('erro');
        } finally {
            setEnviando(false);
        }
    }

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => {
                setStatus(null);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [status]);
    
    return (
        <footer>

            <div className="coluna_esquerda">
                <h2>Canoodles</h2>

                <div className="contato">
                    <p id="contate_nos" className="ContTitle">Contate-nos:</p>

                    <div className="forms-contato">
                        <form onSubmit={handleEnviar}>
                            <div className='form_mensagem'>
                                <textarea
                                    type="text"
                                    name="mensagem"
                                    placeholder="Mensagem"
                                    value={mensagem}
                                    onChange={(e) => setMensagem(e.target.value)}
                                />
                            </div>

                            <div className="form_canudo">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form_numero">
                                <input
                                    type="text"
                                    name="numero"
                                    placeholder="Número"
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                />
                                <button type="submit" className="botao-enviar" disabled={enviando}>
                                    {enviando ? 'Enviando...' : 'Enviar'}
                                </button>
                            </div>

                            {status === 'sucesso' && (
                                <p className="contato-feedback contato-sucesso">
                                    Mensagem enviada com sucesso!
                                </p>
                            )}
                            {status === 'erro' && (
                                <p className="contato-feedback contato-erro">
                                    Não foi possível enviar. Tente novamente.
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                <div className="redes_sociais">
                    <p id="siga_nos" className="ContTitle">Siga-nos:</p>
                    <a href="https://instagram.com/isabeli_simek" target="_blank">
                        <img src="imagens_canoodles/insta [Vectorized].png" alt="Logo do Instagram em azul" />
                    </a>
                    <a href="https://x.com" target="_blank">
                        <img src="imagens_canoodles/twitter [Vectorized].png" alt="Logo do Twitter em azul"/>
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <img src="imagens_canoodles/facebook [Vectorized].png" alt="Logo do Facebook em azul"/>
                    </a>
                    <a href="https://pinterest.com" target="_blank">
                        <img src="imagens_canoodles/pinterest [Vectorized].png" alt="Logo do Pinterest em azul"/>
                    </a>
                </div>
            </div>

            <div className="coluna_direita">

                <div className="info_conta">
                    <p id="minha_conta" className="ContTitle">Minha conta:</p>

                    <div className="conta">
                        <p id='login'>Login ou Cadastro</p>
                        <p onClick={onAbrirCarrinho}>Carrinho</p>
                    </div>
                </div>

                <a href="#comprar" className="botao-footer">
                    Comprar
                </a>

            </div>

        </footer>
    )
}