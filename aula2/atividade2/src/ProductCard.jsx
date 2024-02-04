function ProductCard({ productImage, productName, productDescription, productPrice }) {


    return (
        <article className="card">

            <img src={productImage} alt="imagem" />
            <p>{productName}</p>
            <p>{productDescription}</p>
            <p> {productPrice}   </p>
        </article>
    )
}

export default ProductCard
