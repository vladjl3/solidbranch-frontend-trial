import { Name } from "./name.interface";

export interface Transaction {
  _id: string;
  name: Name;
  type: string;
  phone: string;
  amount: number;
  address: string;
  company: string;
}
