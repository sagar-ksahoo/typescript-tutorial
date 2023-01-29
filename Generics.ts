const score: Array<number> = [];
const names: Array<string> = [];

function identity1(val: boolean | number): boolean | number {
  return val;
}

function identity2(val: any): any {
  return val;
}

function identity3<Type>(val: Type): Type {
  return val;
}

function identity4<T>(val: T): T {
  return val;
}

identity3("a");

function getSearchProducts<T>(products: T[]): T {
  const myIndex = 3;
  return products[myIndex];
}

const getSearchProducts2 = <T>(products: T[]): T => {
  const myIndex = 3;
  return products[myIndex];
};
////////////////////////////////////////

function anotherFunc<T, U>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

anotherFunc(2, "5");

export {};
