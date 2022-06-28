// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
const newArray = array.flat(2);
console.log(newArray);

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [
  ['Hello', 'young', 'grasshopper!'],
  ['you', 'are'],
  ['learning', 'fast!'],
];
const newGreeting = greeting.flatMap((nested) => nested.join(' '));
console.log(newGreeting);

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
const stringGreeting = newGreeting.join(' ');
console.log(stringGreeting);

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const free = trapped.flat(Infinity);
console.log(free);

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   ';
const cleanEmail = userEmail3.trim();
console.log(cleanEmail);

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 };
const usersArr = Object.entries(users);
console.log(usersArr);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const newUsersArr = usersArr.map((user) => [user[0], user[1] * 2]);
console.log(newUsersArr);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const newUsersObj = Object.fromEntries(newUsersArr);
console.log(newUsersObj);

console.log(Math.pow(123123123, 9123192391023));
