// BoardWrite.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Link를 import 합니다.
import './BoardWrite.css'; // 스타일 파일을 import 합니다.
import Header from '../../Components/Header'; // 상대 경로로 설정

function BoardWrite() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/safe/board/write',
        {
          title,
          content,
        }
      );

      console.log('게시물 작성 성공:', response.data);
      // 작성이 성공하면 리다이렉트 또는 다른 작업을 수행할 수 있습니다.
    } catch (error) {
      console.error('게시물 작성 오류:', error);
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="board-write-container">
        <h2>게시물 작성</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">제목:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="content">내용:</label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              required
            />
          </div>
          <div>
            <button type="submit">작성하기</button>
          </div>
        </form>
        <Link to="/" className="back-button">
          메인 페이지로 돌아가기
        </Link>{' '}
        {/* 메인 페이지로 돌아가는 버튼 */}
      </div>
    </div>
  );
}

export default BoardWrite;
