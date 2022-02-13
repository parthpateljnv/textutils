import "./App.css";
import NavBar from "../src/Components/NavBar";
// import About from "./Components/About";
import TextForm from "../src/Components/TextForm";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {

  const[mode, setMode] = useState('light');
  const toogleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","success")
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
      document.title = "TextUtils - Light Mode";

    }
  }

  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(
      ()=>{
        setAlert(null);
      },1500
    );
    }
  
  
  return (
    

    <>
    {/* <Router> */}
      <NavBar title="TextUtils" mode = {mode} toogleMode={toogleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About/> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
      </div>
    {/* </Router>         */}
    </>
  );
}

export default App;

























/*
NavBar.propTypes = {title: propTypes.string.isrequired,
                   aboutText: PropTypes.string
                  }; 

                  NavBar.defaultProps = {
                    title: 'Set title here',
                    aboutText: 'About text here'
                };
      */
