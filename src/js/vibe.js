const vibes = [
" You are awesome!",
" Cake for everyone!",
" What's my age again?",
" Take off your pants and jacket!"

];


var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);
