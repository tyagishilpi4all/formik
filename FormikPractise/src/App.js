import React from 'react';
import './App.css';
import BasicForm from './Component/Form/BasicForm';
import NewForm from './Component/Form/NewForm';
import LoginForm from './Component/Form/LoginForm';
import Registration from './Component/Form/Registration';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <React.Fragment>
     {/* <BasicForm /> */}
     <NewForm />
     {/* <LoginForm /> */}
     {/* <Registration /> */}
    </React.Fragment>
  );
}

export default App;
