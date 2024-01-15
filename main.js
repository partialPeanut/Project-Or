var roommateStartDate = new Date("Jan 14, 2024 15:00:00").getTime()
var riderCount = 1

var x = setInterval(function() {
    var now = new Date().getTime()
    var distance = now - roommateStartDate
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
  
    document.getElementById("roommateClock").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s "
}, 1000)

function incrementRiderCount() {
    riderCount++
    document.getElementById("riderCount").innerHTML = riderCount
}