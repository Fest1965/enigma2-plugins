// EPG Templates
var tplUpdateStreamReaderIE = '<iframe id="UpdateStreamReaderIEFixIFrame" src="%(url_updates)" height="0" width="0" scrolling="none" frameborder="0">no iframe support!</iframe>';
var tplEPGListHeader = '<table width="100%" border="0" cellspacing="1" cellpadding="0">';

var tplEPGListItem  = '<tr style="background-color: #DDDDDD;">';
	tplEPGListItem += '<td width="10%">%(date)</td>';
	tplEPGListItem += '<td width="30%">%(servicename)</td>';
	tplEPGListItem += '<td>%(title)</td>';
	tplEPGListItem += '</tr>';
	
	tplEPGListItem += '<tr style="background-color: #DDDDDD;">';
	tplEPGListItem += '<td>%(starttime)</td>';
	tplEPGListItem += '<td>%(duration) min.</td>';
	tplEPGListItem += '<td>%(description)</td>';
	tplEPGListItem += '</tr>';
	
	tplEPGListItem += '<tr style="background-color: #DDDDDD;">';
	tplEPGListItem += '<td valign="top">%(endtime)</td>';
	tplEPGListItem += '<td colspan="2"rowspan="2" id="extdescription%(number)">%(extdescriptionSmall)</td>';
	tplEPGListItem += '</tr>';
	
	tplEPGListItem +='<tr style="background-color: #DDDDDD;"><td>';
	tplEPGListItem +='<a target="_blank" ><img src="/webdata/gfx/timer.png" title="add to Timers" border="0" onclick="addTimerByID(\'%(servicereference)\',\'%(eventid)\',\'0\');"></a>&nbsp;&nbsp;';
	tplEPGListItem +='<a target="_blank" ><img src="/webdata/gfx/zap.png" title="add zap to Timers" border="0" onclick="addTimerByID(\'%(servicereference)\',\'%(eventid)\',\'1\');"></a>&nbsp;&nbsp;';
	tplEPGListItem +='<a target="_blank" ><img src="/webdata/gfx/edit.gif" title="edit and add timer" border="0" onclick="loadTimerFormSeconds(0,\'%(start)\',\'%(end)\',0,\'%(servicereference)\',\'%(servicename)\',\'%(title)\',\'%(description)\',\'0\',0,\'%(eventid)\');"></a><br/>';
	tplEPGListItem +='<a target="_blank" href="/web/epgsearch.rss?search=%(title)" ><img src="/webdata/gfx/feed.png" title="RSS-Feed for this Title" border="0"></a><br/>';
	tplEPGListItem +='<a target="_blank" href="http://www.imdb.com/find?s=all&amp;q=%(titleESC)" ><img src="/webdata/gfx/world.png" title="search IMDb" border="0"></a><br/>';
	tplEPGListItem +='</td></tr>';
	tplEPGListItem += '<tr style="background-color: #AAAAAA;">';
	tplEPGListItem += '<td colspan="3">&nbsp;</td>';
	tplEPGListItem += '</tr>';

var tplEPGListItemExtend  = '%(shortTxt) ...<a nohref onclick="setComplete(\'extdescription%(number)\',\'%(txt)\');">more</a>';

var tplEPGListFooter = "</table>";
	
// ServiceList Templates
var tplServiceListHeader  = '<table border="0" cellpadding="0" cellspacing="0" class="BodyContentChannellist">\n';
	tplServiceListHeader += '<thead class="fixedHeader">\n';
	tplServiceListHeader += '<tr>\n';
	tplServiceListHeader += '<th><div class="sListHeader">ServiceList</div>\n';
	tplServiceListHeader += '<div class="sListSearch">';
	tplServiceListHeader += '<form onSubmit="loadEPGBySearchString(document.getElementById(\'searchText\').value); return false;">';
	tplServiceListHeader += '<input type="text" id="searchText" onfocus="this.value=\'\'" value="Search EPG"/>';
	tplServiceListHeader += '<input style="vertical-align:middle" type="image" src="/webdata/gfx/search.png" alt="search...">';
	tplServiceListHeader += '</form></div></th>';
	tplServiceListHeader += '</tr>\n';
	tplServiceListHeader += '</thead>\n';
	tplServiceListHeader += '<tbody class="scrollContent">\n';
	tplServiceListHeader += '<input type="hidden" id="mainServiceRef" name="mainServiceRef" value="%(mainServiceRef)">\n';

