//객체를 대입할 수 있음(객체에서 키값을 찾아 값을 대입)
//1. 매개변수를 객체로 받아와 참조해서 사용
function printUser(user) {
    console.log(`사용자이름: ${user.username}`);
    console.log(`비밀번호: ${user.password}`);
    console.log(`이름: ${user.name}`);
    console.log(`이메일: ${user.email}`);
} 
//2. 매개변수를 비구조할당으로 가져와 변수로 바로 사용
function printUser2({ username, password, name, email }) {
    console.log(`사용자이름: ${username}`);
    console.log(`비밀번호: ${password}`);
    console.log(`이름: ${name}`);
    console.log(`이메일: ${email}`);
} 

function main() {
    const user = { 
        username: "adimn",
        password: "1234",
        name: "김준일",
        email: "aaa@gmail.com"
    }
    printUser(user);
    printUser2(user);
}

main();