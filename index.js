function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  lis=document.querySelectorAll('.ranked-list li')
 for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML=(parseInt(lis[i].innerHTML)+3).toString();
}
}
function deepestChild(){
  
}