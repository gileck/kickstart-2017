document.querySelector("form").addEventListener("submit",function (e) {
  console.log(e);
  e.preventDefault();
  const query = document.querySelector("input").value;
  console.log(query);
  fetch("/gif/" + query)
    .then(function(res){return res.json()})
    .then(function(data) {
      document.querySelector("#gif").setAttribute("src",data.url);
    });
});
