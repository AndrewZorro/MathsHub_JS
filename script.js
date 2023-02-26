// alert ("Hello") 
// alert - выводит сообшение в модальном окне, которое мы не можем закрыть без нашей реакции. 
// При этом в модальном окне только опция ОК
// confirm ("Вы учите JS?")
// confirm - выводит сообшение в модальном окне, которое мы не можем закрыть без нашей реакции. 
// При этом в модальном окне есть опции ОК и Отмена (Да или Нет)
// prompt ("Какой язык Вы учите?", "пока не в курсе")
// prompt - выводит сообшение в модальном окне, которое мы не можем закрыть без нашей реакции. 
// При этом в модальном окне есть опции ОК и Отмена + ответ на вопрос по умолчанию

// F12 - вывести код разработчика


// const skill = document.getElementById("skill") - связь с классами по ID из index.html
// const isLove = document.getElementById("isLove")
// const string = document.getElementById("string")

// // console.log("skill")
// // // console.log - выводит текст в консоль (см. вкладку Console в браузер-документе)
// // console.log(skill.innerText)

// const skillText = prompt ("Какой язык Вы учите?", "пока не в курсе")
// const isLoveValue = confirm("Вы любите изучаемый язык?")
// // мы назвали первую переменную с text, а вторую с value, т.к. промпт позваоляет вводить ответ, а 
// // confirm - только выбирать ответ

// console.log(isLoveValue)

// skill.innerText = skillText
// isLove.innerText = isLoveValue

// string.innerHTML = "str"

// innerText - выводит на консоль весь код из элемента
// innerHTML - выводит на консоль только текст

// ПЕРЕМЕННЫЕ /////////////////////////////////////////////////////

// let a = 5
// // // let - объявление переменной. Значение переменной можно менять
// a = 7
// const b = 12
// const - задает переменную-константу. Лучше его использовать, чем let
// var - лучше не использовать. Разница с let - в области видимости

//STRING
// const str1 = 'Hello'
// // если в тексте с одинарными кавычками нужно поставить апостроф, то появится ошибка. Поэтому нужно 
// // использовать \ (это экранирование)
// const str11 = 'I\'m ok'
// const str2 = "Text"
// const str12 = "Саша сказал \"Привет\""
// // ' и " не поддерживают перенос на другую строку, ` - поддерживают
// const str3 = `Reverse` 
// const str13 = `I'm say "Hello"`
// // ` используются в основном для шаблонных выражений, т.е. чтобы можно было встраивать переменные в строки. 
// // Это называется интерполяция
// const str14 = `I'm say ${str1}` 
// // \n - перенос на другую строку в строках с " и '
// const str15 = "Саша \nсказал \"Привет\""

// // console.log(str1)
// // console.log(str2)
// // console.log(str3)

// // чтобы увидеть тип переменной, нужно
// console.log(str1, typeof str1)
// console.log(str11, typeof str11)
// console.log(str2, typeof str2)
// console.log(str12, typeof str12)
// console.log(str3, typeof str3)
// console.log(str13, typeof str13)
// console.log(str14, typeof str14)
// console.log(str15, typeof str15)

// //NUMBER - числа от -(2**53-1) до (2**53-1)
// // т.к. любой язык программирования проводит вычисления в двоичной системе, то возможны "нелогичные" округления, например
// console.log(99999999999999999)
// // в консоли выведет 1000000000000000000
// // математические выражения + - * / **(означает степень)
// const num1 = 75 + 15
// alert(num1)
// const num2 = 75 * 15
// alert(num2)
// const num3 = 2 ** 3
// alert(num3)

// // математические выражения сразу можно писать в консоли

