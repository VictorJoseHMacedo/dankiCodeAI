import printBot from '../../../public/print.png';
import './index.css';

const GptDanki = () => {
  return (
    <section className='gpt'> 
        <div className="section-gpt-danki">
            <h2>Tem dúvidas sobre as soluções da <span>Danki Code AI</span></h2>
            <h2>Pergunte para o chat abaixo e nossa IA te responderá</h2>
        </div>
        

        <div className="local-gpt">
            <img src={printBot} alt="Print Bot IA" />
        </div>
    </section>
  )
}

export default GptDanki