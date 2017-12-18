<script>
    function howMany(selectObject) {
    var numberSelected = 0;
    for (var i = 0; i < selectObject.options.length; i++){
        if (selectObject.options[i].selected){
          numberSelected++;
         }
      }
    return numberSelected;
}


</script>