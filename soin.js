var soinMax;
  var soinrand;

    //Массив ссылок на картиноки
    soin_array = [
    'https://pp.userapi.com/c845216/v845216667/181ba4/n6pIUE5GgsM.jpg',
    '',
  ];
 
  soinMax = soin_array.length - 1; 
   
  function getSoin(){  
    soinrand = Math.round((Math.random() * (soinMax - 0) + 0));
    document.getElementById("result").innerHTML = '<li class="list-group-item"><center><img src="' + soin_array[soinrand] + '" width = "160" "></center></li>';
  }
