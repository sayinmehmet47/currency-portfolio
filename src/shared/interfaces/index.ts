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

export interface ExchangeRateData {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string;
  conversion_rates: {
    [currencyCode: string]: number;
  };
}
