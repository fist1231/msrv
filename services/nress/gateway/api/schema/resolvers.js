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
  console.log('$$$$$$$$ updateSolicitation _id: ' + _id);
  // console.log('$$$$$$$$ updateSolicitation TITLE: ' + TITLE);
    return new Promise((resolve, reject) => {
      axios({
          url: `${solicitationsServiceUrl}/graphql`,
          method: 'post',
          // headers: { 'Content-Type': 'application/json' },
          // headers: { 'Content-Type': 'application/graphql' },
          data: {
            query: `
              mutation { updateSolicitation (
                _id: ${_id},
                SOLICITATION_ID: ${SOLICITATION_ID},
                SOLICITATION_NUMBER: ${SOLICITATION_NUMBER},
                PUBLICATION_APPROVAL: ${PUBLICATION_APPROVAL},
                FISCAL_YEAR: ${FISCAL_YEAR},
                OMNIBUS_NUMBER: ${OMNIBUS_NUMBER},
                TITLE: ${TITLE},
                REVIEW_DATE: ${REVIEW_DATE},
                SELECTION_DATE: ${SELECTION_DATE},
                RELEASE_DATE: ${RELEASE_DATE},
                CLOSE_DATE: ${CLOSE_DATE},
                ANNOUNCEMENT_TYPE: ${ANNOUNCEMENT_TYPE},
                CONTAINER_TYPE: ${CONTAINER_TYPE},
                AUTHORIZED_BY: ${AUTHORIZED_BY},
                WITHDRAWAL_REASON: ${WITHDRAWAL_REASON},
                WITHDRAWAL_DATE: ${WITHDRAWAL_DATE},
                WITHDRAWN_BY: ${WITHDRAWN_BY}
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
            resolve(response.data.data.updateSolicitation);
        })
        .catch(error => {
          console.log('********** Gateway: updateSolicitation error:' + error);
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
  console.log('$$$$$$$$ addSolicitation SOLICITATION_ID: ' + SOLICITATION_ID);
  console.log('$$$$$$$$ addSolicitation OMNIBUS_NUMBER: ' + OMNIBUS_NUMBER);
  console.log('$$$$$$$$ addSolicitation AUTHORIZED_BY: ' + AUTHORIZED_BY);
    return new Promise((resolve, reject) => {
        Solicitations.create({
          "SOLICITATION_ID": SOLICITATION_NUMBER,
          "SOLICITATION_NUMBER": SOLICITATION_NUMBER,
          "PUBLICATION_APPROVAL": PUBLICATION_APPROVAL,
          "FISCAL_YEAR": FISCAL_YEAR,
          "OMNIBUS_NUMBER": OMNIBUS_NUMBER,
          "TITLE": TITLE,
          "REVIEW_DATE": REVIEW_DATE,
          "SELECTION_DATE": SELECTION_DATE,
          "RELEASE_DATE": RELEASE_DATE,
          "CLOSE_DATE": CLOSE_DATE,
          "ANNOUNCEMENT_TYPE": ANNOUNCEMENT_TYPE,
          "CONTAINER_TYPE": CONTAINER_TYPE,
          "AUTHORIZED_BY": AUTHORIZED_BY,
          "WITHDRAWAL_REASON": WITHDRAWAL_REASON,
          "WITHDRAWAL_DATE": WITHDRAWAL_DATE,
          "WITHDRAWN_BY": WITHDRAWN_BY
          },
          // { upsert:false, returnNewDocument : true },
          (err, solicitation) => {
            if (err) {
              console.log('^^^^^ addSolicitation Error: ' + err);
              console.log('^^^^^ addSolicitation Error: ' + solicitation);
              reject(err);
            } else {
              console.log('^^^^^ Solicitation created with _id: ' + solicitation._id);
              console.log('^^^^^ Solicitation created with solicitation: ' + solicitation);
              resolve(solicitation);
            }
          }
        )
    })
};

const deleteSolicitation = (solId) => {
  console.log('$$$$$$$$ deleteSolicitation solId: ' + solId);
    return new Promise((resolve, reject) => {
        Solicitations.findByIdAndRemove(solId, (err, solicitation) => {
            if (err) {
              console.log('^^^^^ deleteSolicitation Error: ' + err);
              console.log('^^^^^ deleteSolicitation Error res: ' + solicitation);
              reject({
                id: solId,
                result: undefined,
                error: err
              });
            } else {
              // console.log('^^^^^ Solicitation deleted with id: ' + solId);
              console.log('^^^^^ Solicitation deleted: ' + solicitation);
              resolve({
                id: solId,
                result: solicitation?`DELETE SUCCESS for id:${solicitation._id}`:undefined,
                error: solicitation?undefined:`DELETE FAILED not found solicitation id:${solId}`
              });
            }
          }
        )
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
