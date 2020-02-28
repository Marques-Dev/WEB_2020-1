

const root = document.getElementById('root');

let ul = document.createElement('ul');

let li1 = document.createElement('li');
let texto1 =  document.createTextNode('1-)Superman');
li1.appendChild(texto1);
ul.appendChild(li1);

let texto2 = document.createTextNode('2-)Batman');
let li2 = document.createElement('li');
li2.appendChild(texto2);
ul.appendChild(li2);

let texto3 = document.createTextNode('3-)Wonder Woman');
let li3 = document.createElement('li');
li3.appendChild(texto3);
ul.appendChild(li3);

root.appendChild(ul);

