const name = document.querySelector(".input-group input[name='name']");
const code = document.querySelector(".input-group input[name='code']");
const type = document.querySelector(".input-group select[name='type']");
const creator = document.querySelector(".input-group input[name='creator']");
const description = document.querySelector(".input-group input[name='description']");
const youtubeLink = document.querySelector(".input-group input[name='youtubeLink']");
const selectGroup = document.querySelector("#selectGroup");
console.log(selectGroup + ' dldld')

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
        console.log('hello')
        selectGroup.setAttribute('data-error', 'Please complete this field');
        console.log('okay');
        errors++;
    }
    if(creator.value == '') {
        creator.parentElement.setAttribute('data-error', 'Please complete this field');
        errors++;
    }
    if(description.value == '') {
        description.parentElement.setAttribute('data-error', 'Please complete this field');
        errors++;
    }
    if(youtubeLink.value == '') {
        youtubeLink.parentElement.setAttribute('data-error', 'Please complete this field'); 
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
    if(description.value != '') {
        description.parentElement.removeAttribute('data-error'); 
    }
    if(youtubeLink.value != '') {
        youtubeLink.parentElement.removeAttribute('data-error');  
    }

    if(errors > 0) {
        console.log(errors);
        return false;
    }

    return true;
}

validateName = () => {
    console.log('herro');
    if(name.value == '') {
        console.log('okay')
        name.parentElement.setAttribute('data-error', 'Please complete this field');  
    } else {
        console.log('wtf')
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
validateDescription = () => {
    if(description.value == '') {
        description.parentElement.setAttribute('data-error', 'Please complete this field');  
    } else {
        description.parentElement.removeAttribute('data-error');    
    }
}
validateYoutubeLink = () => {
    if(youtubeLink.value == '') {
        youtubeLink.parentElement.setAttribute('data-error', 'Please complete this field');  
    } else {
        youtubeLink.parentElement.removeAttribute('data-error');    
    }
}