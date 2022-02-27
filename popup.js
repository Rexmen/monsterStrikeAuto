/**
*通过mtoast("显示内容",显示时间,x,y,背景颜色);调用
**/
function mToast(str, time, x, y, color) {
    importClass(android.widget.Toast);
    importClass(android.view.Gravity);
    importClass(android.graphics.Color);
    importPackage(android.content);
    var toast = Toast.makeText(context.getApplicationContext(), str, Toast.LENGTH_LONG);
    let view = ui.inflate(
        <frame>
            <TextView w="auto" id="_text" padding="16px" gravity="center" textColor="#000000" size= "36px" />
        </frame>,
        null
    );
    view._text.setText(str);
    view.setBackgroundColor(colors.parseColor(color));
    toast.setView(view);
    toast.setGravity(Gravity.CENTER, x, y);
    toast.show();
    setTimeout(function () { toast.cancel(); }, time);
}
module.exports = mToast;
// var message= "Finish 10 times playing!!!";
// mToast(message, 5000, 0, 0, "#ffffff");
