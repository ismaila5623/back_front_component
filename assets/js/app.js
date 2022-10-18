let wrapper = document.querySelector('.wrapper')
let loginLink = document.querySelector('.login-link')
let registerLink = document.querySelector('.register-link')
let registerShadow = document.querySelector('.register-shadow')
let loginShadow = document.querySelector('.login-shadow')
let registerContainer = document.querySelector('.register-container')
let loginContainer = document.querySelector('.login-container')


loginLink.addEventListener('click', (e)=>{
    e.preventDefault();
    if(e.target.classList.contains('login-link')){
        setTimeout(()=>{
            registerShadow.classList.remove('hidden')
            loginShadow.classList.add('hidden')
        },300)
        wrapper.style.height = `${registerContainer.getBoundingClientRect().height}px`
        wrapper.style.transform = `rotateY(180deg)`
    }
})
registerLink.addEventListener('click', (e)=>{
    e.preventDefault();
    if(e.target.classList.contains('register-link')){
        setTimeout(()=>{
            loginShadow.classList.remove('hidden')
            registerShadow.classList.add('hidden')
        },200)
        wrapper.style.height = `${loginContainer.getBoundingClientRect().height}px`
        wrapper.style.transform = `rotateY(0deg)`
    }
})
