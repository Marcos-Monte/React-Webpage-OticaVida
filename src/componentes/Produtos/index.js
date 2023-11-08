import React from 'react';

const Produtos = () => {
    return (
        <section className="produtos">

            <div className="container">
                <h2 className="container-titulo">Nossos Produtos</h2>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos moldes masculinos, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

                <div className="container-produtos">

                    <div className="card-produto">
                        <h3 className="card-titulo">Óculos de Grau</h3>
                        <img className="card-imagem" src="assets\oculos01.png"></img>
                        <p className="card-texto">R$ 500,00</p>
                    </div>

                    <div className="card-produto">
                        <h3 className="card-titulo">Óculos Transition</h3>
                        <img className="card-imagem" src="assets\oculos02.png"></img>
                        <p className="card-texto">R$ 750,00</p>
                    </div>

                    <div className="card-produto">
                        <h3 className="card-titulo">Óculos de Sol</h3>
                        <img className="card-imagem" src="assets\oculos03.png"></img>
                        <p className="card-texto">R$ 700,00</p>
                    </div>

                    <div className="card-produto">
                        <h3 className="card-titulo">Óculos Infantil</h3>
                        <img className="card-imagem" src="assets\oculos04.png"></img>
                        <p className="card-texto">R$ 500,00</p>
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