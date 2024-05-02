export class Banks {
  constructor({
    id = 0,
    name= "",
    code= "",
    createdAt= "",
    updatedAt= "",
    }) {
      this.id = id;
      this.name = name;
      this.code = code;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }

  id;
  name;
  code;
  createdAt;
  updatedAt;
};