var tplServiceListItem  = '<tr id="%(servicereference)extend">\n';
	tplServiceListItem += '<td style="border-top: 2px solid #AAA;" ><div class="sListSName"><a id="%(servicereference)" onclick="zap(this.id);" class="sListSLink">%(servicename)</a></div>';
	tplServiceListItem += '<div class="sListExt"><a onclick="loadEPGByServiceReference(this.id)" id="%(servicereference)"><img src="/webdata/gfx/epg.png" border="0"/></a>\n';
	tplServiceListItem += '<a target="_blank" href="/web/stream.m3u?ref=%(servicereference)"><img src="/webdata/gfx/screen.png" title="stream Service" border="0"></a></div>\n';
	tplServiceListItem += '</tr>\n';
    tplServiceListItem += '<tr>\n';
	tplServiceListItem += '<td colspan="2"><div id="%(servicereference)EPGNOW"></div></td>\n';
	tplServiceListItem += '</tr>\n';
	
var tplServiceListFooter = "</tbody></table>\n";
//

var	tplServiceListEPGItem  = '<div class="sListEPGTime">%(starttime)</div>\n';
	tplServiceListEPGItem += '<div class="sListEPGTitle">%(title)</div>\n';
	tplServiceListEPGItem += '<div class="sListEPGDuration">%(length) Min.</div>\n';

// MovieList Templates
var tplMovieListHeader  = '<table border="0" cellpadding="0" cellspacing="0" class="BodyContentChannellist">\n';
	tplMovieListHeader += '<thead class="fixedHeader">\n';
	tplMovieListHeader += '<tr>\n';
	tplMovieListHeader += '<th><div class="sListHeader" style="color: #000000;">MovieList</div>\n';
	tplMovieListHeader += '<div class="sListSearch">';
	tplMovieListHeader += '<form onSubmit="loadEPGBySearchString(document.getElementById(\'searchText\').value); return false;">';
	tplMovieListHeader += '<input type="text" id="searchText" onfocus="this.value=\'\'" value="Search EPG"/>';
	tplMovieListHeader += '<input style="vertical-align:middle" type="image" src="/webdata/gfx/search.png" alt="search...">';
	tplMovieListHeader += '</form></div></th>';
	tplMovieListHeader += '</tr>\n';
	tplMovieListHeader += '</thead>\n';
	tplMovieListHeader += '<tbody class="scrollContent">\n';

var tplMovieListItem  = '<tr>\n';
	tplMovieListItem += '<td><div class="sListSName" title="%(description), %(descriptionextended)">%(title) (%(servicename))</div>';
	tplMovieListItem += '<div class="sListExt">\n';
	tplMovieListItem += '%(tags)\n';
	tplMovieListItem += '<a target="_blank" href="/web/ts.m3u?file=%(filelink)"><img src="/webdata/gfx/screen.png" title="play file" border="0"></a>\n';
	tplMovieListItem += '&nbsp;&nbsp;<a target="_blank" ><img src="/webdata/gfx/trash.gif" title="delete files" border="0" onclick="delMovieFile(\'%(filename)\',\'%(servicename)\',\'%(title)\',\'%(description)\');"></a>\n';
	tplMovieListItem += '</div>\n';
	tplMovieListItem += '</tr>\n';
	
var tplMovieListFooter = "</tbody></table>\n";

// TimerList Templates
var tplTimerListHeader  = '<table border="0" height="100%" cellpadding="0" cellspacing="0" class="BodyContentChannellist">\n';
	tplTimerListHeader += '<thead class="fixedHeader">\n';
	tplTimerListHeader += '<tr>\n';
	tplTimerListHeader += '<th><div class="sListHeader" style="color: #000000;">TimerList</div>\n';
	tplTimerListHeader += '<div class="sListSearch">';
	tplTimerListHeader += '<form onSubmit="loadEPGBySearchString(document.getElementById(\'searchText\').value); return false;">';
	tplTimerListHeader += '<input type="text" id="searchText" onfocus="this.value=\'\'" value="Search EPG"/>';
	tplTimerListHeader += '<input style="vertical-align:middle" type="image" src="/webdata/gfx/search.png" alt="search...">';
	tplTimerListHeader += '</form></div></th>';
	tplTimerListHeader += '</tr>\n';
	tplTimerListHeader += '</thead>\n';
	tplTimerListHeader += '<tbody class="scrollContent" height="100%">\n';
	tplTimerListHeader += '<tr>';
	tplTimerListHeader += '<td><div style="color: #00BCBC;" class="tListSName"><b>Channel</b><br/>Name</div></td>';
