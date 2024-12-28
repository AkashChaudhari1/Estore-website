$(function(){
	
// User registration Validation
	var $userRegister=$("#userRegister");
	
	$userRegister.validate({
		
		rules:{
			name:{
				required:true,
				lettersonly:true
			},
			email:{
				required:true,
				space:true,
				email:true
			},
			mobileNumber:{
				required:true,
				space:true,
				numericonly:true,
				minlength: 10,
				maxlength: 12
			},
			password:{
				required:true,
				space:true
			},
			confirmpassword:{
				required:true,
				space:true,
				equalTo:'#pass'
			},
			address:{
				required:true,
				all:true
			},
			city:{
				required:true,
				space:true
			},
			state:{
				required:true
			},
			pincode:{
				required:true,
				space:true,
				numericonly:true
			},
			img:{
				required:true
			}
		},
		messages:{
			name:{
				required:'Name is required.',
				lettersonly:'Please provide a valid name.'
			},
			email: {
				required: 'Email is required.',
				space: 'Spaces are not allowed.',
				email: 'Invalid email address.'
			},
			mobileNumber: {
				required: 'Mobile number is required.',
				space: 'Spaces are not allowed.',
				numericonly: 'Invalid mobile number.',
				minlength: 'Minimum 10 digits required.',
				maxlength: 'Maximum 12 digits required.'
			},
			password: {
				required: 'Password is required.',
				space: 'Spaces are not allowed.'
			},
			confirmpassword: {
				required: 'Confirm password is required.',
				space: 'Spaces are not allowed.',
				equalTo: 'Password does not match.'
			},
			address: {
				required: 'Address is required.',
				all: 'Invalid'
			},
			city: {
				required: 'City is required.',
				space: 'Spaces are not allowed.'
			},
			state: {
				required: 'State is required.',
			},
			pincode: {
				required: 'Pincode is required.',
				space: 'Spaces are not allowed.',
				numericonly: 'Invalid pincode.'
			},
			img: {
				required: 'Image is required.',
			}
		}		
	})	
})

// Reset Password Validation
$(function(){
	
	var $resetPassword=$("#resetPassword");
	$resetPassword.validate({
			
		rules:{
			password:{
				required:true,
				space:true
			},
			confirmPassword:{
				required:true,
				space:true,
				equalTo:'#pass'
			}
		},
		messages:{
			password: {
				required: 'Password is required.',
				space: 'Spaces are not allowed.'
			},
			confirmPassword: {
				required: 'Confirm password is required.',
				space: 'Spaces are not allowed.',
				equalTo: 'Password does not match.'
			}
		}
		
	})
	
})

// Order Details Validation
$(function(){
	
	var $orders=$("#orders");
	$orders.validate({
			
		rules:{
			firstName:{
				required:true,
				lettersonly:true
			},
			lastName:{
				required:true,
				lettersonly:true
			},
			email:{
				required:true,
				space:true,
				email:true
			},
			mobileNo:{
				required:true,
				space:true,
				numericonly:true,
				minlength: 10,
				maxlength: 12
			},
			address:{
				required:true,
				all:true
			},
			city:{
				required:true,
				space:true
			},
			state:{
				required:true
			},
			pincode:{
				required:true,
				space:true,
				numericonly:true
			},
			paymentType:{
				required:true
			}
		},
		messages:{
			firstName:{
				required:'First name is required.',
				lettersonly:'Please provide a valid name.'
			},
			lastName:{
				required:'Last name is required.',
				lettersonly:'Please provide a valid name.'
			},
			email: {
				required: 'Email is required.',
				space: 'Spaces are not allowed.',
				email: 'Invalid email address.'
			},
			mobileNo: {
				required: 'Mobile number is required.',
				space: 'Spaces are not allowed.',
				numericonly: 'Invalid mobile number.',
				minlength: 'Minimum 10 digits required.',
				maxlength: 'Maximum 12 digits required.'
			},
			address: {
				required: 'Address is required.',
				all: 'Invalid'
			},
			city: {
				required: 'City is required.',
				space: 'Spaces are not allowed.'
			},
			state: {
				required: 'State is required.',
			},
			pincode: {
				required: 'Pincode is required.',
				space: 'Spaces are not allowed.',
				numericonly: 'Invalid pincode.'
			},
			paymentType:{
				required:'Please select payment type.',
			}
		}
		
	})
	
})

jQuery.validator.addMethod('lettersonly',function(value, element){
	return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
});

jQuery.validator.addMethod('space',function(value, element){
	return /^[^-\s]+$/.test(value);
});

jQuery.validator.addMethod('all',function(value, element){
	return /^[^-\s][a-zA-Z0-9_,.\s-]+$/.test(value);
});

jQuery.validator.addMethod('numericonly',function(value, element){
	return /^[0-9]+$/.test(value);
});