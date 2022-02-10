const sum = document.getElementById('sum');
const term = document.getElementById('term');
const percent = document.getElementById('percent');
const button = document.getElementById('button');
const out = document.getElementById('out');

button.addEventListener('click', (e) => {
    e.preventDefault();

    for (let i = 1; i <= term.value; i++) {
        const tr = document.createElement('tr');

        

        let result = `
            <td>${i}</td>
        `

        tr.innerHTML = result;
        out.appendChild(tr);
    }
});


