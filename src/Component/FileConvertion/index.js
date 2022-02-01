import React ,{Component,Fragment} from 'react'
import { SubmitBtn } from '../Common'
import SelectBox from '../Common/SelectBox'
import TextBox from '../Common/TextBox'


export default class FileConvertion extends Component{

    constructor(props){
    super(props);
    this.state={
        byteArray:null,
        fileExtension:null
    }
    this.ExtensionOption=[{id:"txt",text:"Text"},{id:"pdf",text:"Pdf"},{id:"png",text:"Png"},{id:"zip",text:"Zip"},]
    }

    onSubmit=()=>{

    }

    render(){
        return (
            <div className="card-container">
                <div>File Convetion</div>
               

                <TextBox 
                label={"Byte Array"} 
                name="byteArray"
                />
                <SelectBox 
                    label={'File Extension'} 
                    name={"fileExtension"} 
                    options={this.ExtensionOption}
                />
                <SubmitBtn  />
            </div>
        )
    }
}