import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  responseheader:any;
  responsedata:any;
  response:any={
    "data" : [ {
      "Date" : "2022-09-19",
      "Timestamp" : "23:00 to 24:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "3893",
        "Cost (Rs.)" : "3893"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "22:00 to 23:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "3823",
        "Cost (Rs.)" : "3823"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "21:00 to 22:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "4324",
        "Cost (Rs.)" : "4324"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "20:00 to 21:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "4659",
        "Cost (Rs.)" : "4659"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "19:00 to 20:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "4666",
        "Cost (Rs.)" : "4666"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "18:00 to 19:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "4408",
        "Cost (Rs.)" : "4408"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "17:00 to 18:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "4640",
        "Cost (Rs.)" : "4640"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "16:00 to 17:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "4884",
        "Cost (Rs.)" : "4884"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "15:00 to 16:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "4961",
        "Cost (Rs.)" : "4961"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "14:00 to 15:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "4883",
        "Cost (Rs.)" : "4883"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "13:00 to 14:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "5089",
        "Cost (Rs.)" : "5089"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "12:00 to 13:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "4705",
        "Cost (Rs.)" : "4705"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "11:00 to 12:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "4935",
        "Cost (Rs.)" : "4935"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "10:00 to 11:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "4567",
        "Cost (Rs.)" : "4567"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "09:00 to 10:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "4378",
        "Cost (Rs.)" : "4378"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "08:00 to 09:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "4367",
        "Cost (Rs.)" : "4367"
      } ]
    }, {
      "Date" : "2022-09-19",
      "Timestamp" : "07:00 to 08:00",
      "Main Incomer" : [ {
        "Energy Consumption (kWh)" : "2877",
        "Cost (Rs.)" : "2877"
      } ]
    } ],
    "headers" : [ {
      "name" : "Time",
      "subheaders" : [ ],
      "displayName": 'Time',
    }, {
      "name" : "Main Incomer",
      "displayName": 'Main Incomer',
      "subheaders" : [ {
        "name" : "Energy Consumption (kWh)",
        "displayName": 'Energy Consumption (kWh)',
      }, {
        "name" : "Cost (Rs.)",
        "displayName": 'Cost (Rs.)',
      } ],
      "rowSpan" : 1,
      "colSpan" : 2
    } ]
  }
  dataMessageResults: any[] = [
    {Time: "23:57:59", v_avg: "31855", I_avg: "70", PF: "1", kW: "3832"},
 
    {Time: "23:52:58", v_avg: "31865", I_avg: "71", PF: "1", kW: "3895"},
     
    {Time: "23:47:58", v_avg: "31828", I_avg: "71", PF: "1", kW: "3903"},
     
    {Time: "23:42:57", v_avg: "31595", I_avg: "72", PF: "1", kW: "3918"},
     
    {Time: "23:37:56", v_avg: "31672", I_avg: "72", PF: "1", kW: "3967"},
    
    {Time: "23:32:55", v_avg: "31860", I_avg: "71", PF: "1", kW: "3911"},
    
    {Time: "23:27:54", v_avg: "31469", I_avg: "71", PF: "1", kW: "3843"}
  ];
  constructor(){
    this.responseheader=this.response['headers'];
    this.responsedata=this.response['data'];
    console.log("responseheader",this.responseheader)
  console.log("responsedata",this.responsedata)
  }

  getcustomReportHeaders() {
    let headers: string[] = [];
    if(this.dataMessageResults) {
      this.dataMessageResults.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if(!headers.find((header) => header == key)){
            headers.push(key)
          }
        })
      })
    }
    return headers;
  }
}
