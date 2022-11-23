(function(){
    let canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    // canvas.classList.add('canvas')
    w = canvas.width = innerWidth
    h = canvas.height = innerHeight
    particles = [],
    properties = {
        bgColor: '#141424',
        particleColor: 'rgba(255, 0, 255, 1)',
        particleRadius : 3,
        particleCount : 100,
        particleMavVelosity: 0.3,
        lineLenght : innerWidth / 5,
        particleLive: 10
    }
    document.querySelector('.intro__container').appendChild(canvas)
    window.onresize = function() {
        w = canvas.width = innerWidth
        h = canvas.height = innerHeight
    }

    class Particle {
        constructor(){
            this.x = Math.random()*w,
            this.y = Math.random()*h
            this.velosityX = Math.random() * (properties.particleMavVelosity * 2) - properties.particleMavVelosity
            this.velosityY = Math.random() * (properties.particleMavVelosity * 2) - properties.particleMavVelosity
            this.live = Math.random()*properties.particleLive*60
        }
        position(){
            this.x + this.velosityX > w && this.velosityX > 0 || this.x + this.velosityX < 0 && this.velosityX < 0 ? this.velosityX*= -1: this.velosityX
            this.y + this.velosityY > h && this.velosityY > 0 || this.y + this.velosityY < 0 && this.velosityY < 0 ? this.velosityY*= -1: this.velosityY
            this.x += this.velosityX
            this.y +=this.velosityY
        }
        reDraw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2)
            ctx.closePath()
            ctx.fillStyle = properties.particleColor
            ctx.fill()
        }
        reCalculateLive(){
            if(this.live < 1) {
                this.x = Math.random()*w,
                this.y = Math.random()*h
                this.velosityX = Math.random() * (properties.particleMavVelosity * 2) - properties.particleMavVelosity
                this.velosityY = Math.random() * (properties.particleMavVelosity * 2) - properties.particleMavVelosity
                this.live = Math.random()*properties.particleLive*60
            }
            this.live--
        }
    }

    function reDrawBackGround(){
        ctx.fillStyle = properties.bgColor
        ctx.fillRect(0, 0, w, h)
    }

    function drawLines() {
        let x1, y1, x2, y2, length, opacity = properties
        for(let i in particles) {
            for(let y in particles) {
                x1 = particles[i].x
                y1 = particles[i].y
                x2 = particles[y].x
                y2 = particles[y].y
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
                if(length < properties.lineLenght) {
                    opacity = 1-length/properties.lineLenght
                    ctx.lineWidth = '0.5'
                    ctx.strokeStyle = 'rgba(255, 0, 255, '+opacity+')'
                    ctx.beginPath()
                    ctx.moveTo(x1, y1)
                    ctx.lineTo(x2, y2)
                    ctx.closePath()
                    ctx.stroke()
                }
            }
        }
    }

    function reDrawParticles() {
        for(let i in particles) {
            particles[i].reCalculateLive()
            particles[i].position()
            particles[i].reDraw()
        }
    }

    function loop () {
        reDrawBackGround()
        reDrawParticles()
        drawLines()
        requestAnimationFrame(loop)
    }

    function init () {
        for(let i = 0; i < properties.particleCount; i++) {
            particles.push(new Particle)
        }
        loop()
    }

    init()
}())