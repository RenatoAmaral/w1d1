function obfuscate(argument) {
    // body...
    var password = argument.split("");
    for (i = 0 ; i < password.length ; i++){
      if(password[i] === 'a'){
        password[i] = '4';
      }else if(password[i] === 'e'){
        password[i] = '3';
      }else if(password[i] === 'o'){
        password[i] = '0';
      }else if(password[i] === 'l'){
        password[i] = '1';
    }
   }
   return password.join("");
}
var password = process.argv[2]
console.log(obfuscate(password));

