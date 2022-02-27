export class Dropdown {
    dropdown(event) {
        const target = event.target;
        if (target.classList.contains('account__user')) {
            target.classList.toggle('rotate-arrow');
            const dropdown = target.nextElementSibling;
            dropdown.classList.toggle('open');
        } else {
            document.querySelector('.account__user').classList.remove('rotate-arrow');
            document.querySelector('.account__dropdown').classList.remove('open');
        }
    }

    init() {
        window.addEventListener('click', this.dropdown)
    }
}