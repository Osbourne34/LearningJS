// 12)  Дан объект с настройками, например, {id: 'elem', color: 'blue', border: '1px solid red', font: '15px Arial'}. Сделайте функцию, которая получает этот объект, извлекает из него все настройки в соответствующие переменные и для элемента с указанным id (в нашем случае это 'elem') ставит заданные CSS свойства. В объекте могут быть только эти ключи, однако, какой-либо ключ (кроме id) может быть не задан - в этом случае пусть возьмутся следующие значения по умолчанию: color: 'blue', border: '1px solid red', font: '15px Arial'.

class Setting {
    constructor(id, color, border, font) {
        this.id = id;
        this.color = color;
        this.border = border;
        this.font = font;
    }
}

let setting = new Setting('elem1', 'green', '5px red dashed');
let setting1 = new Setting('elem2', 'red', '3px blue solid');

function settingForElem (setting) {
    let {id = 'elem', color = 'blue', border = '1px solid red', font = '15px Arial'} = setting;

    let elem = document.getElementById(id);
    elem.style.color = color;
    elem.style.border = border;
    elem.style.font = font;
}

settingForElem(setting);
settingForElem(setting1);
settingForElem('elem');