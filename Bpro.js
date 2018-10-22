//使用方法：进入第四章Bpro页面，开启脚本即可。
//作者：贪吃猫
//注意：本脚本仅试用于1080*1920的手机。


if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
    }
else 
    toast("已获得截图权限!"); 
   
auto();
requestScreenCapture(true);
setScreenMetrics(1080, 1920);

function m(){
    //1080,1920
if(images.detectsColor(captureScreen(), "#ffffff", 10, 47)){
    sleep(1200);
    click(905,125);
    sleep(900);
    click(453,250);
    sleep(900);
    click(905,165);
    sleep(1000);
    k();
}else{
   click (1046, 925);//升级的点
   sleep (1000);
   f();
}}

function k(){
    sleep(100);
if(images.detectsColor(captureScreen(), "#ffffff", 541, 495)){   
    sleep (900);
    click (1679, 981);
    sleep (1500);
    click (851, 817);
    sleep (1500);
    b();
}else{
    click(10,47);
    
}}

function b(){
    //toast ("b");
    sleep (300);
if(images.detectsColor(captureScreen(), "#ffc3fb12", 1719, 980)){
   sleep (1000);
   click (1719, 980);
   sleep (4000);
   t();
}else{ 
   sleep (1000);
   click (740, 534);
   sleep(900);
   b();
}}

function t(){
    sleep(1000);
if(!images.detectsColor(captureScreen(), "#ffc3fc0f", 101, 639)){ 
   sleep (9000);
   for (i = 0; i < 10; i++) {
   swipe (1287, 514, 1585, 514, 500);
   sleep (600);
   click (1634, 628);
    }
   sleep(200)
   v();
}else{
   t();
    }}
    

function v(){
   click (1634, 628);
   sleep (600);
   click (1634, 628);
if(images.detectsColor(captureScreen(), "#ffffff", 1252, 978)){
   sleep (1000);
   d();
}else {
   v();
}}

function d(){
if(images.detectsColor(captureScreen(), "#ffffff", 1252, 978)){
   sleep (1000);
   click (1496, 976);
   sleep (1000);
   e();
}else {
   m();
}}

function e(){
if(images.detectsColor(captureScreen(), "#ffffff", 845, 94)){
   sleep (1000);
   click (1496,976);
   f();
}else{
   d();
}}

function f(){
if(images.detectsColor(captureScreen(), "#ffffff", 195, 87)){
   sleep (1000);
   click (1496, 976);
   m();
}else{
   e();
}}

m();

