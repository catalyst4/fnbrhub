mapExist = async () => {
    if((code.value).length === 14) {
        const checkMap = await axios({
            method: 'POST',
            url: '/api/checkMap',
            data: { code: code.value }
        })
        const errorMsg = await checkMap.data.error;
        await code.parentElement.setAttribute('data-error', errorMsg);
    }
}