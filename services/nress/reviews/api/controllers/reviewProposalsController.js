'use strict';

var mongoose = require('mongoose'),
ReviewProposals = mongoose.model('Solicitations');

var oracledb = require('oracledb');

exports.list_all_reviewProposals2 = function(req, res) {
  ReviewProposals.find({}, function(err, reviewProposal) {
    if (err) {
    	console.log('list_all_reviewProposals error: ' + err);
    	return res.send(err);
    }
    console.log('####### list_all_reviewProposals called #######');
    res.json(reviewProposal);
  });
};

exports.filter_reviewProposals = function(req, res) {

	 if(!req.params.acronym) {
		 console.log('Term is empty');
		  ReviewProposals.find({}, function(err, reviewProposal) {
			    if (err) {
			    	console.log('filter_reviewProposals error: ' + err);
			      return res.send(err);
			    }
			    res.json(reviewProposal);
			  });
	 } else {
		 console.log('Term not empty: ');
		  ReviewProposals.find({'acronym': new RegExp('.*' + req.params.acronym + '.*', "i")}, function(err, reviewProposal) {
			    if (err) {
			    	console.log('filter_reviewProposals error: ' + err);
			      return res.send(err);
			    }
			    res.json(reviewProposal);
			  });
	 }
	};


exports.create_reviewProposal = function(req, res) {
  var new_reviewProposalr = new ReviewProposals(req.body);
  new_reviewProposal.save(function(err, reviewProposal) {
    if (err) {
    	console.log('create_reviewProposal error: ' + err);
      return res.send(err);
    }
    res.json(reviewProposal);
  });
};


exports.find_reviewProposal = function(req, res) {
		 console.log('Term not empty: ');
		  ReviewProposals.find({'id': req.params.reviewProposalId}, function(err, reviewProposal) {
			    if (err) {
			    	console.log('find_reviewProposal error: ' + err);
			    	return res.send(err);
			    }
			    res.json(reviewProposal);
			  });
	};

exports.read_reviewProposal = function(req, res) {
  ReviewProposals.findById(req.params.reviewProposalId, function(err, reviewProposal) {
    if (err) {
    	console.log('read_reviewProposal error: ' + err);
    	return res.send(err);
    }
    res.json(reviewProposal);
  });
};


exports.update_reviewProposal = function(req, res) {
  ReviewProposals.findOneAndUpdate({_id: req.params.reviewProposalId}, req.body, {new: true}, function(err, reviewProposal) {
    if (err) {
    	console.log('update_reviewProposal error: ' + err);
      return res.send(err);
    }
    res.json(reviewProposal);
  });
};


exports.delete_reviewProposal = function(req, res) {
  ReviewProposals.remove({
    _id: req.params.reviewProposalId
  }, function(err, reviewProposal) {
    if (err)
      return res.send(err);
    res.json({ message: 'ReviewProposal successfully deleted' });
  });
};


// Oracle part

exports.list_all_reviewProposals = function(req, res) {

  var numRows = 100;

  oracledb.getConnection(
    {
      user          : "nspires4",
      password      : "nspires4",
      connectString : "(DESCRIPTION=(ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = 172.17.9.24)(PORT = 1521)))(CONNECT_DATA = (SID = ndevdb)(SRVR = DEDICATED)))"
    },
    function(err, connection)
    {
      if (err) {
        console.error(err.message);
        return;
      }
      connection.execute(
        // The statement to execute
        `SELECT RAWTOHEX(assigned_response_id) as assigned_response_id, uploaded_by, uploaded_date
         FROM assigned_response`,
        // WHERE assigned_response_id = :id`,

        // The "bind value" 180 for the bind variable ":id"
        //['2C90DAAB195DD20B011961B9221A002E'],
        [],

        // execute() options argument.  Since the query only returns one
        // row, we can optimize memory usage by reducing the default
        // maxRows value.  For the complete list of other options see
        // the documentation.
        { resultSet: false
          //maxRows: 1
          , outFormat: oracledb.OBJECT  // query result format
          //, extendedMetaData: true      // get extra metadata
          //, fetchArraySize: 100         // internal buffer allocation size for tuning
        },

        // The callback function handles the SQL execution results
        function(err, result)
        {
          if (err) {
            console.error(err.message);
            doRelease(connection);
            return;
          } else {
            /**/
            res.contentType('application/json').status(200);
            res.send(JSON.stringify(result.rows));
            /**/
            //fetchRowsFromRS(connection, result.resultSet, numRows, res);
          }
          /**/
          console.log(result.metaData); // [ { name: 'DEPARTMENT_ID' }, { name: 'DEPARTMENT_NAME' } ]
          console.log(result);     // [ [ 180, 'Construction' ] ]
          doRelease(connection);
          /**/
        });
    });
}

function fetchRowsFromRS(connection, resultSet, numRows, res)
{
  resultSet.getRows(
    numRows,  // get this many rows
    function (err, rows)
    {
      if (err) {
        console.error(err);
        doClose(connection, resultSet);   // always close the ResultSet
      } else if (rows.length > 0) {
        console.log("fetchRowsFromRS(): Got " + rows.length + " rows");
        console.log(rows);
        if(res) {
          res.contentType('application/json').status(200);
          //res.send(JSON.stringify(rows));
          var col = 0;

          for (var row = 0; row < rows.length; row++) {
            for (col = 0; col < rows[row].length; col++) {
              //response.write("<td>" + result.rows[row][col] + "</td>");
              //res.write(JSON.stringify(rows[row][col]));
              //var r1 = [{"id":"123","name":"atas"}];
              //res.write(JSON.stringify(r1).toString());
              res.write(JSON.stringify(rows[row][col]));
            }
          }

        }

        if (rows.length === numRows)      // might be more rows
          fetchRowsFromRS(connection, resultSet, numRows);
        else
          doClose(connection, resultSet); // always close the ResultSet
      } else { // no rows
        doClose(connection, resultSet);   // always close the ResultSet
      }
    });
}



// Note: connections should always be released when not needed
function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err) {
        console.error(err.message);
      }
    });
}

function doClose(connection, resultSet)
{
  resultSet.close(
    function(err)
    {
      if (err) { console.error(err.message); }
      doRelease(connection);
    });
}
