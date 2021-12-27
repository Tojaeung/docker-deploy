postgres 도커컨테이너 이용법

docker exec -it [컨테이너이름] bash

1. psql -U [유저아이디] -----> db실행
2. select datname from pg_database; -----> 전체 데이터베이스 이름 출력
3. create database [데이터베이스이름] ----------> 데이터 베이스 생성
4. c\ [데이터베이스이름]-----------> 데이터베이스 사용
5. select \* from pg_tables --------> 모든 테이블 조회
6. create table [테이블이름] (ID INT, VALUE VARCHAR(20)); --------------> 테이블생성
7. insert into [테이블이름] VALUES(1, 'number one'); ----------> 테이블에 입력
8. select \* from [테이블이름] --------------> 테이블 모든 데이터 가져오기
9. \q --------> postgres 빠져나오기
