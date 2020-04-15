
let billObject = {
    bills: [124, 48, 268, 180, 42],
    tips: [0, 0, 0, 0, 0],
    totals: [0, 0, 0, 0, 0],
    calculateTip: function() {
        for (let i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips[i] = this.bills[i] * 0.20;
            }
            else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                this.tips[i] = this.bills[i] * 0.15;
            }
            else if (this.bills[i] > 200) {
                this.tips[i] = this.bills[i] * 0.10;
            }
        }
    },
    calculateTotal: function() {
        for (let i = 0; i < this.bills.length; i++) {
            this.totals[i] = this.tips[i] + this.bills[i];
        }
    }
}

billObject.calculateTip();
billObject.calculateTotal();



for (let i = 0; i < billObject.tips.length; i++) {
    console.log(billObject.tips[i]);
}
for (let i = 0; i < billObject.totals.length; i++) {
    console.log(billObject.totals[i]);
}