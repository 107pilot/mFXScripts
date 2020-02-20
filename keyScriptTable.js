let record = $("#foo").text();
let res = JSON.parse(record);
$("#foo").hide();
$("#example-table").tabulator({
  data: res,
  columns: [
    { title: "USER ID", field: "userID" },
    { title: "NAME", field: "name"},
    { title: "CARD-ID", field: "cardID" },
    { title: "STATUS", field: "status"}
  ]
});