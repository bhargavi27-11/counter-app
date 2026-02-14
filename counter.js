let count = 0;

const countshown = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const reset = document.getElementById('reset');
const save = document.getElementById('save');
const load = document.getElementById('load');

function display(){
    countshown.textContent = count;
}

incrementBtn.addEventListener('click', () => {
    count++;
    display();
});

decrementBtn.addEventListener('click', () => {
    count--;
    display();
});

reset.addEventListener('click', () => {
    count = 0;
    display();
});

save.addEventListener('click', () => {
    localStorage.setItem('count', count);
    alert('Count saved!');
});

load.addEventListener('click', () => {
    const savedCount = localStorage.getItem('count');
    if (savedCount !== null) {
        count = parseInt(savedCount);
        display();
    }
});