import { User } from '../models/user';

export interface ICrudActions {
loadData(): void;
editUser(index: number): void;
deleteUser(index: number): void;
saveUser(index: number): void;
cancelEdit(index: number): void;
}