// // // математические выражения можно также использовать со строками
// const num4 = "5" + '15'
// alert(num4) 
// // // в этом равенстве ответ = 515 (т.н. конкатенация)
// const num5 = 5 + '15'
// // // в этом равенстве ответ = 515
// alert(num5) 
// const num7 = 7 + 8 + '5'
// // // в этом равенстве ответ = 155
// alert(num7) 
// // // если применять выражения при работе со строками -, *, ** и /, то строки будут меняться на числа
// const num6 = 5 - '15'
// // // в этом равенстве ответ = -10
// alert(num6) 
// const num8 = 'a' - 8
// // // в этом равенстве ответ = NaN (Not a Number)
// alert(num8) 
// const inf = 1000 / 0
// // // в этом равенстве ответ = infinity (бесконечность)
// alert(inf) 


// // BIGINT - числа за рамками NUMBER. Символ n в конце указвает на тип bigint 
// const bigint = 1225345346346345n
// console.log(bigint)

// // BOOLEAN (выражения true \ false, работает с выражениями <   >   <=    >=   <==   >==   ==(означает равно)
// const bool1 = 5>10
// console.log(bool1)
// const bool2 = 'a'>'AAAA'
// // это выражение true, т.к. символ a (символ 61 в таблице)> A (символ 41 символ) (см.UTF-8 encoding table and Unicode characters)
// console.log(bool2)


// // NULL - пустое значение
// let empty = null
// // не const, т.к. потом const empty нельзя будет переназначить
// console.log(empty, typeof empty)
// // typeof empty = object. Это знаменитый баг jS


// // UNDEFINED - необьявленное
// let box = undefined
// // то же самое, что и просто let box
// console.log(box, typeof box)


// // SYMBOL - нечто уникальное
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2)


// OBJECT - объект, набор пар "ключ - значение". Также объектом может быть массив. В массиве к качестве ключа 
// используется число. 
// const obj = {
//     name: 'Sasha',
//     age: 19,
//     isHappy: true
// }
// // теперь обратимся с ключам объекта
// console.log(obj.name)
// // или
// console.log(obj['age'])
// // несмотря на то, что тип объекта конст, можно добавлять и удалять его пары, менять значения. 
// // Но переопределить объект нельзя. Например obj = 5 нельзя
// obj.job = 'Google'
// obj.age = 25
// console.log(obj)

// const array = ['Аня', 18, false]
// array[3] = 'Facebook'
// console.log(array)
// // Выведем нулевой итем массива
// console.log(array[0])


// ОПЕРАТОРЫ
// = присваивание
// == сравнение по значению
// === сравнение по значению и типу
// >= больше или равно
// <= меньше или равно
// % остаток от деления
// ! не (отрицание)
// || или
// && и

const variant = 'option1'

// сравнение по значению. Когда мы сравниваем по значению, код приводит оба значения к 1 типу, 
// а потом их сравнивает. При этом перевод типа всегда идет в строчный или булевый типы.
// console.log(5 == "5")
// console.log("5" == "5")

// console.log(5 === "5")
// console.log("abc" > "5")
// console.log(null == 0)
// // при этом есть общий баг (см. 5 строк кода ниже и выведи их в консоль)
// console.log(null == 0)
// console.log(null > 0)
// console.log(null < 0)
// console.log(null >= 0)
// console.log(null <= 0)

// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined < 0)
// console.log(undefined >= 0)
// console.log(undefined <= 0)
// // следующее выражение = true, т.к. сначала код их приводит к булевому типу. Затем 
// // undefined = false и null = false. Поэтому общее выражение = true.
// console.log(undefined == null)
// console.log(undefined === null)

// // также можно присвоить тип принудительно
// const a = "15"
// console.log(a, typeof a)
// typeof Number(a)
// console.log(a, typeof a)
// // также для перевода типа в number можно использовать знак + 
// typeof +(a)
// // также для перевода типа в string можно использовать комбинацию + "" (т.к. из прошлого занятия - плюс между
// // числом и строкой всегда приводит обе переменные в строку)
// // чтобы привести в булевое значение
// Boolean (15)
// при этом все числа в булевом типе будут true, кроме 0. Булевый тип для числа говорит о том, что число 
// существует (true). А 0 говорит о том, что число не существует.
// также и со строками: пустая строка = false, непустая (даже только с пробелом) = true
// null выдаст результат false, т.к. это аналог 0
// чтобы привести к булевому типу, нужно использовать !!
!!'abc'

