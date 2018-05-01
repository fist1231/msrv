import { list_all_solicitations } from '../controllers/solicitationsController';
// import Solicitations from '../models/solicitationsModel';
import axios from 'axios';
import config from '../../config/config.json'

const solicitationsServiceUrl = `${config.solicitations_address}`;


const getSolicitationsById = (filter) => {
  console.log('********** Gateway: solicitationList called #######');
  // console.log('********** Gateway: solicitationList filter =' + JSON.stringify(filter));
  // console.log('********** Gateway: solicitationList targetUrl =' + targetUrl);
  return new Promise((resolve, reject) => {
    axios({
        url: `${solicitationsServiceUrl}/graphql`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        // headers: { 'Content-Type': 'application/graphql' },
        data: {
          query: `{
            solicitationsById (filter: "${filter}") {
                _id,
                SOLICITATION_ID,
                SOLICITATION_NUMBER,
                PUBLICATION_APPROVAL,
                FISCAL_YEAR,
                OMNIBUS_NUMBER,
                TITLE,
                REVIEW_DATE,
                SELECTION_DATE,
                RELEASE_DATE,
                CLOSE_DATE,
                ANNOUNCEMENT_TYPE,
                CONTAINER_TYPE,
                AUTHORIZED_BY,
                WITHDRAWAL_REASON,
                WITHDRAWAL_DATE,
                WITHDRAWN_BY
            }
          }`
        }
      })
      .then(response => {
          console.log('********** Gateway: getSolicitationsById success');
          resolve(response.data.data.solicitationsById);
      })
      .catch(error => {
        console.log('********** Gateway: getSolicitationsById error:' + error);
        reject(error);
      });
    })

};

const getSolicitationsById_old = (id) => {
  console.log('$$$$$$$$ id: ' + id);
    return new Promise((resolve, reject) => {
        Solicitations.find({'TITLE': new RegExp('.*' + id + '.*', "i")}, (err, solicitations) => {
            if (err) {
              console.log('^^^^^ Error: ' + err);
              reject(err);
            } else {
              console.log('^^^^^ id: ' + id);
              resolve(solicitations);
            }
        })
    })
};

const updateSolicitation = (
  _id,
  SOLICITATION_ID,
  SOLICITATION_NUMBER,
  PUBLICATION_APPROVAL,
  FISCAL_YEAR,
  OMNIBUS_NUMBER,
  TITLE,
  REVIEW_DATE,
  SELECTION_DATE,
  RELEASE_DATE,
  CLOSE_DATE,
  ANNOUNCEMENT_TYPE,
  CONTAINER_TYPE,
  AUTHORIZED_BY,
  WITHDRAWAL_REASON,
  WITHDRAWAL_DATE,
  WITHDRAWN_BY
) => {
  console.log('uuuuuuuuuu updateSolicitation _id: ' + _id);
   // console.log('uuuuuuuuuu updateSolicitation REVIEW_DATE: ' + JSON.stringify(REVIEW_DATE));
   // console.log('uuuuuuuuuu updateSolicitation SELECTION_DATE: ' + SELECTION_DATE);
   // console.log('uuuuuuuuuu updateSolicitation RELEASE_DATE: ' + JSON.stringify(RELEASE_DATE));
   // console.log('uuuuuuuuuu updateSolicitation CLOSE_DATE: ' + CLOSE_DATE);
   // console.log('uuuuuuuuuu updateSolicitation WITHDRAWAL_DATE: ' + WITHDRAWAL_DATE);
    return new Promise((resolve, reject) => {
      axios({
          url: `${solicitationsServiceUrl}/graphql`,
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          // headers: { 'Content-Type': 'application/graphql' },
          data: {
            query: `mutation { updateSolicitation (
                _id: ${JSON.stringify(_id)},
                SOLICITATION_ID: ${JSON.stringify(SOLICITATION_ID)},
                SOLICITATION_NUMBER: ${JSON.stringify(SOLICITATION_NUMBER)},
                PUBLICATION_APPROVAL: ${JSON.stringify(PUBLICATION_APPROVAL)},
                FISCAL_YEAR: ${JSON.stringify(FISCAL_YEAR)},
                OMNIBUS_NUMBER: ${JSON.stringify(OMNIBUS_NUMBER)},
                TITLE: ${JSON.stringify(TITLE)},
                REVIEW_DATE: ${JSON.stringify(REVIEW_DATE)},
                SELECTION_DATE: ${JSON.stringify(SELECTION_DATE)},
                RELEASE_DATE: ${JSON.stringify(RELEASE_DATE)},
                CLOSE_DATE: ${JSON.stringify(CLOSE_DATE)},
                ANNOUNCEMENT_TYPE: ${JSON.stringify(ANNOUNCEMENT_TYPE)},
                CONTAINER_TYPE: ${JSON.stringify(CONTAINER_TYPE)},
                AUTHORIZED_BY: ${JSON.stringify(AUTHORIZED_BY)},
                WITHDRAWAL_REASON: ${JSON.stringify(WITHDRAWAL_REASON)},
                WITHDRAWAL_DATE: ${JSON.stringify(WITHDRAWAL_DATE)},
                WITHDRAWN_BY: ${JSON.stringify(WITHDRAWN_BY)}
              )
                   {
                     _id,
                     SOLICITATION_ID,
                     SOLICITATION_NUMBER,
                     PUBLICATION_APPROVAL,
                     FISCAL_YEAR,
                     OMNIBUS_NUMBER,
                     TITLE,
                     REVIEW_DATE,
                     SELECTION_DATE,
                     RELEASE_DATE,
                     CLOSE_DATE,
                     ANNOUNCEMENT_TYPE,
                     CONTAINER_TYPE,
                     AUTHORIZED_BY,
                     WITHDRAWAL_REASON,
                     WITHDRAWAL_DATE,
                     WITHDRAWN_BY
                   }
              }`
          }
        })
        .then(response => {
            // console.log('uuuuuuuuuu Gateway: updateSolicitation success:' + JSON.stringify(response.data));
            console.log('uuuuuuuuuu Gateway: updateSolicitation success');
            resolve(response.data.data.updateSolicitation);
        })
        .catch(error => {
          console.log('uuuuuuuuuu Gateway: updateSolicitation error:' + error);
          reject(error);
        });
    })
};


