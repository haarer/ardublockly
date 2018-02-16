'use strict';

goog.provide('Blockly.Blocks.Blynk');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.Blynk.HUE = 230;

function vPins() {
  var arr = [];
  for(var i = 0;i<128; i++) {
    var value = 'V'+i;
    arr.push([value,value]);
  }
  return arr;
}

Blockly.Blocks['blynk_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_BLYNK_CONNECT)
        .appendField(new Blockly.FieldTextInput(""), "ssid")
        .appendField(Blockly.Msg.ARD_BLYNK_PWD)
        .appendField(new Blockly.FieldTextInput(""), "pwd");
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_BLYNK_AUTH_CODE)
        .appendField(new Blockly.FieldTextInput(""), "auth");
    this.setColour(Blockly.Blocks.Blynk.HUE);
 this.setTooltip("");
 this.setHelpUrl("http://docs.blynk.cc");
  }
};

Blockly.Blocks['blynk_ledwidget'] = {
  init: function() {
    this.appendValueInput("BLYNK_VPIN")
        .setCheck(null)
        .appendField(Blockly.Msg.ARD_BLYNK_SET_LED_WIDGET)
        .appendField(new Blockly.FieldInstance('b_led',Blockly.Msg.ARD_BLYNK_LED_DEFAULT_NAME,true,true,false), "blynk_led")
        .appendField(Blockly.Msg.ARD_BLYNK_ON);
    this.setColour(Blockly.Blocks.Blynk.HUE);
 this.setTooltip("");
 this.setHelpUrl("http://docs.blynk.cc");
  }
};

Blockly.Blocks['blynk_vpin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(vPins()), "bVpin");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.Blynk.HUE);
 this.setTooltip("");
 this.setHelpUrl("http://docs.blynk.cc");
  }
};

Blockly.Blocks['blynk_set_led'] = {
  init: function() {
    this.appendValueInput("state")
        .setCheck(null)
        .appendField(Blockly.Msg.ARD_BLYNK_SET_LED)
        .appendField(new Blockly.FieldInstance('b_led',Blockly.Msg.ARD_BLYNK_LED_DEFAULT_NAME,false,true,false), "blynk_led")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.Blynk.HUE);
 this.setTooltip("");
 this.setHelpUrl("http://docs.blynk.cc");
  }
};

Blockly.Blocks['blynk_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_BLYNK_BLYNK_WRITE)
        .appendField(new Blockly.FieldDropdown(vPins()), "bVpin");
    this.appendStatementInput("blynk_write")
        .setCheck(null);
    this.setColour(Blockly.Blocks.Blynk.HUE);
 this.setTooltip("");
 this.setHelpUrl("http://docs.blynk.cc");
  }
};

Blockly.Blocks['blynk_readparam'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_BLYNK_READ_PARAMETER)
        .appendField(new Blockly.FieldDropdown([["number","asInt"], ["decimal","asFloat"], ["long decimal","asDouble"], ["text","asStr"]]), "blynk_paramType");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.Blynk.HUE);
 this.setTooltip("");
 this.setHelpUrl("http://docs.blynk.cc");
  }
};