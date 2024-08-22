let sales = 123_456_789;
let course = "TypeScript";
let is_published: boolean = true;

//any
let level;

function render(document: any) {
  console.log(document);
}

//Array
let numbers = [1, 2, 3];
let age: number[] = [20, 21, 22];

// tuple
let user: [number, string] = [1, "Julius"];
console.log(user[0].toString); //access the first dataType in the tuple
console.log(user[1].length); //access the second dataType in the tuple
user.push(1);

//Enums
// Use PascalCase - The 1st Char shld be capital
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

//Functions -> Always annotate your function to specify the return value.
function CalculateTax(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

console.log(CalculateTax(10000, 2023));

//Objects
let employee: {
  readonly id: number;
  name: string;
  department: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Julius",
  department: "Accounts",
  retire: (date: Date) => {
    console.log(date);
  },
};

console.log(employee);
employee.retire(new Date());

//Advanced Types
//1. Type Aliases. -> DRY - Don't Repeat Yourself

type Employee1 = {
  readonly id: number;
  name: string;
  department: string;
  retire: (date: Date) => void;
};

let employee1: Employee1 = {
  id: 2,
  name: "Gakiri",
  department: "IT",
  retire: (date: Date) => {
    console.log(date);
  },
};

console.log(employee1);

//Union Type
function kgToLbs(weight: number | string): number {
  //Narrowing
  if(typeof weight === 'number'){
    return weight * 2.2
  }
  else{
    return parseInt(weight) * 2.2
  }
}

console.log(kgToLbs(10), 'Lbs')
console.log(kgToLbs("10kg"), 'Lbs')
