interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponName: string): number;
}

interface Admin extends User {
  role: "ta" | "admin" | "learner";
}

const sagar: Admin = {
  dbId: 11,
  email: "sagar@gmail.com",
  userId: 121,
  role: "admin",
  startTrial() {
    return "abc";
  },
  getCoupon(name: "sagar") {
    return 100;
  },
};

export {};
