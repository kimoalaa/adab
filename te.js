const quiz_box = document.querySelector(".quiz_box");
const info_box = document.querySelector(".info_box");
const btn_exit = document.querySelector(".exit");
const btn_continue = document.querySelector(".continue");
const btn_start = document.querySelector(".btn_start");
const option_list = document.querySelector(".option_list");
const btn_next = document.querySelector(".btn_next");
const reuslt_box = document.querySelector(".reuslt_box");
const quit_btn = document.querySelector(".quit");

quit_btn.onclick = function () {
    window.location.reload();
}
btn_start.onclick = function() {
    info_box.classList.add("activeinfo");
}
btn_exit.onclick = function (){
    info_box.classList.remove("activeinfo");
}
btn_continue.onclick = function (){
    info_box.classList.remove("activeinfo");
    quiz_box.classList.add("active");
    showqestions(0);
}


let que_count = 0;
let userscore = 0;

////if clicked next btn
btn_next.onclick = function () {
    if(que_count < questions.length - 1) {
    que_count++;
    showqestions(que_count);
    }else{
        f();
    }
}
function f (){
    quiz_box.classList.remove("active");
    info_box.classList.remove("activeinfo");
    reuslt_box.classList.add("activere");
    const scor = reuslt_box.querySelector(".tit");
    
    if(userscore >= 4) {
        let scoreTag = `<span class = "spanjs"> [${userscore}] From: [${questions.length}]  your preformance is very amazing :) </span>`;
        scor.innerHTML = scoreTag;
    }
    else if(userscore >= 3) {
        let scoreTag = `<span class = "spanjs2"> [${userscore}] From: [${questions.length}]  your preformance is good :) </span>`;
        scor.innerHTML = scoreTag;
    }
    else {
        let scoreTag = `<span class = "spanjs3"> [${userscore}] From: [${questions.length}]  Study Hard and Try Again :( </span>`;
        scor.innerHTML = scoreTag;
    }
}


function showqestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = "<span>" + questions[index].numb+"."+questions[index].question + "</span>";
    let option_tag = '<div class="option">'+questions[index].options[0]+'<span></span></div>'
                    +'<div class="option">'+questions[index].options[1]+'<span></span></div>'
                    +'<div class="option">'+questions[index].options[2]+'<span></span></div>'
                    +'<div class="option">'+questions[index].options[3]+'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for(let i = 0; i < option.length;i++){
        option[i].setAttribute("onclick" , "optionselected(this)");
    }

}
function optionselected(answer){
    let userans = answer.textContent;
    let correctans = questions[que_count].answer;
    let alloptions =option_list.children.length;
    if (userans == correctans){
        userscore += 1;
        answer.classList.add("correct");
    }
    else{
        answer.classList.add("nocorrect");    
    }

    for (let i = 0; i < alloptions; i++){
        option_list.children[i].classList.add("disable");
    }
}