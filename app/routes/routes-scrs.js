/////// SCRS //////
// CICS MVP criteria

module.exports = function ( router ) {

	//SCRS -   Will {name} be distributed a share of the company's profit?
	router.get( '/scrs/percentage-voting-rights', function ( req, res ) {
		var distributedShare = req.query.distributedShare;
		if ( distributedShare == "Yes" ) {
			res.redirect( "/scrs/how-much-profit" );
		} else {
			res.render( 'scrs/percentage-voting-rights' );
		}
	} );

	//SCRS -   Is {name} }a person with significant control?
	router.get( '/scrs/distributed-a-share', function ( req, res ) {
		var isapsc = req.query.isapsc;
		if ( isapsc == "No" ) {
			res.redirect( "/scrs/psc-in-control" );
		} else {
			res.render( 'scrs/distributed-a-share' );
		}
	} );

}