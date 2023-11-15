import { Link as RouterLink} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './index.css';

const Header = () => {

  return (
    <header className='header_section'>
      <div className="wraper">
        <RouterLink to={`/`}><img src="https://dankicode.ai/wp-content/uploads/2023/10/aiAsset-1-1024x116.png" alt="Logo Danki Code" /> </RouterLink>
      </div>

      <div className="buttons-header">
          <ScrollLink to="produtos" spy={true} smooth={true} offset={5} duration={500} id="products">Nossos Produtos</ScrollLink>

          <RouterLink to={`/contact`} target='_blank' id='contact'>Contato</RouterLink>
      </div>
    </header>
  )
}

export default Header