/*	tplTimerListHeader += '<td><div style="color: #00BCBC;" class="tListTitle"><b>Name</b></div></td>';*/
/*	tplTimerListHeader += '<td><div style="color: #00BCBC;" class="tListDescr"><b>Description</b></div></td>';*/
	tplTimerListHeader += '<td><div style="color: #00BCBC;" class="tListRepeat"><b>Repeated</b></div></td>';
	tplTimerListHeader += '<td><div style="color: #00BCBC;" class="tListDuration"><b>Time running</b></div></td>';
	tplTimerListHeader += '<td><div style="color: #00BCBC;" class="tListBegin"><b>Start time</b></div></td>';
	tplTimerListHeader += '<td><div style="color: #00BCBC;" class="tListEnd"><b>End time</b></div></td>';
	tplTimerListHeader += '<td><div style="color: #00BCBC;" class="tListAfter"><b>Event</b><br/>After event</div></td>';
	tplTimerListHeader += '<td><div style="color: #00BCBC;" class="tListOption"><b>Options</b></div></td></tr>\n';

var tplTimerListItem  = '<tr width="99%">\n';
	tplTimerListItem += '<td><div style="color: #%(color);" class="tListSName" title="%(description), %(descriptionextended)"><b>%(servicename)</b> <br/><br/> %(title)</div></td>\n';
	tplTimerListItem += '<td><div style="color: #%(color);" class="tListRepeat">%(repeatedReadable)</div></td>\n';
	tplTimerListItem += '<td><div style="color: #%(color);" class="tListDuration">%(duration)&nbsp;Min</div></td>\n';
	tplTimerListItem += '<td><div style="color: #%(color);" class="tListBegin">%(beginDate)</div></td>\n';
	tplTimerListItem += '<td><div style="color: #%(color);" class="tListEnd">%(endDate)</div></td>\n';
	tplTimerListItem += '<td><div style="color: #%(color);" class="tListAfter"><b>%(justplayReadable)</b> <br/><br/> %(aftereventReadable)</div></td>\n';
	tplTimerListItem += '<td><div style="color: #%(color);" class="tListOption"><a target="_blank" ><img src="/webdata/gfx/trash.gif" title="delete timer entry" border="0" onclick="delTimer(\'%(servicereference)\',\'%(begin)\',\'%(end)\',\'%(servicename)\',\'%(title)\',\'%(description)\');"></a>\n';
	tplTimerListItem += '<a target="_blank" ><img src="/webdata/gfx/%(onOff).png" title="toggle On/Off" border="0" onclick="sendToggleTimerDisable(\'%(justplay)\',\'%(begin)\',\'%(end)\',\'%(repeated)\',\'%(servicereference)\',\'%(title)\',\'%(description)\',\'%(afterevent)\',\'%(disabled)\' );"></a>\n';
	tplTimerListItem += '<a target="_blank" ><img src="/webdata/gfx/edit.gif" title="edit timer entry" border="0" onclick="loadTimerFormSeconds(\'%(justplay)\',\'%(begin)\',\'%(end)\',\'%(repeated)\',\'%(servicereference)\',\'%(servicename)\',\'%(title)\',\'%(description)\',\'%(afterevent)\',1);"></a></div></td>\n';
	tplTimerListItem += '</tr>\n';

var tplTimerListFooter  = '<tr><button onclick="writeTimerListNow()">write TimerList to memory now</button></tr>\n';
    tplTimerListFooter += '</tbody></table>\n';

