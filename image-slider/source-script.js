function handleEvent(form) {
            var previous = form.getElementsByClassName('indicator active')[0];
            var prev = form.getElementsByClassName('prev-button')[0];
            var next = form.getElementsByClassName('next-button')[0];
            console.log(form.getElementsByClassName('next-button'));
      
            return function onChange() {
              var radiobuttons = Array.from(form.getElementsByTagName('input'));
              var indicators = Array.from(form.getElementsByClassName('indicator'));
              var checkedRadioIndex = radiobuttons.findIndex(button => button.checked);
            
              previous.classList.remove('active');
              previous = indicators[checkedRadioIndex];
              previous.classList.add('active');

              var prevId = checkedRadioIndex === 0 ? radiobuttons[radiobuttons.length - 1].id : radiobuttons[checkedRadioIndex - 1].id;
              var nextId = checkedRadioIndex === radiobuttons.length - 1 ? radiobuttons[0].id : radiobuttons[checkedRadioIndex + 1].id;
              
              prev.htmlFor = prevId;
              next.htmlFor = nextId;
          }; 
        }
      </script>
