export const emptyUser = {
  id:0,
  email:"",
  password:"",
  firstName:"",
  lastName:"",
  userJobTitle: "",
  associatedGroups: [],
  imgUrl: "",
}

export interface ILocalStorageUser {
  id: number,
  firstName: string,
}

export interface ILoginUser {
  email: string,
  password: string,
}

export interface IRegUser {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
}

export interface IUser {
  id: number,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  userJobTitle: string,
  associatedGroups: string[],
  imgUrl: string,
}
