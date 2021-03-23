/*alert("alerta js")*/

var firstvalue = parseFloat(prompt("input first value"))
var secondvalue = parseFloat(prompt("input second value"))

var operation = prompt("1 - /" + "2- *" + "3- +" + "4- -")


if (operation == 1) {
    var result = firstvalue / secondvalue
    document.write("<h2>" + firstvalue + "/" + secondvalue + "=" + result + "</h2>")
}
else if (operation == 2) {
    var result = firstvalue * secondvalue
    document.write("<h2>" + firstvalue + "*" + secondvalue + "=" + result + "</h2>")
}
else if (operation == 3) {
    var result = firstvalue + secondvalue
    document.write("<h2>" + firstvalue + "+" + secondvalue + "=" + result + "</h2>")
}
else if (operation == 4) {
    var result = firstvalue - secondvalue
    document.write("<h2>" + firstvalue + "-" + secondvalue + "=" + result + "</h2>")
}
else {
    document.write("<h2>Option Invalid</h2>")
}
//select place in the screen to put




// comentário tambem