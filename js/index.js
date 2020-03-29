  document.addEventListener("DOMContentLoaded", function(event) {
  	var img_aleatoria = [];
  	var certificados = 10;
    for (var i = 0; i < 3; i++) {
    	if (i == 0) {
    		img_aleatoria[i] = Math.round(Math.random()*certificados);
    	}
    	else if(i == 1){
    		img_aleatoria[i] = Math.round(Math.random()*certificados);
    		while(img_aleatoria[i] == img_aleatoria[0]){
    			img_aleatoria[i] = Math.round(Math.random()*certificados);
    		}
    	}
    	else if(i == 2){
			img_aleatoria[i] = Math.round(Math.random()*certificados);
    		while(img_aleatoria[i] == img_aleatoria[1] || img_aleatoria[i] == img_aleatoria[0]){
    			img_aleatoria[i] = Math.round(Math.random()*certificados);
    		}
    	}

    		document.getElementById("image"+i).innerHTML='<img class="card-img-top" src="img/'+img_aleatoria[i]+'.jpg" alt="Card image cap"/>';
    	}
  });
