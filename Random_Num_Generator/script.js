const my1 = document.getElementById('my1');
const my2 = document.getElementById('my2'); // label
const my3 = document.getElementById('my3'); // input

const min = 1;
const max = 6;

// Initialize input to empty
if (my3) my3.value = '';

// Safely attach event only if button exists
if (my1) {
    my1.addEventListener('click', function () {
        const randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (my3) {
            my3.value = randomnumber;
        }
    });
}
