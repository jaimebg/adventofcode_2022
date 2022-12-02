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

//day1()

function day2() {
    // A for Rock, B for Paper, and C for Scissors
    // X for Rock, Y for Paper, and Z for Scissors
    function checkOpponent(opponent, me) {
        switch (opponent) {
            case 'A':
                return checkScoreA(me)
            case 'B':
                return checkScoreB(me)
            default:
                return checkScoreC(me)
        }
    }

    function checkScoreA(me) {
        switch (me) {
            case "X":
                return 3 + 1
            case "Y":
                return 6 + 2
            default:
                return 0 + 3
        }
    }
    function checkScoreB(me) {
        switch (me) {
            case "X":
                return 0 + 1
            case "Y":
                return 3 + 2
            default:
                return 6 + 3
        }
    }
    function checkScoreC(me) {
        switch (me) {
            case "X":
                return 6 + 1
            case "Y":
                return 0 + 2
            default:
                return 3 + 3
        }
    }

    const input = readFileSync('input2.txt', { encoding: 'utf-8', flag: 'r' });
    let inputList = input.split('\n');
    let scoresSum = 0;
    inputList.forEach(combat => {
        scoresSum += checkOpponent(combat.charAt(0), combat.charAt(2));
    });
    console.log("Total score", scoresSum);
}

day2();