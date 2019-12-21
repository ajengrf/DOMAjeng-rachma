const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(function (clicked) {
    clicked.addEventListener('click', function () {
        playNote(clicked)
    })
})

function playNote(clicked) {
    const noteAudio = document.getElementById(clicked.dataset.note) // ngakses value -> element.dataset.keyname // karena di HTMLnya udah urutan
    noteAudio.currentTime = 0
    noteAudio.play()
    clicked.classList.add('active') // seolah-olah hover

    noteAudio.addEventListener('ended', stop) //berhenti setelah audio selesai
    function stop() {
        clicked.classList.remove('active')
    }
}

document.addEventListener('keydown', function(event) {
    const whiteKeyboard = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',']
    const blackKeyboard = ['s', 'd', 'g', 'h', 'j']

    const pressKey = event.key // keyboard yang ditekan

    const pressWhiteKeyboard = whiteKeyboard.indexOf(pressKey) // outputnya number of index di whiteKeyboard
    const pressBlackKeyboard = blackKeyboard.indexOf(pressKey)
    
    if (event.repeat) { // mencegah kalo diteken lama bunyi terus
        return
    }
    if (pressWhiteKeyboard > -1) { // karna indexnya mulai dari 0
        playNote(whiteKeys[pressWhiteKeyboard])
    }
    if (pressBlackKeyboard > -1) {
        playNote(blackKeys[pressBlackKeyboard])
    }
})