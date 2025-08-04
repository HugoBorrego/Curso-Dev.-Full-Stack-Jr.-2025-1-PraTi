function Produto(props) {
    return (
        <>
            <div>
                <h2>{props.name}</h2>
                <p>{props.preco}</p>
                <p>{props.descricao}</p>
            </div>
        </>
    )
}

function Produtos() {

    const productInfo = {
        name: 'Iphone SE 2',
        price: '3000',
        description: 'Melhor celular'
    }

    return (

        <Produto name={productInfo.name} preco={productInfo.price} descricao={productInfo.description} />

    )
}

export default Produtos