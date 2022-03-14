var arr = [];

function setup()
{
  document.querySelector("#one").checked = true;
  document.querySelector("#two").checked = true;
  document.querySelector("#three").checked = true;
  document.querySelector("#four").checked = true;
  document.querySelector("#five").checked = true;
  document.querySelector("#six").checked = true;
  document.querySelector("#seven").checked = true;
  document.querySelector("#eight").checked = true;
  document.querySelector("#nine").checked = true;
  document.querySelector("#none").checked = false;
  document.querySelector("#all").checked = true;

  arr = new Array(9); //設定初始陣列
  for(i=0; i<9; i++)
  {
    arr[i]= i + 1;
  }
}

function draw()
{
  if(document.querySelector("#one").checked == true &&
      document.querySelector("#two").checked == true &&
      document.querySelector("#three").checked == true &&
      document.querySelector("#four").checked == true &&
      document.querySelector("#five").checked == true &&
      document.querySelector("#six").checked == true &&
      document.querySelector("#seven").checked == true &&
      document.querySelector("#eight").checked == true &&
      document.querySelector("#nine").checked == true) //全選checkedbox設定
  {
    document.querySelector("#all").checked = true;
  }else
  {
    document.querySelector("#all").checked = false;
  }

  if(document.querySelector("#one").checked == false &&
      document.querySelector("#two").checked == false &&
      document.querySelector("#three").checked == false &&
      document.querySelector("#four").checked == false &&
      document.querySelector("#five").checked == false &&
      document.querySelector("#six").checked == false &&
      document.querySelector("#seven").checked == false &&
      document.querySelector("#eight").checked == false &&
      document.querySelector("#nine").checked == false) //全不選checkedbox設定
  {
    document.querySelector("#none").checked = true;
  }else
  {
    document.querySelector("#none").checked = false;
  }
}

function number(num)
{
  if(num<10) //點一下checkedbox，有即無、無即有
  {
    if(arr[num-1] == null)
    {
      arr[num-1] = num;
    }else
    {
      arr[num-1] = null;
    }
  }

  if(num == 10) //將空陣列刪除
  {
    for(i=0; i<9; i++)
    {
      if(arr[i] == null)
      {
        arr.splice(i, 1);
      }
    }
    return arr; //回傳整理好的陣列
  }
}

function calculator()
{
  var arr = number(10);
  var length = arr.length;
  var cells = $('#cells').val();
  var ans = summation(cells, arr, length);

  const output = ans.join('、'); //合併結果
  $('#results').val(output); //輸出

  setup(); //還原初始畫面
}


function summation(cells, arr, length) //測試加總
{
  var ans = new Array();
  var adds = $('#adds').val();
  var temp=0;
  if(cells==2)
  {
    for(i=0; i<length; i++)
    {
      for(j=i+1; j<length; j++)
      {
        var a = arr[i];
        var b = arr[j];
        var sum = parseInt(a) + parseInt(b);
        if(sum==adds)
        {
          ans[temp] = str(a) + str(b);
          temp = temp + 1;
        }
      }
    }
  }

  if(cells==3)
  {
    for(i=0; i<length; i++)
    {
      for(j=i+1; j<length; j++)
      {
        for(k=j+1; k<length; k++)
        {
          var a = arr[i];
          var b = arr[j];
          var c = arr[k];
          var sum = parseInt(a) + parseInt(b) + parseInt(c);
          if(sum==adds)
          {
            ans[temp] = str(a) + str(b) + str(c);
            temp = temp + 1;
          }
        }
      }
    }
  }

  if(cells==4)
  {
    for(i=0; i<length; i++)
    {
      for(j=i+1; j<length; j++)
      {
        for(k=j+1; k<length; k++)
        {
          for(l=k+1; l<length; l++)
          {
            var a = arr[i];
            var b = arr[j];
            var c = arr[k];
            var d = arr[l];
            var sum = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);
            if(sum==adds)
            {
              ans[temp] = str(a) + str(b) + str(c) + str(d);
              temp = temp + 1;
            }
          }
        }
      }
    }
  }

  if(cells==5)
  {
    for(i=0; i<length; i++)
    {
      for(j=i+1; j<length; j++)
      {
        for(k=j+1; k<length; k++)
        {
          for(l=k+1; l<length; l++)
          {
            for(m=l+1; m<length; m++)
            {
              var a = arr[i];
              var b = arr[j];
              var c = arr[k];
              var d = arr[l];
              var e = arr[m];
              var sum = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e);
              if(sum==adds)
              {
                ans[temp] = str(a) + str(b) + str(c) + str(d) + str(e);
                temp = temp + 1;
              }
            }
          }
        }
      }
    }
  }

  if(cells==6)
  {
    for(i=0; i<length; i++)
    {
      for(j=i+1; j<length; j++)
      {
        for(k=j+1; k<length; k++)
        {
          for(l=k+1; l<length; l++)
          {
            for(m=l+1; m<length; m++)
            {
              for(n=m+1; n<length; n++)
              {
                var a = arr[i];
                var b = arr[j];
                var c = arr[k];
                var d = arr[l];
                var e = arr[m];
                var f = arr[n];
                var sum = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e) + parseInt(f);
                if(sum==adds)
                {
                  ans[temp] = str(a) + str(b) + str(c) + str(d) + str(e) + str(f);
                  temp = temp + 1;
                }
              }
            }
          }
        }
      }
    }
  }

  return ans; //回傳結果陣列
}

function none()
{
  document.querySelector("#one").checked = false;
  document.querySelector("#two").checked = false;
  document.querySelector("#three").checked = false;
  document.querySelector("#four").checked = false;
  document.querySelector("#five").checked = false;
  document.querySelector("#six").checked = false;
  document.querySelector("#seven").checked = false;
  document.querySelector("#eight").checked = false;
  document.querySelector("#nine").checked = false;
  document.querySelector("#none").checked = true;
  document.querySelector("#all").checked = false;

  for(i=0; i<9; i++)
  {
    arr[i] = null; //重設陣列
  }
}

function all()
{
  document.querySelector("#one").checked = true;
  document.querySelector("#two").checked = true;
  document.querySelector("#three").checked = true;
  document.querySelector("#four").checked = true;
  document.querySelector("#five").checked = true;
  document.querySelector("#six").checked = true;
  document.querySelector("#seven").checked = true;
  document.querySelector("#eight").checked = true;
  document.querySelector("#nine").checked = true;
  document.querySelector("#all").checked = true;

  for(i=0; i<9; i++)
  {
    arr[i] = i + 1; //重設陣列
  }
}
