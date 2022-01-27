/*Task-1/4 Интернет-магазин занимается продажей различных сувениров и безделушек.
Каждый сувенир весит 75 г, а безделушка – 112 г. Напишите программу, запрашивающую у 
пользователя количество тех и других покупок, после чего выведите на экран общий вес 
посылки.*/
let souvenir = prompt('Number of souvenirs?', 10);
let bauble = prompt('Number of baubles?', 10);

const souvenirWeight = 75;
const baubleWeight = 112;
let totalWeight = (souvenir * souvenirWeight) + (bauble * baubleWeight);
totalWeight = totalWeight / 1000;

alert(`Total weight is: ${totalWeight}kg`)