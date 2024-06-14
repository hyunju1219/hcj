//비구조 할당 , 구조 분해

function main() {
    const user = { 
        username: "adimn",
        password: "1234",
        name: "김준일",
        email: "aaa@gmail.com"
    }

    const names = [ "박현주", "이성희", "권오광", "권혁진" ];


    //객체일 때 키값과 동일한것으로 가져옴
    const { username, password, email } = user; //user객체에서 각각을 변수로 가져옴
    console.log(username);
    console.log(password);
    console.log(email);

    //배열은 인덱스 순서대로 가져옴 (a = 1, b = 2 || a = 1, c = 2)
    const [ a, b ] = names;
    console.log(a);
    console.log(b);
    console.log(names.slice(1, 3)); //배열 슬라이스

    const { name, ...rest2 } = user; //name변수엔 김준일 저장, rest2변수에는 name을 제외한 나머지 키의 값을 가져옴
    console.log(rest2);
    console.log(name);
   
}
main();