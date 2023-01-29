let score: number | string = 45;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let sagar: User | Admin = { name: "sagar", id: 334 };

sagar = { username: "sks", id: 334 };

function getDbId(id: number | string) {}

getDbId(5);
getDbId("5");

// array

const data: number[] = [1, 2, 3];
const dat2: string[] = ["a", "b", "c"];
const data3: (number | string)[] = ["a", 2, 3];

let seatAllotment: "aisle" | "window" | "middle";

seatAllotment = "aisle";
// seatAllotment = "crew";

export {};
