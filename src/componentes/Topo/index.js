import React from 'react';

export default function Header() {
    return (
        <header>
            <div className="container topo">
                <img src="assets/logo.png"></img>
                <nav>
                    <a href="#produtos">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                </nav>
            </div>
        </header>
    )
}