function addTwo(num: number): number {
  return num + 2;
  //   return "hello";
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUSer = (name: string, email: string, isPaid: boolean = false) => {};

function consoleError(err: string): void {
  console.log(err);
}

function handleError(err: string): never {
  throw new Error(err);
}

addTwo(5);
getUpper("sagar");
signUpUser("sagar", "sagar@gmail.com", false);
loginUSer("x", "x@x.com");

const getHello = (s: string): string => {
  return "";
};

// function getValue(myVal: number) {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

export {};
