
/* chargement images script */

var myimages=new Array()

function buttonACharger(){
	for (i=0;i<buttonACharger.arguments.length;i++){
		myimages[i]=new Image();
		myimages[i].src="images/calendrier/"+buttonACharger.arguments[i];
	}
}


buttonACharger("PrevYrOff40x40.jpg","PrevYrOn40x40.jpg","PrevMoOff40x40.jpg","PrevMoOn40x40.jpg","NextYrOff40x40.jpg","NextYrOn40x40.jpg","NextMoOff40x40.jpg","NextMoOn40x40.jpg");

var thisDate = 1;							// Tracks current date being written in calendar
var wordMonth = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var today = new Date();							// date du jour
var todaysDay = today.getDay() + 1;					// jour de la semaine
var todaysDate = today.getDate();					// 
var todaysMonth = today.getUTCMonth() + 1;				// le mois de l annee
var todaysYear = today.getFullYear();					// l annee en cours
var monthNum = todaysMonth;						// le mois actuel
var yearNum = todaysYear;						// l annee actuel
var firstDate = new Date(String(monthNum)+"/1/"+String(yearNum));	// le premier jours du mois actuel
var firstDay = firstDate.getUTCDay();					// le jour du mois actuel
var lastDate = new Date(String(monthNum+1)+"/0/"+String(yearNum));	// dernier jour du mois
var numbDays = 0;
var calendarString = "";
var eastermonth = 0;
var easterday = 0;


function changedate(buttonpressed) {
	if (buttonpressed == "prevyr") yearNum--;
	else if (buttonpressed == "nextyr") yearNum++;
	else if (buttonpressed == "prevmo") monthNum--;
	else if (buttonpressed == "nextmo") monthNum++;
	else  if (buttonpressed == "return") { 
		monthNum = todaysMonth;
		yearNum = todaysYear;
	}

	if (monthNum == 0) {
		monthNum = 12;
		yearNum--;
	}
	else if (monthNum == 13) {
		monthNum = 1;
		yearNum++
	}

	lastDate = new Date(String(monthNum+1)+"/0/"+String(yearNum));
	numbDays = lastDate.getDate();
	firstDate = new Date(String(monthNum)+"/1/"+String(yearNum));
	firstDay = firstDate.getDay() + 1;
	createCalendar();
	return;
}


function easter(year) {
var a = year % 19;
var b = Math.floor(year/100);
var c = year % 100;
var d = Math.floor(b/4);
var e = b % 4;
var f = Math.floor((b+8) / 25);
var g = Math.floor((b-f+1) / 3);
var h = (19*a + b - d - g + 15) % 30;
var i = Math.floor(c/4);
var j = c % 4;
var k = (32 + 2*e + 2*i - h - j) % 7;
var m = Math.floor((a + 11*h + 22*k) / 451);
var month = Math.floor((h + k - 7*m + 114) / 31);
var day = ((h + k - 7*m +114) % 31) + 1;
eastermonth = month;
easterday = day;
}


