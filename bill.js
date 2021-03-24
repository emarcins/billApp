const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const button = document.querySelector('.count');
const error = document.querySelector('.error');
const info = document.querySelector('.cost-info');
const cost = document.querySelector('span');

const bill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value); 
    const newTip = parseFloat(tip.value);
    const sum = (newPrice + (newPrice * newTip))/ newPeople;
    info.style.display = 'block';
    cost.textContent = sum.toFixed(2);
};

const checkPrice = () => {
    if(price.value == '' || people.value == '' || tip.value == 0){
        error.textContent = 'Wprowadź odpowiednią wartość!' 
        info.style.display = 'none'
    } else {  
        error.textContent = ''      
        bill()
    }
};

button.addEventListener('click', checkPrice)

