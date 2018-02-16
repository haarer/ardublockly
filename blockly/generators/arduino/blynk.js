'use strict';

goog.provide('Blockly.Arduino.Blynk');

goog.require('Blockly.Arduino');

Blockly.Arduino['blynk_setup'] = function(block) {
  var el = document.getElementById('board');
  var ssid = block.getFieldValue('ssid');
  var pwd = block.getFieldValue('pwd');
  var auth = block.getFieldValue('auth');
  if(el.options[el.selectedIndex].value =='SparkFun\ ESP32\ Thing')
  {
    Blockly.Arduino.addInclude('wifi', '#include <WiFi.h>');
    Blockly.Arduino.addInclude('wificlient', '#include <WiFiClient.h>');
    Blockly.Arduino.addInclude('blynk', '#include <BlynkSimpleEsp32.h>');
  }
  else if(el.options[el.selectedIndex].value =='ESP8266\ Huzzah' || el.options[el.selectedIndex].value =='ESP8266\ WeMos\ D1')
  {
    Blockly.Arduino.addInclude('wifi', '#include <ESP8266WiFi.h>');
    Blockly.Arduino.addInclude('wificlient', '#include <BlynkSimpleEsp8266.h>');
  }
  Blockly.Arduino.addDeclaration('blynk_auth', 'char auth[] = "' + auth + '";');
  Blockly.Arduino.addDeclaration('blynk_ssid', 'char ssid[] = "' + ssid + '";');
  Blockly.Arduino.addDeclaration('blynk_pwd', 'char pass[] = "' + pwd + '";');
  Blockly.Arduino.addSetup('blynk_setup', 'Blynk.begin(auth, ssid, pass);', true);

  var code = 'Blynk.run();\n';
  return code;
}

Blockly.Arduino['blynk_ledwidget'] = function(block) {
  var ledName = Blockly.Arduino.valueToCode(
      block, 'blynk_led', Blockly.Arduino.ORDER_ATOMIC) || Blockly.Msg.ARD_BLYNK_LED_DEFAULT_NAME;
  // var ledName = block.getFieldValue('blynk_led');
  var vpinNo = Blockly.Arduino.valueToCode(block, 'BLYNK_VPIN',
      Blockly.Arduino.ORDER_ATOMIC) || 'V0';
  // var vpinNo = '5';
  Blockly.Arduino.addDeclaration('blynk_led','WidgetLED ' + ledName + '('+ vpinNo + ');');
  return '';
}

Blockly.Arduino['blynk_vpin'] = function(block) {
  var code = block.getFieldValue('bVpin');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino['blynk_set_led'] = function(block) {
  var state = Blockly.Arduino.valueToCode(
      block, 'state', Blockly.Arduino.ORDER_ATOMIC) || 'LOW'; 
  var ledName = Blockly.Arduino.valueToCode(
      block, 'blynk_led', Blockly.Arduino.ORDER_ATOMIC) || Blockly.Msg.ARD_BLYNK_LED_DEFAULT_NAME;
  if(state == 'HIGH' || state == 'true')
  {
    var code = ledName+'.on();\n';
  }
  else
  {
    var code = ledName+'.off();\n';
  }
  return code;
}

Blockly.Arduino['blynk_write'] = function(block) {
  var branch = Blockly.Arduino.statementToCode(block, 'blynk_write');
  var vpinNo = block.getFieldValue('bVpin');
  var code = 'BLYNK_WRITE('+vpinNo+'){\n'+branch+'\n}';
  Blockly.Arduino.addDeclaration('blynk_writeFunc',code);
  return '';
}

Blockly.Arduino['blynk_readparam'] = function(block) {
  var paramType = block.getFieldValue('blynk_paramType');
  var code = 'param.' + paramType + '()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}