let array = [];
let lenth = 0;

function NewStudent(name, chinese, math, english, science) {
    this.name = name;
    this.chinese = chinese;
    this.math = math;
    this.english = english;
    this.science = science;
    this.total = parseInt(chinese, 10) + parseInt(math, 10) + parseInt(english, 10) + parseInt(science, 10);
}


function upload() {
    let temp = [];
    let p;

    if (lenth === 5)
        array.shift();
    for (let i = 0; i < 5; i++) {
        p = document.getElementById(i.toString());
        if (i === 0) {
            temp[i] = p.value;
            if (temp[i] === '') {
                let error = document.getElementById("errorsign");
                error.style.display = "inline-block";
                cls();
                return;
            }
        }
        else {
            temp[i] = parseInt(p.value);

        }

        if (isNaN(temp[i])&&i>0) {                                    //如果输入为空则报错
            let error = document.getElementById("errorsign");
            error.style.display = "inline-block";
            cls();
            return;
        }
    }
    cls();
    lenth = array.push(new NewStudent(temp[0], temp[1], temp[2], temp[3], temp[4]));
    print();
}

function cls() {
    let temp;
    for (let i = 0; i < 5; i++) {
        temp = document.getElementById(i.toString());
        temp.value = '';
    }
}

function print() {
    let tab = document.getElementById("tab");
    for (let i = 0; i < lenth; i++) {
        tab.rows[i + 1].cells[0].innerHTML = array[i].name;
        tab.rows[i + 1].cells[1].innerHTML = array[i].chinese;
        tab.rows[i + 1].cells[2].innerHTML = array[i].math;
        tab.rows[i + 1].cells[3].innerHTML = array[i].english;
        tab.rows[i + 1].cells[4].innerHTML = array[i].science;
        tab.rows[i + 1].cells[5].innerHTML = array[i].total;
    }
}

function sort(kind) {
    if (lenth === 0)
        return;

    let temp = [];
    switch (kind) {
        case 'chinese':
            for (let i = 0; i < lenth; i++)
                temp[i] = array[i].chinese;
            break;
        case'math':
            for (let i = 0; i < lenth; i++)
                temp[i] = array[i].math;
            break;
        case'english':
            for (let i = 0; i < lenth; i++)
                temp[i] = array[i].english;
            break;
        case'science':
            for (let i = 0; i < lenth; i++)
                temp[i] = array[i].science;
            break;
        case'total':
            for (let i = 0; i < lenth; i++)
                temp[i] = array[i].total;
            break;
    }
    let test;
    let te = {};
    for (let i = 0; i < lenth; i++) {
        for (let j = 0; j < lenth - 1; j++) {
            if (temp[j] < temp[j + 1]) {
                test = temp[j];
                temp[j] = temp[j + 1];
                temp[j + 1] = test;
                te = array[j];
                array[j] = array[j + 1];
                array[j + 1] = te;
            }
        }
    }
    print();
}
