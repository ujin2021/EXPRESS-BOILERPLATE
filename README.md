# EXPRESS-BOILERPLATE

### express / bcrypt / jwt / mysql2

* .gitignore로 관리해야하는 file, db설정 => config/
* jwt 토큰 확인과 같이 middleware으로 추가할 사항들 => router/middleware/
* bcrypt, compare, token 발급과 같이 자주 쓰이는 것 => lib/
* baseURL선언 => app.js
* routing 관련 => router
* 실제 작동 구현 => controller

#### How to use
1. git clone
2. npm install
3. config dir 아래 dbPool, secret 파일 설정
4. .gitignore 파일에서 ### Custom ### 아래 config 부분 주석 해제

#### DB 사용법
##### 일반
``` js
await res.pool.query(`query문`, [?에 들어갈 변수명])
```
> ex) (\`SELECT * FROM USERS WHERE user_id = ?;`, [user_id])

##### transaction 사용시
``` js
exports.signupAPI = async(req, res) => {
    const conn = await res.pool.getConnection()
    try{
        await conn.beginTransaction()

        await conn.query(`query문`, [?에 들어갈 변수명])

        await conn.commit()
    } catch(e) {
        await conn.rollback()
    } finally {
        await conn.release()
    }
}
```

#### middelware 사용법

* middelware 파일 작성후, 적용할 router 안에 선언(require)
* router.post([path], [middleware], [controller])
* router/normal.js 참고