var tplRecordingFooter   = '<hr><br><table style="text-align: left; width: 100%; height: 178px;" border="0" cellpadding="2" cellspacing="2"><tbody>';
    tplRecordingFooter  += '<tr><td style="vertical-align: top;">';
    tplRecordingFooter  += '<input type="radio" id="recordNowNothing" name="recordNow" value="nothing" checked>';
    tplRecordingFooter  += '</td><td style="vertical-align: top;">';
    tplRecordingFooter  += 'Do nothing';
    tplRecordingFooter  += '</td></tr>';
    tplRecordingFooter  += '<tr><td style="vertical-align: top;">';
    tplRecordingFooter  += '<input type="radio" id="recordNowUndefinitely" name="recordNow" value="undefinitely">';
    tplRecordingFooter  += '</td><td style="vertical-align: top;">';
    tplRecordingFooter  += 'record current playing undefinitely';
    tplRecordingFooter  += '</td></tr>';
    tplRecordingFooter  += '<tr><td style="vertical-align: top;">';
    tplRecordingFooter  += '<input type="radio" id="recordNowCurrent" name="recordNow" value="recordCurrentEvent">';
    tplRecordingFooter  += '</td><td style="vertical-align: top;">';
    tplRecordingFooter  += 'record current event';
    tplRecordingFooter  += '</td></tr>';
	tplRecordingFooter  += '<tr><td style="vertical-align: top;">';
	tplRecordingFooter  += '&nbsp;';
    tplRecordingFooter  += '</td><td style="vertical-align: top;">';
    tplRecordingFooter  += '<img src="/webdata/gfx/ok.jpg" title="OK" border="0" onclick="recordingPushedDecision(ifChecked($(\'recordNowNothing\')), ifChecked($(\'recordNowUndefinitely\')), ifChecked($(\'recordNowCurrent\')) );window.close()">';
    tplRecordingFooter  += '</td></tr>';
    tplRecordingFooter  += '</tbody></table>';

// Bouquetlist Template
var tplBouquetListHeader = '<table id="BouquetList" width="100%" border="0" cellspacing="1" cellpadding="0" border="0">';

var tplBouquetListItem  = '<tr>\n';
	tplBouquetListItem += '<td><div class="navMenuItem" id="%(servicereference)" onclick="loadBouquet(this.id);">%(bouquetname)</div></td>';
	tplBouquetListItem += '</tr>\n';

var tplBouquetListFooter = "</table>";

//Volume Template
var tplVolumePanel  = "<img onclick='volumeUp()' src='/webdata/gfx/arrow_up.png'>"; 
	tplVolumePanel += "<img onclick='volumeDown()' src='/webdata/gfx/arrow_down.png'>"; 
	tplVolumePanel += "<img id='volume1' onclick='volumeSet(10)' src='/webdata/gfx/led_off.png'>"; 
	tplVolumePanel += "<img id='volume2' onclick='volumeSet(20)' src='/webdata/gfx/led_off.png'>"; 
	tplVolumePanel += "<img id='volume3' onclick='volumeSet(30)' src='/webdata/gfx/led_off.png'>"; 
	tplVolumePanel += "<img id='volume4' onclick='volumeSet(40)' src='/webdata/gfx/led_off.png'>"; 
	tplVolumePanel += "<img id='volume5' onclick='volumeSet(50)' src='/webdata/gfx/led_off.png'>"; 
	tplVolumePanel += "<img id='volume6' onclick='volumeSet(60)' src='/webdata/gfx/led_off.png'>"; 
	tplVolumePanel += "<img id='volume7' onclick='volumeSet(70)' src='/webdata/gfx/led_off.png'>"; 
	tplVolumePanel += "<img id='volume8' onclick='volumeSet(80)' src='/webdata/gfx/led_off.png'>"; 
	tplVolumePanel += "<img id='volume9' onclick='volumeSet(90)' src='/webdata/gfx/led_off.png'>"; 
	tplVolumePanel += "<img id='volume10' onclick='volumeSet(100)' src='/webdata/gfx/led_off.png'>"; 
	tplVolumePanel += "<img id='speaker' onclick='volumeMute()' src='/webdata/gfx/speak_on.png'>";
	
//Signal Template
var tplSignalPanel  = '<table width="100%" id="SignalPanelTable">';
	tplSignalPanel += '<tr><td style="background-color: #DDDDDD;">SNR</td><td width="50" style="background-color: #DDDDDD;"><div id="SNR">N/A</div></td></tr>';
	tplSignalPanel += '<tr><td style="background-color: #DDDDDD;">AGC</td><td width="50" style="background-color: #DDDDDD;"><div id="AGC">N/A</div></td></tr>';
	tplSignalPanel += '<tr><td style="background-color: #DDDDDD;">BER</td><td width="50" style="background-color: #DDDDDD;"><div id="BER">N/A</div></td></tr>';
	tplSignalPanel += '</table>';
	
var tplSignalPanelButton = '<img src="/webdata/gfx/signal.png" title="show SignalInfoPanel" onclick="openSignalDialog();" title="view Signal Info">';

