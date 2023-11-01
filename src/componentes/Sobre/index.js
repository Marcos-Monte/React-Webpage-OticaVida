import React from 'react';

const Sobre = () => {
    return (
        <section>
            <div className="container">
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçú - Rio de janeiro, à Óticas Vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

                <div className="container-sobre">

                    <div className="card-sobre">
                        <img src="assets\loja.png"></img>
                        <div>
                            <h4>NOSSAS FILIAIS</h4>
                            <p>Hoje temos mais de 20 filiais pelo Brasil e na América.</p>
                        </div>
                    </div>

                    <div className="card-sobre">
                        <img src="assets\atendimento.png"></img>
                        <div>
                            <h4>ATENDIMENTO FLEXÍVEL</h4>
                            <p>Nossa equipe é treinada para te atender.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Sobre;