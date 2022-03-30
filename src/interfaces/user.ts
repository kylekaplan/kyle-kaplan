import { IMediaLink } from "./mediaLink";
import { IProject } from "./project";
import { ISkill } from "./skill";

export interface IUser {
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  description?: string;
  mediaLinks?: IMediaLink[];
  projects?: IProject[];
  skills?: ISkill[];
}
