import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const drawerWidth = 240;

const Dashboard = () => {
  // Handler for card click to open URLs
  const handleCardClick = (url) => {
    window.open(url, '_blank'); // Open URL in a new tab
  };

  return (
    <div>
      {/* App Bar */}
      <AppBar position="fixed">
        <Toolbar>
          {/* Centered Typography */}
          <Typography variant="h4" style={{ textAlign: 'center', width: '100%' }}>
            Write Now! 책 트렌드 분석 서비스
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer variant="permanent">
        <Toolbar />
        <List style={{ width: drawerWidth }}>
          {['홈', '회원가입', 'Hot keyword', 'My book keyword', '설정'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Container style={{ paddingTop: '80px', display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={3} style={{ maxWidth: '1200px', padding: '20px' }}>
          {/* Aladin Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              onClick={() => handleCardClick('https://www.aladin.co.kr')}
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  알라딘
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Aladin
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Kyobo Book Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              onClick={() => handleCardClick('http://www.kyobobook.co.kr')}
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  교보문고
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Kyobo Bookstore
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Yes24 Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              onClick={() => handleCardClick('http://www.yes24.com')}
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Yes24
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Yes24
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
