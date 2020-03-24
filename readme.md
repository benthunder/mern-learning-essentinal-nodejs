# Nodejs

## How nodejs work 
> Moi 1 request doi voi apache se la 1 thread . Khi nao thread nay hoan thanh thi apache se tra ve response cho request.
> Con node Js la chi co 1 thread , tat ca deu bo vao thread do , cai nao xong truoc dem ra truoc va tat ca deu hoat dong.
> Cho nen node js rat la nhanh vi hoat dong bat dong bo , cai nao xong truoc thi dem ra truoc , trong luc do van xu ly nhung thu khac .


## Nodejs Basic
> bien global chua toan bo nhung gi nodejs co the su dung va khong can phai import 
> exp: global.console.log('hello');

## Process Agrument 
> su dung process.argv de co the lay tat ca cac agrument bo vao process js
> exp : node filename.js arg1 arg2

## Input - Ouput
> process.stdout.write(string) ==> input;
> process.stdin.on("data",data => {}); ==> on data, when click enter is submit fucntion
