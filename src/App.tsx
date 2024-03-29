import {Routes, Route} from 'react-router-dom'
import { routes } from './pages/index'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Suspense } from 'react'; 
import './firebase'




function App() {
  alert('If you can\'t see any movies, you probably need to turn on VPN')
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
