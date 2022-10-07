import {Routes, Route} from 'react-router-dom'
import { routes } from './pages/index'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Suspense } from 'react'; 
import { Workbox } from 'workbox-window';
import './firebase'



// if('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/src/sw.ts')
//   })
// }

// if ('serviceWorker' in navigator) {
//   const wb = new Workbox('/src/sw.ts');
//   wb.register();
// }

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
