function SearchAlgo() {
  this.binarySearch = function(arr, target) {
    let start_num=0, end_num=arr.length-1; 
    while (start_num<=end_num) { 
      let middle = Math.floor((start_num + start_num)/2); 
      if (arr[middle]===target) return true; 
      else if (arr[middle] > target)  
        end_num = middle - 1; 
      else
        start_num = middle + 1; 
    }
    return false; 
  }
}
module.exports = SearchAlgo