/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for grbl like stepper motor drivers DRV8825, A4988.
 *     they have a step pin, a dir pin and an enable pin
 *         https://github.com/laurb9/StepperDriver
 */

'use strict';

goog.provide('Blockly.Blocks.StepperDriver');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.StepperDriver.HUE = 120;

Blockly.Blocks['stepperdriver_config'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_StepperDriver_CONFIG)
        .appendField(new Blockly.FieldInstance('StepperDriver',
            Blockly.Msg.ARD_StepperDriver_DEFAULT_NAME,true,true,false), "StepperDriver_name");            
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_StepperDriver_DIR_PIN)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'StepperDriver_DIR_PIN');
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_StepperDriver_STEP_PIN)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'StepperDriver_STEP_PIN');
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_StepperDriver_ENABLE_PIN)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'StepperDriver_ENABLE_PIN');
    this.appendValueInput("StepperDriver_NO_OF_STEPS")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_StepperDriver_NO_OF_STEPS);
    this.appendValueInput("StepperDriver_SPEED")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_StepperDriver_SPEED);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_StepperDriver_STEPMODE)
        .appendField(
            new Blockly.FieldDropdown(
                [[Blockly.Msg.ARD_StepperDriver_STEPFULL, 1],
                 [Blockly.Msg.ARD_StepperDriver_STEPHALF, 2],
                 [Blockly.Msg.ARD_StepperDriver_STEP4, 4],
                 [Blockly.Msg.ARD_StepperDriver_STEP8, 8],
                 [Blockly.Msg.ARD_StepperDriver_STEP16, 16],
                 [Blockly.Msg.ARD_StepperDriver_STEP32, 32]]),
            'StepperDriver_StepMode')
    this.setTooltip(Blockly.Msg.ARD_StepperDriver_STEPMODE_TIP);
    this.setColour(Blockly.Blocks.StepperDriver.HUE);
    this.setTooltip(Blockly.Msg.ARD_StepperDriver_CONFIG_TIP);
    this.setHelpUrl('http://tbd.org');
  }
};

Blockly.Blocks['stepperdriver_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldInstance('StepperDriver',
            Blockly.Msg.ARD_StepperDriver_DEFAULT_NAME,false,true,false), "StepperDriver_name");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.StepperDriver.HUE);
    this.setTooltip(Blockly.Msg.ARD_StepperDriver_TIP);
    this.setHelpUrl('http://tbd.org');
  }
};

    
Blockly.Blocks['stepperdriver_rotate'] = {
  init: function() {
    this.appendValueInput("StepperDriver_name")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_StepperDriver_ROTATE);
    this.appendValueInput("StepperDriver_angle")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARD_StepperDriver_DEG);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.StepperDriver.HUE);
    this.setTooltip(Blockly.Msg.ARD_StepperDriver_ROTATE_TIP);
    this.setHelpUrl('http://tbd.org');
  }
};

Blockly.Blocks['stepperdriver_enable'] = {
  init: function() {
    this.appendValueInput("StepperDriver_name")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_StepperDriver_ENABLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.StepperDriver.HUE);
    this.setTooltip(Blockly.Msg.ARD_StepperDriver_ENABLE_TIP);
    this.setHelpUrl('http://tbd.org');
  }
};

Blockly.Blocks['stepperdriver_disable'] = {
  init: function() {
    this.appendValueInput("StepperDriver_name")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_StepperDriver_DISABLE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.StepperDriver.HUE);
    this.setTooltip(Blockly.Msg.ARD_StepperDriver_DISABLE_TIP);
    this.setHelpUrl('http://tbd.org');
  }
};
