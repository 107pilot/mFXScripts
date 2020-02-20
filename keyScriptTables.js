let record = $("#foo").text();
let res = JSON.parse(record);
$("#foo").hide();
$("#example-table").tabulator({
  height:"311px",
  layout:"fitColumns",
  data: res,
  columns: [
    { title: "USER ID", field: "userID" },
    { title: "NAME", field: "name"},
    { title: "CARD-ID", field: "cardID" },
    { title: "STATUS", field: "status"}
  ]
});

//trigger download of data.csv file
$("#download-csv").click(function(){
    table.download("csv", "data.csv");
});

//trigger download of data.json file
$("#download-json").click(function(){
    table.download("json", "data.json");
});

//trigger download of data.xlsx file
$("#download-xlsx").click(function(){
    table.download("xlsx", "data.xlsx", {sheetName:"My Data"});
});

//trigger download of data.pdf file
$("#download-pdf").click(function(){
    table.download("pdf", "data.pdf", {
        orientation:"portrait", //set page orientation to portrait
        title:"Example Report", //add title to report
    });
});

//trigger download of data.html file
$("#download-html").click(function(){
    table.download("html", "data.html", {style:true});
});