// УСЛОВИЯ (операторы if else, while)
// 1.можно передавать внутрь {} булевое значение
// если хардкодить
// const go = true
// if (go) {
//     alert ("побежали")
// }
// else {
//     alert ("стоим")
// }

// const go1 = false
// if (go1) {
//     alert ("побежали")
// }
// else {
//     alert ("стоим")
// }

// // если писать через команду
// const go = confirm ("Мы будем сегодня бегать?")
// if (go) {
//     alert ("побежали")
// }
// else {
//     alert ("стоим")
// }

// // 2.внутри {} значение может вычисляться
// const go = prompt ("Куда мы побежим?", 'Домой')
// // В данном случае go будет принимать строку, т.к. prompt возвращает строку, которую мы введем (это м.б.
// // любая строка, не обязательно ответ по умолчанию)
// if (go) {
//     alert ("побежали")
// }
// else {
//     alert ("стоим")
// }

// const userName = prompt ("Who are you?", 'Anonim')
// if (userName) {
//     alert ("побежали")
// }
// else {
//     alert ("стоим")
// }

// const userName = prompt ("Who are you?", 'Anonim')
// // при этом username присваивается null
// if (userName === "Admin") {
//     alert ("Hello boss")
// } else if (userName === "Anonim") {
//     alert ("I don't know you")
// } else if (userName == null) {
//     alert ("You don't exist")
// }
// else {
//     alert (`Hi ${userName}`)
// }


// const userName = prompt ("Who are you?", 'Anonim')
// // рассмотрим более короткий код
// if (userName === "Admin") {
//     alert ("Hello boss")
// } else if (userName === "Anonim") {
//     alert ("I don't know you")
// } else if (!userName) {
//     alert ("You don't exist")
// }
// else {
//     alert (`Hi ${userName}`)
// }

// // сравнения && и || позволяют существенно уменьшить код
// // || возвращает либо первое правдиваое выражение, либо любое последнее (правдивое или ложное)  

// const userName = prompt ("Who are you?", 'Anonim')
// if (userName === "Admin") {
//     alert ("Hello boss")
// } else if (userName === "Anonim" || !userName) {
//     alert ("I don't know you")
// } 
// else {
//     alert (`Hi ${userName}`)
// }

// Циклы (операторы while, do while, циклы for)

// const counts = prompt ("How many times did you eat?", 20)
// let i = 0
// while (i <= counts) {
//     console.log(i) // счетчик будет с 0
//     i = i+1 // или i +=1 или  i++
// }

// // можно записать код короче
// const counts1 = prompt ("How many times did you eat?", 20)
// let a = 0
// while (a <= counts1) {
//     console.log(a++) // счетчик будет с 0. Если указать (++a), то счетчик будет с 1
// }

// // если нужно выполнить цикл хотя бы 1 раз
// const counts1 = prompt ("How many times did you eat?", 5)
// let a = 10
// do {
//     console.log(a++)
// } while (a <= counts1)

// // например, хотим заполнить массив от 1 до 50 включительно
// const arr = [4,5,6]
// console.log(arr[1]) // выведет значение 5, т.к. отсчет элементов в массиве начинается с 0
// // чтобы добавить значение в массив
// arr[3] = 7
// console.log(arr)
// // или можно воспользоваться функцией push, которая добавляет элементы массива в конец массива
// arr.push(8)
// console.log(arr)

// const arr = []
// for (i = 1; i<=50; i++) {
//     arr.push(i)
// }
// console.log(arr)
// // теперь выведем итемы массива, которые делятся на 3
// const newarr = [] // создаем новый массив, куда будем выгружать числа, которые делятся на 3
// for (item of arr) {
//     const marker = item % 3
//     if (!marker) { // !marker означает false. False для числовых элементов тогда, когда элемент = 0
//         newarr.push(item)
//     }
// }
// console.log(newarr)

