const accountId = 14443
let accountEmail = "pushpanjali@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


// accountId = 2 // not allowed

accountEmail = "pk@pk.com"
accountPassword = "54321"
accountCity = "pune"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and fundamental scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);