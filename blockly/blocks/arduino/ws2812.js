/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Edwin Robotics Medusa RGB LED block.
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */

'use strict';

goog.provide('Blockly.Blocks.WS2812');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.WS2812.HUE = 180;

Blockly.Blocks['WS2812_config'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_WS2812_CONFIG)
        .appendField(new Blockly.FieldInstance('WS2812',
            Blockly.Msg.ARD_WS2812_DEFAULT_NAME,true,true,false), "ws2812_name");
    this.appendValueInput("WS2812_PIN")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_WS2812_PIN);
    this.appendValueInput("WS2812_NO_OF_LEDS")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_WS2812_LEDs);
    this.setColour(Blockly.Blocks.WS2812.HUE);
    this.setTooltip(Blockly.Msg.ARD_WS2812_CONFIG_TIP);
    this.setHelpUrl('https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use');
  }
};

Blockly.Blocks['WS2812_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldInstance('WS2812',
            Blockly.Msg.ARD_WS2812_DEFAULT_NAME,false,true,false), "ws2812_name");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.WS2812.HUE);
    this.setTooltip(Blockly.Msg.ARD_WS2812_TIP);
    this.setHelpUrl('https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use');
  }
};

    
Blockly.Blocks['WS2812_Color'] = {
  init: function() {
    this.appendValueInput("ws2812_name")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_WS2812_SET_RGB_LED);
    this.appendValueInput("WS2812_LED_NO")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARD_WS2812_LED_NO);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_WS2812_TO_COLOR)
        .appendField(new Blockly.FieldColour("#44a503"), "WS2812_Color");
    this.appendDummyInput()
        .appendField(" ")
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'SHOW')
        .appendField(Blockly.Msg.ARD_WS2812_SHOW);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.WS2812.HUE);
    this.setTooltip(Blockly.Msg.ARD_WS2812_COLOR_TIP);
    this.setHelpUrl('https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use');
  }
};

Blockly.Blocks['WS2812_FlexColor'] = {
  init: function() {
    this.appendValueInput("ws2812_name")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_WS2812_SET_RGB_LED);
    this.appendValueInput("WS2812_LED_NO")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARD_WS2812_LED_NO);
    this.appendValueInput("WS2812_red_value")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARD_WS2812_RED_VALUE);
    this.appendValueInput("WS2812_green_value")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARD_WS2812_GREEN_VALUE);
    this.appendValueInput("WS2812_blue_value")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARD_WS2812_BLUE_VALUE);        
    this.appendDummyInput()
        .appendField(" ")
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'SHOW')
        .appendField(Blockly.Msg.ARD_WS2812_SHOW);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.WS2812.HUE);
    this.setTooltip(Blockly.Msg.ARD_WS2812_COLOR_TIP);
    this.setHelpUrl('https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use');
  }
};

Blockly.Blocks['WS2812_Show'] = {
  init: function() {
    this.appendValueInput("ws2812_name")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_WS2812_SHOW);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.WS2812.HUE);
    this.setTooltip(Blockly.Msg.ARD_WS2812_SHOW_TIP);
    this.setHelpUrl('https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use');
  }
};