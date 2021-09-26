import React ,{Component} from 'react'
import { Card, CardContent } from '@mui/material';
import CustDatePicker from '../../Common/DatePicker'
import SelectBox from '../../Common/SelectBox'
import TextBox from '../../Common/TextBox'
import {Button} from '../../Common/Button';

const idleDataItem={
  Company:null,
  CompanyId:null,
  Designation:null,
  DesignationId:null,
  Status:null,
  StatusId:null,
  ApplicationId:"",
  AdvertisementNo:"",
  AdvertisementLink:"",
  RegistrationNumber:"",
  Password:"",
  OfficalLink:"",
  ContactPerson:"",
  EmailId:"",
  Flag:'I',
  ContactNo:"",
  LastDateApply:new Date(),
  NextVisit:new Date()
}
export default class AddEdit extends Component{
    constructor(props) {
        super(props);
      
        this.state={
          companyDS:{data:[],total:0},
          designationDS:{data:[],total:0},
          jobStatusDS:{data:[],total:0},
            dataItem:{...idleDataItem}
        }
        }

componentDidMount=()=>{
  const {apiCall}=this.props
  apiCall.postCall({url:"common/GetDropDownDs", payload:{Master:"companymaster"}, onSuccess:(r)=>{
  this.setState({
    ...this.state,
    companyDS:r.data
  })
}})
  apiCall.postCall({url:"common/GetDropDownDs", payload:{Master:"designationmaster"}, onSuccess:(r)=>{
    this.setState({
      ...this.state,
      designationDS:r.data
    })  
  }})
  apiCall.postCall({url:"common/GetDropDownDs", payload:{Master:"jobstatumaster"}, onSuccess:(r)=>{
    this.setState({
      ...this.state,
      jobStatusDS:r.data
    })  
  }})
}
        
   onTextChange=(e,a)=>{
    let  _datatItem={}
    if((e.dataItem===null || e.dataItem))
    {
      _datatItem={
        [`${e.target.name}Id`]:e.dataItem && e.dataItem.id || null
      }
    }

    this.setState({
      ...this.state,
      dataItem:{
        ...this.state.dataItem,
        [`${e.target.name}`]: (e.dataItem===null || e.dataItem) ? e.dataItem : e.target.value,
        ..._datatItem
      }
    })
  }

  handleSubmit=(e)=>{
    e && e.preventDefault();
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
    render(){
        const {onTextChange,handleSubmit,state}=this
        const {dataItem,companyDS,designationDS,jobStatusDS}=state
        return(
           
            <Card>  
              <CardContent>
        <form className="form" onSubmit={handleSubmit}>
          <SelectBox value={dataItem.Company} required={true} label="Company" name={"Company"} options={companyDS.data} onChange={onTextChange}	/>
          <SelectBox value={dataItem.Designation} required={true} label="Designation" name={"Designation"} options={designationDS.data} onChange={onTextChange}	/>
          <SelectBox value={dataItem.Status} required={true} label="Status" name={"Status"} options={jobStatusDS.data} onChange={onTextChange}	/>
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
          <Button title="Submit" type='submit'/>
        </form> 
        </CardContent>
      </Card>
        )
    }
}

