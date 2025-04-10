let counter = 0;
const btn = document.querySelector('button');

function openModal(){

    if(counter <= 0){
        counter++;
        btn.innerText = 'x';
    }else{
        counter = 0;
        btn.innerText = '=';
    }
    console.log(counter);
    document.querySelector('.modal').classList.toggle('active');
}