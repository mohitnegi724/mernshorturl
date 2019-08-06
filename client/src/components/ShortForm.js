import React,{useState,useRef} from 'react';
import Button from "@material-ui/core/Button";
import '../Styles/ShortURLForm.css';

const ShortForm= (props) => {
  var [originalURLValue, setOriginalURLValue] = useState("");
  var [refValue, setRefValue] = useState("");
  let urlRef = useRef();
  let refRef = useRef();
  var handleChange = e => {
    setOriginalURLValue(urlRef.current.value);
  };
  var referenceChange = e => {
    setRefValue(refRef.current.value);
  };
  return (
    <div className="formContainer">
      <form method="post" action="/api/create">
        <input type="url" id="originalURLValue" value={originalURLValue} name="originalLink" ref={urlRef} placeholder="Paste Your Original URL" onChange={e=>handleChange(e)} required/>
        <input type="text" id="refValue" maxLength="10" value={refValue} name="identity" ref={refRef} placeholder="URL Name" onChange={e=>referenceChange(e)}/>
        <Button type="submit" variant="contained" color="primary" id="submit">
          Create URL
        </Button>
      </form>
    </div>
  )
}

export default ShortForm;