// Message send
var tplMessageSendForm = ""
	tplMessageSendForm += '<table id="MessageSendForm" width="100%" border="0" cellspacing="1" cellpadding="0" border="0">';
	tplMessageSendForm += '<tr><td>Text</td><td><input type="text" id="MessageSendFormText" value=""></td></tr>\n';
	tplMessageSendForm += '<tr><td>Timeout</td><td><input type="text" id="MessageSendFormTimeout" value=""></td></tr>\n';
	tplMessageSendForm += '<tr><td>Typ</td><td><select id="MessageSendFormType">';
	tplMessageSendForm += '<option value="1">Info</option>';
	tplMessageSendForm += '<option value="0">YesNo</option>';
	tplMessageSendForm += '<option value="2">Warning</option>';
	tplMessageSendForm += '<option value="3">Error</option>';
	tplMessageSendForm += '</select></td></tr>\n';
	tplMessageSendForm += '<tr><td colspan="2"><button onclick="sendMessage()">send Message</button></td></tr>\n';
	tplMessageSendForm += "</table></form>\n";

var tplPowerStateSendForm = '';
    tplPowerStateSendForm += '<hr>';
    tplPowerStateSendForm += '<p><center><button onclick="sendPowerState(1)">deepstandby Dreambox</button></center></p>';
    tplPowerStateSendForm += '<p><center><button onclick="sendPowerState(2)">reboot Dreambox</button></center></p>';
    tplPowerStateSendForm += '<hr>';
    tplPowerStateSendForm += '<p><center><button onclick="sendPowerState(3)">restart Enigma2</button></center></p>';
//Something is not working here, so I will do a quickhack
//    tplPowerStateSendForm += '<p><center><button onclick="sendPowerState(4)">standby Enigma2</button></center></p>';
	tplPowerStateSendForm += '<p><center><button onclick="sendRemoteControlRequest(116)">toggle standby Enigma2</button></center></p>';

// Template for the RemoteControl Window
var tplRemoteControlForm = '';
	tplRemoteControlForm += '<map name="remotecontrol">';
	tplRemoteControlForm += '<area shape="circle" coords="129, 54, 10" nohref onclick="sendRemoteControlRequest(116)" alt="Power">';
