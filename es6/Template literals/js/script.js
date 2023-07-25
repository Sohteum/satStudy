// backtick : `` 


var 문자 = `안녕
하세요`;
//문자 중간 엔터키 입력이 가능합니다


var 이름 = '손흥민';
var 문자 = `안녕하세요 ${이름} 입니다`;
//문자 중간에 ${변수명} 이렇게 쉽게 넣을 수 있습니다. 

var 변수명 = '변수명'
var 문자 = `
<div>
  <div>
    ${변수명}
  </div>
</div>`;


// tagged literal

var 변수 = '국가대표'
var 변수2 = '손흥민';
function 해체분석기1(문자들, 변수1, 변수2) {
  console.log(문자들[0] + 변수1 + 변수2 + 문자들[1]);
}
해체분석기1`안녕하세요 ${변수} 입니다 ${변수2}`;

var pants = 20;
var socks = 100;
function 해체분석기2(글자들, 변수들1, 변수들2) {
  console.log(글자들[1] + 변수들1 + 글자들[0] + 변수들2);
}
해체분석기2`바지${pants} 양말${socks}`;


var pants = 0;
var socks = 100;
`바지${pants} 양말${socks}`;
function 해체분석기(글자들, 변수들1, 변수들2) {
  if (변수들1 == 0) {
    console.log(`바지다팔렸어요 양말` + 변수들2);
  }
}
해체분석기`바지${pants} 양말${socks}`;


