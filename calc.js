function plus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;//получаем элемент по его идентификатору. Value - это св-во которое отвечает, за то что пользователь ввел дынные
    num1 = parseInt(num1);//ф-я котора проверит содержимое инпута и преоюразует его в целое число (5а->5; 5.1->5)
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result=num1 + num2;
    
//innerHTML - св-во для записи внутрь тэга html
    document.getElementById('out').innerHTML=result;
}

function minus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;//получаем элемент по его идентификатору. Value - это св-во которое отвечает, за то что пользователь ввел дынные
    num1 = parseInt(num1);//ф-я котора проверит содержимое инпута и преоюразует его в целое число (5а->5; 5.1->5)
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result=num1 - num2;
      document.getElementById('out').innerHTML=result;
}