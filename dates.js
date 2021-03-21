(function(){
    const today = new Date("4/3/2021");
    const meeting = new Date("3/4/2019");
    const seeing = new Date("3/17/2019");
    const dating = new Date("4/3/2019");

    const meetingPhrase = document.getElementById('meeting');
    const seeingPhrase = document.getElementById('seeing');
    const datingPhrase = document.getElementById('dating');

    function dateCreator(date) {
        const timeDiff = Math.abs(today.getTime() - date.getTime());
        const fullDays = Math.round(timeDiff / (1000 * 3600 * 24)); 
        const years = Math.round(fullDays / 365);
        const months = Math.round((fullDays % 365) / 30.5);
        const days = Math.round(fullDays % 30.5)

        return `${years} ano(s), ${months} mes(es) e ${days} dias(s)`
    }

    meetingPhrase.innerHTML += dateCreator(meeting);
    seeingPhrase.innerHTML += dateCreator(seeing);
    datingPhrase.innerHTML += dateCreator(dating);

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
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
      t = setTimeout(function() {
        startTime()
      }, 500);
    }
    startTime();
})();