// const obj = {
//     name: "Andy",
//     age: 19,
//     city: 'Minsk'
// }
// for (key in obj) {
//     console.log(key) // выводит названия ключей
//     console.log(obj[key]) // выводит значения ключей
//     console.log(key, obj[key]) // выводит названия и значения ключей в 1 строке
// }

// // чтобы генерировать числа для нашей игры
// const randomValue1 = (Math.random() *100).toFixed(0) // Math - это объект с матемотическими функциями. 
// // Math.random выдает случайные числа от 0 до 1. toFixed округляет числа до количества знаков после запятой,
// // указанного в скобках
// const randomValue2 = (Math.random() *100).toFixed(0)
// const isPlus = Math.random() > 0.5
// //console.log(randomValue)

// const gameElements = document.getElementById("my_game").children //если вывести children-объекты класса
// // в консоль, то он выглядит, как массив

// if (isPlus) {
//     gameElements[1].innerText = `${randomValue1} + ${randomValue2}` // [1] - т.к. это второй элемент в массиве
//     // children   
// }
// else {gameElements[1].innerText = `${randomValue1} - ${randomValue2}`}   

// console.log(gameElements)

// // задача из домашнего теста. Что выведет на экран код?
// let num = 17
// let str = "17"
// let empty = null
// if ( str - num ) {
//     console.log('first') // нет, т.к. str при вычитании превратиться в num. При вычитании значение = 0, а это false 
// } else if (empty - num) {
//     console.log("second") // да, т.к. null = 0. При вычитании значение = -17, а это true.
// } else if (str - empty) {
//     console.log("third")
// } else {
//     console.log("no one")
// }


// ФУНКЦИИ - это отложенное действие, которое может выполнить какое-либо действие или 
// нам что-то дать в момент, когда мы ее вызываем. Функция м. принимать значения, обрабатывать их и 
// выдавать обратно 
// сначала нужно создать (объявить) функции - 3 метода создания
// Глобальные переменные — переменные, которые объявляются вне любой функции, метода, замыкания или контекста типа. 
// Локальные переменные — переменные, которые объявляются внутри функции, метода или внутри контекста замыкания.
// // 1. Declaration
// function scream() {
//     alert ('AAAAAA')
//     return("I am ok") // для вывода значений при вызове функций. Return используем, когда хотим что-то получить
// }
// // scream() // вызываем функциию, которая выполняет действие alert
// console.log(scream()) // чтобы посмотреть в консоли, что выводит функция

// // 2. Expression - функция создается аналогично переменной
// const wowScream = function() {
//     alert ('WOOOOOOW')
// }
// wowScream()

// // 3. Arrow - стрелочные функции. Ведут себя, как expression
// const arrow = () => {
//     alert ("Arrow in the sky")
// }
// // arrow()

// function scream(a, b) {
//         const result = a * b // создаем переменную result
//         return(result) 
//     }
//     console.log(scream(15, 10)) // чтобы посмотреть в консоли, что выводит функция

// // есть вариант покороче
//     function scream(a, b) {
//             return a * b // динамически генерируется результат return
//         }
//         console.log(scream(15, 10))

    // function scream(a, b) {
    //     const result = a * b 
    //     return(result) 
    //     alert ('WOOOOW') // после того, как функция что-то вернула, остальные операции она не делает. Поэтому 
    //     // данный alert работать не будет
    // }
    // console.log(scream(15, 10))

// // Вызовем функцию до того, как ее объявим
// console.log(scream(15, 10)) // declaration будет работать благодаря хостингу, т.е. функция может быть
// // объявлена в любом месте кода 
// function scream(a, b) {
//     // alert ('AAAAAA')
//     // return("I am ok") 
//     return a * b
// }

// console.log(wowScream())// expression и arrow не будут работать при вызове функции до того, как ее объявили.
// const wowScream = function() {
//     alert ('WOOOOOOW')
// }




