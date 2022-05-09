export interface IProject {
  cover?: string;
  name: string;
  projectType?: string;
  technologies?: ITechnologies[];
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
  imageAlt?: string;
  tags?: string[];
  date?: string;
}

export interface ITechnologies {
  name: string;
}

export enum PROJECT_TYPE {
  OPEN_SOURCE = "Open Source",
  CLIENT = "Client",
  PERSONAL = "Personal",
  START_UP = "Work",
}
