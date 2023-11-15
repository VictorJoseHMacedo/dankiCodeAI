import Item1 from '../../img/blogs/ITEM 1.png';
import Item2 from '../../img/blogs/ITEM 2.png';
import Item3 from '../../img/blogs/ITEM 3.png';
import Item4 from '../../img/blogs/ITEM 4.png';
import './index.css';

const Products = () => {
  return (
    <>
    <section id='produtos'>
        <h1> [ Nossos <span>Produtos</span> ]</h1>
            <div className="section-img-products">
                <a href="#"><img src="https://dankicode.ai/wp-content/uploads/2023/10/Template-Apps_Card-Code01-1.png" alt="" /></a>
                <a href="#"><img src="https://dankicode.ai/wp-content/uploads/2023/10/Template-Apps_Card-GPT01.png" alt="" /></a>
                <a href="#"><img src="https://dankicode.ai/wp-content/uploads/2023/10/Template-Apps_Card-Ebook01.png" alt="" /></a>
                <a href="#"><img src="https://dankicode.ai/wp-content/uploads/2023/10/Card-32K01.png" alt="" /></a>
                <a href="#"><img src="https://dankicode.ai/wp-content/uploads/2023/10/Card-GPT4.png" alt="" /></a>
                <a href="#"><img src="https://dankicode.ai/wp-content/uploads/2023/10/Card-Voice001.png" alt="" /></a>
                <a href="#"><img src="https://dankicode.ai/wp-content/uploads/2023/10/Template-Apps_Card-Images01.png" alt="" /></a>
                <a href="#"><img src="https://dankicode.ai/wp-content/uploads/2023/10/Template-Apps_Card-Copy01.png" alt="" /></a>
            </div>
    </section>

    <section className='blogs'>
      <h1> [ Conheça nossos <span>Blogs</span> ] </h1>
        <div className="section-img-blogs">
          <a href="https://blog.dankicode.ai/" className="blog-link"><img src={Item1} alt="" /></a>
          <a href="https://blog.gptmax.ai/" className="blog-link"><img src={Item2} alt="" /></a>
          <a href="https://blog.ebookgenerator.ai/" className="blog-link"><img src={Item3} alt="" /></a>
          <a href="https://blog.copygenerator.ai/"  className="blog-link"><img src={Item4} alt="" /></a>
        </div>
    </section>
    </>
  )
}

export default Products;