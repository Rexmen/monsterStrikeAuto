
//
function everydayrun (func, func2) {
    var now = new Date(),
        start,
        wait;

    if (now.getHours() < 10  ||
        (now.getHours() == 10 && now.getMinutes() < 27)
        ){
        start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10,30, 0, 0);
    } else {
        start = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 30, 0, 0);
    }

    wait = start.getTime() - now.getTime();

    if(wait <= 0) { 
        console.log('Oops, missed the hour');
        everydayrun(func); //Retry
    } else {
        console.log("waiting..."+ wait);
        setTimeout(function () { //wait 0930
            func();  // 傳入的function執行
            func2(); // function 2
            closeApp(getPackageName("怪物彈珠"));//close app
            // setInterval(function () { // do it every day (choice)
            //     func(); // 傳入的function執行
            //     func2()//function 2
            //     closeApp(getPackageName("怪物彈珠"));//close app
            // }, 86400000); 
        },0);// wait, 調為0執行單次
    }
}

var openMS = function(){
    app.launchApp("怪物彈珠")

    sleep(10000);
    for(let i=0; i<30; i++){ //連線可能較久
    click(270,480); 
    sleep(2000);
    }
    click(270,750);//確定按鈕
    sleep(6000);
    click(270, 650);//每日寶珠
    sleep(6000);
};

var dailymission = function(){
    click(270,750);//冒險按鈕
    sleep(5000);
    click(270,450); //活動按鈕
    sleep(3000);
    click(270,550);//(需調整)
    sleep(3000);

    click(270, 450); //點關卡的畫面位置(需調整)
    sleep(3000);
    click(150, 500); //單人按鈕
    sleep(5000);
    click(270, 360); //幫手怪物選自己的
    sleep(3000);
    click(450, 400); //點紀錄
    sleep(4000);
    click(270, 800); //套用上次
    sleep(5000);
    click(270, 800); //出擊按鈕(需調整)
    sleep(4000);
    for(let i=0; i<120; i++){ //滑的次數(需調整)
        swipe(500,600,150,400,450);//斜滑
        sleep(2000);
    }
    for(let i=0; i<25; i++){
        click(270, 620); //出關按鈕
        sleep(1000);
    }
    toast("finish playing!");
}

function closeApp(packagename) {
    var sh = new Shell(true);
    sh.exec("am force-stop"+" "+packagename);
    sleep(1000);
    sh.exit;
    toast("關閉成功");
}

everydayrun(openMS, dailymission); //傳入要執行的function