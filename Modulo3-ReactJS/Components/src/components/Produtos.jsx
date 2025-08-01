function Produto(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}

function App() {

    const productInfo = {
    name: 'Iphone SE 2',
    price: 3.000,
    description: 'Melhor celular'
  }
  
    return (
        <Produto name={productInfo.name} preco={productInfo.price} descicao={productInfo.description} />
    )
}

export default App