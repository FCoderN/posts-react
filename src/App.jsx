// Componente raíz: define el layout general y monta <PostsList />.
import PostsList from './components/PostsList.jsx'

function App() {
  return (
    // container-narrow limita el ancho para mejorar la lectura (definido en index.css).
    <div className="container-narrow py-5 px-3">
      {/* Encabezado minimalista con un separador sutil debajo. */}
      <header className="mb-5 pb-3 border-bottom">
        <p className="text-uppercase text-secondary small fw-semibold mb-2 letter-spacing">
          JSONPlaceholder · Demo
        </p>
        <h1 className="fw-light mb-2">Publicaciones recientes</h1>
        <p className="text-secondary mb-0">
          Las primeras 10 entradas obtenidas desde la API pública.
        </p>
      </header>

      <PostsList />
    </div>
  )
}

export default App
