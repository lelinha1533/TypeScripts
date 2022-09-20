function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.textContent = greeter(user);
// compile: Git Bash
// tsc greeter.ts
