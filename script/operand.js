/* 
Javascipr의 연산자:
1. 산술 연산자
2. 비교 연산자
3. 기타 연산자 
*/

/* 산술 연산자

+, ++, -, --, *, /, %
복합 연산: +=, -+, *=, /=   => a+=b라고 하면 a=a+b의 의미
*/

// 실습

var a = 10;
var b = 20;

console.log(a+=b);
console.log(a*=b);

var number = 1;
number++;
console.log(number);

/* 비교 연산자 => 두 값을 비교하기 위해 사용한다.

- 동등: ==  => 데이터 타입이 달라도 값이 같으면 True가 반환(ex) var a = '5', var b = 5
- 부등: !=
- 일치: === => 데이터 타입까지 일치해야 한다.
*/

// 실습
var a = '5';
var b = 5;

if (a == b){
    console.log('트루!');
}

if (a===b){
    console.log('트루!!')
} else{
    console.log('폴스!!')
};

/* 논리 연산자 
- And: &&
- Or: ||
- 부정: !
*/

// 실습

if (a == b && a!==b){
    console.log("트루!!!")
};

/* 기타 연산자 
- 삼항 연산자: var x = 명제 ? 참 리턴값 : 거짓 리턴값   => if문을 대체하기 위한 문법
- 단항 연산자: delete, typeof 
- 비트 연산자(잘 안 쓰임)
*/

// 실습

{a === b ? (
    console.log('삼항 true')
) : (
    console.log('삼항 false')
)
};

/*  프로젝트 사용 예시 
{activePage === 'signIn' ? (
    <SignInComponent setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <SignUpComponent setActivePage={setActivePage}/>
  )}
*/

