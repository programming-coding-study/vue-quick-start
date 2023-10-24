function addContact(name, mobile, home="없음", address="없음", email="없음") {
    var str = `name=${name}, mobile=${mobile}, home=${home},address=${address}, email=${email}`;
    console.log(str);
}

addContact("홍길동", "010-222-2222");
addContact("이몽룡", "010-222-3333", "02-3333-4444", "서울시");