function createCalendar() {
	calendarString = '';
	var daycounter = 0;
	calendarString += '<table border="1" cellpadding="0" cellspacing="1">';
	calendarString += '<tr>';
	calendarString += '<td align=\"center\" valign=\"center\" width=\"20\" height=\"20\"><a href=\"#\" onMouseOver=\"document.PrevYr.src=\'images\/calendrier\/PrevYrOn40x40\.jpg\';\" onMouseOut=\"document.PrevYr.src=\'images\/calendrier\/PrevYrOff40x40\.jpg\';\" onClick=\"changedate(\'prevyr\')\"><img name=\"PrevYr\" src=\"images\/calendrier\/PrevYrOff40x40\.jpg\" width=\"20\" height=\"20\" border=\"0\" alt=\"Prev Yr\"\/><\/a><\/td>';
	calendarString += '<td align=\"center\" valign=\"center\" width=\"20\" height=\"20\"><a href=\"#\" onMouseOver=\"document.PrevMo.src=\'images\/calendrier\/PrevMoOn40x40\.jpg\';\" onMouseOut=\"document.PrevMo.src=\'images\/calendrier\/PrevMoOff40x40\.jpg\';\" onClick=\"changedate(\'prevmo\')\"><img name=\"PrevMo\" src=\"images\/calendrier\/PrevMoOff40x40\.jpg\" width=\"20\" height=\"20\" border=\"0\" alt=\"Prev Mo\"\/><\/a><\/td>';
	calendarString += '<td bgcolor=\"#C8C896\" align=\"center\" valign=\"center\" width=\"20\" height=\"20\" colspan=\"3\"><b>' + wordMonth[monthNum-1] + '&nbsp;&nbsp;' + yearNum + '<\/b><\/td>';
	calendarString += '<td align=\"center\" valign=\"center\" width=\"20\" height=\"20\"><a href=\"#\" onMouseOver=\"document.NextMo.src=\'images\/calendrier\/NextMoOn40x40\.jpg\';\" onMouseOut=\"document.NextMo.src=\'images\/calendrier\/NextMoOff40x40\.jpg\';\" onClick=\"changedate(\'nextmo\')\"><img name=\"NextMo\" src=\"images\/calendrier\/NextMoOff40x40\.jpg\" width=\"20\" height=\"20\" border=\"0\" alt=\"Next Mo\"\/><\/a><\/td>';
	calendarString += '<td align=\"center\" valign=\"center\" width=\"20\" height=\"20\"><a href=\"#\" onMouseOver=\"document.NextYr.src=\'images\/calendrier\/NextYrOn40x40\.jpg\';\" onMouseOut=\"document.NextYr.src=\'images\/calendrier\/NextYrOff40x40\.jpg\';\" onClick=\"changedate(\'nextyr\')\"><img name=\"NextYr\" src=\"images\/calendrier\/NextYrOff40x40\.jpg\" width=\"20\" height=\"20\" border=\"0\" alt=\"Next Yr\"\/><\/a><\/td>';
	calendarString += '<\/tr>';
	calendarString += '<tr>';
	calendarString += '<td bgcolor=\"#DDDDDD\" align=\"center\" valign=\"center\" width=\"20\" height=\"12\">Sun<\/td>';
	calendarString += '<td bgcolor=\"#DDDDDD\" align=\"center\" valign=\"center\" width=\"20\" height=\"12\">Mon<\/td>';
	calendarString += '<td bgcolor=\"#DDDDDD\" align=\"center\" valign=\"center\" width=\"20\" height=\"12\">Tue<\/td>';
	calendarString += '<td bgcolor=\"#DDDDDD\" align=\"center\" valign=\"center\" width=\"20\" height=\"12\">Wed<\/td>';
	calendarString += '<td bgcolor=\"#DDDDDD\" align=\"center\" valign=\"center\" width=\"20\" height=\"12\">Thu<\/td>';
	calendarString += '<td bgcolor=\"#DDDDDD\" align=\"center\" valign=\"center\" width=\"20\" height=\"12\">Fri<\/td>';
	calendarString += '<td bgcolor=\"#DDDDDD\" align=\"center\" valign=\"center\" width=\"20\" height=\"12\">Sat<\/td>';
	calendarString += '<\/tr>';

	thisDate == 1;

	for (var i = 1; i <= 6; i++) {
		calendarString += '<tr>';
		for (var x = 1; x <= 7; x++) {
			daycounter = (thisDate - firstDay)+1;
			thisDate++;
			if ((daycounter > numbDays) || (daycounter < 1)) {
				calendarString += '<td align=\"center\" bgcolor=\"#888888\" height=\"5\" width=\"10\">&nbsp;<\/td>';
			} else {
				if (checkevents(daycounter,monthNum,yearNum,i,x) || ((todaysDay == x) && (todaysDate == daycounter) && (todaysMonth == monthNum))){
					if ((todaysDay == x) && (todaysDate == daycounter) && (todaysMonth == monthNum)) {
						calendarString += '<td align=\"center\" bgcolor=\"#AAFFAA\" height=\"5\" width=\"10\"><a href=\"javascript:showevents(' + daycounter + ',' + monthNum + ',' + yearNum + ',' + i + ',' + x + ')\">' + daycounter + '<\/a><\/td>';
					}
 					else	calendarString += '<td align=\"center\" bgcolor=\"#FFFFC8\" height=\"5\" width=\"10\"><a href=\"javascript:showevents(' + daycounter + ',' + monthNum + ',' + yearNum + ',' + i + ',' + x + ')\">' + daycounter + '<\/a><\/td>';
				} else {
					calendarString += '<td align=\"center\" bgcolor=\"#DDFFFF\" height=\"5\" width=\"10\">' + daycounter + '<\/td>';
				}
			}
		}
		calendarString += '<\/tr>';
	}

	var object=document.getElementById('calendar');
	object.innerHTML= calendarString;
	thisDate = 1;
}


function checkevents(day,month,year,week,dayofweek) {
var numevents = 0;
var floater = 0;

	for (var i = 0; i < events.length; i++) {
		if (events[i][0] == "W") {
			if ((events[i][2] == dayofweek)) numevents++;
		}
		else if (events[i][0] == "Y") {
			if ((events[i][2] == day) && (events[i][1] == month)) numevents++;
		}
		else if (events[i][0] == "F") {
			if ((events[i][1] == 3) && (events[i][2] == 0) && (events[i][3] == 0) ) {
				easter(year);
				if (easterday == day && eastermonth == month) numevents++;
			} else {
				floater = floatingholiday(year,events[i][1],events[i][2],events[i][3]);
				if ((month == 5) && (events[i][1] == 5) && (events[i][2] == 4) && (events[i][3] == 2)) {
					if ((floater + 7 <= 31) && (day == floater + 7)) {
						numevents++;
					} else if ((floater + 7 > 31) && (day == floater)) numevents++;
				} else if ((events[i][1] == month) && (floater == day)) numevents++;
			}
		}
		else if ((events[i][2] == day) && (events[i][1] == month) && (events[i][3] == year)) {
			numevents++;
		}
	}

	if (numevents == 0) {
		return false;
	} else {
		return true;
	}
}


function showevents(day,month,year,week,dayofweek) {
	alert(' evenement');
}


function floatingholiday(targetyr,targetmo,cardinaloccurrence,targetday) {

var firstdate = new Date(String(targetmo)+"/1/"+String(targetyr));	// Object Storing the first day of the current month.
var firstday = firstdate.getUTCDay();	// The first day (0-6) of the target month.
var dayofmonth = 0;	// zero out our calendar day variable.

	targetday = targetday - 1;

	if (targetday >= firstday) {
		cardinaloccurrence--;	// Subtract 1 from cardinal day.
		dayofmonth = (cardinaloccurrence * 7) + ((targetday - firstday)+1);
	} else {
		dayofmonth = (cardinaloccurrence * 7) + ((targetday - firstday)+1);
	}
return dayofmonth;
}


