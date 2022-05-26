export interface reaction {
  userThatReactedId: number,
  iconUsed: string,
}

export const emptyIssue: IFetchIssue = {
  id: 0,
  createdByUserName: "",
  issueName: "",
  issueMessage: "",
  dateCreated: "",
  reactions: [],
  groupAssociated: "",
  issueStatus: "todo",
}

export interface IFetchIssue {
  id: number,
  createdByUserName: string,
  issueName: string,
  issueMessage: string,
  dateCreated: string,
  reactions: reaction[],
  groupAssociated: string,
  issueStatus: "todo" | "inProgress" | "inReview" | "done",
}

export interface ICreateIssue {
  createdByUserId: number,
  issueName: string,
  issueMessage: string,
  dateCreated: string,
  reactions: reaction[],
  groupAssociated: string,
  issueStatus: "todo" | "inProgress" | "inReview" | "done",
}
