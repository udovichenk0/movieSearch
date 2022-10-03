import {Routes, Route} from 'react-router-dom'
import { routes } from './pages/index'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Suspense } from 'react'; 
// import {swDev} from '../swDev'
window.addEventListener('load', async () => {
	if('serviceWorker' in navigator){
		try{
			const reg = await navigator.serviceWorker.register('../public/sw.js')
      console.log('service worker register success', reg)
		}
    catch (e) {
      console.log("error")
    }
	}

})
// swDev()
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