const addSolicitation = (
  SOLICITATION_ID,
  SOLICITATION_NUMBER,
  PUBLICATION_APPROVAL,
  FISCAL_YEAR,
  OMNIBUS_NUMBER,
  TITLE,
  REVIEW_DATE,
  SELECTION_DATE,
  RELEASE_DATE,
  CLOSE_DATE,
  ANNOUNCEMENT_TYPE,
  CONTAINER_TYPE,
  AUTHORIZED_BY,
  WITHDRAWAL_REASON,
  WITHDRAWAL_DATE,
  WITHDRAWN_BY
) => {
  console.log('++++++++++ addSolicitation id: ' + SOLICITATION_ID);
  // console.log('++++++++++ addSolicitation OMNIBUS_NUMBER: ' + OMNIBUS_NUMBER);
  // console.log('++++++++++ addSolicitation AUTHORIZED_BY: ' + AUTHORIZED_BY);
    return new Promise((resolve, reject) => {
      axios({
          url: `${solicitationsServiceUrl}/graphql`,
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          // headers: { 'Content-Type': 'application/graphql' },
          data: {
            query: `mutation { addSolicitation (
                  SOLICITATION_ID: ${JSON.stringify(SOLICITATION_ID)},
                  SOLICITATION_NUMBER: ${JSON.stringify(SOLICITATION_NUMBER)},
                  PUBLICATION_APPROVAL: ${JSON.stringify(PUBLICATION_APPROVAL)},
                  FISCAL_YEAR: ${JSON.stringify(FISCAL_YEAR)},
                  OMNIBUS_NUMBER: ${JSON.stringify(OMNIBUS_NUMBER)},
                  TITLE: ${JSON.stringify(TITLE)},
                  REVIEW_DATE: ${JSON.stringify(REVIEW_DATE)},
                  SELECTION_DATE: ${JSON.stringify(SELECTION_DATE)},
                  RELEASE_DATE: ${JSON.stringify(RELEASE_DATE)},
                  CLOSE_DATE: ${JSON.stringify(CLOSE_DATE)},
                  ANNOUNCEMENT_TYPE: ${JSON.stringify(ANNOUNCEMENT_TYPE)},
                  CONTAINER_TYPE: ${JSON.stringify(CONTAINER_TYPE)},
                  AUTHORIZED_BY: ${JSON.stringify(AUTHORIZED_BY)},
                  WITHDRAWAL_REASON: ${JSON.stringify(WITHDRAWAL_REASON)},
                  WITHDRAWAL_DATE: ${JSON.stringify(WITHDRAWAL_DATE)},
                  WITHDRAWN_BY: ${JSON.stringify(WITHDRAWN_BY)}
                )
                        {
                          _id,
                          SOLICITATION_ID,
                          SOLICITATION_NUMBER,
                          PUBLICATION_APPROVAL,
                          FISCAL_YEAR,
                          OMNIBUS_NUMBER,
                          TITLE,
                          REVIEW_DATE,
                          SELECTION_DATE,
                          RELEASE_DATE,
                          CLOSE_DATE,
                          ANNOUNCEMENT_TYPE,
                          CONTAINER_TYPE,
                          AUTHORIZED_BY,
                          WITHDRAWAL_REASON,
                          WITHDRAWAL_DATE,
                          WITHDRAWN_BY
                        }
                }`
            }
        })
        .then(response => {
            // console.log('++++++++++ Gateway: addSolicitation success:' + JSON.stringify(response.data));
            console.log('++++++++++ Gateway: addSolicitation success');
            resolve(response.data.data.addSolicitation);
        })
        .catch(error => {
          console.log('++++++++++ Gateway: addSolicitation error:' + error);
          reject(error);
        });
    })
};


