import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header';
import Login from './Logint';
import {AuthProvider,AuthContext} from './AuthContext';
import {useContext} from 'react';
function App() {
  const authContext =useContext(AuthContext);
  return (
    <div className="container">
      <Header/>
      {authContext.auth.email?'welcom':<Login/>}
    </div>
  );
}
function AppWithStore(){
 return(<AuthProvider>
    <App/>
  </AuthProvider>);
}

export default AppWithStore;
