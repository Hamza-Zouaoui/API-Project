import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Components/Details';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import PrivateRoute from './Components/PrivateRoute';
import UserList from './Components/UserList';

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div className="App">
      <Navigation auth={auth} setAuth={setAuth}/>
      <br />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={
          <PrivateRoute auth={auth}>
          <UserList />
          </PrivateRoute>}></Route>
        <Route path="/usersdetails/:id" element={
          <PrivateRoute auth={auth}>
          <Details />
          </PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
