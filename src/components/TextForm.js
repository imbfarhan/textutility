import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText] =useState('') //Default value of text is Enter Text Here
    //text="abc" WRONG WAY TO CHANGE THE STATE
    //setText('abc') CORRECT WAY

    const handleUpClick = () =>
    {
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to uppercase!","success")
    }

    const handleOnChange = (event) =>
    {
       setText(event.target.value)
    }

    const handleLowClick = () =>
    {
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to lowercase!","success")
    }

    const handleClear = () =>
    {
        let newText=''
        setText(newText)
        props.showAlert("Cleared text!","success")
    }

    const handleRemoveSpace = () =>
    {
        let newtext=text.replaceAll(" ","")
        setText(newtext)
        props.showAlert("Removed Spaces!","success")
    }

    const handleCapitalize = () =>
    {
        var arraytext=text.split(" ")
        for (let i = 0; i<arraytext.length; i++) 
        {
            var element=arraytext[i]
            if(element!=="")
            {
            var firstElement=element.at(0).toUpperCase()
            element = firstElement + element.slice(1)
            arraytext[i]=element     
            }
        }
        var newtext=arraytext.join(" ")
        setText(newtext)
        props.showAlert("Text Capitalized!","success")
    }

    const handleCopy = () =>
    {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied","success")
    }

    const handleRemoveExtraSpace = () =>
    {
        let newtext=text.split(/[ ]+/)
        setText(newtext.join(" "))
        props.showAlert("Removed Extra Spaces!","success")
    }

    let x = 0.008 * text.split(" ").length
    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" placeholder="Enter text here" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleCapitalize}>Capitalize</button>
    <button className="btn btn-primary mx-1" onClick={handleRemoveSpace}>Remove Spaces</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
    </div>
    <button className="btn btn-danger my-2 mx-3" onClick={handleClear}>Clear text</button>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>Words: {text.split(" ").length} | Characters:  {text.length}</p>
        <p>Time To Read: {x.toPrecision(2)} minutes.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in the textbox to preview"}</p>
    </div>
  </>
  )
}
