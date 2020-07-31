copy = () => {

    let copyText = document.querySelector('#code-btn');
    copyText.select();
    document.execCommand('copy');

}

document.querySelector('#code-btn').addEventListener('click', () => {
    copy();
    document.querySelector('#code-btn').value = 'Code Copied';
});