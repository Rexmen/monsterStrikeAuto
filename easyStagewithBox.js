//重打關卡，需先進過關卡
for(let t=0; t<5; t++){ //打5次關卡
    press(270, 750, 1000); //長按冒險按鈕
    sleep(5000);
    click(270, 450); //點關卡的畫面位置(需調整)
    sleep(3000);
    click(150, 500); //單人按鈕
    sleep(4000);

    click(270, 360); //幫手怪物選自己的
    sleep(3000);
    //若沒體力，用體力罐
    click(120,660);//使用體力罐
    sleep(2000)
    click(270, 630);//ok
    sleep(1000)

    click(270, 360); //幫手怪物選自己的
    sleep(3000);
    click(100, 700); // box
    sleep(2000);
    click(270, 800); //出擊按鈕(需調整)
    for(let i=0; i<120; i++){ //滑的次數(需調整)約3分半
        swipe(500,600,150,400,400); //斜滑
        sleep(2000);
    }
    for(let i=0; i<20; i++){
        click(270, 620); //出關按鈕
        sleep(1000);
    }
    sleep(12000);//暫停，可應對自動回體的狀況
}
var finish = require("./popup.js");
finish("Finish 5 times playing!!!!", 15000, 0, 0, "#ffffff");
alert("finish playing!");