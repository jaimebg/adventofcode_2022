import { readFileSync } from 'fs';

function day1() {
    function sumCalories(list) {
        let res = 0;
        list.forEach(element => {
            res += element;
        });
        return res;
    }

    const input = readFileSync('input1.txt', { encoding: 'utf-8', flag: 'r' });
    let elves = [];
    let aux = []
    let inputList = input.split('\n');
    let id = 0;
    inputList.forEach(calories => {
        if (calories === '') {
            id++;
            elves.push({ id: id, foodCalories: aux, nCarriedFood: aux.length, totalCalories: sumCalories(aux) })
            aux = []
        }
        else {
            aux.push(parseInt(calories))
        }
    });

    elves.sort((a, b) => b.totalCalories - a.totalCalories)
    console.log("Top 3 elves carrying the most calories are ", elves.slice(0, 3));
}

day1()