import React, { useState } from "react";

function TextArea(){
    const [text,setText]=useState("Entre Text");


    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const upper=()=>{
        setText(text.toUpperCase());
    }
    const lower=()=>{
        setText(text.toLowerCase());
    }
    
    const cap=()=>{
        setText(text.charAt(0).toUpperCase()+text.slice(1).toLowerCase());
    } 
    // reference 
    // const countWords = () => {
    //     const words = text.trim().split(" ");
    //     if(text===""){
        
    //         return words.length=0;
    //     }
    //     else{
    //     return words.length;}
    //   };
    

    return(
        <>
        <div className="mb-3 container">
  <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{fontWeight: '900',color:'black',fontSize:'40px'}}>Text Area</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"  onChange={handleOnChange} value={text}style={{borderColor:'black',border:"2px solid"}}></textarea>
  <button type="button" className="btn btn-warning my-3 " onClick={upper}>Upper Case</button>
  <button type="button" className="btn btn-success my-3 mx-3" onClick={lower}>Lower Case</button>
  <button type="button" className="btn btn-danger my-3 mx-2" onClick={cap}>Capitallized</button>
  <p >Word count:{text===""?text.trim().split(" ").length=0:text.trim().split(" ").length} and {text.length}</p>
  {/* <p >Word count:{countWords()}</p> */}
</div>

        </>
    )
}

export default TextArea;