import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <section id="informacoes-empresa">
        <div className="sobre-a-empresa">
            <div className="empresa">
                <img src="https://dankicode.ai/wp-content/uploads/2023/10/aiAsset-1-1024x116.png" alt="" />

                <p id='empresa-p-1'>
                    A Danki Code AI é líder no desenvolvimento e fornecimento de soluções 
                    avançadas de Inteligência Artificial para B2B e B2C em todo o mundo.
                </p>

                <p id='empresa-p-2'>
                    Danki Code AI – 51.054.349/0001-47 
                    2023 © Todos os direitos reservados.         
                </p>
            </div>

            <div className="links">
                <h2>Links</h2>

                <Link to={`/contact`} target='_blank' className='Link-website'>Contato</Link>
                <Link to={`/termos-e-condicoes-danki-code-ai`} target='_blank' className='Link-website'>Termos e condições</Link>
            </div>
        </div>

        <section className='our-products'>
            <a href="https://codequick.ai/" target="_blank"><img src="https://dankicode.ai/wp-content/uploads/2023/10/Code-Quick-1024x124.png" alt="" /></a>
            <a href="https://copygenerator.ai/oferta-brazil-cp/" target="_blank"><img src="https://dankicode.ai/wp-content/uploads/2023/10/Copy-1024x158.png" alt="" /></a>
            <a href="https://ebookgenerator.ai/" target="_blank"><img src="https://dankicode.ai/wp-content/uploads/2023/10/Logo-Ebook-Generator-White-1024x154.png" alt="" /></a>
            <a href="https://gpt-32k.dankicode.ai/" target="_blank"><img src="https://dankicode.ai/wp-content/uploads/2023/10/GPT-32K-white.png" alt="" style={{ width: "93px" }}/></a>
            <a href="https://gptmax.ai/" target="_blank"><img src="https://dankicode.ai/wp-content/uploads/2023/10/GPTMax-1024x293.png" alt="" style={{ width: "93px" }}/></a>
            <a href="https://myimages.ai/" target="_blank"><img src="https://dankicode.ai/wp-content/uploads/2023/10/MyImages-Origin.png" alt="" /></a>
            <a href="https://gpt4everyone.ai/" target="_blank"><img src="https://dankicode.ai/wp-content/uploads/2023/10/Logo.png" alt="" /></a>
        </section>

    </section>
  )
}

export default Footer;