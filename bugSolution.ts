function greeter(person: string | string[]) {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); //This will work correctly now
console.log(greeter("Jane Doe")); //This also works correctly