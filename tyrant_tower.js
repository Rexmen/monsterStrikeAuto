//攻略霸者之塔30~40層
//重打關卡，需先進過關卡
for(let t=0; t<11; t++){ //打11次關卡
    press(270, 750, 1500); //長按冒險按鈕
    sleep(5000);
    click(270, 450); //點關卡的畫面位置(需調整)
    sleep(3000);
    click(150, 500); //單人按鈕
    sleep(5000);

    click(270, 500); //幫手怪物選自己的
    sleep(4000);
    click(450, 400); //點紀錄
    sleep(4000);
    click(270, 800); //套用上次
    sleep(4000);
    //若沒體力，用體力罐
    click(120,660);//使用體力罐
    sleep(3000);
    click(270, 630);//ok
    sleep(2000)
    click(150, 600); //單人按鈕
    sleep(4000);
    
    click(270, 500);//幫手怪物選自己的
    sleep(4000);
    click(450, 400); //點紀錄
    sleep(4000);
    click(270, 800); //套用上次
    sleep(4000);
    click(320, 770); //出擊按鈕(需調整)
    for(let i=0; i<170; i++){ //滑的次數(需調整)約3分半
        swipe(500,600,150,400,450); //斜滑
        sleep(2000);
    }
    for(let i=0; i<13; i++){
        click(270, 620); //出關按鈕
        sleep(1000);
        click(270, 550); // 防止極運狀況
        sleep(1000);
    }
    sleep(15000);
}
// var finish = require("./popup.js");
// finish("Finish 10 times playing!!!!", 15000, 0, 300, "#ffffff");
alert("finish playing!");