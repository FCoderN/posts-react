// useState → estado local. useEffect → efectos secundarios (fetch, timers, etc.).
import { useState, useEffect } from 'react'

function PostsList() {
  // Tres estados típicos de una petición: datos, cargando y error.
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // useEffect con [] → se ejecuta una sola vez, al montar el componente.
  useEffect(() => {
    // La función del efecto no puede ser async, así que creamos una interna.
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        // fetch no lanza error en respuestas 4xx/5xx: hay que comprobarlo manualmente.
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
        const data = await response.json()
        // slice(0, 10) devuelve una copia nueva → trabajamos inmutablemente.
        setPosts(data.slice(0, 10))
      } catch (err) {
        setError(err.message)
      } finally {
        // Se ejecuta siempre → apagamos el spinner pase lo que pase.
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Renderizado condicional con early returns → más limpio que anidar ternarios.
  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="alert alert-danger border-0 rounded-3" role="alert">
        <strong>Ups, algo salió mal:</strong> {error}
      </div>
    )
  }

  return (
    <div className="row g-4">
      {/* .map() para renderizar listas. La prop key debe ser única y estable (usamos post.id). */}
      {posts.map((post) => (
        <div className="col-12 col-md-6 col-lg-4" key={post.id}>
          <article className="card h-100 border-0 shadow-sm rounded-4 card-hover">
            <div className="card-body p-4">
              <span className="badge rounded-pill bg-dark-subtle text-dark-emphasis fw-normal mb-3">
                #{post.id}
              </span>
              <h2 className="h5 card-title text-capitalize fw-semibold mb-3">
                {post.title}
              </h2>
              <p className="card-text text-secondary mb-0">{post.body}</p>
            </div>
          </article>
        </div>
      ))}
    </div>
  )
}

export default PostsList
