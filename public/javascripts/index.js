const ctx = document.getElementById('myChart');

let key = "3962f09e16e60bf19defe60bc2294200"
let locate = "lagos"
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locate}&limit=5&appid=${key}`)
.then((res)=> res.json())
.then((data)=>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&exclude=hourly,daily&appid=${key}`)
  .then((res)=> res.json())
  .then((data)=>{
    console.log(data);
  })
  
})




new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["today", "tomorrow","2 days", "apple", "mango"],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});