import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // useParams와 Link를 import 합니다.
import './BoardDetail.css'; // CSS 파일을 import 합니다.
import Header from '../../Components/Header'; // 상대 경로로 설정

function BoardDetail() {
  const { id } = useParams(); // 라우팅 매개변수 'id'를 가져옵니다.
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          `http://localhost:8080/safe/board/detail?id=${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header></Header>
      <div className="board-detail-container">
        {' '}
        {/* CSS 클래스를 적용합니다. */}
        <h2>게시물 상세 페이지</h2>
        <div>
          <strong>글쓴이:</strong> {post.writer}
        </div>
        <div>
          <strong>제목:</strong> {post.title}
        </div>
        <div>
          <strong>작성일:</strong> {new Date(post.createDate).toLocaleString()}
        </div>
        <div>
          <strong>내용:</strong> {post.content}
        </div>
        <Link to="/" className="back-button">
          메인 페이지로 돌아가기
        </Link>{' '}
        {/* 메인 페이지로 돌아가는 버튼 */}
      </div>
    </div>
  );
}

export default BoardDetail;
