export const ProductCard = ({ product }) => {
  const { title, price, rating, tag, image } = product

  return (
    <div className="card" tabIndex="0" aria-label={`Produto ${title}`}>
      <div className="image-wrapper">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <h2 className="title" title={title}>{title}</h2>
      <p className="price">R$ {price.toFixed(2)}</p>
      <p className="rating">{"★".repeat(rating)}</p>
      <span className={`tag ${tag.toLowerCase()}`}>{tag}</span>
      <button className="btn solid">Adicionar</button>
    </div>
  )
}
