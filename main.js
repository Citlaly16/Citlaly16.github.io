var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Fronted Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    .deleteChars(7)
    .start();