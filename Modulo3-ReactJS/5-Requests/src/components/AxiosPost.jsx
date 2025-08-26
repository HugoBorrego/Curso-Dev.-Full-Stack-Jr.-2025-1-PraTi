import { useState, useEffect } from 'react'
import axios from 'axios' // Tem que dar "npm install axios"

const AxiosPost = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [erro, setErro] = useState(null)
    const [loading, setLoading] = useState(false);

    const createUser = async () => {
        const newUser = {
            name: name,
            email: email
        }

        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser)
            setMensagem(`Usuário ${response.data.name} foi criado com sucesso.`)
            setLoading(false)
        } catch (err) {
            setErro(err.mensagem)
            setLoading(false)
        }
    }

    return (
        <div>
            <h1>Criar Novo Usuário</h1>

            {erro && <p style={{ color: 'red' }}>{erro}</p>}

            <div>
                <input type="text" placeholder="Nome" value={name} onChange={(event) => setName(event.target.value)} />
            </div>

            <div>
                <input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>

            <button onClick={createUser} disabled={loading}>{loading ? 'Enviando...' : 'Criar Usuário'}</button>

            {mensagem && <p style={{ color: 'green' }}>{mensagem}</p>}
        </div>
    );
};

export default AxiosPost;