//	tplRemoteControlForm += '<area shape="circle" coords="72, 95, 15" nohref alt="Dream message">';
//	tplRemoteControlForm += '<area shape="circle" coords="130, 95, 15" nohref alt="TV Screenshot">';
	tplRemoteControlForm += '<area shape="circle" coords="63, 123, 10" nohref onclick="sendRemoteControlRequest(2)" alt="1">';
	tplRemoteControlForm += '<area shape="circle" coords="109, 123, 10" nohref onclick="sendRemoteControlRequest(3)" alt="2">';
	tplRemoteControlForm += '<area shape="circle" coords="153, 123, 10" nohref onclick="sendRemoteControlRequest(4)" alt="3">';
	tplRemoteControlForm += '<area shape="circle" coords="63, 148, 10" nohref onclick="sendRemoteControlRequest(5)" alt="4">';
	tplRemoteControlForm += '<area shape="circle" coords="109, 148, 10" nohref onclick="sendRemoteControlRequest(6)" alt="5">';
	tplRemoteControlForm += '<area shape="circle" coords="153, 148, 10" nohref onclick="sendRemoteControlRequest(7)" alt="6">';
	tplRemoteControlForm += '<area shape="circle" coords="63, 173, 10" nohref onclick="sendRemoteControlRequest(8)" alt="7">';
	tplRemoteControlForm += '<area shape="circle" coords="109, 173, 10" nohref onclick="sendRemoteControlRequest(9)" alt="8">';
	tplRemoteControlForm += '<area shape="circle" coords="153, 173, 10" nohref onclick="sendRemoteControlRequest(10)" alt="9">';
	tplRemoteControlForm += '<area shape="circle" coords="63, 197, 10" nohref onclick="sendRemoteControlRequest(412)" alt="previous">';
	tplRemoteControlForm += '<area shape="circle" coords="109, 197, 10" nohref onclick="sendRemoteControlRequest(11)" alt="0">';
	tplRemoteControlForm += '<area shape="circle" coords="153, 197, 10" nohref onclick="sendRemoteControlRequest(407)" alt="next">';
	tplRemoteControlForm += '<area shape="circle" coords="54, 243, 15" nohref onclick="sendRemoteControlRequest(115)" alt="volume up">';
	tplRemoteControlForm += '<area shape="circle" coords="107, 233, 10" nohref onclick="sendRemoteControlRequest(113)" alt="mute">';
	tplRemoteControlForm += '<area shape="circle" coords="159, 243, 15" nohref onclick="sendRemoteControlRequest(402)" alt="bouquet up">';
	tplRemoteControlForm += '<area shape="circle" coords="66, 274, 15" nohref onclick="sendRemoteControlRequest(114)" alt="volume down">';
	tplRemoteControlForm += '<area shape="circle" coords="107, 258, 10" nohref onclick="sendRemoteControlRequest(174)" alt="lame">';
	tplRemoteControlForm += '<area shape="circle" coords="147, 274, 15" nohref onclick="sendRemoteControlRequest(403)" alt="bouquet down">';
	tplRemoteControlForm += '<area shape="circle" coords="48, 306, 10" nohref onclick="sendRemoteControlRequest(358)" alt="info">';
	tplRemoteControlForm += '<area shape="circle" coords="106, 310, 15" nohref onclick="sendRemoteControlRequest(103)" alt="up">';
	tplRemoteControlForm += '<area shape="circle" coords="167, 306, 10" nohref onclick="sendRemoteControlRequest(139)" alt="menu">';
	tplRemoteControlForm += '<area shape="circle" coords="70, 343, 15" nohref onclick="sendRemoteControlRequest(105)" alt="left">';
    tplRemoteControlForm += '<area shape="circle" coords="108, 340, 15" nohref onclick="sendRemoteControlRequest(352)" alt="OK">';
	tplRemoteControlForm += '<area shape="circle" coords="146, 343, 15" nohref onclick="sendRemoteControlRequest(106)" alt="right">';
	tplRemoteControlForm += '<area shape="circle" coords="53, 381, 10" nohref onclick="sendRemoteControlRequest(392)" alt="audio">';
	tplRemoteControlForm += '<area shape="circle" coords="106, 374, 15" nohref onclick="sendRemoteControlRequest(108)" alt="down">';
	tplRemoteControlForm += '<area shape="circle" coords="162, 381, 10" nohref onclick="sendRemoteControlRequest(393)" alt="video">';
	tplRemoteControlForm += '<area shape="circle" coords="56, 421, 10" nohref onclick="sendRemoteControlRequest(398)" alt="red">';
	tplRemoteControlForm += '<area shape="circle" coords="90, 422, 10" nohref onclick="sendRemoteControlRequest(399)" alt="green">';
	tplRemoteControlForm += '<area shape="circle" coords="123, 422, 10" nohref onclick="sendRemoteControlRequest(400)" alt="yellow">';
	tplRemoteControlForm += '<area shape="circle" coords="158, 421, 10" nohref onclick="sendRemoteControlRequest(401)" alt="blue">';
	tplRemoteControlForm += '<area shape="circle" coords="61, 460, 10" nohref onclick="sendRemoteControlRequest(377)" alt="tv">';
	tplRemoteControlForm += '<area shape="circle" coords="90, 461, 10" nohref onclick="sendRemoteControlRequest(385)" alt="radio">';
	tplRemoteControlForm += '<area shape="circle" coords="123, 461, 10" nohref onclick="sendRemoteControlRequest(388)" alt="text">';
	tplRemoteControlForm += '<area shape="circle" coords="153, 460, 10" nohref onclick="sendRemoteControlRequest(138)" alt="help">';
    tplRemoteControlForm += '</map>';
	tplRemoteControlForm += '<img src="/webdata/gfx/remotecontrol.jpg" height="607" width="220" border="0)" alt="Remote Control" usemap="#remotecontrol">';
	
