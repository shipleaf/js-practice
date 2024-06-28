/* Javascript의 자료형:
- 원시 형태
1. 숫자
2. 문자열
3. Boolean
4. undefined
5. Null

- 객체 형태:
1. 시간
2. 배열
3. 객체

* undefined는 변수가 선언됐지만 값과 타입이 할당이 안된것이고(ex) var x;)
 Null은 변수에 값이 의도적으로 비어있음을 나타낸다(데이터 타입도 있음)
*/

// 실습

console.log(typeof(null)); // null의 type이 object로 출력된다.

// 배열
var x = [0, 11 ,12];
console.log(x);

// 객체
var object = {
    userName: '김선엽',
    userId: 'shipleaf',
    userPassword: 1918
};


console.log(object);    
console.log(object.userName);   // 객체 속성에 접근할 경우 .을 사용
/* + 비밀번호와 비밀번호 확인이 일치하는지 확인하는 경우
if (userData.password === userData.passwordCheck) ~ 이런식으로 */

