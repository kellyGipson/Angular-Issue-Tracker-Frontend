export interface IFetchGroup {
  id: number,
  groupName: string,
}

export interface ICreateGroup {
  groupName: string,
}

export const emptyGroup: IFetchGroup = {
  id: 0,
  groupName: ""
}
