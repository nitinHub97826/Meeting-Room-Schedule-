export const CLIENT_ID = null;
export const API_KEY = null;
export const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
export const SCOPES = "https://www.googleapis.com/auth/calendar.events";
// https://www.googleapis.com/discovery/v1/apis/analytics/v4/rest

export const CreateEvent=(event)=>{
    var gapi=window.gapi;
    gapi.load('client:auth2',()=>{
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      })
      gapi.client.load('calender','v4',()=>console.log('i able to connect'))
      gapi.auth2.getAuthInstance().signIn()
      .then(()=>{
  
     var request = gapi.client.calendar.events.insert({
       'calendarId': 'primary',
       'resource': event
     });

       request.execute(function(e) {
        setTimeout(() =>  window.open(e.htmlLink), 3000);
        
       });
     });
    })
}