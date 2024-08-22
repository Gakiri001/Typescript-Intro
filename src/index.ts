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
employee.retire(new Date())
