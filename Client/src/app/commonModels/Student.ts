import { ClassGroup } from "./ClassGroup";

export interface Student{
  id: number;
  firstName: string;
  lastName: string;
  // groupId: number;
  classGroup: ClassGroup;
}
