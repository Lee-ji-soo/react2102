<!--변경 후-->
{*** 인트로 - 이용제한 | intro/walkout.php ***}
{ # share_header }

<div class="blackout">
  <strong>{=__('이용이 제한된 쇼핑몰입니다.')}</strong>
  <p>
    {=__('현재 접속하신 %s 의%s 이용관련 문의는', )}<br/>
    <span>
      <a href="https://pf.kakao.com/_UraTC/chat">
        <img id="icon" alt="" style="margin-right:3px" src="https://1wecodereact.s3.ap-northeast-2.amazonaws.com/kakaoLogo.svg" />{=__('카카오톡으로')}
      </a>
    </span>
    <span>{=__('연락하시기 바랍니다.')}</span>
    <br/>{=__('감사합니다.')}
  </p>
</div>
{ # share_footer }

<!--변경 전-->
{*** 인트로 - 이용제한 | intro/walkout.php ***}
{ # share_header }

<div class="blackout">
  <strong>{=__('이용이 제한된 쇼핑몰입니다.')}</strong>
	<p>{=__('현재 접속하신 %s의%s 이용관련 문의는 카카오톡으로 연락하시기 바랍니다.', '<strong>' + gMall.mallNm + '</strong>', '<br />', '<strong>' + gMall.centerPhone + '</strong>')} <br />{=__('감사합니다.')} <br /></p>
</div>
{ # share_footer }

<!--추가 해야 하는 내용 -->
<a href="https://pf.kakao.com/_UraTC/chat">
  <img id="icon" alt="" src="https://1wecodereact.s3.ap-northeast-2.amazonaws.com/kakaoLogo.svg" />
  {=__('카카오톡')}
</a>