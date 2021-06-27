wait 1
Systemutil.Run "chrome","https://plm-mock3.unilever.com/sap/bc/ui2/flp/FioriLaunchpad.html?saml2=disabled" @@ hightlight id_;_67246_;_script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("name:=Logon").Page("title:=Logon").WebEdit("html tag:=INPUT","name:=sap-user").Set "FORM_DEO_NT" @@ script infofile_;_ZIP::ssf2.xml_;_
wait 1



