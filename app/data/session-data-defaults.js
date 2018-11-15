/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

	// SCRS

	"company-name-for-testing": "A TEST COMPANY LIMITED",
	"person-name-for-testing": "Joe Bloggs",
	"directors-first-name": "Joe",
	"directors-middle-names": "",
	"directors-last-name": "Bloggs",
	"directors-country": "United Kingdom",
	"directors-nationality": "British",
	"directors-job-title": "Salesperson"
}