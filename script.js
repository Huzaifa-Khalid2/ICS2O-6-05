document.getElementById('my-btn').addEventListener('click', myFunction)
function myFunction () {
  let age = ''
  let day = ''
  age = document.getElementById('my-text').value
  age = parseInt(age)
  day = document.getElementById('my-text2').value
  if ((day === 'saturday') && (age > 7)) {
    alert('Time to enjoy the weekend!')
 }
  else if ((day === 'friday') && (age > 5)) {
    alert('Time to go to school!.')
  }
  else if ((day === 'wednesday') && (age > 18)) {
    alert('Time to go to work!.')
  }
  else if ((day === 'sunday') && (age > 18)) {
    alert('Time to enjoy the weekend!.')
  }
  else {
    alert('ummmmmm you are too young to got work or school so congratulations! :)')
  }
  alert('Thank you for verifying your age!')
}
