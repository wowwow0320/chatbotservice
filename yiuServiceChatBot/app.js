const express = require('express');//express 모듈 셋팅해주는 것
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const {spawn} = require('child_process');

const { Card, Code, History, sequelize } = require('./models');
//const python = spawn('python',['./new_logic_2.py']);

const app = express();

//포트 번호 설정
app.set('port', process.env.PORR || 3000);
app.set('view engine','html');
nunjucks.configure('views',{
    express: app,
    watch: true,
});
sequelize.sync({force: false})
    .then(()=>{
        console.log('데이터베이스 연결 성공');
    })
    .catch((err)=>{
        console.log(err);
    });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});
/*python .stdout .on ('data', (data )=>{

    console .log (`stdout : ${data }`);

})*/
/*app.get("/test", async (req, res)=>{

    var input_str = '메인'


    const pythonProcess = spawn('python', ['./new_logic_2.py', input_str]);

    let lastElement = '';

    pythonProcess.stdout.on('data', (data) => {
        const result = JSON.parse(data.toString());
        lastElement = result.last_element;
    });

    pythonProcess.stderr.on('data', (data) => {
        console.log(data.toString());
    });

    pythonProcess.on('close', (code) => {
        console.log(`Python process exited with code ${code}`);
        console.log('Last Element:', lastElement);
        // console.log(typeof(lastElement));

        // 이곳에서 React 또는 다른 로직으로 lastElement를 활용할 수 있습니다.
    });

});*/
app.post("/test1", async (req, res)=>{
    console.log('hello');
});

app.post("/question", async (req, res)=>{
    try{
        const {code} = req.body;
        const tResult = await Card.findOne({
            where: {code},
            attributes: ['top']
        });
        const mResult = await Card.findOne({
           where: {code},
           attributes: ['mid']
        });
        const bResult = await Card.findOne({
            where: {code},
            attributes: ['bot']
        });
        const result = await Code.findAll({
            where: {tResult, mResult, bResult},
            attributes: ['text']
        });
        const response = {
            top: result[0],
            mid: result[1],
            bot: result[2]
        };
        return res.status(200).json(response);
    } catch (err){
        console.log(err);
        return res.sendStatus(500);
    }
});
app.post("/:code", async (req,res)=>{
    try{
        const {code} = req.body;
        const tResult = await Card.findOne({
            where: {code},
            attributes: ['top']
        });
        const mResult = await Card.findOne({
            where: {code},
            attributes: ['mid']
        });
        const bResult = await Card.findOne({
            where: {code},
            attributes: ['bot']
        });
        const result = await Code.findAll({
            where: {tResult, mResult, bResult},
            attributes: ['text']
        });
        const response = {
            top: result[0],
            mid: result[1],
            bot: result[2]
        };
        return res.status(200).json(response);
    } catch (err){
        console.log(err);
        return res.sendStatus(500);
    }
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기중')
})