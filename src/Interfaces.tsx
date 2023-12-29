export interface userStatesInterface {
  apiKey?: string;
  appName?: string;
  createdAt?: string;
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  isAnonymous?: boolean;
  lastLoginAt?: string;
  photoURL?: string;
  providerData?: Array<any>;
  stsTokenManager?: Object;
  uid?: string;
}
export interface connects {
    type: string;
    userid: string;
}