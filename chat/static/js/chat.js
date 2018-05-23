var ds = deepstream( 'localhost:6020' );
ds.login();


var myRecord = ds.record.getRecord( 'test/johndoe' );
myRecord.set({
    message:"manish",
});


var mytext=$('#mytext');

myRecord.subscribe('message',function(message) {
	
	 var control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
                            '<div class="text text-l">' +
                                '<p>'+ message +'</p>' +
                                '<p><small>12:00PM</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>'; 
        $('ul').append(control)  
} )



mytext.on('keydown',function(e){
	if (e.which==13) {
	myRecord.set({message:mytext.val()})
	mytext.val('')
	}
})