// // РЕФАКТОРИНГ НАШЕЙ ИГРЫ
// // ПЛАН
// // 1. начало: нажав на кнопку "Начать" игра запускается, генерируется задача, пользователь может ввести ответ,
// // должна появиться кнопка "Проверить"
// // 2. проверка: когда пользователь нажал кнопку "Проверить", система сравнивает введенную инфу и правильный ответ,
// // вывести результат и правильное значение, сменить кнопку на Начать заново

// // напишем функцию, которая принимает числа для нашей игры
// const getRandomNumInRange = (min, max) => { // вводим в функцию  min и max, что ограничить диапазон рандомных чисел
//     const randomNum = (Math.random() * (max - min) + min).toFixed(0)
//     return randomNum
// }

// // // чтобы создать пример со случайными числами и вызвать функцию, которая ничего не принимает, а генерирует все сама
// // const  getTask = () => {
// //     const randomNum1 = getRandomNumInRange(0, 100)
// //     const randomNum2 = getRandomNumInRange(0, 100)
    
// //     let symbol // let, т.к. символ будем переопределять
// //     if (Math.random() > 0.5) {
// //         symbol = "+"
// //     }
// //     else symbol = "-"
// //     // осталось создать пример
// //     const Task = `${randomNum1} ${symbol} ${randomNum2}`
// //     return Task
// // }
// // console.log(getTask())

// // // можно зарефакторить функцию getTask
// //     const  getTask = () => {
        
// //     const symbol = (Math.random() > 0.5) ? "+" : "-" // замена if else, т.н. тернарный оператор
    
// //     const Task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
// //     return Task
// // }
// // console.log(getTask())

// // можно зарефакторить функцию getTask
// const  getTask = () => {
        
//     const symbol = (Math.random() > 0.5) ? "+" : "-" 
    
//     const Task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
//     // функция eval позволяет вычислить значение троки, если это возможно
//     gameState.rightAnswer = eval(Task) // вычисляем верный ответ для дальнейшего сравнения
//     return Task
// }


// const gameElements = document.getElementById("my_game").children //если вывести children-объекты класса
// // в консоль, то он выглядит, как массив

// // if (isPlus) {
// //     gameElements[1].innerText = `${randomValue1} + ${randomValue2}` // [1] - т.к. это второй элемент в массиве
// //     // children   
// // }
// // else {gameElements[1].innerText = `${randomValue1} - ${randomValue2}`}   

// //console.log(gameElements) // кроме массива gameElements также может называться коллекцией
// const title = gameElements[0] // задаем переменную title и обращаемся к ней (первый элемент массива из children)
// const userTask = gameElements[1]
// const userAnswer = gameElements[2]
// const btnGame = gameElements[3]

// // есть состояния в игре и их нужно описать. Создадим объект gameState, в котором будем хранить состояния 
// // игры и с этим объектом будем работать
// const gameState = {
//     taskInProcess: false, // свойство taskInProcess объекта gameState решает ли сейчас пользователь задачу? Вначале он не решает (видит кнопку Начать),
// // поэтому false
//     rightAnswer: null // налл, т.к. вначале правильного ответа нет
// }
// // создадим функцию, которая заменит gameState.taskInProcess = true и gameState.taskInProcess = false (см. ниже),
// // т.е. тоже изменит состояние игры
// const toggleGameState = () => {
//     gameState.taskInProcess = !gameState.taskInProcess // т.н функции-тоглы, т.е переключатели состояний
// } 

