if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
    }
else 
    toast("已获得截图权限!"); 
   
auto();
requestScreenCapture(true);
setScreenMetrics(1080, 1920);

function 上(){
    //1080,1920
if(images.detectsColor(captureScreen(), "#ffffff", 10, 47)){
    swipe (1159, 180, 1159, 1046, 500);
    sleep (200);
    swipe (1159, 180, 1159, 1046, 500);
    sleep (200);
    swipe (1159, 180, 1159, 1046, 500);
    sleep (200);
    swipe (1159, 180, 1159, 1046, 500);
    sleep (200);
    swipe (1159, 180, 1159, 1046, 500);
    sleep (200);
    swipe (1159, 180, 1159, 1046, 500);
    sleep (200);
    swipe (1159, 180, 1159, 1046, 500);
    sleep (200);
    swipe (1159, 180, 1159, 1046, 500);
    sleep (200);
    swipe (1159, 180, 1159, 1046, 500);
    sleep (1000);
    click (904, 924);
    sleep (1500);
    click (675, 941);
    
    开始();
}else{
   click (1046, 925);
   sleep (1000);
   sleep (1000);
   结束();
}}

function 开始(){
sleep (1000);
click (1679, 981);
sleep (2000);
click (509, 367);
sleep (3000);
把();
}

function 把(){    
    sleep (1000);
if(images.detectsColor(captureScreen(), "#fffb1264", 1719, 980)){
   sleep (1000);
   click (1719, 980);
   sleep (3000);
   啊();
}else{ 
   sleep (1000);
   click (1803, 541);
   把();
}}

function 啊(){
click (1634, 628);
sleep (600);
click (1634, 628);
if(images.detectsColor(captureScreen(), "#ffffff", 1252, 978)){
   sleep (1000);
   都();
}else {
   啊();
}}

function 都(){
if(images.detectsColor(captureScreen(), "#ffffff", 1252, 978)){
   sleep (1000);
   click (1496, 976);
   sleep (1000);
   额();
}else {
   上();
}}

function 额(){
if(images.detectsColor(captureScreen(), "#ffffff", 845, 94)){
   sleep (1000);
   click (1496,976);
   结束();
}else{
   都();
}}

function 结束(){
if(images.detectsColor(captureScreen(), "#ffffff", 195, 87)){
   sleep (1000);
   click (1496, 976);
   上();
}else{
   额();
}}

上();