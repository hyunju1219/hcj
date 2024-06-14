function modifyUser(user, target, value) {
    const newUser = {
        ...user,
        [target]: value
    }
    return newUser;
}

function main() {
    let user = {
        username: "admin",
        password: "1234"
    }

    console.log(user);

    const newUser = modifyUser(user, "username","test-user");
    console.log(newUser);
    const newUser2 = modifyUser(newUser,"password","1111");
    console.log(newUser2)

    const userList = [user, newUser]; //100
    const newuserList = [...userList, newUser2]; //200

    console.log("----------")
    console.log(userList);
    console.log(newuserList);


    //스프레드 => 깊은 복사
    const userlist2 = userList;//얕은 복사

    const [ a, b, c ] = userlist2;
    console.log(a)
    console.log(b)
    console.log(c)
}


main();
