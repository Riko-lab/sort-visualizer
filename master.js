import { selectionSortArray } from './sort/selection-sort.js';
import { bubbleSortArray } from './sort/bubble-sort.js';
import { insertionSortArray } from './sort/insertion-sort.js';
import { mergeSortArray } from './sort/merge-sort.js';

document.addEventListener('DOMContentLoaded', function() {
    //Array that will contain the values for the graphs
    let myArray = null;

    //Button create array
    let create = document.getElementById('create');
    create.addEventListener('click', function() {
        let myGraph = document.querySelector('#graph-cnt');
        if(myGraph){
            myGraph.remove();
        }
        let graphContainer = document.createElement('section');
        graphContainer.id = 'graph-cnt';
        document.querySelector('main').appendChild(graphContainer);
        myArray = [];
        for (let i = 0; i < 200; i++) { //create random numbers different from each other
            do {
                var number = getRandomIntInclusive(20, 500);
            }
            while(myArray.includes(number));
            myArray.push(number);
            let graphBar = document.createElement('div');
            graphBar.className = 'graph-bar';
            graphContainer.appendChild(graphBar);
            graphBar.style.setProperty('height', number + 'px');
        }
    });

    //Selection sort
    var selectionSort = document.getElementById('selection-sort');
    selectionSort.addEventListener('click', function () {
    selectionSortArray(myArray);
    });

    //bubble sort
    var bubbleSort = document.getElementById('bubble-sort');
    bubbleSort.addEventListener('click', function () {
    bubbleSortArray(myArray);
    });

    //insertion sort
    var insertionSort = document.getElementById('insertion-sort');
    insertionSort.addEventListener('click', function () {
    insertionSortArray(myArray);
    });

    //insertion sort
    var mergeSort = document.getElementById('merge-sort');
    mergeSort.addEventListener('click', function () {
    mergeSortArray(myArray);
    });


}, 200);


function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

