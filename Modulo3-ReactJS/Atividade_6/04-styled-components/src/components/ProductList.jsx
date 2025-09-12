import { products } from './products'
import { ProductCard } from './ProductCard'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  gap: 24px;
  padding: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const ProductList = () => {
  return (
    <Grid>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </Grid>
  )
}
