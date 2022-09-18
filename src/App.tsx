import {Routes, Route} from 'react-router-dom'
import { routes } from './pages/routes'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './reduxStore/store'
import  './services/authFireBase'
import React, { Suspense } from 'react';

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