var tplAddTimerForm = '';
	tplAddTimerForm += '<table border=0 cellpadding=0 cellspacing=10>';
	tplAddTimerForm += '<tr><td colspan="3">Action:</td>';
	tplAddTimerForm += '<td colspan="3">';
	tplAddTimerForm += '<select name="justplay" id="justplay" size="1">';
	tplAddTimerForm += '%(justplay)';
	tplAddTimerForm += '</select></td></tr>';
	tplAddTimerForm += '<tr><td colspan="3">&nbsp;</td>';
	tplAddTimerForm += '<td colspan="3">Note: For recurring events start/end day/month are not required.</td></tr>';
	tplAddTimerForm += '<tr><td colspan="3">Start:</td>';
	tplAddTimerForm += '<td colspan="3"><select name="syear" size="1" id="syear" onchange="javascript:addTimerFormChangeTime(\'syear\');">%(syear)</select>.';
	tplAddTimerForm += '<select name="smonth" id="smonth" size="1" onchange="javascript:addTimerFormChangeTime(\'smonth\');">%(smonth)</select>.';
	tplAddTimerForm += '<select name="sday" id="sday" size="1" onchange="javascript:addTimerFormChangeTime(\'sday\');">%(sday)</select>';
	tplAddTimerForm += '&nbsp;-&nbsp;<select name="shour" id="shour" size="1" onchange="javascript:addTimerFormChangeTime(\'shour\');">%(shour)</select>';
	tplAddTimerForm += ':<select name="smin" id="smin" size="1" onchange="javascript:addTimerFormChangeTime(\'smin\');">%(smin)</select></td></tr>';
	tplAddTimerForm += '<tr><td colspan="3">End:</td>';
	tplAddTimerForm += '<td colspan="3"><select name="eyear" id="eyear" size="1" onchange="javascript:addTimerFormChangeTime(\'eyear\');">%(eyear)</select>.';
	tplAddTimerForm += '<select name="emonth" id="emonth" size="1" onchange="javascript:addTimerFormChangeTime(\'emonth\');">%(emonth)</select>.';
	tplAddTimerForm += '<select name="eday" id="eday" size="1" onchange="javascript:addTimerFormChangeTime(\'eday\');">%(eday)</select>';
	tplAddTimerForm += '&nbsp;-&nbsp;<select name="ehour" id="ehour" size="1" onchange="javascript:addTimerFormChangeTime(\'ehour\');">%(ehour)</select>';
	tplAddTimerForm += ':<select name="emin" id="emin" size="1" onchange="javascript:addTimerFormChangeTime(\'emin\');">%(emin)</select></td></tr>';
	tplAddTimerForm += '<tr><td colspan="3">&nbsp;</td><td colspan="3">Note: For one-time events the "days" field doesn\'t have to be specified.</td></tr>';
	tplAddTimerForm += '<tr><td colspan="3">Days:</td><td colspan="3">%(repeated)';
	tplAddTimerForm += '<tr><td colspan="3">Channel:</td><td>';
	tplAddTimerForm += '<p><input type="radio" id="tvradio" name="tvradio" value="tv" checked onchange="javascript:addTimerFormChangeType();"">TV</p>';
	tplAddTimerForm += '<p><input type="radio" name="tvradio" value="radio" onchange="javascript:addTimerFormChangeType();">Radio</p><td>';
	tplAddTimerForm += '<p>Channel:</p>';
	tplAddTimerForm += '<select name="channel" id="channel" size="1" onchange="timerFormExtendChannellist($(\'channel\').options[$(\'channel\').selectedIndex].value)">%(channel)</select></td></tr>';
	tplAddTimerForm += '<tr><td colspan="3">Name:</td>';
	tplAddTimerForm += '<td colspan="3"><input name="name" id="name" type="text" size="100" maxlength="100" style="color: #000000;" value="%(name)"></td></tr>';
	tplAddTimerForm += '<tr><td colspan="3">Description:</td>';
	tplAddTimerForm += '<td colspan="3"><input name="descr" id="descr" type="text" size="100" maxlength="100" style="color: #000000;" value="%(description)"></td></tr>';
	tplAddTimerForm += '<tr><td colspan="3">After event do:</td>';
	tplAddTimerForm += '<td colspan="3"><select id="after_event" name="after_event" size="1">%(afterEvent)</select></td></tr>';
	tplAddTimerForm += '<tr>&nbsp;&nbsp;</tr>';
	tplAddTimerForm += '<tr><td colspan="3">&nbsp;</td><td colspan="3">';
	tplAddTimerForm += '<input name="deleteOldOnSave" id="deleteOldOnSave" type="hidden" value="%(deleteOldOnSave)">';
	tplAddTimerForm += '<input name="channelOld" id="channelOld" type="hidden" value="%(channelOld)">';
	tplAddTimerForm += '<input name="beginOld" id="beginOld" type="hidden" value="%(beginOld)">';
	tplAddTimerForm += '<input name="endOld" id="endOld" type="hidden" value="%(endOld)">';
	tplAddTimerForm += '<input name="eventID" id="eventID" type="hidden" value="%(eventID)">';
	tplAddTimerForm += 	'<button onclick="sendAddTimer()">Add/Save</button></td></tr></table>';

var tplAddTimerFormOptions = '';
	tplAddTimerFormOptions += '<option value="%(value)" %(selected)>%(txt)</option>';
	
