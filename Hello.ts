function greeter(person:string) {
    return "Hello, " + person;
  }
   
  let user = "Jane User";
   
  document.body.textContent = greeter(user);

  // compile:
  // tsc greeter.ts