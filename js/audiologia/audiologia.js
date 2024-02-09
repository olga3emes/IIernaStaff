"use strict"

let btn_formacion = document.getElementById('btn_formacion');
let btn_hobby = document.getElementById('btn_hobby');
let btn_frase = document.getElementById('btn_frase');
let btn_sobreMi = document.getElementById('btn_sobreMi');

let formacion = document.getElementById('formacion');
let hobby = document.getElementById('hobby');
let frase = document.getElementById('frase');
let sobreMi = document.getElementById('sobreMi');

let btn_formacion1_r = document.getElementById('btn_formacion_r');
let btn_hobby_r = document.getElementById('btn_hobby_r');
let btn_frase_r = document.getElementById('btn_frase_r');
let btn_sobreMi_r = document.getElementById('btn_sobreMi_r');

let formacion_r = document.getElementById('formacion_r');
let hobby_r = document.getElementById('hobby_r');
let frase_r = document.getElementById('frase_r');
let sobreMi_r = document.getElementById('sobreMi_r');


btn_formacion.addEventListener('mouseover', function () {
    btn_formacion.style.cursor = 'pointer';
});
btn_hobby.addEventListener('mouseover', function () {
    btn_hobby.style.cursor = 'pointer';
});

btn_frase.addEventListener('mouseover', function () {
    btn_frase.style.cursor = 'pointer';
});

btn_sobreMi.addEventListener('mouseover', function () {
    btn_sobreMi.style.cursor = 'pointer';
});



btn_formacion.addEventListener('click', function () {

    formacion.removeAttribute('hidden');
    btn_formacion.classList.remove('text-muted');

    hobby.hidden = true;
    btn_hobby.classList.add('text-muted');

    frase.hidden = true;
    btn_frase.classList.add('text-muted');

    sobreMi.hidden = true;
    btn_sobreMi.classList.add('text-muted');

});

btn_hobby.addEventListener('click', function () {

    hobby.removeAttribute('hidden');
    btn_hobby.classList.remove('text-muted');


    formacion.hidden = true;
    btn_formacion.classList.add('text-muted');


    frase.hidden = true;
    btn_frase.classList.add('text-muted');


    sobreMi.hidden = true;
    btn_sobreMi.classList.add('text-muted');


});

btn_frase.addEventListener('click', function () {

    frase.removeAttribute('hidden');
    btn_frase.classList.remove('text-muted');


    formacion.hidden = true;
    btn_formacion.classList.add('text-muted');


    hobby.hidden = true;
    btn_hobby.classList.add('text-muted');


    sobreMi.hidden = true;
    btn_sobreMi.classList.add('text-muted');

});

btn_sobreMi.addEventListener('click', function () {

    sobreMi.removeAttribute('hidden');
    btn_sobreMi.classList.remove('text-muted');


    formacion.hidden = true;
    btn_formacion.classList.add('text-muted');


    hobby.hidden = true;
    btn_hobby.classList.add('text-muted');


    frase.hidden = true;
    btn_frase.classList.add('text-muted');


});


btn_formacion_r.addEventListener('mouseover', function () {
    btn_formacion_r.style.cursor = 'pointer';
});
btn_hobby_r.addEventListener('mouseover', function () {
    btn_hobby_r.style.cursor = 'pointer';
});

btn_frase_r.addEventListener('mouseover', function () {
    btn_frase_r.style.cursor = 'pointer';
});

btn_sobreMi_r.addEventListener('mouseover', function () {
    btn_sobreMi_r.style.cursor = 'pointer';
});



btn_formacion_r.addEventListener('click', function () {

    formacion_r.removeAttribute('hidden');
    btn_formacion_r.classList.remove('text-muted');

    hobby_r.hidden = true;
    btn_hobby_r.classList.add('text-muted');

    frase_r.hidden = true;
    btn_frase_r.classList.add('text-muted');

    sobreMi_r.hidden = true;
    btn_sobreMi_r.classList.add('text-muted');

});

btn_hobby_r.addEventListener('click', function () {

    hobby_r.removeAttribute('hidden');
    btn_hobby_r.classList.remove('text-muted');


    formacion_r.hidden = true;
    btn_formacion_r.classList.add('text-muted');


    frase_r.hidden = true;
    btn_frase_r.classList.add('text-muted');


    sobreMi_r.hidden = true;
    btn_sobreMi_r.classList.add('text-muted');


});

btn_frase_r.addEventListener('click', function () {

    frase_r.removeAttribute('hidden');
    btn_frase_r.classList.remove('text-muted');


    formacion_r.hidden = true;
    btn_formacion_r.classList.add('text-muted');


    hobby_r.hidden = true;
    btn_hobby_r.classList.add('text-muted');


    sobreMi_r.hidden = true;
    btn_sobreMi_r.classList.add('text-muted');

});

btn_sobreMi_r.addEventListener('click', function () {

    sobreMi_r.removeAttribute('hidden');
    btn_sobreMi_r.classList.remove('text-muted');


    formacion_r.hidden = true;
    btn_formacion_r.classList.add('text-muted');


    hobby_r.hidden = true;
    btn_hobby_r.classList.add('text-muted');


    frase_r.hidden = true;
    btn_frase_r.classList.add('text-muted');


});