var tplAddTimerFormCheckbox = '';
	tplAddTimerFormCheckbox += '<input type="checkbox" id="%(id)" name="%(name)" value="%(value)" %(checked)>&nbsp;%(txt)&nbsp;&nbsp;';

var tplAbout  = '<table align="center" border="0" width="80%">';
    tplAbout += '<tr><td align="left" width="50%" valign="top">';
    tplAbout += '<table align="center" border="0" width="100%">';
    tplAbout += '<tr><td align="left"></br></td></tr>';
    tplAbout += '<tr><td align="left"><b>Box Info:</b></td></tr>';
    tplAbout += '<tr><td align="left">%(enigmaVersion)</td></tr>';
    tplAbout += '<tr><td align="left">%(fpVersion)</td></tr>';
    tplAbout += '<tr><td align="left"></br></td></tr>';
    tplAbout += '<tr><td align="left">%(tunerInfo)</td></tr>';
    tplAbout += '<tr><td align="left"></br></td></tr>';
    tplAbout += '<tr><td align="left">%(hddInfo)</td></tr>';
    tplAbout += '<tr><td align="left"></br></td></tr>';
    tplAbout += '<tr><td align="left"><b>LAN Info:</b></td></tr>';
    tplAbout += '<tr><td align="left">%(lanDHCP)</td></tr>';
    tplAbout += '<tr><td align="left">%(lanIP)</td></tr>';
    tplAbout += '<tr><td align="left">%(lanMask)</td></tr>';
    tplAbout += '<tr><td align="left">%(lanGW)</td></tr>';
    tplAbout += '<tr><td align="left">%(lanDNS)</td></tr>\n';
    tplAbout += '</table></td>\n';
    tplAbout += '<td align="left" width="50%" valign="top">';
    tplAbout += '<table align="center" border="0" width="100%">';
    tplAbout += '<tr><td align="left"></br></td></tr>\n';
    tplAbout += '<tr><td align="left"><b>Service Info:</b></td></tr>\n';
    tplAbout += '<tr><td align="left">Name: %(serviceName)</td></tr>\n';
    tplAbout += '<tr><td align="left">Provider: %(serviceProvider)</td></tr>\n';
    tplAbout += '<tr><td align="left">Videoformat: %(serviceAspect)</td></tr>\n';
    tplAbout += '<tr><td align="left">Namespace: %(serviceNamespace)</td></tr>\n';
    tplAbout += '<tr><td align="left"></br></td></tr>\n';
    tplAbout += '<tr><td align="left"><b>PIDs:</b></td></tr>\n';
    tplAbout += '<tr><td align="left">VideoPID: %(vPIDh) (%(vPID)d)</td></tr>\n';
    tplAbout += '<tr><td align="left">AudioPID: %(aPIDh) (%(aPID)d)</td></tr>\n';
    tplAbout += '<tr><td align="left">PCRPID: %(pcrIDh) (%(pcrID)d)</td></tr>\n';
    tplAbout += '<tr><td align="left">PMTPID: %(pmtPIDh) (%(pmtPID)d)</td></tr>\n';
    tplAbout += '<tr><td align="left">TXTPID: %(txtPIDh) (%(txtPID)d)</td></tr>\n';
    tplAbout += '<tr><td align="left">TSID: %(tsIDh) (%(tsID)d)</td></tr>\n';
    tplAbout += '<tr><td align="left">ONID: %(onIDh) (%(onID)d)</td></tr>\n';
    tplAbout += '<tr><td align="left">SID: %(sidh) (%(sid)d)</td></tr>\n';
    tplAbout += '</table>';

var tplExtraHiddenFunctions  = '<table width="100%" id="SignalPanelTable">';
	tplExtraHiddenFunctions += '<tr><td style="background-color: #DDDDDD;"><div onlick="new Ajax.Request( "/web/restarttwisted", { method: "get" })">Restart Twisted</div></td></tr>';
	tplExtraHiddenFunctions += '<tr><td style="background-color: #DDDDDD;"><div onlick="clearInterval(UpdateStreamReaderPollTimer);">Stop Time/Signal/Current-Channel -Updates</div></td></tr>';
	tplExtraHiddenFunctions += '<tr><td style="background-color: #DDDDDD;"><div onlick="restartUpdateStream();">Restart Time/Signal/Current-Channel -Updates</div></td></tr>';
	tplExtraHiddenFunctions += '</table>';