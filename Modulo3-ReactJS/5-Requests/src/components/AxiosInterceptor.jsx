import React, { useState, useEffect } from 'react'
import axios from 'axios' // Tem que dar "npm install axios"

axios.interceptors.request.use((config) => {
        // Adiciona um cabeçalho de autorização com um token
        config.headers['Authorization'] = 'Bearer token123456'
        // Exibe no console que a requisição foi interceptada e o token foi adicionado
        console.log('Requisição interceptada, token adicionado', config)
        // Retorna a configuração da requisição para continuar com o processo
        return config
    },
    (erro) => {
        // Retorna a promessa rejeitada com o erro
        return Promise.reject(erro)
    }
)

axios.interceptors.response.use(
    (response) => {
        console.log('Resposta recebida:', response)
        return response
    },
    // Função chamada se ocorrer um erro na resposta
    (erro) => {
        // Exibe no console o erro de resposta, se ocorrer
        console.log('Erro na resposta:', erro.response)
        // Manipula o erro e o retorna para ser tratado nos componentes
        return Promise.reject(erro)
    }
)

// Componente funcional AxiosInterceptor
const AxiosInterceptor = () => {
    // Estado para armazenar os usuários
    const [users, setUsers] = useState([])
    // Estado para armazenar erro, se houver
    const [error, setError] = useState(null)
    // Estado para indicar se está carregando a requisição
    const [loading, setLoading] = useState(true)

    // Função para obter os usuários
    const getUsers = async () => {
        try {
            // Faz a requisição GET para pegar a lista de usuários
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            // Atualiza o estado com os dados recebidos
            setUsers(response.data)
            // Indica que o carregamento foi concluído
            setLoading(false)
        } catch(err) {
            // Se houver erro, armazena a mensagem de erro
            setError(err.message)
            setLoading(false)
        }
    }

    // useEffect para chamar getUsers assim que o componente for montado
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            {/* Exibe "Carregando" enquanto os dados estão sendo carregados */}
            {loading && <p>Carregando...</p>}
            {/* Exibe mensagem de erro se ocorrer algum erro */}
            {error && <p>Erro: {error}</p>}
            {/* Exibe a lista de usuários */}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default AxiosInterceptor 