type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUSer(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUSer({ name: "", email: "", isActive: true });

export {};
