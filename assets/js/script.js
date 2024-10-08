"use script"

//1)
function getReverseText(text) {
    let res = "";
    for (let i = text.length - 1; i >= 0; i--) {
        res += text[i];
    }
    console.log(res);
}

getReverseText("Samir")

//2)
function getBirthYear(number) {
    let currentDate = new Date();
    let res = currentDate.getFullYear() - number;
    console.log(res);
}

getBirthYear(18)

//3)

let employee1 = {
    id: 1,
    fullname: "Samir Eliquliyev",
    age: 18,
    salary: 5000
}
let employee2 = {
    id: 2,
    fullname: "Nihat Soltanov",
    age: 18,
    salary: 10000
}
let employee3 = {
    id: 3,
    fullname: "Ferdi Isyailzade",
    age: 19,
    salary: 300
}
let employee4 = {
    id: 4,
    fullname: "Mehemmed Memmedov",
    age: 25,
    salary: 500
}
let employee5 = {
    id: 5,
    fullname: "Revan Qocayev",
    age: 20,
    salary: 50000
}

let employees = [employee1, employee2, employee3, employee4, employee5]

//3) => 1)

function getEmployeesCount(array) {
    console.log(array.length);
}

getEmployeesCount(employees)

//3) => 2)

function getEmployeesAverageSalary(array) {
    let salary = 0;
    array.forEach(element => {
        salary += element.salary
    });
    console.log(salary / array.length);
}

getEmployeesAverageSalary(employees)


//3) => 3)
function searchEmployeeByFullName(searchText, array) {
    array.forEach(element => {
        if (element.fullname.includes(searchText)) {
            console.log(element.fullname + " " + element.age + " Salary:" + element.salary);
        }
    });
}

searchEmployeeByFullName("Nihat", employees)