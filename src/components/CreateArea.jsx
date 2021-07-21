import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [isExpanded,setExpanded]=useState(false);
  const [keepNote,setNote] = useState({title:"",content:""});

  function handleChange(event){
    const {name,value}=event.target;
    setNote(prevvalue=>{
      return{
        ...prevvalue,
        [name]:value
      };
      


    });

  }

  function Expand(){
    setExpanded(true);

  }

  function submitButton(event){
    props.onadded(keepNote);
    setNote({title:"",content:""});

    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note" >
      {isExpanded? <input name="title" onChange={handleChange} value={keepNote.title} placeholder="Title" /> : null}
        
        <textarea onClick={Expand} name="content" onChange={handleChange} value={keepNote.content} placeholder="Take a note..." rows={isExpanded?3 :1} />
        <Zoom in={isExpanded}><Fab onClick={submitButton} ><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
