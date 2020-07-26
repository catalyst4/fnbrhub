document.querySelectorAll('#deleteBtn').forEach(deleteBtn => {
    deleteBtn.addEventListener('click', async () => {
        const code = deleteBtn.dataset.code;
        console.log('ring ring');
        const deleteMap = (await axios({
            method: 'POST',
            url: '/maps/admin/delete',
            data: {
                code: code
            }
        }));
    });
});
