const button = (document.querySelector('.buton') as HTMLButtonElement)
const nav = (document.querySelector('.nav') as HTMLElement)

button.addEventListener('click',() : void => {
      nav.classList.toggle('activo')
})
