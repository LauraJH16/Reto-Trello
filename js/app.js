window.addEventListener('load', function() {
  var containerAddList = document.getElementById('container-addlist');
  var containerList = document.getElementById('container-list');
  var divList = document.getElementById('divList');
  divList.addEventListener('click', openList);

  function openList(event) {
    /* form.classList.remove('hide');
        form.classList.add('show');
        containerAddList.removeChild(divList);*/
    var formAddList = document.createElement('div');
    formAddList.classList.add('form');
    containerAddList.appendChild(formAddList);
    var nameList = document.createElement('input');
    nameList.setAttribute('placeholder', 'Añadir una lista...');
    nameList.classList.add('nameList');
    var save = document.createElement('button');
    save.classList.add('save');
    formAddList.appendChild(nameList);
    formAddList.appendChild(save);
    save.textContent = 'Guardar';
    containerAddList.removeChild(divList);
    nameList.focus();
    save.addEventListener('click', function() {
      var titleList = nameList.value;
      var list = document.createElement('div');
      var textList = document.createElement('div');
      var divHomeWork = document.createElement('div');
      list.classList.add('list');
      divHomeWork.classList.add('divHomeWork');
      textList.classList.add('titleList');
      textList.innerHTML = titleList;
      divHomeWork.innerHTML = 'Añadir una tarea...';
      list.appendChild(textList);
      list.appendChild(divHomeWork);
      containerList.appendChild(list);
      nameList.textContent = '';
      containerAddList.removeChild(formAddList);
      containerAddList.appendChild(divList);
      divHomeWork.addEventListener('click', function() {
        var formHomeWork = document.createElement('div');
        formHomeWork.classList.add('formHomeWork');
        var nameHomeWork = document.createElement('textarea');
        nameHomeWork.classList.add('nameHomeWork');           
        var saveHomeWork = document.createElement('button');
        saveHomeWork.classList.add('saveHomeWork');
        saveHomeWork.textContent = 'Añadir';
        formHomeWork.appendChild(nameHomeWork);
        formHomeWork.appendChild(saveHomeWork);
        list.appendChild(formHomeWork);
        list.removeChild(divHomeWork);
        nameHomeWork.focus();
        saveHomeWork.addEventListener('click', function() {
          var titleHomeWork = nameHomeWork.value;
          var homeWork = document.createElement('div');
          homeWork.classList.add('homeWork');
          homeWork.innerHTML = titleHomeWork;
          list.appendChild(homeWork);
          list.insertBefore(homeWork, formHomeWork);  
          nameHomeWork.value = ''; 
          nameHomeWork.focus();                 
        });
      });
    });        
  }
});