$(function() {
var ul = document.getElementById("foo");
var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
  console.log(items);
}

$("#example-table").tabulator("setData", items);
});