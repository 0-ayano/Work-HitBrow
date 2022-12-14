/* 答えの初期化（画面読み込み時） */
function ansInit(ans){
    window.onload = ()=>{
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        var a = arr.length
        var i
        
        // シャッフルアルゴリズム
        while (a) {
            var j = Math.floor( Math.random() * a );
            var t = arr[--a];
            arr[a] = arr[j];
            arr[j] = t;
        }
      
        // 答えのセット
        for(i=0; i != 4; i++){
          ans.value.push( arr[i] )
        }

        // arr.forEach( function( value ) {console.log( value )} );
        console.log(ans.value)
    }
}

/* テキストボックスの表示制御 */
function numDisplay(num){
    const txt = document.getElementById("display");

    if (num == "clear"){
        txt.value = ""
    }

    else if (txt.value.length <= 3){
        txt.value =  txt.value + num
    }
    else {
        alert("文字数オーバー")
    }
}

/* Hit、Brow判定 */
function judge(ans){
    const txt = document.getElementById("display");
    var ans_num = 0
    var txt_num = 0
    var i
    var hit = 0
    var brow = 0
    var char  =''

    if (txt.value == ""){
        ans_num = 4
        txt.value = String(ans[0]) + String(ans[1]) + String(ans[2]) + String(ans[3])
    }

    while(ans_num <= 3){
        txt_num = 0
        while(txt_num <= 3){
            if(ans[ans_num] == txt.value[txt_num] && ans_num == txt_num){
                hit = hit + 1
            }

            else if(ans[ans_num] == txt.value[txt_num]){
                brow = brow  +1
            }
            txt_num = txt_num + 1
        }
        ans_num = ans_num + 1
    }

    addElement(txt.value, hit, brow)

    if (hit == 4){
        alert("全てHITしました\nNew Game Start!")
        txt.value = "" 
        location.reload()
    }
    else {
        txt.value = "" 
    }
    
}

function addElement(num, hit, brow){
    var table = document.getElementById('history');
    var row = table.insertRow(1);
    var cells = new Array();

    cells[0] = row.insertCell(-1);
    cells[0].innerText = num;
    cells[1] = row.insertCell(-1);
    cells[1].innerText = hit;
    cells[2] = row.insertCell(-1);
    cells[2].innerText = brow;
}


/* 外部アクセスが出来るようにする */
export default {
    ansInit,
    numDisplay,
    judge,
}