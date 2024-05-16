import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BookSalesChart = () => {
  const data = [
    { name: '소설', sales: 1500 },
    { name: '자기 계발서', sales: 2000 },
    { name: '참고서', sales: 3000 },
    { name: '만화/웹툰', sales: 4000 },
    { name: '취미', sales: 2500 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid stroke="transparent" /> {/* stroke를 투명으로 설정하여 뒤의 선을 제거 */}
        <XAxis dataKey="name" tick={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Avenir' }}/>
        <YAxis tick={{ fontSize: 14, fontWeight: 'bold', fontFamily: 'Avenir' }}/>
        <Tooltip contentStyle={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Avenir' }}/>
        <Legend contentStyle={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Avenir' }} />
        <Bar dataKey="sales" fill="#83aedd" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BookSalesChart;
