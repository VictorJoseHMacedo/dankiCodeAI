import './Contact.css'
import Footer from '../../components/Footer/Footer'

const Contact = () => {

  return (
    <>
    <section className="formulario-section">
      <div className="formulario">
        <img id='logo-dankiCode' src="https://dankicode.ai/wp-content/uploads/2023/10/aiAsset-1-1024x116.png" alt="" />

        <h1>Quer entender qual o nosso melhor produto pra você? Ou tirar dúvidas?</h1>

        <p id='p-form'>Preencha as informações abaixo para que nosso time entre em contato com você.</p>

        <div className="form-enviar">
          <form action="" id="form">
              <input type="text" placeholder='Nome' className='name-email'/>
              <input type="email" placeholder='Email' className='name-email'/>
              <input type="textarea" placeholder='Mensagem' id='text-area'/>
              <button type="submit" id="btn-enviar-form">Enviar</button>
          </form>
        </div>

        <div className="entre-em-contato">
          <div className="link-whatsapp">
              <p>Se preferir, entre em contato conosco via</p>
              <a href=""><img src="https://dankicode.ai/wp-content/uploads/2023/10/Whatsapp_logo.svg" /></a>
          </div>

          <div className="numero">
              <p>
                  Ou entre em contato por e-mail: atendimento@dankicode.ai
                  ou telefone: (99)99999-9999
              </p>
          </div>
        </div>
      </div>
  </section>

    <Footer />

    </>
  )
}

export default Contact