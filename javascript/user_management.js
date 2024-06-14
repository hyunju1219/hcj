const names = [ "김준일", "김준이", "김준삼" ];


let userList = [];
let emptyUser = {
    username: "",
    password: ""
};

let user = {
    ...emptyUser
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({username, password}, index) => {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${username}</td>
                <td>${password}</td>
            </tr>
            `;
    }).join(""); //map으로 리스트를 만들어 inner안에 넣으면 자동으로 문자열로 바뀌지만 리스트 요소 사이에 쉼표 들어간 것을 "" 으로 바꿈
}

function handleUserInputKeyDown(e) {
    // user.username = e.target.value; 이 경우 주소가 동일하고 값만 바뀌기 때문에 스프레드 써야함
    user = {
        ...user,
        [e.target.name]: e.target.value
    }; //새로 객체 생성

    console.log(user);

    if(e.keyCode === 13) {
        const passwordInput = document.querySelector(".password-input");
        const usernameInput = document.querySelector(".username-input");
        if(e.target.name === "username") {
            
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            userList = [ ...userList, { ...user } ]; //주소가 같아도 값을 변경하기 위함
            // userList = [ ...userList, user]; 현재 코드는 새로운 객체를 계속 생성하고 있기 때문에 user써도됨
            renderTable();

            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;
            usernameInput.focus();
        }
    }
    
}