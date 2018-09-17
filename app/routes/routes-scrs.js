/////// SCRS //////
// CICS MVP criteria

module.exports = function ( router ) {

	//SCRS -   Will {name} be distributed a share of the company's profit?
	router.get( '/scrs/percentage-voting-rights', function ( req, res ) {
		var distributedShare = req.query.distributedShare;
		if ( distributedShare == "yes" ) {
			res.redirect( "/scrs/how-much-profit" );
		} else {
			res.render( 'scrs/percentage-voting-rights' );
		}
	} );

}