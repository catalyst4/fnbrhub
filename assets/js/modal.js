var addModal = document.getElementById('addModal');
var editModal = document.getElementById('editModal');
var removeModal = document.getElementById('removeModal');
var approveModal = document.getElementById('approveModal');
var denyModal = document.getElementById('denyModal');

openAddModal = () => {
    addModal.style.display = 'block';
}

openEditModal = () => {
    editModal.style.display = 'block';
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