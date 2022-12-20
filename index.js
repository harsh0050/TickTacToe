var mat = [[0,0,0],[0,0,0],[0,0,0]];
var counter = 1;
for(var i = 0; i<mat.length; i++){
    console.log(mat[i]);
}

var flag = false;
function set(x){
    if(!flag){
        document.getElementById('winner').innerHTML=counter%2===0?"X":"O";
        var name = get(x.getAttribute("id"));
        if(counter%2===1){
            if(mat[name[0]][name[1]]==0){
                counter++;
                mat[name[0]][name[1]]=1;
                x.style.backgroundImage="url('X.png')";
            }
        }else{
            if(mat[name[0]][name[1]]==0){
                counter++;
                x.style.backgroundImage="url('O.png')";
                mat[name[0]][name[1]]=2;
            }
        }
        x.style.backgroundSize="100% 100%";
        
        //check
        var result = check(mat);
        if(counter === 10 || result!=0){
            if(result==1){
                document.getElementById('winner').innerHTML="Player 1 Wins!!&#x1F389";
            }else if(result==2){
                document.getElementById('winner').innerHTML="Player 2 Wins!!&#x1F389";
            }
            flag=true;
            if(counter===10){
                document.getElementById('winner').innerHTML="Tie&#x1F61E";
            }
            document.getElementById('ins').innerHTML="Press any key to play again";
        }
    }
    if(flag){
        document.addEventListener('keypress',function fx(){
            location.reload();    
        });
    }
}



//checking
function check(arr){
    //diag check
    var smd1 = 3, smd2 = 6;
    var sm1 = 3, sm2 = 6;
    for(var j = 0; j<3; j++) {
        smd1 -= arr[j][j] == 1 ? 1 : 0;
        smd2 -= arr[j][j] == 2 ? 2 : 0;

        sm1 -= arr[j][2-j] == 1 ? 1 : 0;
        sm2 -= arr[j][2-j] == 2 ? 2 : 0;
        if(smd1 ==0 || sm1 == 0){
            return 1;
        }else if(smd2==0 || sm2 == 0){
            return 2;
        }
    }
    //checking in row
    for(var i = 0; i<3; i++){
        var sum1 = 3, sum2=6;
        var smr1 = 3, smr2 = 6;
        for(var j = 0; j<3;j++){
            //row check
            sum1 -= arr[i][j]==1 ? arr[i][j]: 0;
            sum2 -= arr[i][j]==2 ?  arr[i][j]: 0;
            //col check
            smr1 -= arr[j][i]==1 ? arr[j][i]: 0;
            smr2 -= arr[j][i]==2 ?  arr[j][i]: 0;
        }
        if(sum1==0 || smr1 == 0)
            return 1;
        else if(sum2 == 0 || smr2 ==0)
            return 2;
    }
    return 0;
}

function get(n){
    switch (n){
        case "one":
            return [0,0];
        case "two":
            return [0,1];
        case "three":
            return [0,2];
        case "four":
            return [1,0];
        case "five":
            return [1,1];
        case "six":
            return [1,2];
        case "seven":
            return [2,0];
        case "eight":
            return [2,1];
        case "nine":
            return [2,2];
    }
    return [0,0];
}

//debug
function edit(i,j,n){
    mat[i][j] = n;
}
function print(){
    console.log(mat[0]);
    console.log(mat[1]);
    console.log(mat[2]);
}