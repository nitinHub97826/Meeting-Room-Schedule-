import React,{memo, useState} from 'react';
import FileList from './FileList'
import './style.scss';

const Upload =(props)=>{

const {label,onChange,...otherProps} =props
let [files,setFiles]=useState([])

const onSelectFile=(e)=>{
    let txt = "";
    
    if ('files' in e.target) {
        if (e.target.files.length == 0) {
          txt = "Select one or more files.";
        } else {
            setFiles(e.target.files)
        }
      } 
      else {
        if (e.target.value == "") {
          txt += "Select one or more files.";
        } else {
          txt += "The files property is not supported by your browser!";
          txt  += "The path of the selected file: " + e.target.value; // If the browser does not support the files property, it will return the path of the selected file instead. 
        }
      
    }
    onChange &&   onChange(e)
}
        return (
            <div className="input-container" >
                {label && <label className="label">{label}</label>}
                <input className="input input-upload"  type="file" multiple={true} {...otherProps} onChange={onSelectFile}/>
                <FileList files={files}/>
            </div>    
        )
}

export default memo(Upload)