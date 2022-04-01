class Modal {
    constructor(modalWindow, closeModalBtn) {
        this.modalWindow = document.getElementById(modalWindow);
        this.closeModalBtn = document.getElementById(closeModalBtn);

        this.closeModalBtn.addEventListener('click', () => {
            this.modalClose();
        });
        this.modalWindow.addEventListener('click', (e) => {
            if (e.target === this.modalWindow) {
                this.modalClose();
            }
        })
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modalWindow.classList.contains('show')) {
                this.modalClose();
            }
        })
    }

    modalOpen() {
        this.modalWindow.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    modalClose() {
        this.modalWindow.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

export const modal = new Modal('modal', 'modal-close');