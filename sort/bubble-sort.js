export {bubbleSortArray};



function bubbleSortArray(myArray) {
    let arrayLength = myArray.length;
    let graph = document.getElementById('graph-cnt').children;
    sort(myArray, arrayLength, graph);
}

function sort(myArray, arrayLength, graph) {
    //Keeps track of the sorted part of the array
    let sorted = 0;
    let leftElement = 0;
    let rightElement = 1;
    let swapCounter = 0;
    let swap = false;
    let noSwap = false;
    let resetIndex = false;
    let sortedColor = 'lightblue';
    let unsortedColor = '#c53030ab';
    let currentHigherColor = 'black';
    let comparedColor = '#ffff00bd';
    let timer = setInterval(function() {
        if (noSwap) {
            graph[leftElement].style.setProperty('background-color', unsortedColor);
            graph[rightElement].style.setProperty('background-color', currentHigherColor);
            leftElement++;
            rightElement++;
            noSwap = false
        }
        else if(swap) {
            graph[leftElement].style.setProperty('background-color', unsortedColor);
            graph[leftElement].style.setProperty('height', myArray[leftElement] + 'px');
            graph[rightElement].style.setProperty('background-color', currentHigherColor);
            graph[rightElement].style.setProperty('height', myArray[rightElement] + 'px');
            leftElement++;
            rightElement++;    
            swap = false;
        }
        else if(resetIndex) {
            graph[leftElement].style.setProperty('background-color', unsortedColor);
            graph[leftElement].style.setProperty('height', myArray[leftElement] + 'px');
            graph[rightElement].style.setProperty('background-color', sortedColor);
            graph[rightElement].style.setProperty('height', myArray[rightElement] + 'px');
            leftElement = 0;
            rightElement = 1;
            swapCounter = 0;
            sorted++;
            resetIndex = false;
        }
        else if (myArray[leftElement] > myArray[rightElement]) {
            graph[leftElement].style.setProperty('background-color', currentHigherColor);
            graph[rightElement].style.setProperty('background-color', comparedColor);
            let temp = myArray[leftElement];
            myArray[leftElement] = myArray[rightElement];
            myArray[rightElement] = temp;  
            swapCounter++;  
            swap = true;
            if(rightElement == arrayLength - sorted - 1) {
                if(swapCounter == 0) {
                    for(let i = 0; i < arrayLength - sorted; i++) {
                        graph[i].style.setProperty('background-color', sortedColor);
                    }
                    clearInterval(timer);
                    return;
                }
                resetIndex = true;
                swap = false;
            }
        }
        else {
            graph[leftElement].style.setProperty('background-color', currentHigherColor);
            graph[rightElement].style.setProperty('background-color', comparedColor);
            if(rightElement == arrayLength - sorted - 1) {
                if(swapCounter == 0) {
                    for(let i = 0; i < arrayLength - sorted + 1; i++) {
                        graph[i].style.setProperty('background-color', sortedColor);
                    }
                    clearInterval(timer);
                    return;
                }
                resetIndex = true;   
            }
            noSwap = true;
        }

    }, 5);
}