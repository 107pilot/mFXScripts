let record = $("#foo").text();
let res = JSON.parse(record);
$("#foo").hide();
var table = new Tabulator("#example-table", {
    height:"311px",
    data: res,
  columns: [
    { title: "USER ID", field: "userID" },
    { title: "NAME", field: "name" },
    { title: "CARD-ID", field: "cardID" },
    { title: "STATUS", field: "status" }
  ],
});

$("#download-csv").click(function() {
  table.download("csv", "data.csv");
});

$("#download-json").click(function() {
  table.download("json", "data.json");
});

$("#download-xlsx").click(function() {
  table.download("xlsx", "data.xlsx");
});

$("#download-pdf").click(function() {
  table.download("pdf", "data.pdf", {
    orientation: "portrait",
    title: "Dynamics Quotation Report"
  });

  $("#download-html").click(function() {
    table.download("html", "data.html", {
      style: true
    });
  });
});
