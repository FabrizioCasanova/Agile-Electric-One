const toogleButton = document.getElementById('toogle-button')
const containerNavbar = document.getElementById('container-nav')
const buttonNavbar1 = document.getElementById('button-navbar1')
const buttonNavbar2 = document.getElementById('button-navbar2')
const buttonNavbar3 = document.getElementById('button-navbar3')
const buttonNavbar4 = document.getElementById('button-navbar4')
const listaItemNavbar = document.querySelector('.lista-items-navbar-disable')
const grande1 = document.querySelector('.grande1')
const grande2 = document.querySelector('.grande2')
const grande3 = document.querySelector('.grande3')
const grande4 = document.querySelector('.grande4')
const grande5 = document.querySelector('.grande5')
const grande6 = document.querySelector('.grande6')
const grande7 = document.querySelector('.grande7')
const grande8 = document.querySelector('.grande8')
const grande9 = document.querySelector('.grande9')
const grande10 = document.querySelector('.grande10')
const punto1 = document.querySelectorAll('.punto1')
const punto2 = document.querySelectorAll('.punto2')
const punto3 = document.querySelectorAll('.punto3')
const punto4 = document.querySelectorAll('.punto4')
const punto5 = document.querySelectorAll('.punto5')
const punto6 = document.querySelectorAll('.punto6')
const punto7 = document.querySelectorAll('.punto7')
const punto8 = document.querySelectorAll('.punto8')
const punto9 = document.querySelectorAll('.punto9')
const punto10 = document.querySelectorAll('.punto10')
const footer = document.querySelectorAll('.footer')
const navbar = document.querySelectorAll('.container-navbar')

punto1.forEach((cadaPunto, i)=> {

    punto1[i].addEventListener('click', ()=>{

        let posicion = i
        let operacion = posicion * -14.3

        grande1.style.transform = `translateX(${operacion}%)`

        punto1.forEach((cadaPunto, i)=> {

            punto1[i].classList.remove('activo')
        })

        punto1[i].classList.add('activo')
    })

})

punto2.forEach((cadaPunto, i)=> {

    punto2[i].addEventListener('click', ()=>{

        let posicion = i
        let operacion = posicion * -14.3

        grande2.style.transform = `translateX(${operacion}%)`

        punto2.forEach((cadaPunto, i)=> {

            punto2[i].classList.remove('activo')
        })

        punto2[i].classList.add('activo')
    })

})

punto3.forEach((cadaPunto, i)=> {

    punto3[i].addEventListener('click', ()=>{

        let posicion = i
        let operacion = posicion * -14.3

        grande3.style.transform = `translateX(${operacion}%)`

        punto3.forEach((cadaPunto, i)=> {

            punto3[i].classList.remove('activo')
        })

        punto3[i].classList.add('activo')
    })

})

punto4.forEach((cadaPunto, i)=> {

    punto4[i].addEventListener('click', ()=>{

        let posicion = i
        let operacion = posicion * -14.3

        grande4.style.transform = `translateX(${operacion}%)`

        punto4.forEach((cadaPunto, i)=> {

            punto4[i].classList.remove('activo')
        })

        punto4[i].classList.add('activo')
    })
})

punto5.forEach((cadaPunto, i)=> {

    punto5[i].addEventListener('click', ()=>{

        let posicion = i
        let operacion = posicion * -14.3

        grande5.style.transform = `translateX(${operacion}%)`

        punto5.forEach((cadaPunto, i)=> {

            punto5[i].classList.remove('activo')
        })

        punto5[i].classList.add('activo')
    })
})

punto6.forEach((cadaPunto, i)=> {

    punto6[i].addEventListener('click', ()=>{

        let posicion = i
        let operacion = posicion * -14.3

        grande6.style.transform = `translateX(${operacion}%)`

        punto6.forEach((cadaPunto, i)=> {

            punto6[i].classList.remove('activo')
        })

        punto6[i].classList.add('activo')
    })
})

punto7.forEach((cadaPunto, i)=> {

    punto7[i].addEventListener('click', ()=>{

        let posicion = i
        let operacion = posicion * -14.3

        grande7.style.transform = `translateX(${operacion}%)`

        punto7.forEach((cadaPunto, i)=> {

            punto7[i].classList.remove('activo')
        })

        punto7[i].classList.add('activo')
    })
})

punto8.forEach((cadaPunto, i)=> {

    punto8[i].addEventListener('click', ()=>{

        let posicion = i
        let operacion = posicion * -14.3

        grande8.style.transform = `translateX(${operacion}%)`

        punto8.forEach((cadaPunto, i)=> {

            punto8[i].classList.remove('activo')
        })

        punto8[i].classList.add('activo')
    })
})

punto9.forEach((cadaPunto, i)=> {

    punto9[i].addEventListener('click', ()=>{

        let posicion = i
        let operacion = posicion * -14.3

        grande9.style.transform = `translateX(${operacion}%)`

        punto9.forEach((cadaPunto, i)=> {

            punto9[i].classList.remove('activo')
        })

        punto9[i].classList.add('activo')
    })
})

punto10.forEach((cadaPunto, i)=> {

    punto10[i].addEventListener('click', ()=>{

        let posicion = i
        let operacion = posicion * -14.3

        grande10.style.transform = `translateX(${operacion}%)`

        punto10.forEach((cadaPunto, i)=> {

            punto10[i].classList.remove('activo')
        })

        punto10[i].classList.add('activo')
    })
})

        buttonNavbar1.addEventListener('click', () => {

            listaItemNavbar.classList.toggle("lista-items-navbar-active")
        
        })
        
        
        buttonNavbar2.addEventListener('click', () => {
        
            listaItemNavbar.classList.toggle("lista-items-navbar-active")
        
        })
        
        
        buttonNavbar3.addEventListener('click', () => {
        
            listaItemNavbar.classList.toggle("lista-items-navbar-active")
        
        })
        
        
        buttonNavbar4.addEventListener('click', () => {
        
            listaItemNavbar.classList.toggle("lista-items-navbar-active")
        
        })


toogleButton.addEventListener('click', () => {

    listaItemNavbar.classList.toggle("lista-items-navbar-active")
    

})

