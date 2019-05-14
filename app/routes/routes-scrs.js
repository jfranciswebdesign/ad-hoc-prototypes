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

	//SCRS -   Does {name}} want to receive filing reminders by email?
	router.get( '/scrs/reminders-yes', function ( req, res ) {
		var reminders = req.query.reminders;
		if ( reminders == "No" ) {
			res.redirect( "/scrs/check-and-confirm-reminders" );
		} else {
			res.render( 'scrs/reminders-yes' );
		}
	} );

	//SCRS -   What is the company's 'principal place of business'?
	router.get( '/scrs/address-confirm', function ( req, res ) {
		var addressPrincipalPlaceBusiness = req.query.addressPrincipalPlaceBusiness;
		if ( addressPrincipalPlaceBusiness == "different" ) {
			res.redirect( "/scrs/address-find-principal-place-business" );
		} else {
			res.render( 'scrs/address-confirm' );
		}
	} );

	//SCRS -   What is the company's 'principal place of business'?
	router.get( '/scrs/address-find-principal-place-business', function ( req, res ) {
		var correspondenceAddress = req.query.correspondenceAddress;
		if ( correspondenceAddress == "wentloog" ) {
			res.redirect( "/scrs/address-confirm" );
		} else if ( correspondenceAddress == "crown" ) {
			res.redirect( "/scrs/address-confirm" );
		} else {
			res.render( 'scrs/address-find-principal-place-business' );
		}
	} );

}