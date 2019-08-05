import React,{useState,useRef} from 'react';
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
    <React.Fragment>
      <form method="post" action="/api/create">
        <input type="url" id="originalURLValue" value={originalURLValue} name="originalLink" ref={urlRef} placeholder="Paste Your Original URL" onChange={e=>handleChange(e)} required/>
        <input type="text" id="refValue" value={refValue} name="identity" ref={refRef} placeholder="Give Your URL A Name *Optional" onChange={e=>referenceChange(e)}/>
        <button type="submit" id="submit">
          Create URL
        </button>
      </form>
    </React.Fragment>
  )
}

export default ShortForm;