import Header from '../../components/Header/Header'
import DankiCode from '../../components/DankiCode/DankiCode';
import GptDanki from '../../components/GptDanki/GptDanki';
import PontosPositivos from '../../components/PontosPositivos/PontosPositivos';
import Products from '../../components/Products/Products';
import GPTMax from '../../components/GPTMax/GPTMax';
import FAQ from '../../components/FAQ/FAQ';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import Footer from '../../components/Footer/Footer';

const FrontPage = () => {
  return (
    <>
    <Header />
    <DankiCode />
    <GptDanki />
    <PontosPositivos />
    <Products />
    <GPTMax />
    <FAQ />
    <SocialMedia />
    <Footer />
    </>
  )
}

export default FrontPage