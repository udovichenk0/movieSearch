import {Routes, Route} from 'react-router-dom'
import { routes } from './pages/index'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Suspense } from 'react'; 
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
  })
}
function App() {
  return (
    <>
    <Provider store={store()}>
        <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route>
        {routes.map((item) => {
            const Component = item.component
            return(<Route key={item.path}path={item.path} element={<Component/>}/>
          )})}
      </Route>
          
    </Routes>  
    </Suspense> 
    </Provider>   
    </>
    )
}

export default App
