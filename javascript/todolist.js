let todoList = [];
loadTodoList();

//엔터 눌렀을 때
function handleTodoInputKeyDown(e) {
    if(e.keyCode === 13) {
        handleTodoOkClick();
    }
}

//확인버튼 눌렀을 때
function handleTodoOkClick(e) {
    const todoInput = document.querySelector(".todo-input");
    if(isBlank(todoInput)) { //비었을 때
        alert("내용을 입력하세요") //경고
        clearTodoInput(todoInput); 
        return;
    }
    //값이 있을 때
    addTodo();
    clearTodoInput(todoInput);
}

//할일을 추가하는 함수
function addTodo() {
    //객체 생성
    const todo = {
        id: createNewId(),
        content: document.querySelector(".todo-input").value,
        date: transformDate(new Date())
    }
    todoList = [ ...todoList, todo ]; //기존 리스트값과 새로 생성한 객체 추가한 리스트
    saveLocalStorage(); //로컬에 저장
    loadTodoList(); //로컬에서 데이터 가져와서 리스트 업데이트
}

//id중 가장 큰값보다 1큰 값을 리턴하는 함수
function createNewId() {
    const todoIdList = todoList.map(todo => todo.id);
    const maxId = !todoIdList.length ? 0 : Math.max.apply(null, todoIdList);
    return maxId + 1;
}

function saveLocalStorage() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

//로컬에서 데이터 가져와서 리스트 업데이트
function loadTodoList() {
    const lsTodoList = localStorage.getItem("todoList"); //로컬에서 데이터 가져옴
    todoList = !lsTodoList ? [] : JSON.parse(lsTodoList); //데이터가 비어있으면 빈배열 아니면 객체로 변경
    renderTodoList();
}

//변경된 데이터로 리스트 로드하는 함수
function renderTodoList() {
    const todoListContainer = document.querySelector(".todo-list-container"); //리스트가 들어갈 위치의 객체 가져옴
    //목록 추가하는 코드 작성
    todoListContainer.innerHTML = todoList.map(todo =>{
        return `
            <li class="todo-card">
                <h3 class="todo-date">${todo.date}</h3>
                <p class="todo-content">${todo.content}</p>
                <div class="todo-buttons">
                    <button class="button edit-button" onclick="handleEditClick(event)" value="${todo.id}">수정</button>
                    <button class="button delete-button" onclick="handleDeleteClick(event)" value="${todo.id}">삭제</button>
                </div>
            </li>
        `;
    }).join("");
}

//input의 값을 비우고 포커스를 가지는 함수
function clearTodoInput(todoInput) { //input 객체를 받음
    todoInput.value = ""; //비움
    todoInput.focus(); //포커스유지

}
//빈값체크
function isBlank(input) {
    return !(input.value.replaceAll(" ",""));
}

//날짜 형식 정의 함수
function transformDate(date) {
    const dayList = [ "일", "월", "화", "수", "목", "금", "토" ];
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}(${dayList[date.getDay()]}) ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
   
}

//삭제 버튼 눌렀을 경우
function handleDeleteClick(e) {
    //확인창을 띄우고 확인을 눌렀을 때 => true
    if(confirm("정말로 삭제하시겠습니까?")) {
        todoList = todoList.filter(todo => todo.id !== parseInt(e.target.value));
        saveLocalStorage();
        loadTodoList();
    }

}

//수정 버튼 눌렀을 경우
function handleEditClick(e) {
    //모달코드 생성
    const element = `
    <div class="modal-edit-container" onclick="event.stopPropagation()">
        <h3 class="modal-title">TODO 수정하기</h3>
        <div class="input-box">
            <input type="text" class="todo-input" onKeyDown="if(event.keyCode === 13) document.querySelector('.modal button:nth-of-type(1)').click()">
        </div>
        <div class="todo-buttons">
            <button class="button" onclick="handleEditOkClick(event)" value="${e.target.value}">확인</button>
            <button class="button" onclick="closeModal()">취소</button>
        </div>
    </div>
    `;
    openModal(element);
    //모달 창이 떴을 때 입력창에 바로 포커스 감
    const todoInput = document.querySelector(".modal .todo-input");
    todoInput.focus();
}

//모달에서 확인눌렀을 때
function handleEditOkClick(e) {
    //빈값체크
    const input = document.querySelectorAll("input")[1];
    if(isBlank(input)) {
        alert("내용을 입력하세요");
        clearTodoInput(input);
        return;
    }
    //빈값이 아니면 id값 비교로 content, date 수정
    todoList = todoList.map(todo => {
        if(todo.id === parseInt(e.target.value)) {
            return {
                ...todo,
                content: document.querySelector(".modal .todo-input").value,
                date: transformDate(new Date)
            }
        }
        return todo;
    });

    saveLocalStorage();
    closeModal();
    loadTodoList();
}

function handleModalBackgroundClick() {
    closeModal();
}

function openModal(element) {
    const modal = document.querySelector(".modal");
    modal.classList.add("modal-show"); //클래스 추가
    modal.innerHTML = element;
}

function closeModal() {
    const modal = document.querySelector(".modal");
    modal.innerHTML = "";
    modal.classList.remove("modal-show"); //클래스 삭제

}