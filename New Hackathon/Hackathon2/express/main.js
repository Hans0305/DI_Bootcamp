document.getElementById("btn").addEventListener("click", function () {
  alert('Appointment Booked!')
});

function sendData() {
  let name = document.getElementById('name').value;
  let petname = document.getElementById('petname').value;
  let reason = document.getElementById('reason').value;
  let number = document.getElementById('number').value;
  let date = document.getElementById('date').value;



  let custdata = {
    name,
    petname,
    reason,
    number,
    date
  }



  fetch('http://localhost:4000/custdata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(custdata)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('root').innerHTML = `${data.message}`
    })
    .catch(err => {
      console.log(err);
    })
}

