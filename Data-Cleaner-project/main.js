//Users data
const users = [
  { name: 'Ron', age: 22, active: true },
  { name: 'Alex', age: 17, active: false },
  { name: 'Sam', age: null, active: true },
  { name: 'Jamie', age: 30, active: true }
];

// Returns active users 
const getActiveUsers = users =>
  users.filter(user => user.active === true);

//Returns Valid users using age
const getValidUsers = users =>
  users.filter(user =>
    user.age >= 18 && typeof user.age === "number"
  );

// Get the average age of users
const getAverageAge = users => {
  let total = 0;
  let count = 0;

  users.forEach(user => {
    total += user.age;
    count++;
  });

  if (count === 0) return 0;
  return Math.floor(total / count);
};

// Summerizes all the data 
const summary = users => {
  const validUsers = getValidUsers(users);
  const activeUsers = getActiveUsers(validUsers);

  return (
`The number of total users: ${users.length}
The number of valid users: ${validUsers.length}
The number of active users: ${activeUsers.length}
The average age of users: ${getAverageAge(validUsers)}`
  );
};

console.log(summary(users));
