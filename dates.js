(function(){
    new cursoreffects.ghostCursor();

    const today = new Date();
    const aniversarioMarco = new Date("04/15/1996");
    const aniversarioCarol = new Date("07/13/1993");
    const meeting = new Date("03/04/2019");
    const seeing = new Date("03/17/2019");
    const dating = new Date("04/03/2019");
    const living = new Date("04/03/2021");
    const marriage = new Date("09/09/2023");

    const meetingPhrase = document.getElementById('meeting');
    const seeingPhrase = document.getElementById('seeing');
    const datingPhrase = document.getElementById('dating');
    const livingPhrase = document.getElementById('living');
    const marriagePhrase = document.getElementById('marriage');

    const idadeMarco = document.getElementById('idadeMarco');
    const idadeCarol = document.getElementById('idadeCarol');
    const yearsHero = document.getElementById('datingHero');

    function yearComparison(date) {
      const timeDiff = Math.abs(today.getTime() - date.getTime());
      const fullDays = Math.floor(timeDiff / (1000 * 3600 * 24)); 
      const years = Math.floor(fullDays / 365);

      return `${years}`
    }

    idadeMarco.innerHTML += yearComparison(aniversarioMarco);
    idadeCarol.innerHTML += yearComparison(aniversarioCarol);
    yearsHero.innerHTML += yearComparison(dating);

    function dateCreator(date) {
        const timeDiff = Math.abs(today.getTime() - date.getTime());
        const fullDays = Math.floor(timeDiff / (1000 * 3600 * 24)); 
        const years = Math.floor(fullDays / 365);
        const months = Math.floor((fullDays % 365) / 30.5);
        const days = Math.floor((fullDays % 30.5) + 1);

        return `${years} ano${years > 1 ? 's' : ''}, 
                ${months} mes${months > 1 ? 'es' : ''} e 
                ${days} dia${days > 1 ? 's' : ''}`
    }

    meetingPhrase.innerHTML += dateCreator(meeting);
    seeingPhrase.innerHTML += dateCreator(seeing);
    datingPhrase.innerHTML += dateCreator(dating);
    livingPhrase.innerHTML += dateCreator(living);
    marriagePhrase.innerHTML += dateCreator(marriage);

})();

(function(){
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
      t = setTimeout(function() {
        startTime()
      }, 500);
    }
    startTime();
})();