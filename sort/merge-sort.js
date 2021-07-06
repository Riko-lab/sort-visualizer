export { mergeSortArray };


async function mergeSortArray(myArray) {
    let arrayLength = myArray.length;
    let graph = document.getElementById('graph-cnt').children;
    await sort(myArray, 0, arrayLength - 1, graph);
    for(let i = 0; i < arrayLength; i++) {
        await sleep(1);
        graph[i].style.setProperty('background-color', 'lightBlue')
    }
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
            await sleep(5);
            graph[p + i].style.setProperty('background-color', 'black');
            graph[mid + 1 + j].style.setProperty('background-color', 'black');
            if (L[i] <= R[j]) {
                myArray[k] = L[i];
                graph[k].style.setProperty('height', myArray[k] + 'px');
                i++;
            }
            else {
                myArray[k] = R[j];
                graph[k].style.setProperty('height', myArray[k] + 'px');
                j++;
            }
            k++;
        }
     
        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
            await sleep(5);
            myArray[k] = L[i];
            graph[k].style.setProperty('height', L[i] + 'px');
            i++;
            k++;
        }
     
        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
            await sleep(5);
            myArray[k] = R[j];
            graph[k].style.setProperty('height', R[j] + 'px');
            j++;
            k++;
        }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}