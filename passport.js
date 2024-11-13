document.getElementById("translate").addEventListener('click', function(){
    const a = document.getElementById("surname");
    const b = document.getElementById("name");
    const c = document.getElementById("birthname");
    const d = document.getElementById("year");
    const e = document.getElementById("gender");
    const f = document.getElementById("given");

    if (document.getElementById("surname").innerText === 'Фамилия: Китаева') {
        document.getElementById("surname").innerText = 'Name: Kitaeva';
        document.getElementById("name").innerText = 'Surname: Ellina';
        document.getElementById("birthname").innerText = 'Paternal name: Rashidovna';
        document.getElementById("year").innerText = 'Year of birth: 2003'
        document.getElementById("gender").innerText = 'Gender: Female';
        document.getElementById("given").innerText = 'Given: By horses';
    }
    else {
        document.getElementById("surname").innerText = 'Фамилия: Китаева';
        document.getElementById("name").innerText = 'Имя: Эллина';
        document.getElementById("birthname").innerText = 'Отчество: Рашидовна';
        document.getElementById("year").innerText = 'Год рождения: 2003'
        document.getElementById("gender").innerText = 'Пол: Женский';
        document.getElementById("given").innerText = 'Выдан: Лошадками';
    }
});