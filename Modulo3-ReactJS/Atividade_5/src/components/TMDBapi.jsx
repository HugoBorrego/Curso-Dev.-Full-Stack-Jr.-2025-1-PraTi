import { useState, useEffect } from "react"

function TMDBapi() {
  const [filme, setFilme] = useState('')
  const [erro, setErro] = useState(null)
  const [loading, setLoading] = useState(false)

  const buscarFilme = async () => {
        const novoFilme = {
            filme: filme
        }

        try {
            
            setLoading(false)
        } catch (err) {
            
            setLoading(false)
        }
    }

  useEffect(() => {
    setLoading(true)
    setErro(null)

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjE0ZDc5ZDk2NzMwNzcyZjg0YTg4NGEwZmUyNzA1YSIsIm5iZiI6MTc1MjQxODcyMy40NjU5OTk4LCJzdWIiOiI2ODczYzlhMzgzYjkwNDc1N2NjMDk4ZWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mVCQYGC6jPcKfp5BEGk1R1YLqLFUXrnwud39naOQN7Y'
      }
    }

    fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err))
  })

  return (
    <div>
      <h2>Digite o nome do Filme:</h2>

      <div>
        <input type="text" placeholder="Nome do Filme" value={filme} onChange={(event) => setFilme(event.target.value)} />
      </div>

      <button onClick={buscarFilme} disabled={loading}>{loading ? 'Buscando...' : 'Buscar Filme'}</button>

      
    </div>
  )

}

export default TMDBapi