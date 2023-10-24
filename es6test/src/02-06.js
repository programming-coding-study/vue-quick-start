// 가변 파라미터 => ...favoriteFoods 
// 여러 개의 파라미터 값을 배열로 받을 수 있도록 함

function foodReport(name, age, ...favoriteFoods) {
    console.log(name + ", " + age);
    console.log(favoriteFoods);
}

foodReport("이몽룡", 20, "짜장면", "냉면", "불고기");
foodReport("홍길동", 16, "초밥");

