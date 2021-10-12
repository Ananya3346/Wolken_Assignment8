function findDiff(){
    var dob1= document.getElementById("dob1").value;
    var dob2= document.getElementById("dob2").value;
    var date1 = new Date(dob1);
    var date2=new Date(dob2);
    
    var ONE_DAY = 1000 * 60 * 60 * 24
    var d1 = date1.getTime()
    var d2 = date2.getTime()
    var diff = Math.abs(d1 - d2)
    document.getElementById("days").value=Math.round(diff/ONE_DAY);
    }