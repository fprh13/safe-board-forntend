import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Login() {
  const { loginId, password } = useParams(); // URL 파라미터 추출

  const [email, setEmail] = useState(loginId || ''); // 이메일 상태 변수 초기화
  const [userPassword, setUserPassword] = useState(password || ''); // 비밀번호 상태 변수 초기화

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 로그인 로직을 수행하고 상태를 업데이트합니다.
    // 예를 들어, 서버로 로그인 요청을 보내고 성공하면 로그인 상태를 변경합니다.
    // 이 코드에서는 간단히 로그인 성공 시 메시지만 출력하도록 설정합니다.
    console.log(`로그인 성공: 아이디 - ${email}, 비밀번호 - ${userPassword}`);
  };

  return (
    <div className="container mt-5">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">아이디:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={userPassword}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          로그인
        </button>
      </form>
      <p className="mt-3">
        계정이 없으신가요? <Link to="/signup">회원가입</Link> 하기
      </p>
    </div>
  );
}

export default Login;
