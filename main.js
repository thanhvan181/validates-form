const form = document.getElementById('form');
const username = document.getElementById('user');
const password = document.getElementById('password');
const resetpassword = document.getElementById('re-password');
const ten = document.getElementById('name');
const fullname = document.getElementById('user-name');
const date = document.getElementById('date');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submit = document.getElementById('btn-submit');

console.log("start event")
console.log(phone)
username.addEventListener('blur', validateUser);
password.addEventListener('blur', validatePassword);
resetpassword.addEventListener('blur', validateResetPassword);
ten.addEventListener('blur', validateName);
fullname.addEventListener('blur', validateFullname);
date.addEventListener('blur', validateDate);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);
submit.addEventListener('click', showData);


function showData(e) {
	console.log(e)
	console.log("Click Submit")
	let data = getDataForm()
	if (data.length > 1) {
		// bodyConten.innerHTML = ''
		// document.write(JSON.stringify(data))
		alert(data)
	}

}
function getDataForm() {
	let info = '';
	// console.log(JSON.stringify());
	let validators = [validateUser, validatePassword, validateResetPassword, validateFullname, validateName, validateEmail, validateDate, validatePhone];
	let result = validators.every(function (validator) {
		return validator()
	})
	console.log("Check All ", result)
	if (result) {
         info = `
        Ban da dang ky thanh cong !
        ==============================
        Ten Dang Nhap: ${user.value}
        Mat Khau: ${password.value}
        Ten: ${ten.value}
        Ho va Ten Lot: ${fullname.value}
        Ngay Sinh: ${date.value}
        Email: ${email.value}
        Phone: ${phone.value}
        ==============================
        `
		
	}
	return info;
}

function validateUser(){
    const re = /^[a-z0-9_-]{3,16}$/igm;
    if(!re.test(user.value)){
        setErrorFor(user, "Ten dang nhap khong hop le");
        return false;
    }
    else{
        setSuccessFor(user)
        return true;

    }
}

function validatePassword(e) {
	const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/igm;
	if (!re.test(password.value)) {
		setErrorFor(password, "Mat khau ban nhap khong dung cu phap")
		return false
	} else {
		setSuccessFor(password)
		return true
	}

}

function validateResetPassword(){
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/igm;
    if(!re.test(resetpassword.value)) {
        setErrorFor(resetpassword, 'mat khau khong dung cu phap');
        return false;
	} else if(password.value !== resetpassword.value) {
        setErrorFor(resetpassword, 'mat khau khong khop');
        console.log("MK khong khop");
        return false;
	} else{
        setSuccessFor(resetpassword);
        return true;
	}
}
function validateName(){
    if(ten.value.length ==0 ){
        setErrorFor(ten , 'moi ban nhap ten');
        return false;
    }else{
        setSuccessFor(ten);
        return true;
    }

}
function validateFullname(){
    const re = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{8,}$/igm;
    let usernameValue = fullname.value;
	if(usernameValue === '') {
		setErrorFor(fullname, 'Username cannot be blank');
		return false
	} else if (!re.test(usernameValue)){
		setErrorFor(fullname, 'Ho ten nhap it nhat 8 ky tu');
		return false
	}
	else {
		setSuccessFor(fullname);
		return true
    }
}


function validateDate(){
    const re = /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/g;
	console.log("DATE", date.value)
    if(!re.test(date.value)){
        setErrorFor(date, 'ngay thang nam sinh khong dung');
        return false;
    }else{
        setSuccessFor(date);
        return true;

    }
}
function validateEmail(e) {
	const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/igm;
	if (!re.test(email.value)) {
		setErrorFor(email, "Email invalid !")
		return false
	} else {
		setSuccessFor(email)
		return true
	}
}
function validatePhone(e) {
    console.log("Run validate Phone")
	const re = /(84|0[3|5|7|8|9])+([0-9]{8})\b/igm;
	if (!re.test(phone.value)) {
		setErrorFor(phone, "Phone invalid !")
		return false
	} else {
		setSuccessFor(phone)
		return true
	}

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    console.log("Input", input)
	console.log(formControl)
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;

}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}