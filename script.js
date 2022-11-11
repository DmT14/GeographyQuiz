var inputs = document.getElementsByTagName('input');
var labels = document.getElementsByTagName('label');
var getResult = document.getElementById('getResult');
var res = document.getElementById('res');
var result = document.getElementById('result');
var comment = document.getElementById('comment');
var reset = document.getElementById('reset');
var wrong1 = document.getElementById('wrong1');
var wrong2 = document.getElementById('wrong2');
var wrong3 = document.getElementById('wrong3');
var wr1 = document.getElementById('wr1');
var wr2 = document.getElementById('wr2');
var wr3 = document.getElementById('wr3');
var k;

res.style.display = 'none';
wrong1.style.display = 'none';
wrong2.style.display = 'none';
wrong3.style.display = 'none';

getResult.addEventListener('click', function check() {
    k = 0;

    if (!inputs[0].checked && inputs[1].checked && !inputs[2].checked && !inputs[3].checked) {
        k++;
        labels[1].style.color = 'green';
    }
    else {
        for (var i = 0; i <= 3; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if (i == 1)
                labels[i].style.color = 'green';
        }
    }
    if (!inputs[4].checked && !inputs[5].checked && inputs[6].checked && !inputs[7].checked) {
        k++;
        labels[6].style.color = 'green';
    }
    else {
        for (var i = 4; i <= 7; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if (i == 6)
                labels[i].style.color = 'green';
        }
    }
    if (inputs[8].checked && !inputs[9].checked && !inputs[10].checked && !inputs[11].checked) {
        k++;
        labels[8].style.color = 'green';
    }
    else {
        for (var i = 8; i <= 11; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if (i == 8)
                labels[i].style.color = 'green';
        }
    }
    if (!inputs[12].checked && !inputs[13].checked && !inputs[14].checked && inputs[15].checked) {
        k++;
        labels[15].style.color = 'green';
    }
    else {
        for (var i = 12; i <= 15; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if (i == 15)
                labels[i].style.color = 'green';
        }
    }
    if (!inputs[16].checked && !inputs[17].checked && inputs[18].checked && !inputs[19].checked) {
        k++;
        labels[18].style.color = 'green';
    }
    else {
        for (var i = 16; i <= 19; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if (i == 18)
                labels[i].style.color = 'green';
        }
    }
    if (!inputs[20].checked && !inputs[21].checked && !inputs[22].checked && inputs[23].checked) {
        k++;
        labels[23].style.color = 'green';
    }
    else {
        for (var i = 20; i <= 23; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if (i == 23)
                labels[i].style.color = 'green';
        }
    }
    if (!inputs[24].checked && !inputs[25].checked && inputs[26].checked && !inputs[27].checked) {
        k++;
        labels[26].style.color = 'green';
    }
    else {
        for (var i = 24; i <= 27; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if (i == 26)
                labels[i].style.color = 'green';
        }
    }
    if (!inputs[28].checked && !inputs[29].checked && inputs[30].checked && !inputs[31].checked) {
        k++;
        labels[30].style.color = 'green';
    }
    else {
        for (var i = 28; i <= 31; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if (i == 30)
                labels[i].style.color = 'green';
        }
    }
    if (inputs[32].checked && !inputs[33].checked && !inputs[34].checked && !inputs[35].checked) {
        k++;
        labels[32].style.color = 'green';
    }
    else {
        for (var i = 32; i <= 35; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if (i == 32)
                labels[i].style.color = 'green';
        }
    }
    if (!inputs[36].checked && !inputs[37].checked && inputs[38].checked && !inputs[39].checked) {
        k++;
        labels[38].style.color = 'green';
    }
    else {
        for (var i = 36; i <= 39; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if (i == 38)
                labels[i].style.color = 'green';
        }
    }


    if (inputs[40].checked && !inputs[41].checked && inputs[42].checked && inputs[43].checked && !inputs[44].checked) {
        k += 2;
        labels[40].style.color = 'green';
        labels[42].style.color = 'green';
        labels[43].style.color = 'green';
    }
    else if ((inputs[40].checked && inputs[41].checked && inputs[42].checked && inputs[43].checked && !inputs[44].checked) ||
        (inputs[40].checked && !inputs[41].checked && inputs[42].checked && inputs[43].checked && inputs[44].checked) ||
        (inputs[40].checked && !inputs[41].checked && inputs[42].checked && !inputs[43].checked && !inputs[44].checked) ||
        (inputs[40].checked && !inputs[41].checked && !inputs[42].checked && inputs[43].checked && !inputs[44].checked) ||
        (!inputs[40].checked && !inputs[41].checked && inputs[42].checked && inputs[43].checked && !inputs[44].checked)) {
        k++;
        for (var i = 40; i <= 44; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if ((i == 40) || (i == 42) || (i == 43))
                labels[i].style.color = 'green';
        }
    }
    else {
        for (var i = 40; i <= 44; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if ((i == 40) || (i == 42) || (i == 43))
                labels[i].style.color = 'green';
        }
    }

    if (!inputs[45].checked && inputs[46].checked && inputs[47].checked && !inputs[48].checked && !inputs[49].checked) {
        k += 2;
        labels[46].style.color = 'green';
        labels[47].style.color = 'green';
    }
    else if ((inputs[45].checked && inputs[46].checked && inputs[47].checked && !inputs[48].checked && !inputs[49].checked) ||
        (!inputs[45].checked && inputs[46].checked && inputs[47].checked && inputs[48].checked && !inputs[49].checked) ||
        (!inputs[45].checked && inputs[46].checked && inputs[47].checked && !inputs[48].checked && inputs[49].checked) ||
        (!inputs[45].checked && inputs[46].checked && !inputs[47].checked && !inputs[48].checked && !inputs[49].checked) ||
        (!inputs[45].checked && !inputs[46].checked && inputs[47].checked && !inputs[48].checked && !inputs[49].checked) ||
        (inputs[45].checked && inputs[46].checked && !inputs[47].checked && !inputs[48].checked && !inputs[49].checked) ||
        (!inputs[45].checked && inputs[46].checked && !inputs[47].checked && !inputs[48].checked && inputs[49].checked) ||
        (!inputs[45].checked && inputs[46].checked && !inputs[47].checked && inputs[48].checked && !inputs[49].checked) ||
        (inputs[45].checked && !inputs[46].checked && inputs[47].checked && !inputs[48].checked && !inputs[49].checked) ||
        (!inputs[45].checked && !inputs[46].checked && inputs[47].checked && inputs[48].checked && !inputs[49].checked) ||
        (!inputs[45].checked && !inputs[46].checked && inputs[47].checked && !inputs[48].checked && inputs[49].checked)) {
        k++;
        for (var i = 45; i <= 49; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if ((i == 46) || (i == 47))
                labels[i].style.color = 'green';
        }
    }
    else {
        for (var i = 45; i <= 49; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if ((i == 46) || (i == 47))
                labels[i].style.color = 'green';
        }
    }

    if (inputs[50].checked && inputs[51].checked && !inputs[52].checked && !inputs[53].checked && !inputs[54].checked) {
        k += 2;
        labels[50].style.color = 'green';
        labels[51].style.color = 'green';
    }
    else if ((inputs[50].checked && inputs[51].checked && inputs[52].checked && !inputs[53].checked && !inputs[54].checked) ||
        (inputs[50].checked && inputs[51].checked && !inputs[52].checked && inputs[53].checked && !inputs[54].checked) ||
        (inputs[50].checked && inputs[51].checked && !inputs[52].checked && !inputs[53].checked && inputs[54].checked) ||
        (inputs[50].checked && !inputs[51].checked && !inputs[52].checked && !inputs[53].checked && !inputs[54].checked) ||
        (!inputs[50].checked && inputs[51].checked && !inputs[52].checked && !inputs[53].checked && !inputs[54].checked) ||
        (inputs[50].checked && !inputs[51].checked && inputs[52].checked && !inputs[53].checked && !inputs[54].checked) ||
        (inputs[50].checked && !inputs[51].checked && !inputs[52].checked && inputs[53].checked && !inputs[54].checked) ||
        (inputs[50].checked && !inputs[51].checked && !inputs[52].checked && !inputs[53].checked && inputs[54].checked) ||
        (!inputs[50].checked && inputs[51].checked && inputs[52].checked && !inputs[53].checked && !inputs[54].checked) ||
        (!inputs[50].checked && inputs[51].checked && !inputs[52].checked && inputs[53].checked && !inputs[54].checked) ||
        (!inputs[50].checked && inputs[51].checked && !inputs[52].checked && !inputs[53].checked && inputs[54].checked)) {
        k++;
        for (var i = 50; i <= 54; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if ((i == 50) || (i == 51))
                labels[i].style.color = 'green';
        }
    }
    else {
        for (var i = 50; i <= 54; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if ((i == 50) || (i == 51))
                labels[i].style.color = 'green';
        }
    }

    if (!inputs[55].checked && inputs[56].checked && inputs[57].checked && inputs[58].checked && !inputs[59].checked) {
        k += 2;
        labels[56].style.color = 'green';
        labels[57].style.color = 'green';
        labels[58].style.color = 'green';
    }
    else if ((inputs[55].checked && inputs[56].checked && inputs[57].checked && inputs[58].checked && !inputs[59].checked) ||
        (!inputs[55].checked && inputs[56].checked && inputs[57].checked && inputs[58].checked && inputs[59].checked) ||
        (!inputs[55].checked && inputs[56].checked && inputs[57].checked && !inputs[58].checked && !inputs[59].checked) ||
        (!inputs[55].checked && inputs[56].checked && !inputs[57].checked && inputs[58].checked && !inputs[59].checked) ||
        (!inputs[55].checked && !inputs[56].checked && inputs[57].checked && inputs[58].checked && !inputs[59].checked)) {
        k++;
        for (var i = 55; i <= 59; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if ((i == 56) || (i == 57) || (i == 58))
                labels[i].style.color = 'green';
        }
    }
    else {
        for (var i = 55; i <= 59; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if ((i == 56) || (i == 57) || (i == 58))
                labels[i].style.color = 'green';
        }
    }

    if (!inputs[60].checked && inputs[61].checked && !inputs[62].checked && !inputs[63].checked && inputs[64].checked) {
        k += 2;
        labels[61].style.color = 'green';
        labels[64].style.color = 'green';
    }
    else if ((inputs[60].checked && inputs[61].checked && !inputs[62].checked && !inputs[63].checked && inputs[64].checked) ||
        (!inputs[60].checked && inputs[61].checked && inputs[62].checked && !inputs[63].checked && inputs[64].checked) ||
        (!inputs[60].checked && inputs[61].checked && !inputs[62].checked && inputs[63].checked && inputs[64].checked) ||
        (!inputs[60].checked && inputs[61].checked && !inputs[62].checked && !inputs[63].checked && !inputs[64].checked) ||
        (!inputs[60].checked && !inputs[61].checked && !inputs[62].checked && !inputs[63].checked && inputs[64].checked) ||
        (inputs[60].checked && inputs[61].checked && !inputs[62].checked && !inputs[63].checked && !inputs[64].checked) ||
        (!inputs[60].checked && inputs[61].checked && inputs[62].checked && !inputs[63].checked && !inputs[64].checked) ||
        (!inputs[60].checked && inputs[61].checked && !inputs[62].checked && inputs[63].checked && !inputs[64].checked) ||
        (inputs[60].checked && !inputs[61].checked && !inputs[62].checked && !inputs[63].checked && inputs[64].checked) ||
        (!inputs[60].checked && !inputs[61].checked && inputs[62].checked && !inputs[63].checked && inputs[64].checked) ||
        (!inputs[60].checked && !inputs[61].checked && !inputs[62].checked && inputs[63].checked && inputs[64].checked)) {
        k++;
        for (var i = 60; i <= 64; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if ((i == 61) || (i == 64))
                labels[i].style.color = 'green';
        }
    }
    else {
        for (var i = 60; i <= 64; i++) {
            if (inputs[i].checked)
                labels[i].style.color = 'red';
            if ((i == 61) || (i == 64))
                labels[i].style.color = 'green';
        }
    }


    if ((inputs[65].value == 'Бурятия') || (inputs[65].value == 'бурятия')) {
        k += 3;
        inputs[65].style.color = 'green';
        wrong1.style.display = 'none';
    }
    else {
        wrong1.style.display = 'block';
        inputs[65].style.color = 'red';
        wr1.value = 'Бурятия';
        wr1.style.color = 'green';
        wr1.disabled = true;
    }
    if ((inputs[67].value == 'Ростовская') || (inputs[67].value == 'ростовская')) {
        k += 3;
        inputs[67].style.color = 'green';
        wrong2.style.display = 'none';
    }
    else {
        wrong2.style.display = 'block';
        inputs[67].style.color = 'red';
        wr2.value = 'Ростовская';
        wr2.style.color = 'green';
        wr2.disabled = true;
    }
    if ((inputs[69].value == 'Хабаровский') || (inputs[69].value == 'хабаровский')) {
        k += 3;
        inputs[69].style.color = 'green';
        wrong3.style.display = 'none';
    }
    else {
        wrong3.style.display = 'block';
        inputs[69].style.color = 'red';
        wr3.value = 'Хабаровский';
        wr3.style.color = 'green';
        wr3.disabled = true;
    }


    res.style.display = 'block';
    if ((k >= 26) && (k <= 29)) {
        result.innerHTML = 'Превосходно! ' + '(набрано баллов: ' + k + ')';
        comment.innerHTML = 'Вы прекрасно знаете географию России, поздравляю! :)';
        comment.scrollIntoView(true);
        res.style.borderColor = 'green';
        result.style.color = 'green';
    }
    else if ((k >= 20) && (k <= 25)) {
        result.innerHTML = 'Хорошо! ' + '(набрано баллов: ' + k + ')';
        comment.innerHTML = 'Вы хорошо знаете географию России, вполне достойный результат!';
        comment.scrollIntoView(true);
        res.style.borderColor = '#95ff00';
        result.style.color = '#95ff00';
    }
    else if ((k >= 14) && (k <= 19)) {
        result.innerHTML = 'Средне! ' + '(набрано баллов: ' + k + ')';
        comment.innerHTML = 'Это вполне нормальный результат, Вы знаете географию России на удовлетворительном уровне.';
        comment.scrollIntoView(true);
        res.style.borderColor = 'yellow';
        result.style.color = 'yellow';
    }
    else if ((k >= 7) && (k <= 13)) {
        result.innerHTML = 'Не очень! ' + '(набрано баллов: ' + k + ')';
        comment.innerHTML = 'Вам стоит подтянуть свои знания по географии России.';
        comment.scrollIntoView(true);
        res.style.borderColor = '#b3650c';
        result.style.color = '#b3650c';
    }
    else if (k < 7) {
        result.innerHTML = 'Плохо! ' + '(набрано баллов: ' + k + ')';
        comment.innerHTML = 'К сожалению, Вы знаете географию России не очень хорошо :( Но не расстраивайтесь! При желании всегда можно подтянуть свой уровень! :)';
        comment.scrollIntoView(true);
        res.style.borderColor = 'red';
        result.style.color = 'red';
    }
});

reset.addEventListener('click', function fresh() {
    k = 0;
    for (var i = 0; i < inputs.length; i++)
        inputs[i].checked = false;
    res.style.display = 'none';
    wrong1.style.display = 'none';
    wrong2.style.display = 'none';
    wrong3.style.display = 'none';
    for (var i = 0; i <= 64; i++)
        labels[i].style.color = 'black';
});
