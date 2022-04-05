var finish = require("./popup.js");

//重打關卡
//第一次先設定
for(let t=0; t<20; t++){ //打x次關卡
    if(t==0){
        click(270,750);//冒險按鈕
        sleep(5000);
        click(270,450); //活動按鈕
        sleep(3000);
        click(270,360);//(需調整)
        sleep(3000);
    }else{
        press(270, 750, 1000); //長按冒險按鈕
        sleep(5000);
    }
    click(270, 450); //點關卡的畫面位置(需調整)
    sleep(3000);
    click(150, 500); //單人按鈕
    sleep(4000);

    click(270, 360); //幫手怪物選自己的
    sleep(3000);
    //若沒體力，用體力罐
    click(120,660);//使用體力罐
    sleep(3000)
    click(270, 630);//ok
    sleep(2000)
    click(150, 600); //單人按鈕
    sleep(4000);

    click(270, 360);//幫手怪物選自己的
    sleep(3000);
    if(t==0){
        click(450, 400); //點紀錄
        sleep(4000);
        click(270, 800); //套用上次
        sleep(4000);
    }
    click(270, 800); //出擊按鈕(需調整)
    sleep(4000);
    for(let i=0; i<80; i++){ //滑的次數(需調整)約3分半
        swipe(500,600,150,400,450); //斜滑
        sleep(2000);
    }
    for(let i=0; i<13; i++){
        click(270, 620); //出關按鈕
        sleep(1000);
        click(270, 550); // 防止極運狀況
        sleep(1000);
    }
    //顯示已完成幾次關卡
    let thread = threads.start(function(){
        //在新線程顯示toast資訊
        finish("Finish "+ (t+1) +" times playing!!!!", 5000, 0, 100, "#ffffff");
    });
    sleep(15000);
}
alert("finish playing!");