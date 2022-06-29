// 2022年6月22日00:39:44
interface User {
  id: number;
  age: number;
  name: string;
}

// 相当于: type PickUser = { age: number; name: string; }
// type OmitUser = Omit<User, "id">;

// 相当于: type PickUser = { id: number; age: number; }
// type PickUser = Pick<User, "id" | "age">;

type MyPick<T, K extends keyof T> = {
  [P in K]: T[K]
}


