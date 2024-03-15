'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 70,
  cursor: false
}) // Dream Coder|
.move(-11)
.type('Amazing ') //Amazing |Dream Coder
.pause(2000)
.move(null, { to: 'END'})  // Amazing Dream Coder|
.delete() //|
.type('Front-end Engineer') // Front-end Engineer|
.move(-9) //Front-end| Engineer
.pause(2000)
.delete(9) // | Engineer
.type('Back-end') // Back-end| Engineer
.pause(2000)
.delete(8) // | Engineer
.type('Full-stack') // Full-stack| Engineer
.move(9) // Full-stack Engineer|
.pause(5000)
.go();