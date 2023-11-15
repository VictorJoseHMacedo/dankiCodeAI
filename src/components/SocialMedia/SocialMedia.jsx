import Instagram from '../../img/social-media/instagram.png';
import Linkedin from '../../img/social-media/linkedin.png';
import TikTok from '../../img/social-media/tik-tok.png';
import Twitter from '../../img/social-media/twitter.png';
import Youtube from '../../img/social-media/youtube.png';

import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <section className='social-media'>
        <div className='section-social-media'>
            <h1>Nos siga nas <span>Redes Sociais</span></h1>

            <div className="img-social-media">
                <a href=""><img src={Instagram} alt="" /></a>
                <a href=""><img src={Linkedin} alt="" /></a>
                <a href=""><img src={TikTok} alt="" /></a>
                <a href=""><img src={Twitter} alt="" /></a>
                <a href=""><img src={Youtube} alt="" /></a>
            </div>
        </div>
    </section>
  )
}

export default SocialMedia