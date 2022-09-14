const Navslide = () =>{
    const mobilenav = document.querySelector('.mobilenav');
    const nav = document.querySelector('.navlink');

    mobilenav.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    } );
}

Navslide();