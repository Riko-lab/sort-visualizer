export {insertionSortArray};

function insertionSortArray(myArray) {
    let arrayLength = myArray.length;
    let graph = document.getElementById('graph-cnt').children;
    sort(myArray, arrayLength, graph);
}


function sort(myArray, arrayLength, graph) {
    let sorted = 0;
    let tempSorted = sorted;
    let currentUnsorted = sorted + 1;
    let tempUnsorted = currentUnsorted;
    let sortedColor = 'lightblue';
    let currentLowerColor = 'black';
    let comparedColor = '#ffff00bd';
    let swap = false;
    let alreadySorted = false;
    let loadColor = false;
    let colorLoaded = false;
    //State first element of array sortedk
    graph[sorted].style.setProperty('background-color', sortedColor);  

    let temp = setInterval(function() {
        if (currentUnsorted == arrayLength) {
            clearInterval(temp);
            return;
        }
        if(alreadySorted) {
            graph[currentUnsorted].style.setProperty('background-color', sortedColor);
            graph[sorted].style.setProperty('background-color', sortedColor);
            alreadySorted = false;
            currentUnsorted++;
            sorted++;
        }
        // If swap continue check
        else if(loadColor && (tempUnsorted > 0)) {
            graph[tempUnsorted].style.setProperty('height', myArray[tempUnsorted] + 'px');
            graph[tempUnsorted].style.setProperty('background-color', currentLowerColor);
            graph[tempUnsorted + 1].style.setProperty('height', myArray[tempUnsorted + 1] + 'px');
            graph[tempUnsorted + 1].style.setProperty('background-color', sortedColor);
            graph[tempSorted].style.setProperty('background-color', comparedColor);
            colorLoaded = true;
            loadColor = false;
        }
        else if ((swap && colorLoaded) || (swap && tempUnsorted == 0)) {
            
            if (tempUnsorted == 0) {
                graph[tempUnsorted].style.setProperty('background-color', sortedColor);
                graph[tempUnsorted].style.setProperty('height', myArray[tempUnsorted] + 'px');
                graph[tempUnsorted + 1].style.setProperty('background-color', sortedColor);
                graph[tempUnsorted + 1].style.setProperty('height', myArray[tempUnsorted + 1] + 'px');
                swap = false;
                currentUnsorted++;
                sorted++;
            }
            // If unsorted reaches index 0 stop and state that is sorted
            else if(myArray[tempUnsorted] < myArray[tempSorted]) {
                let temp = myArray[tempSorted];
                myArray[tempSorted] = myArray[tempUnsorted];
                myArray[tempUnsorted] = temp;
                tempUnsorted--;
                tempSorted--;
                loadColor = true;
            }
            else {
                graph[tempUnsorted].style.setProperty('background-color', sortedColor);
                graph[tempSorted].style.setProperty('background-color', sortedColor);
                swap = false;
                currentUnsorted++;
                sorted++;
                loadColor = false;
            }
        }
        else if(myArray[currentUnsorted] < myArray[sorted]) {
            tempUnsorted = currentUnsorted;
            tempSorted = sorted;
            graph[tempUnsorted].style.setProperty('background-color', currentLowerColor);
            graph[tempSorted].style.setProperty('background-color', comparedColor);
            swap = true;
            let temp = myArray[tempSorted];
            myArray[tempSorted] = myArray[tempUnsorted];
            myArray[tempUnsorted] = temp;
            tempUnsorted--;
            tempSorted--;
            loadColor = true;
        }
        else {
            graph[currentUnsorted].style.setProperty('background-color', currentLowerColor);
            graph[sorted].style.setProperty('background-color', comparedColor);
            alreadySorted = true;
        }

    }, 50);
}