function Greeting(props) {
    return <h1>Olá, {props.name}</h1>
}

function App() {

    const name = 'Hugo'


    return (
        <Greeting name={name} />
    )
    
}

export default Greeting