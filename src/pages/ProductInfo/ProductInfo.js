import React, { Component } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import LanguageCard from '../../components/LanguageCard/LanguageCard';
import './ProductInfo.css';

const languageObjects = [
    {
        lang: 'HTML',
        topics: ['Introdução', 'Estrutura básica','Tags, elementos e atributos', 'Estruturação de conteúdo',
        'Links e navegação', 'Formulários', 'Mídias', 'Semântica HTML5', 'Acessibilidade e usabilidade',
        'Microdata e SEO']
    },
    {
        lang: 'CSS',
        topics: ['Introdução', 'Seletores básicos','Propriedades de estilo', 'Box Model',
        'Display e posicionamento', 'Unidades de medida', 'Flexbox e alinhamento', 'Grid Layout',
        'Animations e Transitions']
    },
    {
        lang: 'JavaScript',
        topics: ['Introdução', 'Variáveis, tipos de dados e operadores','Condicionais: if, else if e switch',
        'Loops: for, while e do-while', 'Funções', 'Arrays e objetos', 'Escopo de variáveis',
        'Tratamento de erros', 'Programação assíncrona', 'Manipulação do DOM', 'Eventos',
        'APIs de terceiros']
    },
    {
        lang: 'React',
        topics: ['Introdução', 'JSX', 'Componentes', 'Props e state', 'Eventos e métodos', 'Lifecycle methods',
        'Hooks', 'Context API', 'Redux e gerenciamento de estado']
    },
    {
        lang: 'Vue.js',
        topics: ['Introdução', 'Diretivas: v-if, v-for e v-bind', 'Componentes', 'Props e events',
        'Computed properties e watchers', 'Lifecycle hooks', 'Mixins', 'Vuex e gerenciamento de estado',
        'Server-side rendering']
    },
    {
        lang: 'Angular',
        topics: ['Introdução', 'Componentes', 'Template syntax', 'Data binding', 'Services e DI',
        'Pipes e directives', 'RxJS', 'Routing', 'Observables e reactive programming']
    },
    {
        lang: 'Typescript',
        topics: ['Introdução', 'Instalação e configuração do Typescript', 'Uso de tipos básicos',
        'Tipos de dados avançados', 'Funções', 'Interfaces', 'Classes', 'Generics', 'Namespaces e modules']
    },
    {
        lang: 'Git e GitHub',
        topics: ['Introdução', 'Comandos básicos do Git', 'Uso do GitHub', 'Branches', 'Resolução de conflitos',
        'Uso de tags', 'Uso de Git em equipe']
    },
    {
        lang: 'Mobile com React Native',
        topics: ['Introdução', 'Criação de projeto', 'Estrutura básica', 'Criação de componentes básicos',
        'Estilização básica dos componentes', 'Navegação entre telas', 'Requisições HTTP',
        'Manipulação de formulários', 'Uso de componentes externos', 'Gerenciamento de estado',
        'Animações', 'Uso de módulos nativos', 'Deploy de um aplicativo']
    }
];

class ProductInfo extends Component {
    render() {
        return (
            <section id='ProductInfo' className='ProductInfoContent'>
                <h2>Tecnologias abordadas</h2>
                <ScrollContainer hideScrollbars style={{width: '80%', marginBottom: '4rem'}}>
                    <div className='ProductInfoBoxLanguages'>
                        {languageObjects.map((language) => (
                            <LanguageCard key={language.lang}
                                language={language.lang}
                                topics={language.topics}
                            />
                        ))}
                    </div>
                </ScrollContainer>
                <div className='ProductInfoAdditional'>
                    <h3>Mas, não para por ai...</h3>
                    <p>Além das tecnologias, o e-book 'Front Sem Limites' também traz um módulo bem legal sobre <strong>inglês técnico para desenvolvedores!</strong></p>
                    <p>Este módulo conta com diversos tópicos para te ajudar a se destacar dos outros candidatos nas vagas de emprego!</p>
                    <h3 className='ProductInfoPrice'>Tudo isso por apenas R$15,00</h3>
                    <p className='ProductInfoGaranty'>Legal né? E conta com garantia de 7 dias caso você não curta o conteúdo do e-book!</p>
                    <button
                        onClick={() => {window.open('https://pay.hotmart.com/I81175042L');}}>Adquira agora
                    </button>
                </div>
            </section>
        )
    }
}

export default ProductInfo;