var tri_insert = function(t , f){
 for(var i=1 ; i < t.length ; i++){
  var temp= t[i] ;
  var j = i-1 ;
  while( f(temp, t[j]) && j>=0){
    t[j+1]= t[j]
     j-- ;
   };
   t[j+1]=temp ;
    
 } 
    return t;
}

tri_insert([5,3,6,2,1] , function(a, b){ return   a < b;})