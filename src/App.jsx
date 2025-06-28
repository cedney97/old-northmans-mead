import Layout from './components/template/Layout'
import { ScrollProvider } from './contexts/ScrollContext'
import HomePage from './pages/Home'

function App() {
  return (
    <ScrollProvider>
      <Layout>
        <HomePage />
      </Layout>
    </ScrollProvider>
  )
}

export default App
