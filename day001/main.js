const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.frame`)
sr.reveal(`.about__data, .skills__data`,{origin: 'left'})
sr.reveal(`.data`,{origin: 'right'})
sr.reveal(`.number`,{interval: 100})