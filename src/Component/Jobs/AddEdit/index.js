import React ,{Component} from 'react'
import CustDatePicker from '../../Common/DatePicker'
import SelectBox from '../../Common/SelectBox'
import TextBox from '../../Common/TextBox'
import { FormPopup } from '../../Common/Popup/FormPopup';

const companyDS="COMPANYMASTER";
const designationDS="DESIGNATIONMASTER";
const jobStatusDS="JOBSTATUMASTER";

const idleDataItem={
  id:0,
  CompanyId:null,
  DesignationId:null,
  StatusId:null,
  ApplicationId:"",
  AdvertisementNo:"",
  AdvertisementLink:"",
  RegistrationNumber:"",
  Password:"",
  OfficalLink:"",
  ContactPerson:"",
  EmailId:"",
  ContactNo:"",
  LastDateApply:new Date(),
  NextVisit:new Date(),
  Flag:'I'
}
export default class AddEdit extends Component{
    constructor(props) {
        super(props);
      
        this.state={
            dataItem:{...idleDataItem},
            open:false,
            title:"EDIT"
        }
        
        }

// shouldComponentUpdate=(nextProps,nextState)=>{
//   const {props,state}=this
// if((nextProps.dataItem && nextProps.dataItem.id !==props.dataItem.id) || nextProps.open!==props.open)
//   return true
// else 
//     return !(state===nextState)
// }

componentDidMount=()=>{

    const {actions,appState}=this.props
  
    const {DropDownDs}=appState.reducer

    if((!(companyDS in   DropDownDs))|| DropDownDs[companyDS].total===0){
      actions.reducer.GetDropDownDs({Master:companyDS})
    }
    if((!(jobStatusDS in   DropDownDs))|| DropDownDs[jobStatusDS].total===0){
      actions.reducer.GetDropDownDs({Master:jobStatusDS})
    }
    if((!(designationDS in   DropDownDs))|| DropDownDs[designationDS].total===0){
      actions.reducer.GetDropDownDs({Master:designationDS})
    }

}
  

openPopup=(dataItem={})=>{
  let Flag=  [0,null,undefined].includes(dataItem.id) ? 'I':'U';
  let title=(Flag==="I" ? "ADD" : "EDIT")
  dataItem={...idleDataItem,...dataItem,Flag:Flag}
  this.setState((s,p)=>({
    ...s,
    dataItem:{...dataItem},
    title:title,
    open:true
  }))
}

onCancel=()=>{
  this.setState((s,p)=>({
    ...s,
    dataItem:{...idleDataItem},
    open:false
  }))
}
   onTextChange=(e,a)=>{
  
    this.setState({
      ...this.state,
      dataItem:{
        ...this.state.dataItem,
        [`${e.target.name}`]: e.target.value
      }
    })
  }

  handleSubmit=(e)=>{
    e && e.preventDefault();
    console.log("i submut")
    return
    const {apiCall}=this.props
    const {dataItem}=this.state
  const {Company,Designation,Status,..._datatItem}=dataItem
    apiCall.postCall({url:"master/UpdateJobs", payload:_datatItem, onSuccess:(r)=>{
      
      this.setState({
        ...this.state,
        dataItem:{...idleDataItem}
      })  
    }})
  }
//   <GridToolbarContainer>
//   <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//     Add record
//   </Button>
// </GridToolbarContainer>
    render(){
        const {onTextChange,handleSubmit,onCancel,state}=this
        const {dataItem,open,title}=state
        const {appState}=this.props
        const {DropDownDs}=appState.reducer

        return(
        
         
           <FormPopup onSubmit={handleSubmit} onCancel={onCancel} title={title}  open={open}>
      
            <SelectBox value={dataItem.CompanyId} label="Company" name={"CompanyId"} options={DropDownDs[companyDS].data} onChange={onTextChange}	/>
            <SelectBox value={dataItem.DesignationId} label="Designation" name={"DesignationId"} options={DropDownDs[designationDS].data} onChange={onTextChange}	/>
            <SelectBox value={dataItem.StatusId} label="Status" name={"StatusId"} options={DropDownDs[jobStatusDS].data} onChange={onTextChange}	/>
            <TextBox  value={dataItem.ApplicationId} label="Application Id" name={"ApplicationId"} type={"text"} onChange={onTextChange}></TextBox>
            <TextBox  value={dataItem.AdvertisementNo} label="Advertisement No" name={"AdvertisementNo"} type={"text"} onChange={onTextChange}></TextBox>
            <TextBox  value={dataItem.AdvertisementLink} label="Advertisement Link" name={"AdvertisementLink"} type={"text"} onChange={onTextChange}></TextBox>
            <TextBox  value={dataItem.RegistrationNumber} label="Registration No" name={"RegistrationNumber"} type={"text"} onChange={onTextChange}></TextBox>
            <TextBox  value={dataItem.Password} label="Password" name={"Password"} type={"text"} onChange={onTextChange}></TextBox>
            <TextBox  value={dataItem.OfficalLink} label="Offical Link" name={"OfficalLink"} type={"text"} onChange={onTextChange}></TextBox>
            <TextBox  value={dataItem.ContactPerson} label="Contact Person" name={"ContactPerson"} type={"text"} onChange={onTextChange}></TextBox>
            <TextBox  value={dataItem.EmailId} label="Email Id" name={"EmailId"}  type={"text"} onChange={onTextChange}></TextBox>
            <TextBox  value={dataItem.ContactNo} label="Contact No" name={"ContactNo"}  type={"text"} onChange={onTextChange}></TextBox>
            <CustDatePicker value={dataItem.NextVisit}  label="Next Visit" name={"NextVisit"} onChange={onTextChange}/>
            <CustDatePicker value={dataItem.LastDateApply}  label="Last Date Apply" name={"LastDateApply"} onChange={onTextChange}/>
        
      
          </FormPopup>
        
        )
    }
}

