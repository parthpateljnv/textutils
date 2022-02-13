import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    //console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    //console.log("lowercase  was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");

  };
  const handleCapitalizeClick = () => {
    let newText = text.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
    setText(newText);
    props.showAlert("Text Capitalized!", "success");
  };
  
  const handleClearClick = () => {
    //console.log("lowercase  was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");

  };

  const handleCopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");


  };
  const handleExtraSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra space!", "success");


  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}} id="myBox" rows="8" ></textarea>
          <button className="btn btn-primary my-1 mx-2" onClick={handleUpClick}> Convert to Uppercase </button>
          <button className="btn btn-primary my-1 mx-2" onClick={handleLoClick}>  Convert to Lowercase </button>
          <button className="btn btn-primary my-1 mx-2" onClick={handleCapitalizeClick} >  Capitalize Text </button>
          <button className="btn btn-primary my-1 mx-2" onClick={handleCopy} > Copy Text </button>
          <button className="btn btn-primary my-1 mx-2" onClick={handleExtraSpace} > Remove Extra Spaces </button>
          <button className="btn btn-primary my-1 mx-2" onClick={handleClearClick} > Clear Text </button>
        </div>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters{" "}
        </p>
        <p>{text.split(" ").length * 0.008}minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>

        
      </div>
    </>
  );
}
