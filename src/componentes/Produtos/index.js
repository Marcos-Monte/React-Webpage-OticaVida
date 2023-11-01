import React from 'react';

const Produtos = () => {
    return (
        <section>

            <div className="container">
                <h2>Nossos Produtos</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos moldes masculinos, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

                <div className="container-produtos">

                    <div className="card-produto">
                        <h3>Óculos de Grau</h3>
                        <img src="assets\oculos01.png"></img>
                        <p>R$ 500,00</p>
                    </div>

                    <div className="card-produto">
                        <h3>Óculos Transition</h3>
                        <img src="assets\oculos02.png"></img>
                        <p>R$ 750,00</p>
                    </div>

                    <div className="card-produto">
                        <h3>Óculos de Sol</h3>
                        <img src="assets\oculos03.png"></img>
                        <p>R$ 700,00</p>
                    </div>

                    <div className="card-produto">
                        <h3>Óculos Infantil</h3>
                        <img src="assets\oculos04.png"></img>
                        <p>R$ 500,00</p>
                    </div>

                </div>

                <ul className="produtos-lista">
                    <p>Todos os nossos produtos incluem:</p>
                    <li>Garantia de 1 ano.</li>
                    <li>Manutenção Preventiva.</li>
                    <li>Descontos especiais na compra da segunda unidade.</li>
                    <li>Flexibilidade de Pagamento.</li>
                </ul>
            </div>

        </section>
    )
}

export default Produtos;