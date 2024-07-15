import './App.css'

function App() {

  return (
    <>
    <div class="d-flex align-items-center">
    <strong role="status">Loading...</strong>
    <div class="spinner-border ms-auto" aria-hidden="true"></div>
    </div>

    <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Loading...</span>
    </button>
    </>
  )
}

export default App
