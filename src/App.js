import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import bookImg from './bookimg.png'; // 이미지 파일 import
import './style.css'; // CSS 파일 import
import BookSalesChart from './BookSalesChart'; // 그래프 컴포넌트 import
import Navigation from './Navigation'; // Navigation 컴포넌트 import
import Dashboard from './Dashboard'; // Dashboard 컴포넌트 import

const Article = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleClick = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {/* 대시보드 */}
      <Dashboard />
      
      {/* 기존 내용 */}
      <h4 style={{ marginTop: '20px', marginBottom: '20px', textAlign: 'center', width: '100%' }}>
        Write Now! 책 트렌드 분석 서비스
      </h4>

      {/* 버튼 그룹 */}
      <ButtonGroup style={{ marginBottom: '20px', width: '100%', maxWidth: '800px', display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined" onClick={() => handleClick('current')}>
          현재 베스트 셀러
        </Button>
        <Button variant="outlined" onClick={() => handleClick('prediction')}>
          베스트 셀러 예측 서비스
        </Button>
      </ButtonGroup>

      {/* 이미지 표시 */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <img src={bookImg} alt="Book Image" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: 'auto' }} />
      </div>

      {/* 그래프 표시 */}
      <div style={{ width: '100%', maxWidth: '800px', marginBottom: '20px' }}>
        <BookSalesChart />
      </div>

      {/* 내비게이션 표시 */}
      <div style={{ width: '100%', maxWidth: '800px', marginBottom: '20px' }}>
        {/* Navigation 컴포넌트 추가 */}
        <Navigation />
      </div>

      {/* Dialog 모달 */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {selectedService === 'current' ? '현재 베스트 셀러' : '베스트 셀러 예측 서비스'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedService === 'current'
              ? '현재 베스트 셀러 목록을 보여줍니다.'
              : '미래에 예측되는 베스트 셀러를 분석합니다.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Article;
