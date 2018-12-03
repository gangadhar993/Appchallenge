

window.onload = function () {
    window.vm =  new Vue({
    el: '#app',
    data: {
        students: "",
        positions: "",
        result:""
    }
}); 
}

function calculateMinString(){
  var data = vm;
  vm.result = parseInt(vm.students/vm.positions,10); 
  }
