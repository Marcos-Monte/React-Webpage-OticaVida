import React from 'react';

const Contato = () => {
    return (
        <section>
            <div className="container">
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

                <div className="listas-contato">
                    <ul className="lista-contato">
                        <caption>Contato</caption>
                        <li>
                            <a href="https://maps.app.goo.gl/5aWau3PyojsehJVCA">
                                <img src="assets\local.png"></img>
                                Nova Iguaçú, RJ
                            </a>
                        </li>
                        <li>
                            <a href="tel:+552199999999">
                                <img src="assets\telefone.png"></img>
                                (21) 9999-9999
                            </a>
                        </li>
                        <li>
                            <a href="mailto:contato@oticavida.com">
                                <img src="assets\email.png"></img>
                                contato@oticavida.com
                            </a>
                        </li>
                    </ul>.

                    <ul className="lista-contato">
                        <caption>Nossas Redes Sociais</caption>
                        <li>
                            <a href="https://www.facebook.com/">
                                <img src="assets\fb.png"></img>
                                /OticaVida
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/">
                                <img src="assets\ig.png"></img>
                                @oticavidarj
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/">
                                <img src="assets\tt.png"></img>
                                @oticavidarj
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Contato;