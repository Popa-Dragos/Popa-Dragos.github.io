const Navslide = () => {
    const mobilenav = document.querySelector('.mobilenav');
    const nav = document.querySelector('.navlink');

    mobilenav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

Navslide();


const BMi = () => {
    
    let button = document.querySelector('#btn1')
    button.addEventListener("click", () => {
    let height = parseInt(document.querySelector('#height1').value)
    let weight = parseInt(document.querySelector('#weight1').value)
    let result = document.querySelector('#rezultatbmi')
    
    let weight_status=false, height_status=false;
    
    if(height === '' || isNaN(height) || (height <= 100)){
        document.getElementById('height_error').innerHTML = 'Introduceti o inaltime valida';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true; }

        if(weight === '' || isNaN(weight) || (weight <= 30)){
            document.getElementById('weight_error').innerHTML = 'Introduceti o greutate valida';
        }else{
            document.getElementById('weight_error').innerHTML = ''; 
            weight_status=true;
        }
    
        if(height_status && weight_status){
            const bmi = (weight / ((height*height)/10000)).toFixed(2);
    
            result.innerHTML = 'Bmi-ul tau este = ' + bmi;
        }else{
    
            result.innerHTML = '';
        }})
    
}       

BMi();