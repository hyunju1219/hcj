function handleButtonClick(e) {
    console.log({event: e});
    console.log(e.target.innerHTML);
    e.target.innerHTML = "취소";
}

function handleInputChange(e) {
    if(e.ctrlKey && (e.keyCode === 13 || e.key === "Enter")) {
        alert(e.target.value);
    }
}

let isFocus = false;

function handleInputFocus(e) {
    if(!!e.target.value) {
        e.target.value = "";
    }
}

//포거스가 벗어났을 때
function handlerInputBlur(e) {
    if(!e.target.value) {
        alert("값을 입력해주세요")
    }
}