var soinMax;
  var soinrand;
    soin_array = [
      'https://pp.userapi.com/c845216/v845216667/181ba4/n6pIUE5GgsM.jpg',
      'https://pp.userapi.com/c845523/v845523436/14745e/fwNI8KJaBzs.jpg',
      'https://pp.userapi.com/c850732/v850732688/5c5ea/U5Z9tGqgnOQ.jpg',
      'https://pp.userapi.com/c849136/v849136438/ce023/N97rncjMQok.jpg',
      'https://pp.userapi.com/c845020/v845020868/13aeb6/To-63cYH59I.jpg',
      'https://sun1-16.userapi.com/c543103/v543103757/54741/Q4COs4BZ1rw.jpg'
  ];
 
  soinMax = soin_array.length - 1; 
   
  function getSoin(){  
    soinrand = Math.round((Math.random() * (soinMax - 0) + 0));
    document.getElementById("result").innerHTML = '<center><img src="' + soin_array[soinrand] + '" width = "160" "></center>';
  }
