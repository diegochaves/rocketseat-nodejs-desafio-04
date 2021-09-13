import { v4 as uuid } from "uuid";

class User {
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
      this.created_at = new Date();
    }
    this.updated_at = new Date();
    this.admin = false;
    return this;
  }
}

export { User };
