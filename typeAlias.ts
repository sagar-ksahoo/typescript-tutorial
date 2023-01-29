// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // optional type
};

let myUser: User = {
  id: "0123",
  name: "sagar",
  email: "sagar@gmail.com",
  isActive: true,
};

myUser.email = "1234";

// combining types

type cardNumber = {
  cardnumber: number;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
