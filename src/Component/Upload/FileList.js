import React,{memo,Fragment} from 'react';

const FileList=memo((props)=>{
 
    const{files}=props
console.log(files)
    return(
        <ul className="file-list">
            {
               Object.keys(files).map((x)=>{
                    return(
                        <li className="single-file">{files[x].name}</li>
                    )
                })
            }
        </ul>
    )
})
export default FileList