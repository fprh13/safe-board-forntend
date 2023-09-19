import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    loginId: '',
    password: '',
    name: '',
  });
  const [message, setMessage] = useState('');

  const { loginId, password, name } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!loginId || !password || !name) {
        throw new Error('모든 필수 입력란을 채워주세요.');
      }

      const response = await axios.post(
        'http://localhost:8080/safe/user/signup',
        formData
      );
      console.log('회원가입 성공:', response.data);
      setMessage('회원가입 성공');

      // Redirect to the home page ("/") after successful signup
      window.location.href = '/';
    } catch (error) {
      console.error('회원가입 오류:', error);
      setMessage('회원가입 실패: ' + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>회원가입</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="loginId">아이디:</label>
          <input
            type="text"
            className="form-control"
            id="loginId"
            name="loginId"
            value={loginId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">이름:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          회원가입
        </button>
      </form>
      <p className="mt-3">
        이미 계정이 있으신가요? <Link to="/login">로그인</Link> 하기
      </p>
    </div>
  );
}

export default Signup;
