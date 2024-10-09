$(document).ready(function(){
    $('#example').quiz({
  
      // path to JSON
      quizJson: "./dist/quiz.json",
  
      // handle results
      onResults: function(good, total){
        var perc = good / total;
        var alert = $('<div class="alert"></div>')
          .prependTo(this);
        if(perc == 0){
          alert.addClass('alert-danger')
            .html("All wrong! You didn't get an answer right.");
        } else if(perc > 0 && perc <= 0.25){
          
          alert.addClass('alert-danger')
            .html('Poor result! You just got it right ' + good + ' answers on ' + total + '. Try again.');
        } else if(perc > 0.25 && perc <= 0.5){
          
          alert.addClass('alert-danger')
            .html('Just sufficient! You got it right ' + good + ' answers on ' + total + '. You can do better.');
        } else if(perc > 0.5 && perc <= 0.75){
          
          alert.addClass('alert-success')
            .html('Discreet result! You got it right ' + good + ' answers on ' + total + '. Try again.');
        } else if(perc > 0.75 && perc < 1){
          
          alert.addClass('alert-success')
            .html('Good result! You got it right ' + good + ' answers on ' + total + '. We are almost there.');
        } else if(perc == 1){
          
          alert.addClass('alert-success')
            .html('Congratulations, you have answered all the questions!');
        }
      }
      
    }); 
  });
  