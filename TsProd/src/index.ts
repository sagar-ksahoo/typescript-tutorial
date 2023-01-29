class User {
  email: string;
  name: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const sagar = new User("sagar@gmail.com", "sagar");
