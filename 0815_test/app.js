const express = require('express');
const cors = require('cors'); //프론트 서버와 연결하기 위해서 사용
const {sequelize} = require('./models'); //sequelize.sync(); 와 함께 사용하여 Sequelize SQL 쿼리를 이용해서 테이블을 만들어준다.

const app = express(); // 기본적으로 express를 사용할 수 있는 변수를 생성
sequelize.sync({force: false})//force가 true인 경우 데이터 업에이트 시 테이블이 지웠다가 다시 생성한다.
    .then(() => {
        console.log('데이터베이스 연결 성공!');
    })
    .catch((err) => {
        console.error(err);
    });


app.set('port', process.env.PORT || 3000);
/*서버 통신할 때 사용
app.use(cors({
    origin: 'http://127.0.0.1:8080',
    credentials:true,
}));*/

app.get('/', (req, res) => {
    res.send('Hello, Express')
});
app.get('/test1', (req,res) =>{
    res.sendStatus(500)
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기 중')
});