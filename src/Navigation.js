import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Menu, MenuItem, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navigation() {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLoginOpen = () => {
    setOpenLoginDialog(true);
  };

  const handleLoginClose = () => {
    setOpenLoginDialog(false);
  };

  const handleMenuToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem) => {
    console.log(`선택된 메뉴: ${menuItem}`);
    handleMenuClose();
  };

  const handleLogin = () => {
    console.log('로그인!');
    handleLoginClose();
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" style={{ flexGrow: 1 }}>
            내비게이션
          </Typography>
          <Button color="inherit" onClick={handleLoginOpen}>로그인</Button>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            maxHeight: '80vh', // 최대 높이 설정
            width: '250px', // 너비 설정
            backgroundColor: '#3f51b5', // 배경색 설정
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // 그림자 설정
          },
        }}
      >
        <MenuItem
          onClick={() => handleMenuItemClick("My book 정보 입력하기")}
          style={{ color: 'white' }} // 텍스트 색상을 흰색으로 설정
        >
          My book 정보 입력하기
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("My book 트렌드 찾기")}
          style={{ color: 'white' }} // 텍스트 색상을 흰색으로 설정
        >
          My book 트렌드 찾기
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("기타메뉴")}
          style={{ color: 'white' }} // 텍스트 색상을 흰색으로 설정
        >
          기타메뉴
        </MenuItem>
      </Menu>

      <Dialog open={openLoginDialog} onClose={handleLoginClose}>
        <DialogTitle sx={{ fontSize: '30px' }}>로그인</DialogTitle>
        <DialogContent>
          {/* 로그인 폼 */}
          <TextField label="아이디" variant="outlined" fullWidth margin="normal" />
          <TextField label="비밀번호" type="password" variant="outlined" fullWidth margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginClose} color="primary">
            취소
          </Button>
          <Button onClick={handleLogin} color="primary">
            로그인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Navigation;