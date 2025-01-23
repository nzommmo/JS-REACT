let Emp = '{ "employees" : ['+ 
'{ "firstName" : "John" , "lastName" : "Doe"},' +

'{ "firstName" : "John" , "lastName" : "Doe"},' +

'{ "firstName" : "John" , "lastName" : "Doe"}]}';

const obj1 = JSON.parse(Emp)

document.getElementById("Emp").innerHTML = obj1.employees[0].lastName