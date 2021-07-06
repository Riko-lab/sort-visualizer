export {selectionSortArray};

//Sort array
function selectionSortArray(myArray) {
    //get array length
    let arrayLength = myArray.length;

    // Get the html collection of the graph-cnt
    let graph = document.getElementById('graph-cnt').children;

    // Sort array
    sort(arrayLength, myArray, graph);
}
    
function sort(arrayLength, myArray, graph) {

    /*                           *
     *  Sorted sub-array color   *
     *  Unsorted sub-array color *
     * CurrentLowerColor         *
     *                           */
    let unsortedColor = '#c53030ab';
    let sortedColor = 'lightblue';
    let currentLowerColor = 'black';
    let comparedColor = '#ffff00bd';
    // Starting index of the unsorted sub-array
    let currentStartingIndex = 0;

    // Keeps track of the current lower value found, stating that: at the first iteration the current lower value found is the first element of the unsorted-sub-array
    let currentLowerValue = currentStartingIndex;

    // The comparison starts at the index next to the current value
    let comparedValue = currentStartingIndex + 1;

    // Check for each iteration if a lower value is found
    let lowerFound = false;

    // If a new lower value is found this variable will store the position of the the element that was the previuosly the lower
    let previousLowerValue = null;
    
    // Reset the no-more-lower-value-div to unsorted sub-array color
    let noMoreLower = false;

    // If lower value found swap
    let swap = false;

    // If lower value not found no swap
    let noSwap = false;

    let timer = setInterval(function() {

        
        if(swap) {
            swapValues(graph, currentStartingIndex, currentLowerValue, myArray, unsortedColor, sortedColor);
            
            currentStartingIndex++;                   /*                   */
            currentLowerValue = currentStartingIndex; /*                   */
            comparedValue = currentStartingIndex + 1; /*  update variables */
            lowerFound = false;                       /*                   */
            noMoreLower = false;                      /*                   */
            swap = false;                             /*                   */
        }
        if(noSwap) {
            noSwapValues(graph, currentStartingIndex, unsortedColor, sortedColor);
            
            currentStartingIndex++;                   /*                   */
            currentLowerValue = currentStartingIndex; /*                   */
            comparedValue = currentStartingIndex + 1; /*  update variables */
            lowerFound = false;                       /*                   */
            noMoreLower = false;                      /*                   */
            noSwap = false;                           /*                   */
        }
        // if the starting index is the last element of the array, clear and return
        if(currentStartingIndex >= arrayLength - 1) {
            graph[arrayLength - 1].style.setProperty('background-color', sortedColor);
            clearInterval(timer);
            return;
        }
        graph[arrayLength - 1].style.setProperty('background-color', unsortedColor); // set the last element of the array to green becasue the iteration will end in coloring it pink 
        graph[currentLowerValue].style.setProperty('background-color', currentLowerColor); // set the background of the current-lower-value
        if(noMoreLower) {
            graph[previousLowerValue].style.setProperty('background-color', unsortedColor); // if a lower value was found set to green the previous-lower-value
            noMoreLower = false;
        }
        graph[comparedValue].style.setProperty('background-color', comparedColor); // set to pink the current value being compared
        if((comparedValue - 1 !== currentLowerValue)) {
            graph[comparedValue - 1].style.setProperty('background-color', unsortedColor); // if the previous adjacent element is not the current-lower-value, sei it back to green
        }
        if(myArray[comparedValue] < myArray[currentLowerValue]) {
            previousLowerValue = currentLowerValue; //store previous-lower-value index
            currentLowerValue = comparedValue; //store new-lower-value index
            if(comparedValue == arrayLength -1) {
                graph[currentLowerValue].style.setProperty('background-color', currentLowerColor);
                graph[previousLowerValue].style.setProperty('background-color', unsortedColor);
            }
            lowerFound = true;  // set lower-value-found true
            noMoreLower = true; // the previous index will be the lower no more
        }
        // swap
        if(lowerFound && comparedValue == arrayLength - 1) {
            let temp = myArray[currentStartingIndex]; //store the value of the first element of the unsorted part of the array                                      /*          */
            myArray[currentStartingIndex] = myArray[currentLowerValue]; //store lower-value-found inside the first element of the unsorted part of the array        /*   swap   */
            myArray[currentLowerValue] = temp; //store the value of the previous first element of the unsorted-part with the previous current-lower-value-position  /*          */
            swap = true;
            
        }
        // no swap
        else if (!lowerFound && comparedValue == arrayLength - 1) {
            noSwap = true;
            
        }
        else {
            comparedValue++;
        }
    }, 0);
}

// graphic swap values
function swapValues(graph, currentStartingIndex, currentLowerValue, myArray, unsortedColor, sortedColor) {
    graph[currentStartingIndex].style.setProperty('height', myArray[currentStartingIndex] + 'px');                  
    graph[currentStartingIndex].style.setProperty('background-color', sortedColor);
    graph[currentLowerValue].style.setProperty('height', myArray[currentLowerValue] + 'px');
    graph[currentLowerValue].style.setProperty('background-color', unsortedColor);
}

// graphic no swap values
function noSwapValues(graph, currentStartingIndex) {
    graph[currentStartingIndex].style.setProperty('background-color', 'lightblue');
}