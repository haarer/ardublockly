/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the StepperDriver library blocks.
 *     https://github.com/laurb9/StepperDriver
 */
'use strict';

goog.provide('Blockly.Arduino.StepperDriver');

goog.require('Blockly.Arduino');


/**
 * Code generator for the stepper generator configuration. Nothing is added
 * to the 'loop()' function. Sets the pins (X and Y), steps per revolution (Z),
 * speed(A) and instance name (B).
 * Arduino code: #include <Stepper.h>
 *               Stepper B(Z, X, Y);
 *               setup() { B.setSpeed(A); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['stepperdriver_config'] = function(block) {

  var stepperInstanceName =  block.getFieldValue('StepperDriver_name');

  var stepperSteps = Blockly.Arduino.valueToCode(
    block, 'StepperDriver_NO_OF_STEPS', Blockly.Arduino.ORDER_ATOMIC) || '200';

  var stepperSpeed = Blockly.Arduino.valueToCode(
    block, 'StepperDriver_SPEED', Blockly.Arduino.ORDER_ATOMIC) || '120';
    
  var dirPin = block.getFieldValue('StepperDriver_DIR_PIN');
    
  var stepPin = block.getFieldValue('StepperDriver_STEP_PIN');
    
  var enabPin = block.getFieldValue('StepperDriver_ENABLE_PIN');

  var stepperStepMode =  block.getFieldValue('StepperDriver_StepMode');

  var globalCode = 'BasicStepperDriver ' + stepperInstanceName + '(' + stepperSteps + ',' + dirPin + ',' + stepPin + ',' + enabPin +');';
  
  
  Blockly.Arduino.addInclude('stepperdriver', '#include <BasicStepperDriver.h>');
  Blockly.Arduino.addDeclaration(stepperInstanceName, globalCode);

  var setupCode = stepperInstanceName + '.begin(' + stepperSpeed + ',' + stepperStepMode + ');\n';
  setupCode += stepperInstanceName + '.setEnableActiveState(LOW);';
  Blockly.Arduino.addSetup(stepperInstanceName, setupCode, true);

  return '';
};


Blockly.Arduino['stepperdriver_variable'] = function(block) {
  var code = block.getFieldValue("StepperDriver_name");
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


/**
 * Code generator for moving the stepper instance (X) a number of steps (Y).
 * Library info in the setHelpUrl link.
 * This block requires the stepper_config block to be present.
 * Arduino code: loop { X.steps(Y) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['stepperdriver_rotate'] = function(block) {
    
  var stepperInstanceName = Blockly.Arduino.valueToCode(
      block, 'StepperDriver_name', Blockly.Arduino.ORDER_ATOMIC) || Blockly.Msg.ARD_StepperDriver_DEFAULT_NAME;
      
  var stepperAngle = Blockly.Arduino.valueToCode(block, 'StepperDriver_angle',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = stepperInstanceName + '.rotate(' + stepperAngle + ');\n';
  return code;
};

/**
 * Code generator for powering on  stepper instance (X)
 * This block requires the stepper_config block to be present.
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['stepperdriver_enable'] = function(block) {
  var stepperInstanceName = Blockly.Arduino.valueToCode(
      block, 'StepperDriver_name', Blockly.Arduino.ORDER_ATOMIC) || Blockly.Msg.ARD_StepperDriver_DEFAULT_NAME;
  var code = stepperInstanceName + '.enable();\n';
  return code;
};

/**
 * Code generator for powering off  stepper instance (X)
 * This block requires the stepper_config block to be present.
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['stepperdriver_disable'] = function(block) {
  var stepperInstanceName = Blockly.Arduino.valueToCode(
      block, 'StepperDriver_name', Blockly.Arduino.ORDER_ATOMIC) || Blockly.Msg.ARD_StepperDriver_DEFAULT_NAME;
  var code = stepperInstanceName + '.disable();\n';
  return code;
};
