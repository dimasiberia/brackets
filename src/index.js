module.exports = function check(str, bracketsConfig) {
if(str.length%2==1){
  return false
}
let massiv = [];
for (i in bracketsConfig){
  massiv[i]= Object.values(bracketsConfig)[i][0]+Object.values(bracketsConfig)[i][1];
}


for(i of massiv){
  while(str.indexOf(i)!=-1){
    
    str = str.replaceAll(i,'')
    
  }
}
for(i of massiv){
  while(str.indexOf(i)!=-1){
    
    str = str.replaceAll(i,'')
    
  }
}
for(i of massiv){
  while(str.indexOf(i)!=-1){
    
    str = str.replaceAll(i,'')
    
  }
}
for(i of massiv){
  while(str.indexOf(i)!=-1){
    
    str = str.replaceAll(i,'')
    
  }
}
for(i of massiv){
  while(str.indexOf(i)!=-1){
    
    str = str.replaceAll(i,'')
    
  }
}
for(i of massiv){
  while(str.indexOf(i)!=-1){
    
    str = str.replaceAll(i,'')
    
  }
}



console.log(massiv)
console.log(str)
if(str.length == 0){
  return true
} else{
  return false
}

  }

// while(str.indexOf(...massiv))
// for (i in bracketsConfig){
//  str = str.replaceAll()
// }


