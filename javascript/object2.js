function createUser(username, password, name, email) {
    return {
        "username": username,
        "password": password,
        "name": name,
        "email": email
    }
}

function createUser2(username, password, name, email) {
    return {
        ["username"]: username,
        ["password"]: password,
        ["name"]: name,
        ["email"]: email
    }
}

//key value 동일할 때
function createUser3(username, password, name, email) {
    return {
        username,
        password,
        name,
        email
    }
}

function main() {
    const username = "admin";
    const password = "1234";
    const name ="김준일";
    const email = "aaa@gmail.com";

    let user = createUser(username, password, name, email);
    let user2 = createUser2(username, password, name, email);
    let user3 = createUser3(username, password, name, email);

    console.log(user);
    console.log(user2);
    console.log(user3);
}

main();
