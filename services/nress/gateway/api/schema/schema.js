const schema = `
  type Query {
    solicitations: [Solicitation],
    solicitationsById(filter: String, first: Int): [Solicitation]
  }

  type Mutation {
    updateSolicitation(
      _id: String!,
      SOLICITATION_ID: String!,
      SOLICITATION_NUMBER: String!,
      PUBLICATION_APPROVAL: Int!,
      FISCAL_YEAR: Int!,
      OMNIBUS_NUMBER: String,
      TITLE: String!,
      REVIEW_DATE:String,
      SELECTION_DATE: String,
      RELEASE_DATE: String!,
      CLOSE_DATE: String!,
      ANNOUNCEMENT_TYPE: String!,
      CONTAINER_TYPE: String!,
      AUTHORIZED_BY: String,
      WITHDRAWAL_REASON: String,
      WITHDRAWAL_DATE: String,
      WITHDRAWN_BY: String
    ): Solicitation,

    addSolicitation(
      SOLICITATION_ID: String!,
      SOLICITATION_NUMBER: String!,
      PUBLICATION_APPROVAL: Int!,
      FISCAL_YEAR: Int!,
      OMNIBUS_NUMBER: String,
      TITLE: String!,
      REVIEW_DATE:String,
      SELECTION_DATE: String,
      RELEASE_DATE: String!,
      CLOSE_DATE: String!,
      ANNOUNCEMENT_TYPE: String!,
      CONTAINER_TYPE: String!,
      AUTHORIZED_BY: String,
      WITHDRAWAL_REASON: String,
      WITHDRAWAL_DATE: String,
      WITHDRAWN_BY: String
    ): Solicitation,

    deleteSolicitation(
      _id: String!
    ): ActionResult
  }


  type Solicitation {
    _id: String!
    SOLICITATION_ID: String!,
    SOLICITATION_NUMBER: String!,
    PUBLICATION_APPROVAL: Int!,
    FISCAL_YEAR: Int!,
    OMNIBUS_NUMBER: String,
    TITLE: String!,
    REVIEW_DATE:String,
    SELECTION_DATE: String,
    RELEASE_DATE: String!,
    CLOSE_DATE: String!,
    ANNOUNCEMENT_TYPE: String!,
    CONTAINER_TYPE: String!,
    AUTHORIZED_BY: String,
    WITHDRAWAL_REASON: String,
    WITHDRAWAL_DATE: String,
    WITHDRAWN_BY: String
  }

  type ActionResult {
    id: String,
    result: String,
    error: String
  }
`;

 export default schema;
