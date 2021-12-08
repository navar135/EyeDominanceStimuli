/****************** 
 * Eyedomexp Test *
 ******************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'eyeDomExp';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': ['practice', '1', '2', '3'], 'which eye is blue': ['right', 'left'], 'eye tested': ['right', 'left'], 'previous contrast': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(contWarningRoutineBegin());
flowScheduler.add(contWarningRoutineEachFrame());
flowScheduler.add(contWarningRoutineEnd());
flowScheduler.add(findScreenResolRoutineBegin());
flowScheduler.add(findScreenResolRoutineEachFrame());
flowScheduler.add(findScreenResolRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/bankImage.png', 'path': 'images/bankImage.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var contWarningClock;
var warningESC;
var findScreenResolClock;
var thisExp;
var win;
var event;
var shuffle;
var random;
var sort;
var randint;
var range;
var sum;
var tan;
var x_pix;
var pxPerCm;
var pxChange;
var instructTop;
var instructBottom;
var cardImage;
var line_R_vert;
var line_L_vert;
var line_T_horiz;
var line_B_horiz;
var nextPoly;
var nextButton;
var nextMouse;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "contWarning"
  contWarningClock = new util.Clock();
  warningESC = new visual.TextStim({
    win: psychoJS.window,
    name: 'warningESC',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "findScreenResol"
  findScreenResolClock = new util.Clock();
  //make python online friendly
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  shuffle = util.shuffle;
  Array.prototype.append = [].push;
  random=Math.random;
  sort = function(array) {
      return array.sort((a, b) => (a - b));
  }
  randint = function(min, maxplusone) {
    return Math.floor(Math.random() * (maxplusone - min) ) + min;
  }
  range = function (size, startAt = 0) {
      return [...Array(size).keys()].map(i => i + startAt);
  }
  Array.prototype.index = [].indexOf;
  sum = (arr) => arr.reduce((a,b)=>a+b)
  tan = Math.tan;
  
  
  x_pix = 400;
  pxPerCm = (x_pix / 8.56);
  pxChange = 1;
  
  instructTop = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructTop',
    text: "Please use a credit card or any card of the same size (drivers license, grocery store membership card, etc.)\n \nHold it onto the screen, and adjust the image on screen to match the size of your card.\n\n(If you don't have access to a real card, you can use a ruler to measure image width to 3.37inch or 85.6mm, or make your best guess!)\n",
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.7], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  instructBottom = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructBottom',
    text: 'UP arrow = Bigger\nDOWN arrow = Smaller\n\nClick “Next” when done',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.6)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  cardImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cardImage', units : 'pix', 
    image : 'images/bankImage.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  line_R_vert = new visual.Rect ({
    win: psychoJS.window, name: 'line_R_vert', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  line_L_vert = new visual.Rect ({
    win: psychoJS.window, name: 'line_L_vert', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  line_T_horiz = new visual.Rect ({
    win: psychoJS.window, name: 'line_T_horiz', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  line_B_horiz = new visual.Rect ({
    win: psychoJS.window, name: 'line_B_horiz', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  nextPoly = new visual.Rect ({
    win: psychoJS.window, name: 'nextPoly', units : 'norm', 
    width: [0.12, 0.06][0], height: [0.12, 0.06][1],
    ori: 0, pos: [0.8, (- 0.8)],
    lineWidth: 2, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 0, 0]),
    opacity: 1, depth: -9, interpolate: true,
  });
  
  nextButton = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButton',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0.8, (- 0.8)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  nextMouse = new core.Mouse({
    win: psychoJS.window,
  });
  nextMouse.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var txtVar;
var contWarningComponents;
function contWarningRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'contWarning'-------
    t = 0;
    contWarningClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (((expInfo["previous contrast"] === "") && (expInfo["session"] !== "practice"))) {
        txtVar = "You did not input the correct contrast value.  Please restart the session and input the value you wrote down from the practice session to the last entry of the dialog box";
        continueRoutine = true;
    } else {
        continueRoutine = false;
        txtVar = "";
    }
    
    warningESC.setText(txtVar);
    // keep track of which components have finished
    contWarningComponents = [];
    contWarningComponents.push(warningESC);
    
    for (const thisComponent of contWarningComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function contWarningRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'contWarning'-------
    // get current time
    t = contWarningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *warningESC* updates
    if (t >= 0.0 && warningESC.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warningESC.tStart = t;  // (not accounting for frame time here)
      warningESC.frameNStart = frameN;  // exact frame index
      
      warningESC.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of contWarningComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function contWarningRoutineEnd() {
  return async function () {
    //------Ending Routine 'contWarning'-------
    for (const thisComponent of contWarningComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "contWarning" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var findScreenResolComponents;
function findScreenResolRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'findScreenResol'-------
    t = 0;
    findScreenResolClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    nextButton.setText('Next');
    // setup some python lists for storing info about the nextMouse
    nextMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    findScreenResolComponents = [];
    findScreenResolComponents.push(instructTop);
    findScreenResolComponents.push(instructBottom);
    findScreenResolComponents.push(cardImage);
    findScreenResolComponents.push(line_R_vert);
    findScreenResolComponents.push(line_L_vert);
    findScreenResolComponents.push(line_T_horiz);
    findScreenResolComponents.push(line_B_horiz);
    findScreenResolComponents.push(nextPoly);
    findScreenResolComponents.push(nextButton);
    findScreenResolComponents.push(nextMouse);
    
    for (const thisComponent of findScreenResolComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
var prevButtonState;
var _mouseButtons;
function findScreenResolRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'findScreenResol'-------
    // get current time
    t = findScreenResolClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys();
    if (keys.length) {
        if (_pj.in_es6("up", keys)) {
            x_pix = (x_pix + pxChange);
        } else {
            if (_pj.in_es6("down", keys)) {
                x_pix = (x_pix - pxChange);
            }
        }
        pxPerCm = (x_pix / 8.56);
    }
    
    
    // *instructTop* updates
    if (t >= 0.0 && instructTop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructTop.tStart = t;  // (not accounting for frame time here)
      instructTop.frameNStart = frameN;  // exact frame index
      
      instructTop.setAutoDraw(true);
    }

    
    // *instructBottom* updates
    if (t >= 0.0 && instructBottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructBottom.tStart = t;  // (not accounting for frame time here)
      instructBottom.frameNStart = frameN;  // exact frame index
      
      instructBottom.setAutoDraw(true);
    }

    
    // *cardImage* updates
    if (t >= 0.0 && cardImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cardImage.tStart = t;  // (not accounting for frame time here)
      cardImage.frameNStart = frameN;  // exact frame index
      
      cardImage.setAutoDraw(true);
    }

    
    if (cardImage.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cardImage.setSize([x_pix, (x_pix * 0.6265625)], false);
    }
    
    // *line_R_vert* updates
    if (t >= 0.0 && line_R_vert.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line_R_vert.tStart = t;  // (not accounting for frame time here)
      line_R_vert.frameNStart = frameN;  // exact frame index
      
      line_R_vert.setAutoDraw(true);
    }

    
    if (line_R_vert.status === PsychoJS.Status.STARTED){ // only update if being drawn
      line_R_vert.setPos([(x_pix / 2), 0], false);
      line_R_vert.setSize([1, ((x_pix * 0.6304906542) + 80)], false);
    }
    
    // *line_L_vert* updates
    if (t >= 0.0 && line_L_vert.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line_L_vert.tStart = t;  // (not accounting for frame time here)
      line_L_vert.frameNStart = frameN;  // exact frame index
      
      line_L_vert.setAutoDraw(true);
    }

    
    if (line_L_vert.status === PsychoJS.Status.STARTED){ // only update if being drawn
      line_L_vert.setPos([((- x_pix) / 2), 0], false);
      line_L_vert.setSize([1, ((x_pix * 0.6304906542) + 80)], false);
    }
    
    // *line_T_horiz* updates
    if (t >= 0.0 && line_T_horiz.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line_T_horiz.tStart = t;  // (not accounting for frame time here)
      line_T_horiz.frameNStart = frameN;  // exact frame index
      
      line_T_horiz.setAutoDraw(true);
    }

    
    if (line_T_horiz.status === PsychoJS.Status.STARTED){ // only update if being drawn
      line_T_horiz.setPos([0, ((x_pix * 0.6304906542) / 2)], false);
      line_T_horiz.setSize([(x_pix + 80), 1], false);
    }
    
    // *line_B_horiz* updates
    if (t >= 0.0 && line_B_horiz.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line_B_horiz.tStart = t;  // (not accounting for frame time here)
      line_B_horiz.frameNStart = frameN;  // exact frame index
      
      line_B_horiz.setAutoDraw(true);
    }

    
    if (line_B_horiz.status === PsychoJS.Status.STARTED){ // only update if being drawn
      line_B_horiz.setPos([0, ((- (x_pix * 0.6304906542)) / 2)], false);
      line_B_horiz.setSize([(x_pix + 80), 1], false);
    }
    
    // *nextPoly* updates
    if (t >= 0.0 && nextPoly.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextPoly.tStart = t;  // (not accounting for frame time here)
      nextPoly.frameNStart = frameN;  // exact frame index
      
      nextPoly.setAutoDraw(true);
    }

    
    // *nextButton* updates
    if (t >= 0.0 && nextButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton.tStart = t;  // (not accounting for frame time here)
      nextButton.frameNStart = frameN;  // exact frame index
      
      nextButton.setAutoDraw(true);
    }

    // *nextMouse* updates
    if (t >= 0.0 && nextMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextMouse.tStart = t;  // (not accounting for frame time here)
      nextMouse.frameNStart = frameN;  // exact frame index
      
      nextMouse.status = PsychoJS.Status.STARTED;
      nextMouse.mouseClock.reset();
      prevButtonState = nextMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (nextMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = nextMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton]) {
            if (obj.contains(nextMouse)) {
              gotValidClick = true;
              nextMouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of findScreenResolComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function findScreenResolRoutineEnd() {
  return async function () {
    //------Ending Routine 'findScreenResol'-------
    for (const thisComponent of findScreenResolComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    thisExp.addData("px per cm", pxPerCm);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "findScreenResol" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
