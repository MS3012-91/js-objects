/*Task 1 Создайте объект ноутбука . Продумайте типы полей и вложенность.
1 Серийный номер 3V5E7EA
2 Модель HP 255 G8
3 Экран:
Тип экрана IPS
Разрешение 1920x1080
4 Процессор Восьмиядерный AMD Ryzen 7 5700U (1.8 - 4.3 ГГц)
5 Оперативная память 8 ГБ'
6 Накопители данных:
Объём HDD 256 ГБ SSD
Видеокарта AMD Radeon Graphics
7 Корпус: 
Цвет Серебристый
Вес 1,7
Габариты (Ш х Г х В) 358 x 242 x 19 */

const laptop = {
    'Серийный номер': '3V5E7EA',
    'Модель' : 'HP 255 G8',
    'Экран' : {
       'Тип экрана' : 'IPS',
       'Разрешение' : '1920x1080'
    },
    'Процессор': 'Восьмиядерный AMD Ryzen 7 5700U (1.8 - 4.3 ГГц)',
    'Оперативная память': '8 ГБ',
    'Накопители данных' : {
        'Объём HDD': '256 ГБ SSD',
        'Видеокарта' : 'AMD Radeon Graphics'},
    'Корпус' : {
        'Цвет': 'Серебристый',
        'Вес': '1,7',   
        'Габариты (Ш х Г х В)': '358 x 242 x 19'
    }
}

class Экран {
    constructor (ТипЭкрана, Разрешение) {
        this.ТипЭкрана = ТипЭкрана,
        this.Разрешение = Разрешение
    }
}

class НакопителиDанных {
    constructor (ОбъёмHDD, Видеокарта) {
        this.ОбъёмHDD = ОбъёмHDD
        this.Видеокарта = Видеокарта
    }
}

class Корпус {
    constructor (Цвет, Вес, Габариты) {
        this.Цвет = Цвет
        this.Вес= Вес
        this.Габариты = Габариты
    }
}

class Laptop {
    constructor (cерийныйномер, Модель, Экран, Процессор, Оперативнаяпамять, НакопителиDанных, Корпус){
        this.cерийныйномер = cерийныйномер,
        this.Модель = Модель,
        this.Экран = Экран,
        this.Процессор = Процессор,
        this.Оперативнаяпамять = Оперативнаяпамять,
        this.НакопителиDанных = НакопителиDанных,
        this.Корпус = Корпус
    }
}

let Экран1 = new Экран ('IPS', '1920x1080');
let НакопителиDанных1 = new НакопителиDанных ('256ГБ SSD', 'AMD Radeon Graphics');
let Корпус1 = new Корпус ('Серебристый', '1,7', '358 x 242 x 19')
let Laptop1 = new Laptop('3V5E7EA','HP 255 G8', Экран1, 'Восьмиядерный AMD Ryzen 7 5700U (1.8 - 4.3 ГГц)',
'8 ГБ', НакопителиDанных1, Корпус1)

console.log (Laptop1)


/*Task 2 Создайте класс который описывает создание нового пользователя
 с помощью логина и пароля. Сделайте несколько обьектов. 
 Создайте массив из нескольких обьектов*/

class User {
    constructor (login,password) {
        this.login = login
        this.password=password
    }
}

let User1 = new User ('Mark', '12345');
let User2 = new User ('Anton', '54321');

let arrUser1 = Object.entries(User1);
let arrUser2 = Object.entries(User2);

let mainUsers = arrUser1.concat(arrUser2);
console.log (mainUsers);

/*Task 3* Из полученого массива в задании 2 сделайте карту (map). 
в качестве ключа используйте логин*/

const userContainer = mainUsers.map((login) => console.log(login));

//? map должен делать какое-то действие с элементами массива
//? почему-то выводит не только логин

/*Task 4 
4.1 
Создайте класс Работника. У каждого объекта обязательно должно быть свойства id, 
имя, категория и зарплата за месяц. создайте следующие методы:
- вывод информации о зарплате
- подсчитать заработок за год*/

class Worker {
    constructor (id, name, category, salary){
        this.id = id
        this.name = name
        this.category = category
        this.salary = salary
    }
    giveSalary () {
        console.log (this.salary)
    }
    giveTotalSalary (){
       console.log (this.salary*12);
    }
}

const Worker1 = new Worker ('123', 'Bob', 'manager', 15);
console.log (Worker1)
console.log (Worker1.giveSalary())
console.log (Worker1.giveTotalSalary())


/*4.2
Создайте класс Совместитель, который наследует Работника. 
У него есть дополнительные свойства - количество отработанных часов в день, ставка за час. 
создайте методы:
- подсчитайте количество денег что зарабатывает за день
- подсчитайте ему зарплату за меняц */

class SuperWorker extends Worker {
    constructor (id, name, category, salary, workHours, hourSalary){
        super (id, name, category, salary)
        this.workHours = workHours
        this.hourSalary = hourSalary
    }
    daySalary() {
        console.log  (this.workHours*this.hourSalary)
    }
    mounthSalary () {
        console.log  (this.workHours*this.hourSalary*22)
    }
}

const superWorker1 = new SuperWorker (165, 'Anjey', 'builder', 1000, 10, 5)

console.log (superWorker1);
console.log (superWorker1.daySalary());
console.log (superWorker1.mounthSalary());