// btnGame.onclick = () => { // onclick - метод, котором мы передаем функцию. 
//     // описываем смену состояний. Если задача в процессе, то мы выполним 1 действие.
//     // Если не в процессе, то выполним другое действиею Знак !, т.к. вначале пользователь не решает задания. 
//     if (!gameState.taskInProcess) {
//         title.innerText = 'Игра началась!'
//         // сначала сгенерируем задачу и ответ
//         const task = getTask()
//         // показываем задачу пользователю
//         userTask.innerText = task // или можно объединить userTask.innerText = getTask()
//         userAnswer.hidden = false // делаем видимым поле для ввода ответа
//         // меняю кнопку
//         btnGame.innerHTML = 'Проверить'
//         // меняю состояние
//         // gameState.taskInProcess = true
//         toggleGameState()
//     } 
// else {
//         // сравнить ответ пользователя с правильным
//         const isRight = gameState.rightAnswer == userAnswer.value // value - для числовых элементов, innertext -
//         // для текстовых 
//         // вывести результат
//         userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
//         // вывести поздравление
//         title.innerText = isRight ? "Вы молодец!" : "Вы ошиблись"
//         // поменять кнопку и состояние
//         btnGame.innerHTML = 'Начать заново'
//         // gameState.taskInProcess = false
//         // очистить поле с ответом пользователя
//         toggleGameState()
//         userAnswer.value = null
// }
// // При нажатии кнопки пользователем срабатывала функция
//     console.log("Click")
// }

// // DOM - Document Object Model
// console.log(document)
// // чтобы вывести в консоль свойства документа. Выводит тот документ, который мы подключили к файлу script.js
// console.dir(document)
// ранее мы использовали document, чтобы обратиться к какому-либо документу по ID, например const gameElements = 
// document.getElementById("my_game").children
// также можно обращаться через query selector. Запись ниже аналогична записям в файле style.css
// const chooseElements = document.querySelector(".my_game")
// console.log(chooseElements)
// если элементов в одинаковым именем несколько, то query selector выберет первый сверху
// если нужно обратиться ко всем элментам с одинаковым именем
// const chooseElements1 = document.querySelectorAll(".my_game")
// console.log(chooseElements1)
// чтобы обратиться к параграфу внутри id=my_game
// const chooseElements = document.querySelector("#my_game p")
// console.log(chooseElements[0])

// ОБРАБОТЧИКИ СОБЫТИЙ
// выберем все элементы класса блоков, символ > означает все элементы div
const chooseElements = document.querySelectorAll(".choose_block-container > div")
// выберем спан класса блоков, который будет использоваться в качестве счетчика выбранных блоков
const countElements = document.querySelector(".choose_block span")
// строка вверху равна по сути нижней, которую мы использовали для первой игры
// !!!const gameElements = document.getElementById("my_game").children
// console.log(chooseElements.length)
// Вся игра с выбором блоков похожа на выбор товаров в интернет-магазине. Есть риск того, что покупатель 
// зайдет в код и поменяет количество выбранных товаров вручную. Чтоюы избежать этого, запишем следующее
// const choosedState = {
//     counterElements: 0,
// }
// // сделаем функцию, которая будет менять счетчик
// const setCountValue = (value) => { // функция будет принимать какое-то значение value
//     choosedState.counterElements = choosedState.counterElements + value
//     countElements.innerText = choosedState.counterElements
// }

// код выше будет неточен с точки зрения ООП, согласно которой все должно быть помещено в объекты. Функции в т.ч.
// поэтому перепишем код. Этот подход называется инкапсуляцией.
const choosedState = {
        counterElements: 0,
        setCountValue(value) { 
            this.counterElements = this.counterElements + value // this - значит элемент из данного объекта
            countElements.innerText = this.counterElements
    }
}

// // 1.До рефакторинга
// for (let i=0; i<chooseElements.length; i++) {
//     // чтобы каждому элементу дать функцию с помощью обработчика событий. После addEventListener указываем в ()
//     // событие и то, что должно произойти после события
//     chooseElements[i].addEventListener("click", (e) => { // (e) - врожденная переменная event
//         // // пропишем механику действия:
//         // // 1.хотим выбрать элемент, т.е. как-то его выделить с помощью класса
//         // // чтобы реализовывать логику сверху, нужно дать класс каждому элементу - можно 2 способами
//         // // chooseElements[i].className = "choosed_element"
//         // // или 2-ой способ. Нас будет интересовать свойство e - target (смю свойства e в консоли)
//         // e.target.className = "choosed_element"
//         // // 2.запустить счетчик
//         // // символ + перед текстом принудительно меняет текст на число
//         // countElements.innerText = +countElements.innerText + 1
//         // 3.отменить ранее выбранный элемент 
//         if (e.target.className === "") {
//             e.target.className = "choosed_element"
//             choosedState.setCountValue(1)
//         } else {
//             e.target.className = ""
//             countElements.innerText = countElements.innerText - 1 // удалим + перед countElements.innerText,
//             // т.к. при операции вычитания тектс приводится к числу без символа +
//             choosedState.setCountValue(-1)
//         }
        
