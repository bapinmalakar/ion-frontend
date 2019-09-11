# IonFrontend

Developed using Angular7

#How to start
1. Clone the project
2. npm i
3. npm start

#npm packages used
1. socket.io: Handle the socket with backend
2. ng2-file-upload: Upload file

#Script used
1. Bootbos: For alert and confirm prompt
2. Highcharts: For represent data in graph and chart

#Component used
HomeComponent: Default component. Have functionality for upload json file, list all thermometers already uploaded and processed
AllThermoViewComponent: View all thermometer or specific thermometer those are already processed.
ViewDetailsComponent: Processing newly uploaded file chunk by chunk and display the graph with available data at that time.
HighchartComponent: For display data in highchart

#Module
AppRoutingModule: Contain list of route of this application

#Service: 
CommonStorageService: Contain all constant shared data like socket, api end point etc.
HttpService: Contain all http function for make request to REST api

