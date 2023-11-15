import './gptmax.css';

const GPTMax = () => {
  return (
    <section className='video-gpt-max'>
        <div className="section-gpt-max">
            <h1 id='title'>Conheça o <span id='span-title'>GPTMax</span></h1>

            <div className="p-1">
                <p>
                    Você está pronto para elevar sua experiência de IA a um nível 
                    completamente novo com o GPT Max.
                </p>
            </div>

            <div className="p-2">
                <p>
                    Com o GPT Max, você alimenta o modelo com informações sobre 
                    seus produtos, políticas e respostas às perguntas mais frequentes 
                    dos clientes. Ele se transforma em um assistente virtual que 
                    entende seu negócio como ninguém. Suas interações com os 
                    clientes e com sua própria equipe serão mais eficazes do que 
                    nunca.
                </p>
            </div>

            <div className="p-3">
                <p>
                    Experimente o GPT Max e leve sua IA para o próximo nível.
                </p>
            </div>
        </div>

        <div className="section-gpt-max-video">
            <iframe width="550" height="350" src="https://www.youtube.com/embed/kUeS7VJtcKc" title="Conheça o GPT Max" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    </section>
  )
}

export default GPTMax