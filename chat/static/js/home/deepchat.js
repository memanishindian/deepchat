var ds = deepstream( 'localhost:6020' );
ds.login();


var myRecord = ds.record.getRecord( 'test/johndoe' );
myRecord.set({
    firstname: 'John',
    lastname: 'Doe'
});


	function bindInputToPath( record, input, path ) {

		// Write changes from the record to the input element
		record.subscribe( path, function( value ){
			input.val( value );
		});

		//Write changes to the input element to the record
		input.on( 'keyup', function(){
			record.set( path, input.val() );
		});
	}