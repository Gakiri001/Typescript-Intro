"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let age = [20, 21, 22];
let user = [1, "Julius"];
console.log(user[0].toString);
console.log(user[1].length);
user.push(1);
let mySize = 2;
console.log(mySize);
function CalculateTax(income, taxYear) {
    if ((taxYear || 2022) < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(CalculateTax(10000, 2023));
let employee = {
    id: 1,
    name: "Julius",
    department: "Accounts",
    retire: (date) => {
        console.log(date);
    },
};
console.log(employee);
employee.retire(new Date());
let employee1 = {
    id: 2,
    name: "Gakiri",
    department: "IT",
    retire: (date) => {
        console.log(date);
    },
};
console.log(employee1);
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs(10), 'Lbs');
console.log(kgToLbs("10kg"), 'Lbs');
let textBox = {
    drag: () => 9,
    resize: () => 7
};
console.log(textBox.drag());
console.log(textBox.resize());
let quantity = 50;
let metric = 'cm';
console.log('Your Rating is', quantity);
console.log('The size is 100', metric);
function greet(name) {
    if (name) {
        return name.toUpperCase();
    }
    else {
        return "Oyah";
    }
}
console.log("Hello", greet(""));
//# sourceMappingURL=index.js.map