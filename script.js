document.getElementById('my-btn').addEventListener('click', myFunction)
function myFunction () {
  let age = document.getElementById('my-text').value
  age = parseInt(age)
  let day = document.getElementById('my-text2').value
  day = parseInt(day)
 if ((day === 'saturday' || day === 'sunday') && (age > 14)) {
    alert('Time to enjoy the weekend!')
  }
}