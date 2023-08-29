import './App.css';
import Header from '../src/components/Header'
import Body from '../src/components/Body'
import { Provider } from 'react-redux';
import Store from './utils/Store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body/>,
    children:[
      {
        path:'/',
        element: <MainContainer/>
      },
      {
        path:'watch',
        element:<WatchPage/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={Store} >
    <div className="">
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
