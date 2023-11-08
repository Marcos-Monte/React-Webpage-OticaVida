import React from 'react';

export default function Header() {
    return (
        <header>
            <div className="container topo">
                <img src="assets/logo.png"></img>
                <nav>
                    <a href="#">PRODUTOS</a>
                    <a href="#">SOBRE</a>
                    <a href="#">CONTATO</a>
                </nav>
            </div>
        </header>
    )
}