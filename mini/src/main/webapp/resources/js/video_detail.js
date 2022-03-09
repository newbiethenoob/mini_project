
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
    title.classList.toggle('clamp');
})

const btnElement = document.querySelector('.channel .metadata .info .btn');
btnElement.addEventListener('click', () =>  {
    btnElement.innerText = '구독 중';
})