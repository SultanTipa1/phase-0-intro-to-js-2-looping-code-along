// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}
age = 31;
age

for (let age = 31; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

for (let age = 32; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

function writeCards(names, event) {
    // Step 1: Create a new, empty array to hold the messages
    let messages = [];

    // Step 2: Iterate through the input array
    for (let i = 0; i < names.length; i++) {
        // Build out the 'thank you' message for each name
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        
        // Add the message to the new array
        messages.push(message);
    }

    // Step 3: Return the new array
    return messages;
}

// Example usage
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));


function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  countDown(10);
  