document.write("Масив 1" + "</br>");
       let mas1 = [];
       for (let i = 0; i < 10; i++) {
           mas1[i] = Math.random();
           document.write(mas1[i] + '</br>');
       }
       
  
       document.write("</br>Масив 2" + "</br>");
       let mas2 = [];
       for (let i = 0; i < 10; i++) {
           mas2[i] = mas1[i] * 10;
           document.write(mas2[i] + '</br>');
       }
       
     
       document.write("</br>Масив 3 (floor)" + "</br>");
       let mas3Floor = [];
       for (let i = 0; i < 10; i++) {
           mas3Floor[i] = Math.floor(mas2[i]);
           document.write(mas3Floor[i] + '</br>');
       }
       
       document.write("</br>Масив 3 (round)" + "</br>");
       let mas3Round = [];
       for (let i = 0; i < 10; i++) {
           mas3Round[i] = Math.round(mas2[i]);
           document.write(mas3Round[i] + '</br>');
       }
       
       document.write("</br>Масив 3 (ceil)" + "</br>");
       let mas3Ceil = [];
       for (let i = 0; i < 10; i++) {
           mas3Ceil[i] = Math.ceil(mas2[i]);
           document.write(mas3Ceil[i] + '</br>');
       }
