//隨機滑的角度
var swipe_arr = [[500,600,150,400,450],//右下滑
                 [500,200,150,400,450],//右上滑
                 [150,400,500,600,450],//左上滑
                 [150,400,500,200,450],//左下滑
                ];

//重複打
//打1次關卡
click(270,750);//冒險按鈕
sleep(5000);
click(270,450); //活動按鈕
sleep(3000);
click(270,700);//(需調整)
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
    let r = Math.floor(Math.random()*4); 
    swipe.apply(this, swipe_arr[r]);//隨機角度滑
    sleep(2000);
}
for(let i=0; i<25; i++){
    click(270, 620); //出關按鈕
    sleep(1000);
}

alert("finish playing!");