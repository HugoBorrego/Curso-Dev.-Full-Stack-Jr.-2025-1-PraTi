import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import styled from "styled-components"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 380px;
  background-color: var(--bg-color, #1a1a1a);
  color: var(--text-color, #fff);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 16px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;

  img {
    max-height: 220px;
    object-fit: contain;
    width: 100%;
    border-radius: 6px;
  }
`

const Title = styled.h2`
  font-size: 1.2rem;
  margin: 12px 0 4px;
`

const Price = styled.p`
  color: #2e8b57;
  font-weight: bold;
`

const Rating = styled.p`
  color: #ffa500;
`

const Tag = styled.span`
  display: inline-block;
  margin-top: 6px;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  text-transform: uppercase;
  background-color: ${({ type }) =>
    type === "popular" ? "#ffcc00" :
    type === "premium" ? "#e20000" :
    type === "intermediário" ? "#00bfff" :
    "#9e9e9e"};
`

const Button = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`

export const ProductCard = ({ product }) => {
  const { title, price, rating, tag, image } = product
  const { addToCart } = useContext(CartContext)

  return (
    <Card tabIndex="0" aria-label={`Produto ${title}`}>
      <ImageWrapper>
        <img src={image} alt={title} loading="lazy" />
      </ImageWrapper>
      <Title title={title}>{title}</Title>
      <Price>R$ {price.toFixed(2)}</Price>
      <Rating>{"★".repeat(rating)}</Rating>
      <Tag type={tag.toLowerCase()}>{tag}</Tag>
      <Button onClick={() => addToCart(product)}>Adicionar</Button>
    </Card>
  )
}
