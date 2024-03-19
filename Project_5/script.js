const button=document.querySelectorAll('.box')
const body=document.querySelector("body")

button.forEach(function(box){
    box.addEventListener('click',function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor='#FF004D'
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor='#96E9C6'
        }
        if(color.target.id === 'box3'){
            body.style.backgroundColor='#6895D2'
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor='#F9F07A'
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor='#F2AFEF'
        }
    })
})