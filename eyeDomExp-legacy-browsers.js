/****************** 
 * Eyedomexp Test *
 ******************/


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
  units: 'pix',
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
const screenEdgeLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(screenEdgeLoopLoopBegin(screenEdgeLoopLoopScheduler));
flowScheduler.add(screenEdgeLoopLoopScheduler);
flowScheduler.add(screenEdgeLoopLoopEnd);
const outerLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(outerLoopLoopBegin(outerLoopLoopScheduler));
flowScheduler.add(outerLoopLoopScheduler);
flowScheduler.add(outerLoopLoopEnd);
flowScheduler.add(goodJob_prepForExpRoutineBegin());
flowScheduler.add(goodJob_prepForExpRoutineEachFrame());
flowScheduler.add(goodJob_prepForExpRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/bankImage.png', 'path': 'images/bankImage.png'},
    {'name': 'images/instruct1.png', 'path': 'images/instruct1.png'}
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
var findScreenEdgeClock;
var instruct;
var slider;
var screenEdgePx;
var skip_checkEdge;
var targetTri;
var nextPoly1;
var nextButton1;
var nextMouse1;
var startBlindSpotClock;
var num_repeat;
var dot2square_dist;
var square2center_dist;
var desiredVisAngl;
var loopN;
var instruct1;
var startKey;
var squareStart;
var dotStart;
var tinyDotStart;
var dumiTrialCount;
var dumiRestrtPoly;
var dumiRestrtButt;
var findBlindSpotClock;
var dot_dist_list;
var dist2screen;
var square;
var dot;
var tinyDot;
var endRound;
var trialCounter;
var restartPoly;
var restartText;
var restartMouse;
var checkForRestartClock;
var skipTrials;
var clickedRestart;
var warningClock;
var instructOops;
var tryAgainPoly1;
var tryAgainButton1;
var tryAgainMouse1;
var goodJob_prepForExpClock;
var instruct2;
var keyToMoveOn;
var contrastRange;
var contR;
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
  // Initialize components for Routine "findScreenEdge"
  findScreenEdgeClock = new util.Clock();
  instruct = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct',
    text: 'Click and slide the red circle so that it lines up with the blue line. \n\nOnce they are aligned click “Next”.\n\n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.7], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    size: [10000.0, 20], pos: [(- 5000), 0], units: 'pix',
    labels: undefined, ticks: [(- 1), 0.5, 0],
    granularity: 0.0, style: ["SLIDER", "LABELS_45", "TRIANGLE_MARKER"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  screenEdgePx = 0.0;
  skip_checkEdge = false;
  
  targetTri = new visual.ShapeStim ({
    win: psychoJS.window, name: 'targetTri', units : 'norm', 
    vertices: [[-[0.09, 0.15][0]/2.0, -[0.09, 0.15][1]/2.0], [+[0.09, 0.15][0]/2.0, -[0.09, 0.15][1]/2.0], [0, [0.09, 0.15][1]/2.0]],
    ori: 0, pos: [(- 0.95), 0],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), 1]),
    fillColor: new util.Color([(- 1), (- 1), 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  nextPoly1 = new visual.Rect ({
    win: psychoJS.window, name: 'nextPoly1', units : 'norm', 
    width: [0.12, 0.06][0], height: [0.12, 0.06][1],
    ori: 0, pos: [0.8, (- 0.8)],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 0, 0]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  nextButton1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButton1',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0.8, (- 0.8)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  nextMouse1 = new core.Mouse({
    win: psychoJS.window,
  });
  nextMouse1.mouseClock = new util.Clock();
  // Initialize components for Routine "startBlindSpot"
  startBlindSpotClock = new util.Clock();
  num_repeat = 3;
  dot2square_dist = 6;
  square2center_dist = 9;
  desiredVisAngl = 0.029147;
  
  loopN = 0;
  
  instruct1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruct1', units : 'pix', 
    image : 'images/instruct1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  startKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  squareStart = new visual.Rect ({
    win: psychoJS.window, name: 'squareStart', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  dotStart = new visual.Polygon ({
    win: psychoJS.window, name: 'dotStart', units : 'pix', 
    edges: 20, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 0, 0]),
    fillColor: new util.Color([1, 0, 0]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  tinyDotStart = new visual.Polygon ({
    win: psychoJS.window, name: 'tinyDotStart', units : 'pix', 
    edges: 10, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  dumiTrialCount = new visual.TextStim({
    win: psychoJS.window,
    name: 'dumiTrialCount',
    text: `0 out of ${num_repeat}`,
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.8)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('blue'),  opacity: 1,
    depth: -7.0 
  });
  
  dumiRestrtPoly = new visual.Rect ({
    win: psychoJS.window, name: 'dumiRestrtPoly', units : 'norm', 
    width: [0.4, 0.14][0], height: [0.4, 0.14][1],
    ori: 0, pos: [0.7, (- 0.8)],
    lineWidth: 2, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 0.3), (- 0.3), (- 0.3)]),
    opacity: 1, depth: -8, interpolate: true,
  });
  
  dumiRestrtButt = new visual.TextStim({
    win: psychoJS.window,
    name: 'dumiRestrtButt',
    text: 'click here to start over\n(if you made a mistake)',
    font: 'Arial',
    units: 'norm', 
    pos: [0.7, (- 0.8)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -9.0 
  });
  
  // Initialize components for Routine "findBlindSpot"
  findBlindSpotClock = new util.Clock();
  dot_dist_list = [];
  dist2screen = 0;
  
  square = new visual.Rect ({
    win: psychoJS.window, name: 'square', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([0, 0, 0]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  dot = new visual.Polygon ({
    win: psychoJS.window, name: 'dot', units : 'pix', 
    edges: 20, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 0, 0]),
    fillColor: new util.Color([1, 0, 0]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  tinyDot = new visual.Polygon ({
    win: psychoJS.window, name: 'tinyDot', units : 'pix', 
    edges: 10, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  endRound = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  trialCounter = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialCounter',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.8)], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('blue'),  opacity: 1,
    depth: -5.0 
  });
  
  restartPoly = new visual.Rect ({
    win: psychoJS.window, name: 'restartPoly', units : 'norm', 
    width: [0.4, 0.14][0], height: [0.4, 0.14][1],
    ori: 0, pos: [0.7, (- 0.8)],
    lineWidth: 2, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([(- 0.3), (- 0.3), (- 0.3)]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  restartText = new visual.TextStim({
    win: psychoJS.window,
    name: 'restartText',
    text: 'click here to start over\n(if you made a mistake)',
    font: 'Arial',
    units: 'norm', 
    pos: [0.7, (- 0.8)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  restartMouse = new core.Mouse({
    win: psychoJS.window,
  });
  restartMouse.mouseClock = new util.Clock();
  // Initialize components for Routine "checkForRestart"
  checkForRestartClock = new util.Clock();
  skipTrials = false;
  clickedRestart = false;
  
  // Initialize components for Routine "warning"
  warningClock = new util.Clock();
  instructOops = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructOops',
    text: 'oops! Looks like we ran out of space. \n\nTry moving a little closer to the screen and click the button to try again.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  tryAgainPoly1 = new visual.Rect ({
    win: psychoJS.window, name: 'tryAgainPoly1', units : 'norm', 
    width: [0.15, 0.08][0], height: [0.15, 0.08][1],
    ori: 0, pos: [0.8, (- 0.8)],
    lineWidth: 2, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 0, 0]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  tryAgainButton1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tryAgainButton1',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0.8, (- 0.8)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  tryAgainMouse1 = new core.Mouse({
    win: psychoJS.window,
  });
  tryAgainMouse1.mouseClock = new util.Clock();
  // Initialize components for Routine "goodJob_prepForExp"
  goodJob_prepForExpClock = new util.Clock();
  instruct2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruct2',
    text: 'Great job! \n\n** Please keep this distance from your screen until the very end! ** \n\nYou can uncover/open your right eye now. \nMake sure you are wearing the colored glasses, and prepare for the next block. \n\nPress the spacebar to continue to the main experiment. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  keyToMoveOn = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  contrastRange = [];
  contR = 1.0;
  
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
    
    contWarningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    contWarningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    contWarningComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "contWarning" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var screenEdgeLoop;
var currentLoop;
function screenEdgeLoopLoopBegin(screenEdgeLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    screenEdgeLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 50, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'screenEdgeLoop'
    });
    psychoJS.experiment.addLoop(screenEdgeLoop); // add the loop to the experiment
    currentLoop = screenEdgeLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    screenEdgeLoop.forEach(function() {
      const snapshot = screenEdgeLoop.getSnapshot();
    
      screenEdgeLoopLoopScheduler.add(importConditions(snapshot));
      screenEdgeLoopLoopScheduler.add(findScreenResolRoutineBegin(snapshot));
      screenEdgeLoopLoopScheduler.add(findScreenResolRoutineEachFrame());
      screenEdgeLoopLoopScheduler.add(findScreenResolRoutineEnd());
      screenEdgeLoopLoopScheduler.add(findScreenEdgeRoutineBegin(snapshot));
      screenEdgeLoopLoopScheduler.add(findScreenEdgeRoutineEachFrame());
      screenEdgeLoopLoopScheduler.add(findScreenEdgeRoutineEnd());
      screenEdgeLoopLoopScheduler.add(endLoopIteration(screenEdgeLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function screenEdgeLoopLoopEnd() {
  psychoJS.experiment.removeLoop(screenEdgeLoop);

  return Scheduler.Event.NEXT;
}


var outerLoop;
function outerLoopLoopBegin(outerLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    outerLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 20, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'outerLoop'
    });
    psychoJS.experiment.addLoop(outerLoop); // add the loop to the experiment
    currentLoop = outerLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    outerLoop.forEach(function() {
      const snapshot = outerLoop.getSnapshot();
    
      outerLoopLoopScheduler.add(importConditions(snapshot));
      const midLoopLoopScheduler = new Scheduler(psychoJS);
      outerLoopLoopScheduler.add(midLoopLoopBegin(midLoopLoopScheduler, snapshot));
      outerLoopLoopScheduler.add(midLoopLoopScheduler);
      outerLoopLoopScheduler.add(midLoopLoopEnd);
      outerLoopLoopScheduler.add(warningRoutineBegin(snapshot));
      outerLoopLoopScheduler.add(warningRoutineEachFrame());
      outerLoopLoopScheduler.add(warningRoutineEnd());
      outerLoopLoopScheduler.add(endLoopIteration(outerLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var midLoop;
function midLoopLoopBegin(midLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    midLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 50, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'midLoop'
    });
    psychoJS.experiment.addLoop(midLoop); // add the loop to the experiment
    currentLoop = midLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    midLoop.forEach(function() {
      const snapshot = midLoop.getSnapshot();
    
      midLoopLoopScheduler.add(importConditions(snapshot));
      midLoopLoopScheduler.add(startBlindSpotRoutineBegin(snapshot));
      midLoopLoopScheduler.add(startBlindSpotRoutineEachFrame());
      midLoopLoopScheduler.add(startBlindSpotRoutineEnd());
      const inLoopLoopScheduler = new Scheduler(psychoJS);
      midLoopLoopScheduler.add(inLoopLoopBegin(inLoopLoopScheduler, snapshot));
      midLoopLoopScheduler.add(inLoopLoopScheduler);
      midLoopLoopScheduler.add(inLoopLoopEnd);
      midLoopLoopScheduler.add(endLoopIteration(midLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var inLoop;
function inLoopLoopBegin(inLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    inLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: num_repeat, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'inLoop'
    });
    psychoJS.experiment.addLoop(inLoop); // add the loop to the experiment
    currentLoop = inLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    inLoop.forEach(function() {
      const snapshot = inLoop.getSnapshot();
    
      inLoopLoopScheduler.add(importConditions(snapshot));
      inLoopLoopScheduler.add(findBlindSpotRoutineBegin(snapshot));
      inLoopLoopScheduler.add(findBlindSpotRoutineEachFrame());
      inLoopLoopScheduler.add(findBlindSpotRoutineEnd());
      inLoopLoopScheduler.add(checkForRestartRoutineBegin(snapshot));
      inLoopLoopScheduler.add(checkForRestartRoutineEachFrame());
      inLoopLoopScheduler.add(checkForRestartRoutineEnd());
      inLoopLoopScheduler.add(endLoopIteration(inLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function inLoopLoopEnd() {
  psychoJS.experiment.removeLoop(inLoop);

  return Scheduler.Event.NEXT;
}


async function midLoopLoopEnd() {
  psychoJS.experiment.removeLoop(midLoop);

  return Scheduler.Event.NEXT;
}


async function outerLoopLoopEnd() {
  psychoJS.experiment.removeLoop(outerLoop);

  return Scheduler.Event.NEXT;
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
    
    findScreenResolComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    findScreenResolComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    findScreenResolComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    thisExp.addData("px per cm", pxPerCm);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "findScreenResol" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var findScreenEdgeComponents;
function findScreenEdgeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'findScreenEdge'-------
    t = 0;
    findScreenEdgeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    slider.reset()
    slider.markerPos = 0;
    
    // setup some python lists for storing info about the nextMouse1
    nextMouse1.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    findScreenEdgeComponents = [];
    findScreenEdgeComponents.push(instruct);
    findScreenEdgeComponents.push(slider);
    findScreenEdgeComponents.push(targetTri);
    findScreenEdgeComponents.push(nextPoly1);
    findScreenEdgeComponents.push(nextButton1);
    findScreenEdgeComponents.push(nextMouse1);
    
    findScreenEdgeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function findScreenEdgeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'findScreenEdge'-------
    // get current time
    t = findScreenEdgeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruct* updates
    if (t >= 0.0 && instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct.tStart = t;  // (not accounting for frame time here)
      instruct.frameNStart = frameN;  // exact frame index
      
      instruct.setAutoDraw(true);
    }

    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    
    // *targetTri* updates
    if (t >= 0.0 && targetTri.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetTri.tStart = t;  // (not accounting for frame time here)
      targetTri.frameNStart = frameN;  // exact frame index
      
      targetTri.setAutoDraw(true);
    }

    
    // *nextPoly1* updates
    if (t >= 0.0 && nextPoly1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextPoly1.tStart = t;  // (not accounting for frame time here)
      nextPoly1.frameNStart = frameN;  // exact frame index
      
      nextPoly1.setAutoDraw(true);
    }

    
    // *nextButton1* updates
    if (t >= 0.0 && nextButton1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton1.tStart = t;  // (not accounting for frame time here)
      nextButton1.frameNStart = frameN;  // exact frame index
      
      nextButton1.setAutoDraw(true);
    }

    
    if (nextButton1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      nextButton1.setText('Next', false);
    }
    // *nextMouse1* updates
    if (t >= 0.0 && nextMouse1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextMouse1.tStart = t;  // (not accounting for frame time here)
      nextMouse1.frameNStart = frameN;  // exact frame index
      
      nextMouse1.status = PsychoJS.Status.STARTED;
      nextMouse1.mouseClock.reset();
      prevButtonState = nextMouse1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (nextMouse1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = nextMouse1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton1]) {
            if (obj.contains(nextMouse1)) {
              gotValidClick = true;
              nextMouse1.clicked_name.push(obj.name)
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
    findScreenEdgeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var screenEdgeNorm;
function findScreenEdgeRoutineEnd() {
  return async function () {
    //------Ending Routine 'findScreenEdge'-------
    findScreenEdgeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('slider.response', slider.getRating());
    screenEdgeNorm = slider.getRating();
    screenEdgePx = (10000 * screenEdgeNorm);
    if ((screenEdgeNorm < 0)) {
        skip_checkEdge = true;
        screenEdgeLoop.finished = true;
    }
    thisExp.addData("screenEdgeNorm", screenEdgeNorm);
    thisExp.addData("screenEdgePx", screenEdgePx);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "findScreenEdge" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var square_x;
var _startKey_allKeys;
var startBlindSpotComponents;
function startBlindSpotRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'startBlindSpot'-------
    t = 0;
    startBlindSpotClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    square_x = (pxPerCm * square2center_dist);
    loopN = 0;
    clickedRestart = false;
    
    startKey.keys = undefined;
    startKey.rt = undefined;
    _startKey_allKeys = [];
    // keep track of which components have finished
    startBlindSpotComponents = [];
    startBlindSpotComponents.push(instruct1);
    startBlindSpotComponents.push(startKey);
    startBlindSpotComponents.push(squareStart);
    startBlindSpotComponents.push(dotStart);
    startBlindSpotComponents.push(tinyDotStart);
    startBlindSpotComponents.push(dumiTrialCount);
    startBlindSpotComponents.push(dumiRestrtPoly);
    startBlindSpotComponents.push(dumiRestrtButt);
    
    startBlindSpotComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function startBlindSpotRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'startBlindSpot'-------
    // get current time
    t = startBlindSpotClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruct1* updates
    if (t >= 0.0 && instruct1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct1.tStart = t;  // (not accounting for frame time here)
      instruct1.frameNStart = frameN;  // exact frame index
      
      instruct1.setAutoDraw(true);
    }

    
    if (instruct1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      instruct1.setPos([0, (pxPerCm * 3.5)], false);
      instruct1.setSize([(pxPerCm * 20), (pxPerCm * 7.09)], false);
    }
    
    // *startKey* updates
    if (t >= 0.0 && startKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startKey.tStart = t;  // (not accounting for frame time here)
      startKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { startKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { startKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { startKey.clearEvents(); });
    }

    if (startKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = startKey.getKeys({keyList: ['space'], waitRelease: false});
      _startKey_allKeys = _startKey_allKeys.concat(theseKeys);
      if (_startKey_allKeys.length > 0) {
        startKey.keys = _startKey_allKeys[_startKey_allKeys.length - 1].name;  // just the last key pressed
        startKey.rt = _startKey_allKeys[_startKey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *squareStart* updates
    if (t >= 0.0 && squareStart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      squareStart.tStart = t;  // (not accounting for frame time here)
      squareStart.frameNStart = frameN;  // exact frame index
      
      squareStart.setAutoDraw(true);
    }

    
    if (squareStart.status === PsychoJS.Status.STARTED){ // only update if being drawn
      squareStart.setPos([square_x, ((- pxPerCm) * 3)], false);
      squareStart.setSize([(pxPerCm * 0.6), (pxPerCm * 0.6)], false);
    }
    
    // *dotStart* updates
    if (t >= 0.0 && dotStart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dotStart.tStart = t;  // (not accounting for frame time here)
      dotStart.frameNStart = frameN;  // exact frame index
      
      dotStart.setAutoDraw(true);
    }

    
    if (dotStart.status === PsychoJS.Status.STARTED){ // only update if being drawn
      dotStart.setPos([(square_x - (pxPerCm * dot2square_dist)), ((- pxPerCm) * 3)], false);
      dotStart.setSize([(pxPerCm * 0.6), (pxPerCm * 0.6)], false);
    }
    
    // *tinyDotStart* updates
    if (t >= 0.0 && tinyDotStart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tinyDotStart.tStart = t;  // (not accounting for frame time here)
      tinyDotStart.frameNStart = frameN;  // exact frame index
      
      tinyDotStart.setAutoDraw(true);
    }

    
    if (tinyDotStart.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tinyDotStart.setPos([square_x, ((- pxPerCm) * 3)], false);
      tinyDotStart.setSize([(pxPerCm * 0.1), (pxPerCm * 0.1)], false);
    }
    
    // *dumiTrialCount* updates
    if (t >= 0.0 && dumiTrialCount.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dumiTrialCount.tStart = t;  // (not accounting for frame time here)
      dumiTrialCount.frameNStart = frameN;  // exact frame index
      
      dumiTrialCount.setAutoDraw(true);
    }

    
    // *dumiRestrtPoly* updates
    if (t >= 0.0 && dumiRestrtPoly.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dumiRestrtPoly.tStart = t;  // (not accounting for frame time here)
      dumiRestrtPoly.frameNStart = frameN;  // exact frame index
      
      dumiRestrtPoly.setAutoDraw(true);
    }

    
    // *dumiRestrtButt* updates
    if (t >= 0.0 && dumiRestrtButt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dumiRestrtButt.tStart = t;  // (not accounting for frame time here)
      dumiRestrtButt.frameNStart = frameN;  // exact frame index
      
      dumiRestrtButt.setAutoDraw(true);
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
    startBlindSpotComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function startBlindSpotRoutineEnd() {
  return async function () {
    //------Ending Routine 'startBlindSpot'-------
    startBlindSpotComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    startKey.stop();
    // the Routine "startBlindSpot" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var dot_x;
var _endRound_allKeys;
var findBlindSpotComponents;
function findBlindSpotRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'findBlindSpot'-------
    t = 0;
    findBlindSpotClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    dot_x = (square_x - (pxPerCm * dot2square_dist));
    square_x = (pxPerCm * square2center_dist);
    loopN += 1;
    endRound.keys = undefined;
    endRound.rt = undefined;
    _endRound_allKeys = [];
    // setup some python lists for storing info about the restartMouse
    restartMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    findBlindSpotComponents = [];
    findBlindSpotComponents.push(square);
    findBlindSpotComponents.push(dot);
    findBlindSpotComponents.push(tinyDot);
    findBlindSpotComponents.push(endRound);
    findBlindSpotComponents.push(trialCounter);
    findBlindSpotComponents.push(restartPoly);
    findBlindSpotComponents.push(restartText);
    findBlindSpotComponents.push(restartMouse);
    
    findBlindSpotComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function findBlindSpotRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'findBlindSpot'-------
    // get current time
    t = findBlindSpotClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((dot_x > screenEdgePx)) {
        dot_x = (dot_x - 1);
    } else {
        continueRoutine = false;
        inLoop.finished = true;
        midLoop.finished = true;
    }
    
    // *square* updates
    if (t >= 0.0 && square.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      square.tStart = t;  // (not accounting for frame time here)
      square.frameNStart = frameN;  // exact frame index
      
      square.setAutoDraw(true);
    }

    
    if (square.status === PsychoJS.Status.STARTED){ // only update if being drawn
      square.setPos([square_x, ((- pxPerCm) * 3)], false);
      square.setSize([(pxPerCm * 0.6), (pxPerCm * 0.6)], false);
    }
    
    // *dot* updates
    if (t >= 0.0 && dot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dot.tStart = t;  // (not accounting for frame time here)
      dot.frameNStart = frameN;  // exact frame index
      
      dot.setAutoDraw(true);
    }

    
    if (dot.status === PsychoJS.Status.STARTED){ // only update if being drawn
      dot.setPos([dot_x, ((- pxPerCm) * 3)], false);
      dot.setSize([(pxPerCm * 0.6), (pxPerCm * 0.6)], false);
    }
    
    // *tinyDot* updates
    if (t >= 0.0 && tinyDot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tinyDot.tStart = t;  // (not accounting for frame time here)
      tinyDot.frameNStart = frameN;  // exact frame index
      
      tinyDot.setAutoDraw(true);
    }

    
    if (tinyDot.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tinyDot.setPos([square_x, ((- pxPerCm) * 3)], false);
      tinyDot.setSize([(pxPerCm * 0.1), (pxPerCm * 0.1)], false);
    }
    
    // *endRound* updates
    if (t >= 0.0 && endRound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endRound.tStart = t;  // (not accounting for frame time here)
      endRound.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endRound.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endRound.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endRound.clearEvents(); });
    }

    if (endRound.status === PsychoJS.Status.STARTED) {
      let theseKeys = endRound.getKeys({keyList: ['space'], waitRelease: false});
      _endRound_allKeys = _endRound_allKeys.concat(theseKeys);
      if (_endRound_allKeys.length > 0) {
        endRound.keys = _endRound_allKeys[_endRound_allKeys.length - 1].name;  // just the last key pressed
        endRound.rt = _endRound_allKeys[_endRound_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *trialCounter* updates
    if (t >= 0.0 && trialCounter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialCounter.tStart = t;  // (not accounting for frame time here)
      trialCounter.frameNStart = frameN;  // exact frame index
      
      trialCounter.setAutoDraw(true);
    }

    
    if (trialCounter.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialCounter.setText(`${loopN} out of ${num_repeat}`, false);
    }
    
    // *restartPoly* updates
    if (t >= 0.0 && restartPoly.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restartPoly.tStart = t;  // (not accounting for frame time here)
      restartPoly.frameNStart = frameN;  // exact frame index
      
      restartPoly.setAutoDraw(true);
    }

    
    // *restartText* updates
    if (t >= 0.0 && restartText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restartText.tStart = t;  // (not accounting for frame time here)
      restartText.frameNStart = frameN;  // exact frame index
      
      restartText.setAutoDraw(true);
    }

    // *restartMouse* updates
    if (t >= 0.0 && restartMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      restartMouse.tStart = t;  // (not accounting for frame time here)
      restartMouse.frameNStart = frameN;  // exact frame index
      
      restartMouse.status = PsychoJS.Status.STARTED;
      restartMouse.mouseClock.reset();
      prevButtonState = restartMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (restartMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = restartMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [restartText]) {
            if (obj.contains(restartMouse)) {
              gotValidClick = true;
              restartMouse.clicked_name.push(obj.name)
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
    findBlindSpotComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var avg_dot_dist;
var dot_dist_cm;
function findBlindSpotRoutineEnd() {
  return async function () {
    //------Ending Routine 'findBlindSpot'-------
    findBlindSpotComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    dot_dist_list.push((square2center_dist*pxPerCm)-dot_x)
    avg_dot_dist = (sum(dot_dist_list.slice((- num_repeat))) / num_repeat);
    dot_dist_cm = (avg_dot_dist / pxPerCm);
    dist2screen = (dot_dist_cm / 0.24);
    
    thisExp.addData("num_repeat", num_repeat);
    thisExp.addData("square_x", square_x);
    thisExp.addData("square2center_dist", square2center_dist);
    thisExp.addData("dot2square_dist", dot2square_dist);
    thisExp.addData("dot_dist_list", dot_dist_list);
    thisExp.addData("avg_dot_dist", avg_dot_dist);
    thisExp.addData("dist2screen", dist2screen);
    
    endRound.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "findBlindSpot" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var checkForRestartComponents;
function checkForRestartRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'checkForRestart'-------
    t = 0;
    checkForRestartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (restartMouse.clicked_name) {
        if ((restartMouse.clicked_name[0] === "restartText")) {
            inLoop.finished = true;
            clickedRestart = true;
        }
    }
    if ((((loopN === num_repeat) && (dot_x > screenEdgePx)) && (clickedRestart === false))) {
        continueRoutine = false;
        inLoop.finished = true;
        midLoop.finished = true;
        outerLoop.finished = true;
        skipTrials = true;
    }
    
    // keep track of which components have finished
    checkForRestartComponents = [];
    
    checkForRestartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function checkForRestartRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'checkForRestart'-------
    // get current time
    t = checkForRestartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    checkForRestartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function checkForRestartRoutineEnd() {
  return async function () {
    //------Ending Routine 'checkForRestart'-------
    checkForRestartComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "checkForRestart" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var warningComponents;
function warningRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'warning'-------
    t = 0;
    warningClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the tryAgainMouse1
    tryAgainMouse1.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    warningComponents = [];
    warningComponents.push(instructOops);
    warningComponents.push(tryAgainPoly1);
    warningComponents.push(tryAgainButton1);
    warningComponents.push(tryAgainMouse1);
    
    warningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function warningRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'warning'-------
    // get current time
    t = warningClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((skipTrials === true)) {
        continueRoutine = false;
    }
    
    
    // *instructOops* updates
    if (t >= 0.0 && instructOops.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructOops.tStart = t;  // (not accounting for frame time here)
      instructOops.frameNStart = frameN;  // exact frame index
      
      instructOops.setAutoDraw(true);
    }

    
    // *tryAgainPoly1* updates
    if (t >= 0.0 && tryAgainPoly1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tryAgainPoly1.tStart = t;  // (not accounting for frame time here)
      tryAgainPoly1.frameNStart = frameN;  // exact frame index
      
      tryAgainPoly1.setAutoDraw(true);
    }

    
    // *tryAgainButton1* updates
    if (t >= 0.0 && tryAgainButton1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tryAgainButton1.tStart = t;  // (not accounting for frame time here)
      tryAgainButton1.frameNStart = frameN;  // exact frame index
      
      tryAgainButton1.setAutoDraw(true);
    }

    
    if (tryAgainButton1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tryAgainButton1.setText('Try again', false);
    }
    // *tryAgainMouse1* updates
    if (t >= 0.0 && tryAgainMouse1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tryAgainMouse1.tStart = t;  // (not accounting for frame time here)
      tryAgainMouse1.frameNStart = frameN;  // exact frame index
      
      tryAgainMouse1.status = PsychoJS.Status.STARTED;
      tryAgainMouse1.mouseClock.reset();
      prevButtonState = tryAgainMouse1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (tryAgainMouse1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = tryAgainMouse1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [tryAgainButton1]) {
            if (obj.contains(tryAgainMouse1)) {
              gotValidClick = true;
              tryAgainMouse1.clicked_name.push(obj.name)
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
    warningComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function warningRoutineEnd() {
  return async function () {
    //------Ending Routine 'warning'-------
    warningComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "warning" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _keyToMoveOn_allKeys;
var imgSizeCm;
var constSize;
var eyeDom;
var binRivRun;
var trialReps;
var blockReps;
var finalTrialDur;
var contB;
var contrastTrials;
var contCounter;
var skipContrast;
var goodJob_prepForExpComponents;
function goodJob_prepForExpRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'goodJob_prepForExp'-------
    t = 0;
    goodJob_prepForExpClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    keyToMoveOn.keys = undefined;
    keyToMoveOn.rt = undefined;
    _keyToMoveOn_allKeys = [];
    imgSizeCm = ((2 * dist2screen) * tan((0.5 * desiredVisAngl)));
    constSize = (imgSizeCm * pxPerCm);
    
    if ((expInfo["session"] === "practice")) {
        eyeDom = 0;
        binRivRun = 0;
        trialReps = 30;
        blockReps = 1;
        finalTrialDur = 3;
        contR = 0;
        contB = 1;
        contrastTrials = 5;
        contCounter = 0;
        skipContrast = 0;
    } else {
        eyeDom = 0;
        binRivRun = 1;
        trialReps = 30;
        blockReps = 6;
        finalTrialDur = 10;
        contrastTrials = 0;
        skipContrast = 0;
    }
    
    // keep track of which components have finished
    goodJob_prepForExpComponents = [];
    goodJob_prepForExpComponents.push(instruct2);
    goodJob_prepForExpComponents.push(keyToMoveOn);
    
    goodJob_prepForExpComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function goodJob_prepForExpRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'goodJob_prepForExp'-------
    // get current time
    t = goodJob_prepForExpClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruct2* updates
    if (t >= 0.0 && instruct2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruct2.tStart = t;  // (not accounting for frame time here)
      instruct2.frameNStart = frameN;  // exact frame index
      
      instruct2.setAutoDraw(true);
    }

    
    // *keyToMoveOn* updates
    if (t >= 0.0 && keyToMoveOn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyToMoveOn.tStart = t;  // (not accounting for frame time here)
      keyToMoveOn.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyToMoveOn.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyToMoveOn.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyToMoveOn.clearEvents(); });
    }

    if (keyToMoveOn.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyToMoveOn.getKeys({keyList: ['space'], waitRelease: false});
      _keyToMoveOn_allKeys = _keyToMoveOn_allKeys.concat(theseKeys);
      if (_keyToMoveOn_allKeys.length > 0) {
        keyToMoveOn.keys = _keyToMoveOn_allKeys[_keyToMoveOn_allKeys.length - 1].name;  // just the last key pressed
        keyToMoveOn.rt = _keyToMoveOn_allKeys[_keyToMoveOn_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
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
    goodJob_prepForExpComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function goodJob_prepForExpRoutineEnd() {
  return async function () {
    //------Ending Routine 'goodJob_prepForExp'-------
    goodJob_prepForExpComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    keyToMoveOn.stop();
    // the Routine "goodJob_prepForExp" was not non-slip safe, so reset the non-slip timer
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
