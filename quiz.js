const question = [{
    'que': "which the following is a markup language",
    'a': "html",
    'b': "javascript",
    'c': "css",
    'd': "none of the above",
    'correct': "a"
},
{
    'que': "which the following is a markup language",
    'a': "html",
    'b': "javascript",
    'c': "css",
    'd': "none of the above",
    'correct': "d",
},
{
    'que': "which the following is a markup language",
    'a': "html",
    'b': "javascript",
    'c': "css",
    'd': "none of the above",
    'correct': "a"
}
]
let total = question.length;
let  right =0;
let wrong = 0;
let index = 0;
const op = document.querySelectorAll('.options')
const databox = document.getElementById("data-box")
function loadquestion(params) {
    if(index===total){
        return endquiz()
    }
    reset();
    const data = question[index]
    databox.innerHTML = (`${index + 1}) ${data.que}`)
    op[0].nextElementSibling.innerText = data.a;
    op[1].nextElementSibling.innerText = data.b;
    op[2].nextElementSibling.innerText = data.c;
    op[3].nextElementSibling.innerText = data.d;

}
const submitquiz = () => {
    const data = question[index]
    const ans = getAnswer()
   
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadquestion()
    return;
}
// submitquiz()


const getAnswer = () => {
    let answer;
    op.forEach(
        (input) => {
            if (input.checked) {
                
                answer = input.value;
            } 
        }
    )
 return answer;
}
const reset =()=>{
    op.forEach(
        (input) => {
            input.checked = false;
        })
}
const endquiz = ()=>{
    document.getElementById("container").innerHTML =`
    <h3> Thank you for playing the quiz </h3>
    <h2> ${right}/${total} is coorect </h2>`
}
loadquestion()
