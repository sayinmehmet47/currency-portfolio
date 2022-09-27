export interface IAuth {
  isRegistered: boolean;
  isLogin: boolean;
  user: IUser;
}

export type IUser = {
  name: string;
  surname: string;
};

export interface IPortfolio {
  totalAsset: number;
  acronym: string;
  name: string;
}

export type HeadProps = {
  title?: string;
  description?: string;
};

export type Theme = {
  body: string;
  text: string;
  toggleBorder: string;
  gradient: string;
};
