//My basic tip calculator for the Udemy course.
let bills = [124, 48, 268];
let tips = [0, 0, 0];

function tipCalculator(bills) {

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] < 50) {
            tips[i] = 0.20 * bills[i];
        }
        else if (bills[i] >= 50 && bills[i] < 200) {
            tips[i] = 0.15 * bills[i];
        }
        else if (bills[i] >= 200) {
            tips[i] = 0.10 * bills[i];
        }

    }
}

tipCalculator(bills);

for (let i = 0; i < tips.length; i++) {
    console.log(tips[i]);
}
