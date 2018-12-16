'use strict';

goog.provide('Blockly.Arduino.WS2812');

goog.require('Blockly.Arduino');

Blockly.Arduino['WS2812_config'] = function(block) {

  var pinType = Blockly.Arduino.PinTypes.WS2812;

  var WS2812Name = block.getFieldValue("ws2812_name");

  var WS2812Pin = Blockly.Arduino.valueToCode(block, 'WS2812_PIN',
      Blockly.Arduino.ORDER_ATOMIC) || '25';
  var WS2812LEDs = Blockly.Arduino.valueToCode(block, 'WS2812_NO_OF_LEDS',
      Blockly.Arduino.ORDER_ATOMIC) || '10';

  Blockly.Arduino.addInclude('ws2812', '#include <Adafruit_NeoPixel.h>');
  Blockly.Arduino.addInclude('AVR', '#ifdef __AVR__ \n  #include <avr/power.h>\n#endif');

  var globalCode = 'Adafruit_NeoPixel ' + WS2812Name + ' = Adafruit_NeoPixel(' + WS2812LEDs +','+ WS2812Pin +', NEO_GRB + NEO_KHZ800);';
  Blockly.Arduino.addDeclaration(WS2812Name, globalCode);

  var setupCode = WS2812Name + '.begin();\n  '+WS2812Name+'.show();';
  Blockly.Arduino.addSetup(WS2812Name, setupCode, true);

  return '';
};

Blockly.Arduino['WS2812_variable'] = function(block) {
  var code = block.getFieldValue("ws2812_name");
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['WS2812_Color'] = function(block) {

  var pinType = Blockly.Arduino.PinTypes.WS2812;
  var WS2812Name = Blockly.Arduino.valueToCode(
      block, 'ws2812_name', Blockly.Arduino.ORDER_ATOMIC) || Blockly.Msg.ARD_WS2812_DEFAULT_NAME;

  var WS2812LEDNo = Blockly.Arduino.valueToCode(block, 'WS2812_LED_NO',
      Blockly.Arduino.ORDER_ATOMIC) || '0';

  var checkbox_name = (block.getFieldValue('SHOW') == 'TRUE');

  var WS2812Color = block.getFieldValue("WS2812_Color");

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(WS2812Color);
  var r =  parseInt(result[1], 16);
  var g =  parseInt(result[2], 16);
  var b =  parseInt(result[3], 16);

  if (checkbox_name) {
    var code = WS2812Name + '.setPixelColor('+ WS2812LEDNo +','+ WS2812Name +'.Color('+r.toString()+','+g.toString()+ ','+b.toString()+'));\n'+WS2812Name+'.show();\n';
  } else {
    var code = WS2812Name + '.setPixelColor('+ WS2812LEDNo +','+ WS2812Name +'.Color('+r.toString()+','+g.toString()+ ','+b.toString()+'));\n';
  }
  return code;
};