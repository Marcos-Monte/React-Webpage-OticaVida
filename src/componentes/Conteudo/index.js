import React from 'react';

import Capa from '../Capa/index.js';
import Contato from '../Contato/index.js';
import Produtos from '../Produtos/index.js';
import Sobre from '../Sobre/index.js';

export default function Main() {
    return (
        <main>
            <Capa />
            <Produtos />
            <Sobre />
            <Contato />
        </main>
    )
}