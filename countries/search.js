export const search = (input, elements) => {
    input.addEventListener('input', () => {
        const value = input.value.toLowerCase();
        let nodeArray = Array.from(elements);

        if (value != '') {
            elements.forEach(item => {
                item.parentElement.style.display = 'none';
            })
            let foundElements = nodeArray.filter(item => {
                if (item.innerHTML.toLowerCase().includes(value)) {
                    return item;
                }
            })
            foundElements.forEach(item => {
                item.style.backgroundColor = 'yellow';
                item.parentElement.style.display = "block";
            })
        } else {
            elements.forEach(item => {
                item.parentElement.style.display = 'block';
                item.style.backgroundColor = 'transparent';
            })
        }
    });
};