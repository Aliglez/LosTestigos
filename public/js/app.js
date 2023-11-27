const buttom = (document.querySelector('.buton'));
const navigation = (document.querySelector('.nav'));

buttom.addEventListener('click', () =>{
    navigation.classList.toggle('active');
})