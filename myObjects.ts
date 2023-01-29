const User = {
  name: "sagar",
  email: "sagar@gmail.com",
  isActive: true,
};

function createUser({ name: string, isAuth: boolean }) {}

createUser({ name: "sagar", isAuth: true });

function createCourse(): { name: string; price: number } {
  return { name: "javascript", price: 499 };
}

export {};
