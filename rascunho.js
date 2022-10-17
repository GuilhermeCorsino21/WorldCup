fetch("https://estagio.geopostenergy.com/WorldCup/GetAllTeams", {
  method: "get",
  headers: {
    "git-user": "GuilhermeCorsino21",
  },
})
  .then((response) => response.json())
  .then((json) => printTeams(json));



  function printTeams(json) {
  var arr = json.Result;
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  newArray = [];
  cut = 4;

  for (var i = 0; i < arr.length; i = i + cut) {
    newArray.push(arr.slice(i, i + cut));
    console.log(newArray)
      }

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray[i].length; j++) {
      const element = newArray[i][j];
      console.log(element.Name);
    }
  }
}