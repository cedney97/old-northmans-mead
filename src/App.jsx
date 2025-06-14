import { ScrollProvider } from './contexts/ScrollContext'
import HomePage from './pages/Home'

function App() {
  return (
    <ScrollProvider>
      <HomePage />
    </ScrollProvider>
  )
}

export default App
