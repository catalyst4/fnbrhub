const addModal = document.getElementById('addModal');
const editModal = document.getElementById('editModal');
const removeModal = document.getElementById('removeModal');
const approveModal = document.getElementById('approveModal');
const denyModal = document.getElementById('denyModal');
const cancelBtn = document.getElementById('cancel');

const testModal = document.getElementById('editModal');

document.querySelectorAll('#editBtn').forEach(editBtn => {
    editBtn.addEventListener('click', (e) => {
        document.querySelectorAll('#editModal[data-code]').forEach(modal => {
            if(editBtn.dataset.code == modal.dataset.code) {
                modal.style.display = 'block';
            }   
        });
    });
});


openAddModal = () => {
    addModal.style.display = 'block';
}

openRemoveModal = () => {
    removeModal.style.display = 'block';
}

openApproveModal = () => {
    approveModal.style.display = 'block';
}

openDenyModal = () => {
    denyModal.style.display = 'block';
}

closeAddModal = () => {
    addModal.style.display = 'none';
}

closeEditModal = () => {
    editModal.style.display = 'none';
}

closeRemoveModal = () => {
    removeModal.style.display = 'none';
}

closeApproveModal = () => {
    approveModal.style.display = 'none';
}

closeDenyModal = () => {
    denyModal.style.display = 'none';
}

window.onclick = (event) => {
    if(event.target == addModal) {
        addModal.style.display = 'none';
    }
    if(event.target == editModal) {
        editModal.style.display = 'none';
    }
    if(event.target == removeModal) {
        removeModal.style.display = 'none';
    }
    if(event.target == approveModal) {
        approveModal.style.display = 'none';
    }
    if(event.target == denyModal) {
        denyModal.style.display = 'none';
    }
}