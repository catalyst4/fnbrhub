const name = document.querySelector(".input-group input[name='name']");
const code = document.querySelector(".input-group input[name='code']");
const type = document.querySelector(".input-group select[name='type']");
const creator = document.querySelector(".input-group input[name='creator']");
const selectGroup = document.querySelector("#selectGroup");
const dropzone = document.querySelector(".drop-zone");
const imageThumb = document.querySelector(".drop-zone__thumb");

mapValidation = () => {
    let errors = 0;

    if(name.value == '') {
        name.parentElement.setAttribute('data-error', 'Please complete this field');
        errors++;
    }
    if(code.value == '') {
        code.parentElement.setAttribute('data-error', 'Please complete this field');
        errors++;
    }
    console.log(type.value);
    if(type.value == 'maptype') {
        selectGroup.setAttribute('data-error', 'Please complete this field');
        errors++;
    }
    if(creator.value == '') {
        creator.parentElement.setAttribute('data-error', 'Please complete this field');
        errors++;
    }
    if(name.value != '') {
        name.parentElement.removeAttribute('data-error'); 
    }
    if(code.value != '') {
        code.parentElement.removeAttribute('data-error');  
    }
    if(type.value != '') {
        type.parentElement.removeAttribute('data-error');  
    }
    if(creator.value != '') {
        creator.parentElement.removeAttribute('data-error'); 
    }
    if(imageThumb == null) {
        dropzone.classList.add('error');
    }

    if(errors > 0) {
        return false;
    }

    return true;
}

validateName = () => {
    if(name.value == '') {
        name.parentElement.setAttribute('data-error', 'Please complete this field');  
    } else {
        name.parentElement.removeAttribute('data-error');    
    }
}

validateCode = () => {
    if(code.value == '') {
        code.parentElement.setAttribute('data-error', 'Please complete this field');  
    } else {
        code.parentElement.removeAttribute('data-error');    
    }
}
validateType = () => {
    if(type.value == '') {
        type.parentElement.setAttribute('data-error', 'Please complete this field');  
    } else {
        type.parentElement.removeAttribute('data-error');    
    }
}
validateCreator = () => {
    if(creator.value == '') {
        creator.parentElement.setAttribute('data-error', 'Please complete this field');  
    } else {
        creator.parentElement.removeAttribute('data-error');    
    }
}