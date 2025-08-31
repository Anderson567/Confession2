// 精简版，仅保留播放按钮显示主内容逻辑
function funclick() {
    let yinyan = document.getElementById("yinyan");
    yinyan.setAttribute("style", "opacity:0");
    setTimeout(function () {
        document.getElementById("fronclick").style.zIndex = -300;
        document.getElementById("box").style.opacity = 1;
    }, 1500);
}
 "linear-gradient(25deg, #88a0ff, #b6bedd, #d6deb9, #eeff91)",
 "linear-gradient(25deg, #3e1c59, #53646f, #53ad83, #27fb95)",
 "linear-gradient(25deg, #590146, #634264, #647184, #56a1a5)",
 "linear-gradient(25deg, #694afc, #a26dfd, #d091fe, #f9b7fe)",
 "linear-gradient(25deg, #412285, #4c599c, #488eb3, #29c4c9)",
 "linear-gradient(25deg, #003876, #1f6889, #239b9a, #00d1ab)",
 "linear-gradient(25deg, #db6679, #b9907b, #8bb17e, #29ce80)",
 "linear-gradient(25deg, #060d37, #174161, #1d7a8d, #12b8bc)",
 "linear-gradient(25deg, #fcb9b5, #fed0ad, #ffe7a5, #fffd9b)",
 "linear-gradient(25deg, #0f4660, #6b486c, #ac3f78, #ec1384)",
 "linear-gradient(25deg, #094189, #7f566b, #bd6d49, #f78707)",
 "linear-gradient(43deg, #00a08c, #7db19d, #c1c0af, #ffcec1)",
 "linear-gradient(35deg, #526fbf, #8c98d0, #bfc3e0, #f0f0f0)",
 "linear-gradient(25deg, #d03e9b, #d2788a, #cfa676, #c6d05c)",
 "linear-gradient(25deg, #8fd647, #a0d187, #a8ccbf, #a8c7f7)",
 "linear-gradient(25deg, #e45579, #c59280, #96bf87, #19e88e)",
 "linear-gradient(25deg, #d575db, #b29db2, #83bb87, #00d456)",
 "linear-gradient(25deg, #d929f7, #e67cc5, #e5b38f, #d8e549)",
 "linear-gradient(25deg, #fd390b, #e1765b, #b19fa1, #1ec1e9)",
 "linear-gradient(25deg, #7b7bd4, #759cbc, #62bca2, #30db85)",
 "linear-gradient(25deg, #d6007b, #b8509e, #8a71c2, #0b8be8)"];
 let s='a';
 let records=0;//记录我已经输入过了，防止出现多个打字function byaei
 
 
 /*键盘事件*/
 function fl(e)
 {
     if(clickb==true)
     {
        let key =e.key;
     if((key<='z'&&key>='a')||(key<='Z'&&key>='A'))//避免大小写的错误
     {
         let p=a[k[key]];
         s=s+p.name;
         // 钢琴按键音效用Web Audio API
         let keyAudioName = `${p.yin}.mp3`;
         playBuffer(keyAudioName);
         let box=document.getElementById("box");
         let boxl=document.getElementById("boxl");
         let boxr=document.getElementById("boxr");
         let boxup=document.getElementById("boxup");
         let bac=document.getElementById("bac");
         bac.style.opacity=0;
         box.style.transition="0.5s";
         box.style.opacity=0;
         boxup.style.opacity=0;
         setTimeout(function()
         {
         boxl.innerHTML=`${p.name}`;
         boxr.innerHTML=`${p.str}`;
         console.log(b[k[key]]);
         bac.style.background=`${b[k[key]]}`;
         box.style.opacity=1;
         boxup.style.opacity=1;  
         bac.style.opacity=1;
         },500);
         if(s.indexOf("XIAOLUXIAOLUWXHN")!=-1&&records==0)
         {
             setTimeout(function()
             {
                 records=1;
                 bac.style.opacity=0;
                 box.style.opacity=0;
                 boxup.style.opacity=0;  
                 bac.style.opacity=0;
                 let box1=document.getElementById("box1");
                 box1.style.zIndex=7;
                 box1.style.opacity=1;
                 // 循环播放特殊音效
                 let musicSource = playBuffer('snjxh.mp3', true);
             },750);
             setTimeout(typewrite,3000);//进行打字
         }
     }
     }  
 }
 
 
 window.onkeyup=fl;

// 监听隐藏input的输入事件，映射到钢琴弹奏
var pianoInput = document.getElementById('pianoInput');
if (pianoInput) {
    pianoInput.addEventListener('input', function(e) {
        if (!clickb) return;
        var val = pianoInput.value;
        if (val && val.length > 0) {
            var key = val[val.length - 1];
            // 只处理字母
            if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z')) {
                fl({key: key});
            }
            pianoInput.value = '';
        }
    });
    // 防止安卓输入法自动大写
    pianoInput.setAttribute('autocapitalize', 'none');

    // 监听聚焦和失焦，只移动按键值和三行情诗部分，避免被键盘遮挡
    pianoInput.addEventListener('focus', function() {
        var boxl = document.getElementById('boxl');
        var boxr = document.getElementById('boxr');
        if (boxl) {
            boxl.style.transform = 'translateY(-18vh) scale(0.95)';
            boxl.style.transition = 'transform 0.3s';
        }
        if (boxr) {
            boxr.style.transform = 'translateY(-18vh) scale(0.95)';
            boxr.style.transition = 'transform 0.3s';
        }
    });
    pianoInput.addEventListener('blur', function() {
        var boxl = document.getElementById('boxl');
        var boxr = document.getElementById('boxr');
        if (boxl) {
            boxl.style.transform = '';
        }
        if (boxr) {
            boxr.style.transform = '';
        }
    });

    // 1-点击页面任意位置弹出键盘面板
    document.body.addEventListener('touchend', function(e) {
        if (document.activeElement !== pianoInput) {
            pianoInput.focus();
        }
    });
    document.body.addEventListener('mousedown', function(e) {
        if (document.activeElement !== pianoInput) {
            pianoInput.focus();
        }
    });
}