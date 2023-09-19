import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Header.css';

function Header() {
  // 로그인 상태를 나타내는 상태 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그아웃 버튼을 클릭할 때 호출되는 함수
  const handleLogout = () => {
    // 로그아웃 로직을 수행하고 상태를 변경합니다.
    // 예를 들어, 로그아웃 API 호출 또는 로컬 스토리지에서 토큰을 삭제하는 등의 작업을 수행합니다.
    // 여기서는 간단하게 상태만 변경하는 것으로 가정합니다.
    setIsLoggedIn(false);
  };

  return (
    <div className="header bg-primary text-white">
      {/* Apply Bootstrap classes */}
      <h1 className="board-list-title">Safe download</h1>
      <div className="create-post-button-container">
        <Link to="/" className="btn btn-light mr-2">
          전체 글 보기
        </Link>
        <Link to="/board/write" className="btn btn-light mr-2">
          글 작성하기
        </Link>
        <Link to="/board/search" className="btn btn-light">
          게시물 검색
        </Link>
        {/* 로그인 상태에 따라 버튼을 조건부로 렌더링 */}
        {isLoggedIn ? (
          <button className="btn btn-light" onClick={handleLogout}>
            로그아웃
          </button>
        ) : (
          <Link to="/login" className="btn btn-light">
            로그인
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
