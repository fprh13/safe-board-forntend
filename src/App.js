import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BoardList from './Page/BoardList/BoardList'; // 새로운 컴포넌트를 가져옵니다.
import BoardDetail from './Page/BoardDetail/BoardDetail'; // 새로운 컴포넌트를 가져옵니다.
import BoardWrite from './Page/BoardWrite/BoardWrite';
import BoardSearch from './Page/BoardSeach/BoardSeach';
import Login from './Page/login/login';
import Signup from './Page/Signup/Signup';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BoardList />} />
          {/* "/" 경로로 들어왔을 때 BoardList 컴포넌트를 표시합니다. */}
          <Route path="/board/:id" element={<BoardDetail />} />
          {/* "/board/:id" 경로로 들어왔을 때 BoardDetail 컴포넌트를 표시합니다.
              ":id" 부분에는 게시물 ID가 들어갑니다. */}
          <Route path="/board/write" element={<BoardWrite />} />
          {/* "/" 경로로 들어왔을 때 BoardList 컴포넌트를 표시합니다. */}
          <Route path="/board/search" element={<BoardSearch />} />
          {/* "/" 경로로 들어왔을 때 BoardList 컴포넌트를 표시합니다. */}
          <Route path="/login" element={<Login />} />
          {/* "/" 경로로 들어왔을 때 BoardList 컴포넌트를 표시합니다. */}
          <Route path="/signup" element={<Signup />} />
          {/* "/" 경로로 들어왔을 때 BoardList 컴포넌트를 표시합니다. */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
