const users = [
  { name: 'Ron', age: 22, active: true },
  { name: 'Alex', age: 17, active: false },
  { name: 'Sam', age: null, active: true },
  { name: 'Jamie', age: 30, active: true }
];

getActiveUsers = users => users.filter(user => {user.active === "true"})

console.log(users)

//getValidUsers = users => users.filter( user=> if (user.age > = 18 && typeof user.age === “number”)) 
//getAverageAge = users =>  let total = 0  let count =0 users.forEach( user => user.age)
