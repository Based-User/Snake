    let c = document.getElementById('can')
    ctx=c.getContext("2d")
    let appleimage = new Image()
    appleimage.src = "apple.webp"
    score1= document.getElementById("scor")
c.style.border = 'black 2px solid'
c.width=1800
c.height=700
    let colos = 1800/30
    let rows = 700/30
    let snake = [[3,0],[2,0],[1,0]]
    let dx = 1 //двигаешься ли влево или вправо
    let dy = 0 //двигаешься ли вверх или вниз
    let gameover = false
    let applex = Math.floor(Math.random()*50)
    let appley = Math.floor(Math.random()*25)
    let score = 0
document.addEventListener("keydown",function(event){
    if(gameover)return
    if((event.key=="w"||event.key=="W")&&dy!=1){
        dx=0
        dy=-1
    }
        if((event.key=="s"||event.key=="S")&&dy!=-1){
        dx=0
        dy=1
    }
            if((event.key=="d"||event.key=="D")&&dx!=-1){
        dx=1
        dy=0
    }
                if((event.key=="a"||event.key=="A")&&dx!=1){
        dx=-1
        dy=0
    }
})
function game(){
    if(gameover)return
    let headx=snake[0][0]+dx
    let heady=snake[0][1]+dy
    snake.unshift([headx,heady])
    if(headx == applex && heady == appley){
applex = Math.floor(Math.random()*60)
appley = Math.floor(Math.random()*22)
score += 1
score1.textContent = "количество очков:" + score
    }
    else{snake.pop()}
    ctx.fillStyle="rgb(28, 212, 126)"
    ctx.fillRect(0,0,1800,700)
    ctx.fillStyle="rgb(21, 180, 0)"
    for(let i = 0;i<snake.length;i++){
        ctx.fillRect(snake[i][0]*30,snake[i][1]*30,30,30)
    }
ctx.drawImage(appleimage, applex*30, appley*30, 30, 30)
    if(headx > 60 || headx < 0 || heady > 22 || heady < 0){
    gameover = true
    }
    for(let i = 1;i<snake.length;i++){
        if(headx==snake[i][0] && heady==snake[i][1]){
            gameover = true
        }
    }
}
setInterval(game,175)
