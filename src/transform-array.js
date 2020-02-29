  
module.exports = function transform(arr) {
    if (!Array.isArray(arr)){
        throw new Error('Error');
    } else{
    let res = [];
    for (let i=0; i<arr.length; i++){
        switch (arr[i]) {
          case '--discard-prev':
            if(i - 1 >= 0) res.pop();
            break;
          case '--discard-next':
            if (i + 1 <= arr.length - 1) i++;
            break;
         case '--double-prev':
          if (i - 1 >= 0) res.push(arr[i-1]);
            break;
          case '--double-next':
            if (i + 1 <= arr.length - 1) res.push(arr[i + 1]);
            break;
          default: res.push(arr[i]);
      }
    }
    return res;
}
  };
