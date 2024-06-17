//inputMode = 1 > 추가
//inputMode = 1 > 수정
let inputMode = 1;

let userList = [];

loadUserList();

let emptyUser = {
    id: 0,
    name: "",
    username: "",
    password: ""
};

let user = {
    ...emptyUser
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({ id, name, username, password }, index) => {
        return `
            <tr>
                <th><input type="checkbox" onchange="handleUsercheck(event)" name="${id}"></th>
                <td>${index + 1}</td>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${password}</td>
                <th><button onclick="deleteUser(event)" value="${id}">삭제</button></th>
            </tr>
            `;
    }).join(""); //map으로 리스트를 만들어 inner안에 넣으면 자동으로 문자열로 바뀌지만 리스트 요소 사이에 쉼표 들어간 것을 "" 으로 바꿈
}

//키입력마다 호출
function handleUserInputKeyDown(e) {
    // user[e.target.name] = e.target.value; 이 경우 주소가 동일하고 값만 바뀌기 때문에 스프레드 써야함
    user = {
        ...user,
        [e.target.name]: e.target.value
    }; //새로 객체 생성

    console.log(user);

    if(e.keyCode === 13) {
        const nameInput = document.querySelector(".name-input")
        const passwordInput = document.querySelector(".password-input");
        const usernameInput = document.querySelector(".username-input");
        if(e.target.name === "name") {
            usernameInput.focus()
        }
        if(e.target.name === "username") {
            
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            userList = [ ...userList, { ...user, id: getNewId()} ]; //주소가 같아도 값을 변경하기 위함
            // userList = [ ...userList, user]; 현재 코드는 새로운 객체를 계속 생성하고 있기 때문에 user써도됨
            saveUserList();
            renderTable();

            nameInput.value = emptyUser.name;
            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;
            nameInput.focus();
        }
    }
    
}
function saveUserList() {
    localStorage.setItem("userlist", JSON.stringify(userList));
}

function loadUserList() {
    const jsonUserList = localStorage.getItem("userlist");
    userList = !jsonUserList ? [] : JSON.parse(jsonUserList);
    renderTable();
}

function deleteUser(e) {
    console.log(e.target.value);
    userList = userList.filter(({ id }) => id !== parseInt(e.target.value));
    saveUserList();
    renderTable();
}

function getNewId() {
    const userIds = userList.map(user => user.id).sort();
    const maxUserId = userIds.length === 0 ? 2024000 : Math.max.apply(null, userIds);
    return maxUserId + 1;  
}

function handleUsercheck(e) {
    console.log(e.target.checked);
    const nameInput = document.querySelector(".name-input")
    const passwordInput = document.querySelector(".password-input");
    const usernameInput = document.querySelector(".username-input");
    const checkboxList = document.querySelectorAll("input[type='checkbox']");
    for(let i = 0; i < checkboxList.length; i++) {
        const checkbox = checkboxList[i];
        if(checkbox === e.target) continue;
        
        checkbox.checked = false;
    }
    for(let i = 0; i < userList.length; i++) {
        if(userList[i].id === parseInt(e.target.name)) {
            nameInput.value = userList[i].name;
            passwordInput.value = userList[i].password;
            usernameInput.value = userList[i].username;
            break;
        }
    }
    
    console.log(e.target.name);
    
}