export { mergeSortArray };


function mergeSortArray(myArray) {
    let arrayLength = myArray.length;
    let graph = document.getElementById('graph-cnt').children;
    sort(myArray, 0, arrayLength - 1, graph);
}

async function sort(myArray, p, r, graph) {
    if ( p >= r) {
        return;
    }
    var mid = p + Math.floor((r - p) / 2);
    //Sort left half
    await sort(myArray, p, mid, graph);
    //Sort right half
    await sort(myArray, mid + 1, r, graph);
    //Merge
    await merge(myArray, p, mid, r, graph);
}

async function merge(myArray, p, mid, r, graph)
{
        var n1 = mid - p + 1;
        var n2 = r - mid;
     
        // Create temp arrays
        var L = new Array(n1);
        var R = new Array(n2);
     
        // Copy data to temp arrays L[] and R[]
        for (var i = 0; i < n1; i++)
            L[i] = myArray[p + i];
        for (var j = 0; j < n2; j++)
            R[j] = myArray[mid + 1 + j];
     
        // Merge the temp arrays back into arr[p..r]
     
        // Initial index of first subarray
        var i = 0;
     
        // Initial index of second subarray
        var j = 0;
     
        // Initial index of merged subarray
        var k = p;
     
        while (i < n1 && j < n2) {
            await sleep(10);
            graph[p + i].style.setProperty('background-color', 'black');
            graph[mid + 1 + j].style.setProperty('background-color', 'black');
            if (L[i] <= R[j]) {
                await sleep(10);
                myArray[k] = L[i];
                graph[k].style.setProperty('height', myArray[k] + 'px');
                graph[k].style.setProperty('background-color', 'lightBlue');
                graph[mid + 1 + j].style.setProperty('background-color', 'lightBlue');
                i++;
            }
            else {
                await sleep(10);
                myArray[k] = R[j];
                graph[k].style.setProperty('height', myArray[k] + 'px');
                graph[k].style.setProperty('background-color', 'lightBlue');
                graph[mid + 1 + j].style.setProperty('heght', L[i] + 'px');
                graph[mid + 1 + j].style.setProperty('background-color', 'lightBlue');
                j++;
            }
            k++;
        }
     
        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
            await sleep(10);
            myArray[k] = L[i];
            graph[k].style.setProperty('height', L[i] + 'px');
            graph[k].style.setProperty('background-color', 'lightBlue');
            graph[p + i].style.setProperty('background-color', 'lightBlue');
            i++;
            k++;
        }
     
        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
            await sleep(10);
            myArray[k] = R[j];
            graph[k].style.setProperty('height', R[j] + 'px');
            graph[k].style.setProperty('background-color', 'lightBlue');
            graph[mid + 1 + j].style.setProperty('background-color', 'lightBlue');
            j++;
            k++;
        }
}

function animateGraph(L, R, p, graph) {
    console.log(copyRemainingR);
    console.log( copyRemainingL);
     // Initial index of first subarray
     var i = 0;
 
     // Initial index of second subarray
     var j = 0;
  
     // Initial index of merged subarray
     var k = p;
    while (i < L.length && j < R.length) {
        if (L[i] <= R[j]) {
            graph[k].style.setProperty('height', L[i] + 'px');
            i++;
        }
        else {
            graph[k].style.setProperty('height', R[j] + 'px');
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < L.length) {
        graph[k].style.setProperty('height', L[i] + 'px');
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < R.length) {
        graph[k].style.setProperty('height', R[j] + 'px');
        j++;
        k++;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}