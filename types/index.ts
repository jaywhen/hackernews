export interface StoryData {
  id: number;
  by: string;
  title: string;
  url: string;
  hostname: string;
  time: string;
  score: number;
}

export interface Nav {
  id: number;
  link: string;
  name: NavItemName;
}

export interface UserInfo {
  id: string;
  created: number;
  about?: string;
  karma: number;
  submitted: number[];
}

export enum NavItemName {
  Index = 'Index',
  New = 'New',
  Ask = 'Ask',
  Show = 'Show',
  Jobs = 'Jobs',
}

export const NAVS = Object.values(NavItemName).map((n) =>
  n.toLowerCase()
) as string[];

export const CLICKEDTHEME: string =
  'decoration-solid underline underline-offset-4 decoration-2';
