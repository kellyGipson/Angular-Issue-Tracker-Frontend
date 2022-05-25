interface reaction {
  userThatReactedId: number,
  iconUsed: string,
}

interface IFetchIssue {
  id: number,
  createdByUserId: number,
  ticketName: string,
  ticketMessage: string,
  dateCreated: Date,
  reactions: reaction[],
  groupAssociated: string,
  issueStatus: "todo" | "inProgress" | "inReview" | "done",
}

interface ICreateIssue {
  createdByUserId: number,
  ticketName: string,
  ticketMessage: string,
  dateCreated: Date,
  reactions: reaction[],
  groupAssociated: string,
  issueStatus: "todo" | "inProgress" | "inReview" | "done",
}
