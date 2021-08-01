let intro = document.querySelector('.intro');
let title = document.querySelector('.title');
let titleSpan = document.querySelectorAll('.titleSpan');

 window.addEventListener('DOMContentLoaded',()=>{
        titleSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx+1)*400)
        });

        setTimeout(()=>{
            titleSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx+1)*50)

            })
        },2000);

        setTimeout(()=>{
            intro.style.top='-100vh';   
        }, 2300)


}) 











