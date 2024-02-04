import ProductCard from "./ProductCard"


function App() {


  return (

    <div className="centered">
      <section className="cards">
        <ProductCard productName="Flor 1" productDescription="Descrição da flor 1" productPrice={10} productImage='https://onlinequadros.com.br/static/acc/artist/ART-25047/gallery/50667/ART-25047_ypfYmyklpJCGq0WBYqEi.jpg' />
        <ProductCard productName="Flor 2" productDescription="Descrição da flor 2" productPrice={10} productImage='https://onlinequadros.com.br/static/acc/artist/ART-25047/gallery/50667/ART-25047_ypfYmyklpJCGq0WBYqEi.jpg' />
        <ProductCard productName="Flor 3" productDescription="Descrição da flor 3" productPrice={10} productImage='https://onlinequadros.com.br/static/acc/artist/ART-25047/gallery/50667/ART-25047_ypfYmyklpJCGq0WBYqEi.jpg' />

      </section>
    </div>

  )
}

export default App
