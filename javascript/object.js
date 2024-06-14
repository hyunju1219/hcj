//객체 내용은 key-value로 작성
//객체안에 객체 작성 가능
const user = {
    username: "admin",
    password: "1234",
    name: {
        lastName: "김",
        firstName: "준일"
    },
    print: () => {
        console.log("사용자이름: " + user.username);
        console.log(`비밀번호:${user.password}`);
    }
};

console.log(user);
console.log(user.username);
console.log(user.password);
console.log(user.name.lastName);
console.log(user.name.firstName);
user.print();