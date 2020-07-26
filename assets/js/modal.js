const addModal = document.getElementById('addModal');
const editModal = document.getElementById('editModal');
const removeModal = document.getElementById('removeModal');
const approveModal = document.getElementById('approveModal');
const denyModal = document.getElementById('denyModal');
const cancelBtn = document.getElementById('cancel');

const testModal = document.getElementById('editModal');

document.querySelectorAll('#editBtn').forEach(editBtn => {
    editBtn.addEventListener('click', () => {
        document.querySelectorAll('#editModal[data-code]').forEach(modal => {
            if(editBtn.dataset.code == modal.dataset.code) {
                modal.style.display = 'block';
            }   
        });
    });
});

document.querySelectorAll('#removeBtn').forEach(removeBtn => {
    removeBtn.addEventListener('click', () => {
        document.querySelectorAll('#removeModal[data-code]').forEach(modal => {
            if(removeBtn.dataset.code == modal.dataset.code) {
                modal.style.display = 'block';
            }   
        });
    });
});

document.querySelectorAll('#cancelBtn').forEach(cancelBtn => {
    cancelBtn.addEventListener('click', () => {
        document.querySelectorAll('#editModal[data-code]').forEach(modal => {
            if(cancelBtn.dataset.code == modal.dataset.code) {
                modal.style.display = 'none';
            }   
        });
        document.querySelectorAll('#removeModal[data-code]').forEach(modal => {
            if(cancelBtn.dataset.code == modal.dataset.code) {
                modal.style.display = 'none';
            }   
        });
    });
});

document.querySelectorAll('#editModal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if(e.target == modal) {
           modal.style.display = 'none'; 
        }
    });
});

document.querySelectorAll('#removeModal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if(e.target == modal) {
           modal.style.display = 'none'; 
        }
    });
});

openAddModal = () => {
    addModal.style.display = 'block';
}

closeAddModal = () => {
    addModal.style.display = 'none';
}

addModal.addEventListener('click', (e) => {
    if(e.target == addModal) {
        addModal.style.display = 'none';
    }
});