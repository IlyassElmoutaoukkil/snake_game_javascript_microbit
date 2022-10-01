let score = 1
let direction = "x"
let warmStart = 0
let ledLine = 5
let ledColomn = 5
let ledsAsString = `# . . . . . . . . . . . . . . . . . . . . . . . . .`

basic.forever(function () {
    if (direction = 'toRight') {
        warmStart =+ 1 
        if(warmStart==ledLine){
            warmStart
        }
        let ledsAsArray = ledsAsString.split(' ')
        console.log(ledsAsArray)
        basic.showLeds(ledsAsString)
    }
})