//     })
// }

// 2. После рефакторинга
const eventFunc = (e) => {
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        choosedState.setCountValue(1)
    } else {
        e.target.className = ""
        countElements.innerText = countElements.innerText - 1 
        choosedState.setCountValue(-1)
    }
}

for (let i=0; i<chooseElements.length; i++) {
       chooseElements[i].addEventListener("click", eventFunc)
}
// // чтобы убрать обработчик событий из элемента
// chooseElements[2] = removeEventListener("click", eventFunc)
        
// РЕФАКТОРИНГ НАШЕЙ ПЕРВОЙ ИГРЫ
// начало будет совпадать
const getRandomNumInRange = (min, max) => { // вводим в функцию  min и max, что ограничить диапазон рандомных чисел
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const  getTask = () => {
        
    const symbol = (Math.random() > 0.5) ? "+" : "-" 
    
    const Task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(Task) 
    return Task
}

const gameElements = document.getElementById("my_game").children 
const title = gameElements[0] 
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false, 
    rightAnswer: null 
}
const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
} 

const startGameFunc = () => { 
    if (!gameState.taskInProcess) {
        title.innerText = 'Игра началась!'
        const task = getTask()
        userTask.innerText = task 
        userAnswer.hidden = false 
        btnGame.innerHTML = 'Проверить'
        toggleGameState()
    } 
else {
        const isRight = gameState.rightAnswer == userAnswer.value 
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        title.innerText = isRight ? "Вы молодец!" : "Вы ошиблись"
        btnGame.innerHTML = 'Начать заново'
        toggleGameState()
        userAnswer.value = null
}
}
btnGame.addEventListener("click", startGameFunc)
// теперь поставим дополнительный обработчик событий: когда нажать Enter на инпуте, сработало onclick 
userAnswer.addEventListener("keydown", (e) => {
    // выведем e в консоль, чтобы в атрибуте keyCode настроить кнопку для нажатия
    // console.log(e)
    if (e.key === "Enter") {
        startGameFunc()
// у каждого элемента есть таб-индекс для путешествия по странице без мышки. Переход по элементам 
// осуществляется сверху вниз, если иное не задано разработчиком.
// Когда мы наживаем таб, мы вызываем фокус элемента, т.е. мы сфокусированы на каком-то элементе.
    } else if (e.key === "Escape") {
        userAnswer.blur() // свойство blur убирает фокус с поля userAnswer
    }
})


//!!!!!!!!!!!!! дз Сделать esc для возврата игры в изначальное состояние через хидден !!!!!!!!!!!!!!!!!!!

// для инициализации пуша в репозиторий в гитхабе нужно выбрать команду git init

// В репозиторий нужно добавить файлы. Отдельно указать файлы в создавшемся файле gitignore, 
// котррые мы не хотим переносить в репозиторий github

// чтобы перенести ВСЕ файлы в репозиторий, нужно написать git add . 
// чтобы увидеть перенесенные файлы, нужно написать git status

// после этого нужно коммитить (отражать изменения в коде) - git commit -am (сокращенно от all и message)
// "имя файла" (в первый раз мы инициализируем проект, поэтому напишем init)
// Если после этого появляется сообщение Please tell me who you are, нужно указать 
// git config --andrew.sinyavsky@gmail.com git config --AndrewZorro