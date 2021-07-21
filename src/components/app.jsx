import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";

function App() {
  const [notes,setNotes] = useState([]);

  function handleAdd(passNote){
    setNotes(prevValue=>{
      return [...prevValue,passNote];
    });

    
  }
  function handleDelete(id){
    setNotes(prevValue=>{
      return prevValue.filter((noteItem,index)=>{
        return index!==id;
      });
    });

  }

  

  return (
    <div>
      <Header />
      <CreateArea onadded={handleAdd}/>
    {notes.map((noteItem,index)=>{
      return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} deleteNote={handleDelete}/>
    })}
   <Footer />
      
      
    </div>
  );
}

export default App;

