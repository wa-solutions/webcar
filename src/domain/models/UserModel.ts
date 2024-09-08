export interface UserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateUserProps = Omit<UserModel, 'id' | 'createdAt' | 'updatedAt'>