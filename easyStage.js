//重打關卡，需先進過關卡
for(let t=0; t<10; t++){ //打10次關卡
    press(270, 750, 1000); //長按冒險按鈕
    sleep(5000);
    click(270, 550); //點關卡的畫面位置(需調整)
    sleep(3000);
    click(150, 500); //單人按鈕
    sleep(4000);
    click(270, 360);//幫手怪物選自己的
    sleep(3000);
    click(270, 800); //出擊按鈕(需調整)
    for(let i=0; i<90; i++){ //滑的次數(需調整)約3分半
        swipe(500,600,150,400,400); //斜滑
        sleep(2000);
    }
    for(let i=0; i<20; i++){
        click(270, 620); //出關按鈕
        sleep(1000);
    }
    sleep(12000);
}
var finish = require("./popup.js");
finish("Finish 10 times playing!!!!", 15000, 0, 0, "#ffffff");
alert("finish playing!");