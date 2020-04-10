import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    })


    function handleChange(event){
        const { name, value} = event.target
        setInputText(preValue => {
            return {
            ... preValue,
            [name]: value
            }
        });
    }
    function submitNote(event){
        props.onAdd(inputText);
        setInputText({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
    function expand(){
        setExpanded(true)
    }
  return (
    <div>
      <form className="create-note">
      {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title}/>}
        <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={inputText.content} />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
