import { Route, Routes } from 'react-router'
import Layout from './components/template/Layout'
import { routes } from './data/routes'
import Contexts from './contexts'
import { map } from 'lodash'

function App() {
  return (
    <Contexts>
      <Layout>
        <Routes>
          {
            map(routes, (route) => (
              <Route
                key={route.path}
                {...route}
              />
            ))
          }
        </Routes>
      </Layout>
    </Contexts>
  )
}

export default App
