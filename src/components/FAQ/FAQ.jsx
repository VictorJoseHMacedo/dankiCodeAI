import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {

    const [selected, setSelected] = useState(null);

    const toogle = i => {
        if(selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    } 

  return (
    <section className='section-faq' >
        <h1> [ Perguntas <span>Frequentes</span> ]</h1>
            <div className="wrapper">
                <div className="accordion">
                    {data.map((item, i) => ( 
                            <div className='item' key={i}>
                                <div className="title" onClick={() => toogle(i)}>
                                    <h2>{item.question}</h2>
                                    <span>{selected == i ? '-' : '+'}</span>
                                </div>
                                <div className={selected == i ? 'content show' : 'content'}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        
    </section>
  )
}

const data = [
    {
        question: 'O que é a Danki Code AI?',
        answer: 
        'A Danki Code AI é uma empresa líder em soluções de inteligência artificial que oferece uma variedade de produtos avançados para atender às necessidades de negócios modernos.',    
    },
    {
        question: 'A Danki Code AI oferece soluções personalizadas para as empresas?',
        answer: 'Sim, a Danki Code AI oferece soluções personalizadas para atender às necessidades exclusivas de cada empresa. Trabalhamos em estreita colaboração com nossos clientes para desenvolver soluções sob medida que impulsionam o sucesso de seus negócios.',
    },
    {
        question: 'Quais são os principais produtos da Danki Code AI?',
        answer: 'Nossos produtos principais incluem o Copy Generator, Ebook Generator, GPT Max, Code Quick, My Images e GPT 4-32K. Cada um deles é projetado para oferecer soluções específicas com base em inteligência artificial.',
    },
    {
        question: 'Como o Copy Generator pode ajudar minha empresa?',
        answer: 'O Copy Generator é uma ferramenta poderosa que gera automaticamente conteúdo de alta qualidade, economizando tempo e esforço na criação de textos persuasivos, como anúncios e postagens de blog.',
    },
    {
        question: 'Quais são os benefícios do Ebook Generator?',
        answer: 'O Ebook Generator simplifica a criação de ebooks personalizados, economizando tempo e recursos, tornando a produção de conteúdo educacional mais acessível e eficiente.',
    },
    {
        question: 'O que é o Code Quick e como ele pode ser usado?',
        answer: 'O Code Quick é uma ferramenta para acelerar o desenvolvimento de código, economizando tempo e aumentando a produtividade dos desenvolvedores.',
    },
    {
        question: 'Como o GPT Max se diferencia de outros modelos de linguagem?',
        answer: 'O GPT Max é altamente personalizável, permitindo que você adapte o modelo com seus próprios dados e orientações, transformando-o em um assistente virtual personalizado.', 
    },
    {
        question: 'Como o My Images pode beneficiar minha empresa?',
        answer: 'My Images é uma solução de IA que auxilia na criação de imagens de alta qualidade para suas necessidades de marketing e design.',
    },
    {
        question: 'O que é o GPT 4 Everyone?',
        answer: 'O GPT 4 Everyone é uma solução de IA que te permite acessar o GPT-4 de forma gratuita.'
    }
]

export default FAQ;