const deleteSolicitation = (solId) => {
  console.log('---------- deleteSolicitation solId: ' + solId);
    return new Promise((resolve, reject) => {
      axios({
          url: `${solicitationsServiceUrl}/graphql`,
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          // headers: { 'Content-Type': 'application/graphql' },
          data: {
            query: `mutation { deleteSolicitation (
                  _id: ${JSON.stringify(solId)}
                )
                        {
                          id,
                          result,
                          error
                        }
                }`
            }
        })
        .then(response => {
            // console.log('---------- Gateway: addSolicitation success:' + JSON.stringify(response.data));
            console.log('---------- Gateway: deleteSolicitation success');
            resolve(response.data.data.deleteSolicitation);
        })
        .catch(error => {
          console.log('---------- Gateway: deleteSolicitation error:' + error);
          reject(error);
        });
    })
};


const resolvers  = {
  Query: {
    solicitations: () => solicitationList(),
    solicitationsById: (_, { filter }) => getSolicitationsById(filter),
  },
  Mutation: {
    updateSolicitation: (_, {
      _id,
      SOLICITATION_ID,
      SOLICITATION_NUMBER,
      PUBLICATION_APPROVAL,
      FISCAL_YEAR,
      OMNIBUS_NUMBER,
      TITLE,
      REVIEW_DATE,
      SELECTION_DATE,
      RELEASE_DATE,
      CLOSE_DATE,
      ANNOUNCEMENT_TYPE,
      CONTAINER_TYPE,
      AUTHORIZED_BY,
      WITHDRAWAL_REASON,
      WITHDRAWAL_DATE,
      WITHDRAWN_BY
    }) => updateSolicitation(
            _id,
            SOLICITATION_ID,
            SOLICITATION_NUMBER,
            PUBLICATION_APPROVAL,
            FISCAL_YEAR,
            OMNIBUS_NUMBER,
            TITLE,
            REVIEW_DATE,
            SELECTION_DATE,
            RELEASE_DATE,
            CLOSE_DATE,
            ANNOUNCEMENT_TYPE,
            CONTAINER_TYPE,
            AUTHORIZED_BY,
            WITHDRAWAL_REASON,
            WITHDRAWAL_DATE,
            WITHDRAWN_BY
    ),

    addSolicitation: (_, {
      SOLICITATION_ID,
      SOLICITATION_NUMBER,
      PUBLICATION_APPROVAL,
      FISCAL_YEAR,
      OMNIBUS_NUMBER,
      TITLE,
      REVIEW_DATE,
      SELECTION_DATE,
      RELEASE_DATE,
      CLOSE_DATE,
      ANNOUNCEMENT_TYPE,
      CONTAINER_TYPE,
      AUTHORIZED_BY,
      WITHDRAWAL_REASON,
      WITHDRAWAL_DATE,
      WITHDRAWN_BY
    }) => addSolicitation(
            SOLICITATION_ID,
            SOLICITATION_NUMBER,
            PUBLICATION_APPROVAL,
            FISCAL_YEAR,
            OMNIBUS_NUMBER,
            TITLE,
            REVIEW_DATE,
            SELECTION_DATE,
            RELEASE_DATE,
            CLOSE_DATE,
            ANNOUNCEMENT_TYPE,
            CONTAINER_TYPE,
            AUTHORIZED_BY,
            WITHDRAWAL_REASON,
            WITHDRAWAL_DATE,
            WITHDRAWN_BY
    ),
    deleteSolicitation: (_, { _id }) => deleteSolicitation(_id)
  },

};

export default resolvers;
