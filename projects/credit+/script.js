const sum = document.getElementById('sum');
const term = document.getElementById('term');
const percent = document.getElementById('percent');
const button = document.getElementById('button');
const out = document.getElementById('out');

button.addEventListener('click', (e) => {
    e.preventDefault();

    let length = out.children.length;
    if (length > 1) {
        for (let i = 0; i < length; i++) {
            if (i !== 0) {
                if(out.children.length !== 1) {
                    out.children[i].remove();
                    i--;
                }
            }
        }
    }

    let summa = sum.value;

    for (let i = 1; i <= term.value; i++) {
        const tr = document.createElement('tr');

        let month = (sum.value / term.value).toFixed(2);
        let monthPercent = (summa * percent.value / 100 / 12)
        summa = summa - sum.value / term.value;

        let result = `
            <td>${i}</td>
            <td>${month}</td>
            <td>${(+month + +monthPercent.toFixed(2)).toFixed(2)}</td>
            <td>${monthPercent.toFixed(2)}</td>
            <td>${summa.toFixed(2)}</td>
        `

        tr.innerHTML = result;
        out.appendChild(tr);
    }

});


