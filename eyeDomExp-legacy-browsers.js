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
const contAveragingLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(contAveragingLoopBegin(contAveragingLoopScheduler));
flowScheduler.add(contAveragingLoopScheduler);
flowScheduler.add(contAveragingLoopEnd);
const defineEyeLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(defineEyeLoopBegin(defineEyeLoopScheduler));
flowScheduler.add(defineEyeLoopScheduler);
flowScheduler.add(defineEyeLoopEnd);
flowScheduler.add(blockSetUpRoutineBegin());
flowScheduler.add(blockSetUpRoutineEachFrame());
flowScheduler.add(blockSetUpRoutineEnd());
const t1DriftLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(t1DriftLoopBegin(t1DriftLoopScheduler));
flowScheduler.add(t1DriftLoopScheduler);
flowScheduler.add(t1DriftLoopEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(endBlockRoutineBegin());
flowScheduler.add(endBlockRoutineEachFrame());
flowScheduler.add(endBlockRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/bullsEye_blue_01.png', 'path': 'images/bullsEye_blue_01.png'},
    {'name': 'images/radialEye_blue_05.png', 'path': 'images/radialEye_blue_05.png'},
    {'name': 'images/bullsEye_blue_05.png', 'path': 'images/bullsEye_blue_05.png'},
    {'name': 'images/radialEye_red_05.png', 'path': 'images/radialEye_red_05.png'},
    {'name': 'images/radialEye_blue_06.png', 'path': 'images/radialEye_blue_06.png'},
    {'name': 'images/radialEye_red_02.png', 'path': 'images/radialEye_red_02.png'},
    {'name': 'images/bullsEye_blue_07.png', 'path': 'images/bullsEye_blue_07.png'},
    {'name': 'image_list_left_left.csv', 'path': 'image_list_left_left.csv'},
    {'name': 'images/radialEye_blue_04.png', 'path': 'images/radialEye_blue_04.png'},
    {'name': 'images/radialEye_blue_03.png', 'path': 'images/radialEye_blue_03.png'},
    {'name': 'images/bullsEye_red_06.png', 'path': 'images/bullsEye_red_06.png'},
    {'name': 'image_list_left_right.csv', 'path': 'image_list_left_right.csv'},
    {'name': 'image_list_right_right.csv', 'path': 'image_list_right_right.csv'},
    {'name': 'images/bullsEye_blue_04.png', 'path': 'images/bullsEye_blue_04.png'},
    {'name': 'images/bullsEye_blue_03.png', 'path': 'images/bullsEye_blue_03.png'},
    {'name': 'images/checkbrdBorder.png', 'path': 'images/checkbrdBorder.png'},
    {'name': 'images/radialEye_red_01.png', 'path': 'images/radialEye_red_01.png'},
    {'name': 'images/radialEye_red_00.png', 'path': 'images/radialEye_red_00.png'},
    {'name': 'images/radialEye_blue_00.png', 'path': 'images/radialEye_blue_00.png'},
    {'name': 'images/bullsEye_red_02.png', 'path': 'images/bullsEye_red_02.png'},
    {'name': 'images/radialEye_red_03.png', 'path': 'images/radialEye_red_03.png'},
    {'name': 'images/bullsEye_blue_00.png', 'path': 'images/bullsEye_blue_00.png'},
    {'name': 'images/bullsEye_red_07.png', 'path': 'images/bullsEye_red_07.png'},
    {'name': 'images/radialEye_blue_02.png', 'path': 'images/radialEye_blue_02.png'},
    {'name': 'images/bullsEye_red_05.png', 'path': 'images/bullsEye_red_05.png'},
    {'name': 'images/bullsEye_red_04.png', 'path': 'images/bullsEye_red_04.png'},
    {'name': 'image_list_right_left.csv', 'path': 'image_list_right_left.csv'},
    {'name': 'images/radialEye_blue_01.png', 'path': 'images/radialEye_blue_01.png'},
    {'name': 'images/bullsEye_blue_06.png', 'path': 'images/bullsEye_blue_06.png'},
    {'name': 'images/radialEye_red_04.png', 'path': 'images/radialEye_red_04.png'},
    {'name': 'images/instruct1.png', 'path': 'images/instruct1.png'},
    {'name': 'images/bullsEye_red_01.png', 'path': 'images/bullsEye_red_01.png'},
    {'name': 'images/radialEye_blue_07.png', 'path': 'images/radialEye_blue_07.png'},
    {'name': 'images/bankImage.png', 'path': 'images/bankImage.png'},
    {'name': 'images/bullsEye_red_00.png', 'path': 'images/bullsEye_red_00.png'},
    {'name': 'images/bullsEye_red_03.png', 'path': 'images/bullsEye_red_03.png'},
    {'name': 'images/bullsEye_blue_02.png', 'path': 'images/bullsEye_blue_02.png'},
    {'name': 'images/radialEye_red_07.png', 'path': 'images/radialEye_red_07.png'},
    {'name': 'images/radialEye_red_06.png', 'path': 'images/radialEye_red_06.png'}
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
var screenEdgePx;
var skip_checkEdge;
var xPos;
var posChange;
var line;
var moveTri;
var targetTri;
var nextPoly1;
var nextButton1;
var nextMouse1;
var text;
var checkScreenEdgeClock;
var instructPls;
var tryAgainPoly;
var tryAgainButton;
var tryAgainMouse;
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
var contB;
var instContrastClock;
var instructions;
var key_start;
var fileCSV;
var nFrames;
var direction;
var driftLs;
var driftrows;
var blockCount;
var whichCSV_2;
var gratingContrastClock;
var brightInst;
var keyPressInst;
var bulls_stim;
var radial_stim;
var overlayRadial;
var contrastResp;
var placeB;
var placeR;
var labelB;
var labelR;
var radialLabel;
var bullsLabel;
var gratingCodeClock;
var bothContrastClock;
var radial_stim_2;
var bulls_stim_2;
var brightInst_2;
var key_resp_cont_3;
var contrastTrialsClock;
var tempCont;
var finalContClock;
var instContNum;
var displayContNum;
var key_resp_2;
var binRivInst_sess1Clock;
var warning_2;
var describeBR;
var key_resp_3;
var radialEye_2;
var bullseye_2;
var binRivClock;
var reminder;
var key_resp_BR;
var border_4;
var radialEye_BR;
var bullsEye_BR;
var fixation_5;
var blockSetUpClock;
var corrAns;
var whichTrial;
var indWrng;
var totTrialCount;
var corrCount;
var gradDur;
var findx;
var thisInd;
var blkCount;
var brd;
var maxVal;
var minVal;
var this_AR;
var initStep;
var finChanges;
var stairSteps;
var currPos;
var change;
var currRatio;
var cueColor;
var cueChngColor;
var respList;
var trial1ConstClock;
var key_resp_const_trial1;
var border;
var radialEye_stim_const_trial1;
var bullseye_stim_const_trial1;
var fixation_6;
var Instruction_4;
var trialSetUpClock;
var cueType;
var gradDecClock;
var tcount_1;
var gradDecResp;
var border_2;
var radialEye_change;
var bullsEye_gradChange;
var fixation;
var Instruction;
var tallMarker_2;
var wideMarker_2;
var noChangeMarker_2;
var currChange_2;
var gradIncClock;
var tcount_2;
var gradIncResp;
var border_3;
var radialEye_change_3;
var bullsEye_gradChange_3;
var fixation_3;
var Instruction_3;
var tallMarker_3;
var wideMarker_3;
var noChangeMarker_3;
var currChange_3;
var changeDirClock;
var trialConstClock;
var tcount_3;
var col;
var hght;
var constResp;
var border_6;
var radialEye_stim_const;
var bullsEye_stim_const;
var fixation_4;
var Instruction_5;
var tallMarker_4;
var wideMarker_4;
var noChangeMarker_4;
var currChange_4;
var nextTrialClock;
var endBlockClock;
var txtVar;
var nextTrialResp;
var endblockInst;
var whichBlock;
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
    units: 'norm', 
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
    text: 'Use the left and right arrow keys to move the red vertical line so that it lines up with the blue line. \nYou may hold down the arrow key to speed up the movement of the red line\n\nOnce they are aligned click “Next”.\n\n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.7], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  screenEdgePx = 0.0;
  skip_checkEdge = false;
  xPos = (- 300);
  posChange = 1;
  
  line = new visual.ShapeStim ({
    win: psychoJS.window, name: 'line', units : 'norm', 
    vertices: [[-[1, 0.05][0]/2.0, 0], [+[1, 0.05][0]/2.0, 0]],
    ori: 0, pos: [(- 0.7), 0.01],
    lineWidth: 5, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  moveTri = new visual.ShapeStim ({
    win: psychoJS.window, name: 'moveTri', units : 'pix', 
    vertices: [[-[30, 70][0]/2.0, 0], [+[30, 70][0]/2.0, 0]],
    ori: 90, pos: [0, 0],
    lineWidth: 3, lineColor: new util.Color('red'),
    fillColor: new util.Color('red'),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  targetTri = new visual.ShapeStim ({
    win: psychoJS.window, name: 'targetTri', units : 'norm', 
    vertices: [[-[0.05, 0.25][0]/2.0, 0], [+[0.05, 0.25][0]/2.0, 0]],
    ori: 90, pos: [(- 0.95), (- 0.01)],
    lineWidth: 5, lineColor: new util.Color([(- 1), (- 1), 1]),
    fillColor: new util.Color([(- 1), (- 1), 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  nextPoly1 = new visual.Rect ({
    win: psychoJS.window, name: 'nextPoly1', units : 'norm', 
    width: [0.12, 0.06][0], height: [0.12, 0.06][1],
    ori: 0, pos: [0.8, (- 0.8)],
    lineWidth: 1, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 0, 0]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  nextButton1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButton1',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0.8, (- 0.8)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  nextMouse1 = new core.Mouse({
    win: psychoJS.window,
  });
  nextMouse1.mouseClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0.2, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "checkScreenEdge"
  checkScreenEdgeClock = new util.Clock();
  instructPls = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructPls',
    text: 'Please move the red line to line up with the blue line before continuing. \n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  tryAgainPoly = new visual.Rect ({
    win: psychoJS.window, name: 'tryAgainPoly', units : 'norm', 
    width: [0.15, 0.08][0], height: [0.15, 0.08][1],
    ori: 0, pos: [0.8, (- 0.8)],
    lineWidth: 2, lineColor: new util.Color([(- 1), (- 1), (- 1)]),
    fillColor: new util.Color([1, 0, 0]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  tryAgainButton = new visual.TextStim({
    win: psychoJS.window,
    name: 'tryAgainButton',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0.8, (- 0.8)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  tryAgainMouse = new core.Mouse({
    win: psychoJS.window,
  });
  tryAgainMouse.mouseClock = new util.Clock();
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
    units: 'norm', 
    pos: [0, 0], height: 0.05,  wrapWidth: 2, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  keyToMoveOn = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  contrastRange = [];
  contR = 0.5;
  contB = 0.5;
  
  // Initialize components for Routine "instContrast"
  instContrastClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: 'Welcome! \nPlease wear your glasses throughout the experiment. \n\nFirst you will be presented two images side by side. A bull’s eye grating and a radial grating.\nAdjust the contrast of the bull’s eye grating until they are equally as bright.\nYou will redo this adjustment 5 times.\n\nPress any key to continue',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fileCSV = (((("image_list_" + expInfo["eye tested"]) + "_") + expInfo["which eye is blue"]) + ".csv");
  
  
          // add-on: list(s: string): string[]
          function list(s) {
              // if s is a string, we return a list of its characters
              if (typeof s === 'string')
                  return s.split('');
              else
                  // otherwise we return s:
                  return s;
          }
  
          nFrames = 7;
  direction = random();
  driftLs = list(range(((nFrames + 1) * 2)));
  if ((direction > 0.5)) {
      driftrows = driftLs.slice(0, (nFrames + 1));
  } else {
      driftrows = driftLs.slice((nFrames + 1));
  }
  
  blockCount = new visual.TextStim({
    win: psychoJS.window,
    name: 'blockCount',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  whichCSV_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'whichCSV_2',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.35)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "gratingContrast"
  gratingContrastClock = new util.Clock();
  brightInst = new visual.TextStim({
    win: psychoJS.window,
    name: 'brightInst',
    text: 'Press ‘space’ if brightness is equal',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  keyPressInst = new visual.TextStim({
    win: psychoJS.window,
    name: 'keyPressInst',
    text: 'Press ‘up’ to increase the brightness of the bull’s eye grating\nPress ‘down’ to decrease the brightness of the bull’s eye grating\n\n',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  bulls_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bulls_stim', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [80, 80],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  radial_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'radial_stim', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [80, 80],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  overlayRadial = new visual.Rect ({
    win: psychoJS.window, name: 'overlayRadial', units : 'pix', 
    width: [80, 80][0], height: [80, 80][1],
    ori: 0, pos: [0, 0],
    lineWidth: 0, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  contrastResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  if ((expInfo["eye tested"] === "right")) {
      placeB = [150, 0];
      placeR = [(- 150), 0];
      labelB = [0.2, (- 0.1)];
      labelR = [(- 0.2), (- 0.1)];
  } else {
      placeB = [(- 150), 0];
      placeR = [150, 0];
      labelB = [(- 0.2), (- 0.1)];
      labelR = [0.2, (- 0.1)];
  }
  
  radialLabel = new visual.TextStim({
    win: psychoJS.window,
    name: 'radialLabel',
    text: 'Radial grating',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  bullsLabel = new visual.TextStim({
    win: psychoJS.window,
    name: 'bullsLabel',
    text: 'Bull’s eye grating',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.015,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "gratingCode"
  gratingCodeClock = new util.Clock();
  // Initialize components for Routine "bothContrast"
  bothContrastClock = new util.Clock();
  radial_stim_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'radial_stim_2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [80, 80],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  bulls_stim_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bulls_stim_2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [80, 80],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  brightInst_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'brightInst_2',
    text: 'Are the two images equally bright? \nPress ‘Y’ for yes ’N’ for no',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  key_resp_cont_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "contrastTrials"
  contrastTrialsClock = new util.Clock();
  tempCont = 0;
  
  // Initialize components for Routine "finalCont"
  finalContClock = new util.Clock();
  instContNum = new visual.TextStim({
    win: psychoJS.window,
    name: 'instContNum',
    text: 'Please write down your contrast number. You will input this number in the initial dialog box in all future sessions. Once you record the number press ‘space’ to continue',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  displayContNum = new visual.TextStim({
    win: psychoJS.window,
    name: 'displayContNum',
    text: '',
    font: 'Arial',
    units: 'height', 
    pos: [0, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "binRivInst_sess1"
  binRivInst_sess1Clock = new util.Clock();
  warning_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'warning_2',
    text: 'STOP: PLEASE READ THE INSTRUCTIONS FOR THIS PART',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: 0.0 
  });
  
  describeBR = new visual.TextStim({
    win: psychoJS.window,
    name: 'describeBR',
    text: 'Both gratings will be presented simultaneously. They will both continuously drift (example below). Your task is to report which grating you see at any given time, The grating you perceive will switch back and forth rapidly. Press the appropriate key everytime you notice ONE of the gratings or if you see a mix of the two gratings. Press the key as soon as you notice a change. \n\nPress ‘left’ if you see the radial grating\nPress ‘right’ if you see the bulls eye grating\nPress ‘down’ if you see a mixture of the two gratings\n\nPlease take a minute to look at the gratings below so you can experience the perceived switching of the gratings before moving onto the actual task\n\nTo begin the task press ‘space’',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  radialEye_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'radialEye_2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 200)], size : [80, 80],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  bullseye_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bullseye_2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, (- 200)], size : [80, 80],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "binRiv"
  binRivClock = new util.Clock();
  reminder = new visual.TextStim({
    win: psychoJS.window,
    name: 'reminder',
    text: 'Remember: \n‘left’ = radial\n‘right’ = bull’s eye\n‘down’ = mix',
    font: 'Arial',
    units: 'height', 
    pos: [0.3, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_BR = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  border_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'border_4', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  radialEye_BR = new visual.ImageStim({
    win : psychoJS.window,
    name : 'radialEye_BR', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  bullsEye_BR = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bullsEye_BR', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  fixation_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_5',
    text: '+',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "blockSetUp"
  blockSetUpClock = new util.Clock();
  corrAns = "none";
  whichTrial = "";
  indWrng = 0;
  totTrialCount = 0;
  corrCount = 0;
  gradDur = 3;
  findx = 0;
  thisInd = 0;
  blkCount = 0;
  brd = 148;
  maxVal = 80;
  minVal = maxVal;
  this_AR = maxVal;
  initStep = 4;
  finChanges = [];
  stairSteps = [];
  stairSteps.push(initStep);
  for (var i, _pj_c = 0, _pj_a = util.range(14), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      initStep = (initStep * 0.87);
      stairSteps.push(initStep);
  }
  currPos = 0;
  change = 0.2;
  currRatio = "";
  cueColor = "black";
  cueChngColor = "black";
  respList = [];
  
  // Initialize components for Routine "trial1Const"
  trial1ConstClock = new util.Clock();
  key_resp_const_trial1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  border = new visual.ImageStim({
    win : psychoJS.window,
    name : 'border', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  radialEye_stim_const_trial1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'radialEye_stim_const_trial1', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  bullseye_stim_const_trial1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bullseye_stim_const_trial1', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  fixation_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_6',
    text: '+',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  Instruction_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruction_4',
    text: 'Remember: \n\nPress ‘Up’ =Taller \nPress ‘Right’ = Wider ',
    font: 'Arial',
    units: 'height', 
    pos: [0.3, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "trialSetUp"
  trialSetUpClock = new util.Clock();
  cueColor = "black";
  cueChngColor = "black";
  cueType = "";
  
  // Initialize components for Routine "gradDec"
  gradDecClock = new util.Clock();
  tcount_1 = 0;
  
  gradDecResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  border_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'border_2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  radialEye_change = new visual.ImageStim({
    win : psychoJS.window,
    name : 'radialEye_change', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  bullsEye_gradChange = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bullsEye_gradChange', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruction',
    text: 'Remember: \n\nPress ‘Up’ =Taller \nPress ‘Right’ = Wider ',
    font: 'Arial',
    units: 'height', 
    pos: [0.3, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  tallMarker_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'tallMarker_2', units : 'height', 
    edges: 4, size:[0.01, 0.05],
    ori: 0.0, pos: [(- 0.2), (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  wideMarker_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'wideMarker_2', units : 'height', 
    edges: 4, size:[0.05, 0.01],
    ori: 0.0, pos: [0.2, (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  noChangeMarker_2 = new visual.Polygon ({
    win: psychoJS.window, name: 'noChangeMarker_2', units : 'height', 
    edges: 4, size:[0.03, 0.03],
    ori: 0.0, pos: [0, (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  currChange_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'currChange_2', units : 'height', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.05, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  // Initialize components for Routine "gradInc"
  gradIncClock = new util.Clock();
  tcount_2 = 0;
  
  gradIncResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  border_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'border_3', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  radialEye_change_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'radialEye_change_3', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  bullsEye_gradChange_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bullsEye_gradChange_3', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  fixation_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_3',
    text: '+',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Instruction_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruction_3',
    text: 'Remember: \n\nPress ‘Up’ =Taller \nPress ‘Right’ = Wider ',
    font: 'Arial',
    units: 'height', 
    pos: [0.3, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  tallMarker_3 = new visual.Polygon ({
    win: psychoJS.window, name: 'tallMarker_3', units : 'height', 
    edges: 4, size:[0.01, 0.05],
    ori: 0.0, pos: [(- 0.2), (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  wideMarker_3 = new visual.Polygon ({
    win: psychoJS.window, name: 'wideMarker_3', units : 'height', 
    edges: 4, size:[0.05, 0.01],
    ori: 0.0, pos: [0.2, (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  noChangeMarker_3 = new visual.Polygon ({
    win: psychoJS.window, name: 'noChangeMarker_3', units : 'height', 
    edges: 4, size:[0.03, 0.03],
    ori: 0.0, pos: [0, (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  currChange_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'currChange_3', units : 'height', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.05, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  // Initialize components for Routine "changeDir"
  changeDirClock = new util.Clock();
  // Initialize components for Routine "trialConst"
  trialConstClock = new util.Clock();
  tcount_3 = 0;
  col = "white";
  hght = 0.025;
  
  constResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  border_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'border_6', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  radialEye_stim_const = new visual.ImageStim({
    win : psychoJS.window,
    name : 'radialEye_stim_const', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  bullsEye_stim_const = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bullsEye_stim_const', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -4.0 
  });
  fixation_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_4',
    text: '+',
    font: 'Arial',
    units: 'height', 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Instruction_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruction_5',
    text: 'Remember: \n\nPress ‘Up’ =Taller \nPress ‘Right’ = Wider ',
    font: 'Arial',
    units: 'height', 
    pos: [0.3, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  tallMarker_4 = new visual.Polygon ({
    win: psychoJS.window, name: 'tallMarker_4', units : 'height', 
    edges: 4, size:[0.01, 0.05],
    ori: 0.0, pos: [(- 0.2), (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  wideMarker_4 = new visual.Polygon ({
    win: psychoJS.window, name: 'wideMarker_4', units : 'height', 
    edges: 4, size:[0.05, 0.01],
    ori: 0.0, pos: [0.2, (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  noChangeMarker_4 = new visual.Polygon ({
    win: psychoJS.window, name: 'noChangeMarker_4', units : 'height', 
    edges: 4, size:[0.03, 0.03],
    ori: 0.0, pos: [0, (- 0.2)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  currChange_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'currChange_4', units : 'height', 
    vertices: 'cross', size:[0.02, 0.02],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.05, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  // Initialize components for Routine "nextTrial"
  nextTrialClock = new util.Clock();
  // Initialize components for Routine "endBlock"
  endBlockClock = new util.Clock();
  txtVar = "";
  
  nextTrialResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  endblockInst = new visual.TextStim({
    win: psychoJS.window,
    name: 'endblockInst',
    text: 'Take a short 2 minute break if necessary. You may remove your glasses during this break.\n\nMake sure you put on your glasses before starting again.\n\nIf you move your current position please press ‘space’ once your break ends. \n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  whichBlock = new visual.TextStim({
    win: psychoJS.window,
    name: 'whichBlock',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
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
    keys = psychoJS.eventManager.getKeys();
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
      screenEdgeLoopLoopScheduler.add(findScreenEdgeRoutineBegin(snapshot));
      screenEdgeLoopLoopScheduler.add(findScreenEdgeRoutineEachFrame());
      screenEdgeLoopLoopScheduler.add(findScreenEdgeRoutineEnd());
      screenEdgeLoopLoopScheduler.add(checkScreenEdgeRoutineBegin(snapshot));
      screenEdgeLoopLoopScheduler.add(checkScreenEdgeRoutineEachFrame());
      screenEdgeLoopLoopScheduler.add(checkScreenEdgeRoutineEnd());
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


var contAveraging;
function contAveragingLoopBegin(contAveragingLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    contAveraging = new TrialHandler({
      psychoJS: psychoJS,
      nReps: skipContrast, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'contAveraging'
    });
    psychoJS.experiment.addLoop(contAveraging); // add the loop to the experiment
    currentLoop = contAveraging;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    contAveraging.forEach(function() {
      const snapshot = contAveraging.getSnapshot();
    
      contAveragingLoopScheduler.add(importConditions(snapshot));
      const contTrialsLoopScheduler = new Scheduler(psychoJS);
      contAveragingLoopScheduler.add(contTrialsLoopBegin(contTrialsLoopScheduler, snapshot));
      contAveragingLoopScheduler.add(contTrialsLoopScheduler);
      contAveragingLoopScheduler.add(contTrialsLoopEnd);
      contAveragingLoopScheduler.add(finalContRoutineBegin(snapshot));
      contAveragingLoopScheduler.add(finalContRoutineEachFrame());
      contAveragingLoopScheduler.add(finalContRoutineEnd());
      contAveragingLoopScheduler.add(endLoopIteration(contAveragingLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var contTrials;
function contTrialsLoopBegin(contTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    contTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: contrastTrials, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'contTrials'
    });
    psychoJS.experiment.addLoop(contTrials); // add the loop to the experiment
    currentLoop = contTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    contTrials.forEach(function() {
      const snapshot = contTrials.getSnapshot();
    
      contTrialsLoopScheduler.add(importConditions(snapshot));
      const redoContAdjLoopScheduler = new Scheduler(psychoJS);
      contTrialsLoopScheduler.add(redoContAdjLoopBegin(redoContAdjLoopScheduler, snapshot));
      contTrialsLoopScheduler.add(redoContAdjLoopScheduler);
      contTrialsLoopScheduler.add(redoContAdjLoopEnd);
      contTrialsLoopScheduler.add(contrastTrialsRoutineBegin(snapshot));
      contTrialsLoopScheduler.add(contrastTrialsRoutineEachFrame());
      contTrialsLoopScheduler.add(contrastTrialsRoutineEnd());
      contTrialsLoopScheduler.add(endLoopIteration(contTrialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var redoContAdj;
function redoContAdjLoopBegin(redoContAdjLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    redoContAdj = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: fileCSV,
      seed: undefined, name: 'redoContAdj'
    });
    psychoJS.experiment.addLoop(redoContAdj); // add the loop to the experiment
    currentLoop = redoContAdj;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    redoContAdj.forEach(function() {
      const snapshot = redoContAdj.getSnapshot();
    
      redoContAdjLoopScheduler.add(importConditions(snapshot));
      redoContAdjLoopScheduler.add(instContrastRoutineBegin(snapshot));
      redoContAdjLoopScheduler.add(instContrastRoutineEachFrame());
      redoContAdjLoopScheduler.add(instContrastRoutineEnd());
      const adjustContrastLoopScheduler = new Scheduler(psychoJS);
      redoContAdjLoopScheduler.add(adjustContrastLoopBegin(adjustContrastLoopScheduler, snapshot));
      redoContAdjLoopScheduler.add(adjustContrastLoopScheduler);
      redoContAdjLoopScheduler.add(adjustContrastLoopEnd);
      redoContAdjLoopScheduler.add(bothContrastRoutineBegin(snapshot));
      redoContAdjLoopScheduler.add(bothContrastRoutineEachFrame());
      redoContAdjLoopScheduler.add(bothContrastRoutineEnd());
      redoContAdjLoopScheduler.add(endLoopIteration(redoContAdjLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var adjustContrast;
function adjustContrastLoopBegin(adjustContrastLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    adjustContrast = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1000, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, fileCSV, '1'),
      seed: undefined, name: 'adjustContrast'
    });
    psychoJS.experiment.addLoop(adjustContrast); // add the loop to the experiment
    currentLoop = adjustContrast;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    adjustContrast.forEach(function() {
      const snapshot = adjustContrast.getSnapshot();
    
      adjustContrastLoopScheduler.add(importConditions(snapshot));
      adjustContrastLoopScheduler.add(gratingContrastRoutineBegin(snapshot));
      adjustContrastLoopScheduler.add(gratingContrastRoutineEachFrame());
      adjustContrastLoopScheduler.add(gratingContrastRoutineEnd());
      adjustContrastLoopScheduler.add(gratingCodeRoutineBegin(snapshot));
      adjustContrastLoopScheduler.add(gratingCodeRoutineEachFrame());
      adjustContrastLoopScheduler.add(gratingCodeRoutineEnd());
      adjustContrastLoopScheduler.add(endLoopIteration(adjustContrastLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function adjustContrastLoopEnd() {
  psychoJS.experiment.removeLoop(adjustContrast);

  return Scheduler.Event.NEXT;
}


async function redoContAdjLoopEnd() {
  psychoJS.experiment.removeLoop(redoContAdj);

  return Scheduler.Event.NEXT;
}


async function contTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(contTrials);

  return Scheduler.Event.NEXT;
}


async function contAveragingLoopEnd() {
  psychoJS.experiment.removeLoop(contAveraging);

  return Scheduler.Event.NEXT;
}


var defineEye;
function defineEyeLoopBegin(defineEyeLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    defineEye = new TrialHandler({
      psychoJS: psychoJS,
      nReps: eyeDom, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'defineEye'
    });
    psychoJS.experiment.addLoop(defineEye); // add the loop to the experiment
    currentLoop = defineEye;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    defineEye.forEach(function() {
      const snapshot = defineEye.getSnapshot();
    
      defineEyeLoopScheduler.add(importConditions(snapshot));
      const instBR_drift_sess1LoopScheduler = new Scheduler(psychoJS);
      defineEyeLoopScheduler.add(instBR_drift_sess1LoopBegin(instBR_drift_sess1LoopScheduler, snapshot));
      defineEyeLoopScheduler.add(instBR_drift_sess1LoopScheduler);
      defineEyeLoopScheduler.add(instBR_drift_sess1LoopEnd);
      const binRiv_trials_sess1LoopScheduler = new Scheduler(psychoJS);
      defineEyeLoopScheduler.add(binRiv_trials_sess1LoopBegin(binRiv_trials_sess1LoopScheduler, snapshot));
      defineEyeLoopScheduler.add(binRiv_trials_sess1LoopScheduler);
      defineEyeLoopScheduler.add(binRiv_trials_sess1LoopEnd);
      defineEyeLoopScheduler.add(endLoopIteration(defineEyeLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var instBR_drift_sess1;
function instBR_drift_sess1LoopBegin(instBR_drift_sess1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instBR_drift_sess1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1000, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, fileCSV, ':8'),
      seed: undefined, name: 'instBR_drift_sess1'
    });
    psychoJS.experiment.addLoop(instBR_drift_sess1); // add the loop to the experiment
    currentLoop = instBR_drift_sess1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instBR_drift_sess1.forEach(function() {
      const snapshot = instBR_drift_sess1.getSnapshot();
    
      instBR_drift_sess1LoopScheduler.add(importConditions(snapshot));
      instBR_drift_sess1LoopScheduler.add(binRivInst_sess1RoutineBegin(snapshot));
      instBR_drift_sess1LoopScheduler.add(binRivInst_sess1RoutineEachFrame());
      instBR_drift_sess1LoopScheduler.add(binRivInst_sess1RoutineEnd());
      instBR_drift_sess1LoopScheduler.add(endLoopIteration(instBR_drift_sess1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function instBR_drift_sess1LoopEnd() {
  psychoJS.experiment.removeLoop(instBR_drift_sess1);

  return Scheduler.Event.NEXT;
}


var binRiv_trials_sess1;
function binRiv_trials_sess1LoopBegin(binRiv_trials_sess1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    binRiv_trials_sess1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'binRiv_trials_sess1'
    });
    psychoJS.experiment.addLoop(binRiv_trials_sess1); // add the loop to the experiment
    currentLoop = binRiv_trials_sess1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    binRiv_trials_sess1.forEach(function() {
      const snapshot = binRiv_trials_sess1.getSnapshot();
    
      binRiv_trials_sess1LoopScheduler.add(importConditions(snapshot));
      const drift_BR_sess1LoopScheduler = new Scheduler(psychoJS);
      binRiv_trials_sess1LoopScheduler.add(drift_BR_sess1LoopBegin(drift_BR_sess1LoopScheduler, snapshot));
      binRiv_trials_sess1LoopScheduler.add(drift_BR_sess1LoopScheduler);
      binRiv_trials_sess1LoopScheduler.add(drift_BR_sess1LoopEnd);
      binRiv_trials_sess1LoopScheduler.add(endLoopIteration(binRiv_trials_sess1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var drift_BR_sess1;
function drift_BR_sess1LoopBegin(drift_BR_sess1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    drift_BR_sess1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 6, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, fileCSV, driftrows),
      seed: undefined, name: 'drift_BR_sess1'
    });
    psychoJS.experiment.addLoop(drift_BR_sess1); // add the loop to the experiment
    currentLoop = drift_BR_sess1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    drift_BR_sess1.forEach(function() {
      const snapshot = drift_BR_sess1.getSnapshot();
    
      drift_BR_sess1LoopScheduler.add(importConditions(snapshot));
      drift_BR_sess1LoopScheduler.add(binRivRoutineBegin(snapshot));
      drift_BR_sess1LoopScheduler.add(binRivRoutineEachFrame());
      drift_BR_sess1LoopScheduler.add(binRivRoutineEnd());
      drift_BR_sess1LoopScheduler.add(endLoopIteration(drift_BR_sess1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function drift_BR_sess1LoopEnd() {
  psychoJS.experiment.removeLoop(drift_BR_sess1);

  return Scheduler.Event.NEXT;
}


async function binRiv_trials_sess1LoopEnd() {
  psychoJS.experiment.removeLoop(binRiv_trials_sess1);

  return Scheduler.Event.NEXT;
}


async function defineEyeLoopEnd() {
  psychoJS.experiment.removeLoop(defineEye);

  return Scheduler.Event.NEXT;
}


var t1Drift;
function t1DriftLoopBegin(t1DriftLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    t1Drift = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, fileCSV, driftrows),
      seed: undefined, name: 't1Drift'
    });
    psychoJS.experiment.addLoop(t1Drift); // add the loop to the experiment
    currentLoop = t1Drift;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    t1Drift.forEach(function() {
      const snapshot = t1Drift.getSnapshot();
    
      t1DriftLoopScheduler.add(importConditions(snapshot));
      t1DriftLoopScheduler.add(trial1ConstRoutineBegin(snapshot));
      t1DriftLoopScheduler.add(trial1ConstRoutineEachFrame());
      t1DriftLoopScheduler.add(trial1ConstRoutineEnd());
      t1DriftLoopScheduler.add(endLoopIteration(t1DriftLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function t1DriftLoopEnd() {
  psychoJS.experiment.removeLoop(t1Drift);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: trialReps, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialSetUpRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialSetUpRoutineEachFrame());
      trialsLoopScheduler.add(trialSetUpRoutineEnd());
      const decDriftLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(decDriftLoopBegin(decDriftLoopScheduler, snapshot));
      trialsLoopScheduler.add(decDriftLoopScheduler);
      trialsLoopScheduler.add(decDriftLoopEnd);
      const incDriftLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(incDriftLoopBegin(incDriftLoopScheduler, snapshot));
      trialsLoopScheduler.add(incDriftLoopScheduler);
      trialsLoopScheduler.add(incDriftLoopEnd);
      trialsLoopScheduler.add(changeDirRoutineBegin(snapshot));
      trialsLoopScheduler.add(changeDirRoutineEachFrame());
      trialsLoopScheduler.add(changeDirRoutineEnd());
      const constDriftLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(constDriftLoopBegin(constDriftLoopScheduler, snapshot));
      trialsLoopScheduler.add(constDriftLoopScheduler);
      trialsLoopScheduler.add(constDriftLoopEnd);
      trialsLoopScheduler.add(nextTrialRoutineBegin(snapshot));
      trialsLoopScheduler.add(nextTrialRoutineEachFrame());
      trialsLoopScheduler.add(nextTrialRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var decDrift;
function decDriftLoopBegin(decDriftLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    decDrift = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, fileCSV, driftrows),
      seed: undefined, name: 'decDrift'
    });
    psychoJS.experiment.addLoop(decDrift); // add the loop to the experiment
    currentLoop = decDrift;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    decDrift.forEach(function() {
      const snapshot = decDrift.getSnapshot();
    
      decDriftLoopScheduler.add(importConditions(snapshot));
      decDriftLoopScheduler.add(gradDecRoutineBegin(snapshot));
      decDriftLoopScheduler.add(gradDecRoutineEachFrame());
      decDriftLoopScheduler.add(gradDecRoutineEnd());
      decDriftLoopScheduler.add(endLoopIteration(decDriftLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function decDriftLoopEnd() {
  psychoJS.experiment.removeLoop(decDrift);

  return Scheduler.Event.NEXT;
}


var incDrift;
function incDriftLoopBegin(incDriftLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    incDrift = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, fileCSV, driftrows),
      seed: undefined, name: 'incDrift'
    });
    psychoJS.experiment.addLoop(incDrift); // add the loop to the experiment
    currentLoop = incDrift;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    incDrift.forEach(function() {
      const snapshot = incDrift.getSnapshot();
    
      incDriftLoopScheduler.add(importConditions(snapshot));
      incDriftLoopScheduler.add(gradIncRoutineBegin(snapshot));
      incDriftLoopScheduler.add(gradIncRoutineEachFrame());
      incDriftLoopScheduler.add(gradIncRoutineEnd());
      incDriftLoopScheduler.add(endLoopIteration(incDriftLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function incDriftLoopEnd() {
  psychoJS.experiment.removeLoop(incDrift);

  return Scheduler.Event.NEXT;
}


var constDrift;
function constDriftLoopBegin(constDriftLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    constDrift = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, fileCSV, driftrows),
      seed: undefined, name: 'constDrift'
    });
    psychoJS.experiment.addLoop(constDrift); // add the loop to the experiment
    currentLoop = constDrift;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    constDrift.forEach(function() {
      const snapshot = constDrift.getSnapshot();
    
      constDriftLoopScheduler.add(importConditions(snapshot));
      constDriftLoopScheduler.add(trialConstRoutineBegin(snapshot));
      constDriftLoopScheduler.add(trialConstRoutineEachFrame());
      constDriftLoopScheduler.add(trialConstRoutineEnd());
      constDriftLoopScheduler.add(endLoopIteration(constDriftLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function constDriftLoopEnd() {
  psychoJS.experiment.removeLoop(constDrift);

  return Scheduler.Event.NEXT;
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
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
    /* Syntax Error: Fix Python code */
    // setup some python lists for storing info about the nextMouse1
    nextMouse1.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    findScreenEdgeComponents = [];
    findScreenEdgeComponents.push(instruct);
    findScreenEdgeComponents.push(line);
    findScreenEdgeComponents.push(moveTri);
    findScreenEdgeComponents.push(targetTri);
    findScreenEdgeComponents.push(nextPoly1);
    findScreenEdgeComponents.push(nextButton1);
    findScreenEdgeComponents.push(nextMouse1);
    findScreenEdgeComponents.push(text);
    
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
    keys = psychoJS.eventManager.getKeys();
    if ((xPos > (- 500))) {
        posChange = 10;
    } else {
        if (((xPos < (- 500)) && (xPos > (- 610)))) {
            posChange = 5;
        } else {
            posChange = 3;
        }
    }
    if (keys.length) {
        if (_pj.in_es6("right", keys)) {
            xPos = (xPos + posChange);
        } else {
            if (_pj.in_es6("left", keys)) {
                xPos = (xPos - posChange);
            }
        }
    }
    
    
    // *line* updates
    if (t >= 0.0 && line.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line.tStart = t;  // (not accounting for frame time here)
      line.frameNStart = frameN;  // exact frame index
      
      line.setAutoDraw(true);
    }

    
    // *moveTri* updates
    if (t >= 0.0 && moveTri.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moveTri.tStart = t;  // (not accounting for frame time here)
      moveTri.frameNStart = frameN;  // exact frame index
      
      moveTri.setAutoDraw(true);
    }

    
    if (moveTri.status === PsychoJS.Status.STARTED){ // only update if being drawn
      moveTri.setPos([xPos, 35], false);
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
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    if (text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text.setText(xPos, false);
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
    screenEdgeNorm = xPos;
    screenEdgePx = screenEdgeNorm;
    if ((screenEdgePx < (- 300))) {
        skip_checkEdge = true;
        screenEdgeLoop.finished = true;
    }
    psychoJS.experiment.addData("screenEdgePx", screenEdgePx);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "findScreenEdge" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var checkScreenEdgeComponents;
function checkScreenEdgeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'checkScreenEdge'-------
    t = 0;
    checkScreenEdgeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the tryAgainMouse
    tryAgainMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    checkScreenEdgeComponents = [];
    checkScreenEdgeComponents.push(instructPls);
    checkScreenEdgeComponents.push(tryAgainPoly);
    checkScreenEdgeComponents.push(tryAgainButton);
    checkScreenEdgeComponents.push(tryAgainMouse);
    
    checkScreenEdgeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function checkScreenEdgeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'checkScreenEdge'-------
    // get current time
    t = checkScreenEdgeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((skip_checkEdge === true)) {
        continueRoutine = false;
    }
    
    
    // *instructPls* updates
    if (t >= 0.0 && instructPls.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructPls.tStart = t;  // (not accounting for frame time here)
      instructPls.frameNStart = frameN;  // exact frame index
      
      instructPls.setAutoDraw(true);
    }

    
    // *tryAgainPoly* updates
    if (t >= 0.0 && tryAgainPoly.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tryAgainPoly.tStart = t;  // (not accounting for frame time here)
      tryAgainPoly.frameNStart = frameN;  // exact frame index
      
      tryAgainPoly.setAutoDraw(true);
    }

    
    // *tryAgainButton* updates
    if (t >= 0.0 && tryAgainButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tryAgainButton.tStart = t;  // (not accounting for frame time here)
      tryAgainButton.frameNStart = frameN;  // exact frame index
      
      tryAgainButton.setAutoDraw(true);
    }

    
    if (tryAgainButton.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tryAgainButton.setText('Try again', false);
    }
    // *tryAgainMouse* updates
    if (t >= 0.0 && tryAgainMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tryAgainMouse.tStart = t;  // (not accounting for frame time here)
      tryAgainMouse.frameNStart = frameN;  // exact frame index
      
      tryAgainMouse.status = PsychoJS.Status.STARTED;
      tryAgainMouse.mouseClock.reset();
      prevButtonState = tryAgainMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (tryAgainMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = tryAgainMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [tryAgainButton]) {
            if (obj.contains(tryAgainMouse)) {
              gotValidClick = true;
              tryAgainMouse.clicked_name.push(obj.name)
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
    checkScreenEdgeComponents.forEach( function(thisComponent) {
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


function checkScreenEdgeRoutineEnd() {
  return async function () {
    //------Ending Routine 'checkScreenEdge'-------
    checkScreenEdgeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "checkScreenEdge" was not non-slip safe, so reset the non-slip timer
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
        eyeDom = 1;
        binRivRun = 0;
        trialReps = 30;
        blockReps = 1;
        finalTrialDur = 3;
        contrastTrials = 5;
        contCounter = 1;
        skipContrast = 1;
    } else {
        eyeDom = 0;
        binRivRun = 1;
        trialReps = 30;
        blockReps = 6;
        finalTrialDur = 10;
        contrastTrials = 0;
        skipContrast = 0;
        contB = expInfo["previous contrast"];
        contB = Number.parseFloat(contB);
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


var _key_start_allKeys;
var contStrCounter;
var instContrastComponents;
function instContrastRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instContrast'-------
    t = 0;
    instContrastClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_start.keys = undefined;
    key_start.rt = undefined;
    _key_start_allKeys = [];
    contStrCounter = contCounter.toString();
    txtVar = (("You are starting trial " + contStrCounter) + " of 5 trials");
    contB = 0.7;
    
    blockCount.setText(txtVar);
    whichCSV_2.setText(fileCSV);
    // keep track of which components have finished
    instContrastComponents = [];
    instContrastComponents.push(instructions);
    instContrastComponents.push(key_start);
    instContrastComponents.push(blockCount);
    instContrastComponents.push(whichCSV_2);
    
    instContrastComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instContrastRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instContrast'-------
    // get current time
    t = instContrastClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions* updates
    if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }

    
    // *key_start* updates
    if (t >= 0.0 && key_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_start.tStart = t;  // (not accounting for frame time here)
      key_start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_start.clock.reset();
      key_start.start();
      key_start.clearEvents();
    }

    if (key_start.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_start.getKeys({keyList: [], waitRelease: false});
      _key_start_allKeys = _key_start_allKeys.concat(theseKeys);
      if (_key_start_allKeys.length > 0) {
        key_start.keys = _key_start_allKeys[_key_start_allKeys.length - 1].name;  // just the last key pressed
        key_start.rt = _key_start_allKeys[_key_start_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *blockCount* updates
    if (t >= 0.0 && blockCount.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blockCount.tStart = t;  // (not accounting for frame time here)
      blockCount.frameNStart = frameN;  // exact frame index
      
      blockCount.setAutoDraw(true);
    }

    
    // *whichCSV_2* updates
    if (t >= 0.0 && whichCSV_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      whichCSV_2.tStart = t;  // (not accounting for frame time here)
      whichCSV_2.frameNStart = frameN;  // exact frame index
      
      whichCSV_2.setAutoDraw(true);
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
    instContrastComponents.forEach( function(thisComponent) {
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


function instContrastRoutineEnd() {
  return async function () {
    //------Ending Routine 'instContrast'-------
    instContrastComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_start.stop();
    // the Routine "instContrast" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _contrastResp_allKeys;
var gratingContrastComponents;
function gratingContrastRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'gratingContrast'-------
    t = 0;
    gratingContrastClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    bulls_stim.setOpacity(contB);
    bulls_stim.setPos(placeB);
    bulls_stim.setImage(image_bullsEye);
    radial_stim.setOpacity(contR);
    radial_stim.setPos(placeR);
    radial_stim.setImage(image_radialEye);
    overlayRadial.setOpacity(contB);
    overlayRadial.setPos(placeR);
    contrastResp.keys = undefined;
    contrastResp.rt = undefined;
    _contrastResp_allKeys = [];
    radialLabel.setPos(labelR);
    bullsLabel.setPos(labelB);
    // keep track of which components have finished
    gratingContrastComponents = [];
    gratingContrastComponents.push(brightInst);
    gratingContrastComponents.push(keyPressInst);
    gratingContrastComponents.push(bulls_stim);
    gratingContrastComponents.push(radial_stim);
    gratingContrastComponents.push(overlayRadial);
    gratingContrastComponents.push(contrastResp);
    gratingContrastComponents.push(radialLabel);
    gratingContrastComponents.push(bullsLabel);
    
    gratingContrastComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function gratingContrastRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'gratingContrast'-------
    // get current time
    t = gratingContrastClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *brightInst* updates
    if (t >= 0.0 && brightInst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      brightInst.tStart = t;  // (not accounting for frame time here)
      brightInst.frameNStart = frameN;  // exact frame index
      
      brightInst.setAutoDraw(true);
    }

    
    // *keyPressInst* updates
    if (t >= 0.0 && keyPressInst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyPressInst.tStart = t;  // (not accounting for frame time here)
      keyPressInst.frameNStart = frameN;  // exact frame index
      
      keyPressInst.setAutoDraw(true);
    }

    
    // *bulls_stim* updates
    if (t >= 0.0 && bulls_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bulls_stim.tStart = t;  // (not accounting for frame time here)
      bulls_stim.frameNStart = frameN;  // exact frame index
      
      bulls_stim.setAutoDraw(true);
    }

    
    // *radial_stim* updates
    if (t >= 0.0 && radial_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radial_stim.tStart = t;  // (not accounting for frame time here)
      radial_stim.frameNStart = frameN;  // exact frame index
      
      radial_stim.setAutoDraw(true);
    }

    
    // *overlayRadial* updates
    if (t >= 0.0 && overlayRadial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      overlayRadial.tStart = t;  // (not accounting for frame time here)
      overlayRadial.frameNStart = frameN;  // exact frame index
      
      overlayRadial.setAutoDraw(true);
    }

    
    // *contrastResp* updates
    if (t >= 0.0 && contrastResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contrastResp.tStart = t;  // (not accounting for frame time here)
      contrastResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { contrastResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { contrastResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { contrastResp.clearEvents(); });
    }

    if (contrastResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = contrastResp.getKeys({keyList: ['up', 'down', 'space'], waitRelease: false});
      _contrastResp_allKeys = _contrastResp_allKeys.concat(theseKeys);
      if (_contrastResp_allKeys.length > 0) {
        contrastResp.keys = _contrastResp_allKeys[_contrastResp_allKeys.length - 1].name;  // just the last key pressed
        contrastResp.rt = _contrastResp_allKeys[_contrastResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *radialLabel* updates
    if (t >= 0.0 && radialLabel.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radialLabel.tStart = t;  // (not accounting for frame time here)
      radialLabel.frameNStart = frameN;  // exact frame index
      
      radialLabel.setAutoDraw(true);
    }

    
    // *bullsLabel* updates
    if (t >= 0.0 && bullsLabel.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bullsLabel.tStart = t;  // (not accounting for frame time here)
      bullsLabel.frameNStart = frameN;  // exact frame index
      
      bullsLabel.setAutoDraw(true);
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
    gratingContrastComponents.forEach( function(thisComponent) {
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


function gratingContrastRoutineEnd() {
  return async function () {
    //------Ending Routine 'gratingContrast'-------
    gratingContrastComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('contrastResp.keys', contrastResp.keys);
    if (typeof contrastResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('contrastResp.rt', contrastResp.rt);
        routineTimer.reset();
        }
    
    contrastResp.stop();
    if ((contrastResp.keys === "space")) {
        adjustContrast.finished = true;
    }
    
    // the Routine "gratingContrast" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gratingCodeComponents;
function gratingCodeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'gratingCode'-------
    t = 0;
    gratingCodeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    gratingCodeComponents = [];
    
    gratingCodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function gratingCodeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'gratingCode'-------
    // get current time
    t = gratingCodeClock.getTime();
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
    gratingCodeComponents.forEach( function(thisComponent) {
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


function gratingCodeRoutineEnd() {
  return async function () {
    //------Ending Routine 'gratingCode'-------
    gratingCodeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((contrastResp.keys === "up")) {
        contB += 0.01;
        if ((contB > 1)) {
            contB = 1;
        }
    }
    if ((contrastResp.keys === "down")) {
        contB -= 0.01;
        if ((contB <= 0)) {
            contB = 0;
        }
    }
    
    // the Routine "gratingCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_cont_3_allKeys;
var bothContrastComponents;
function bothContrastRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'bothContrast'-------
    t = 0;
    bothContrastClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    radial_stim_2.setOpacity(contR);
    radial_stim_2.setImage(image_radialEye);
    bulls_stim_2.setOpacity(contB);
    bulls_stim_2.setImage(image_bullsEye);
    key_resp_cont_3.keys = undefined;
    key_resp_cont_3.rt = undefined;
    _key_resp_cont_3_allKeys = [];
    // keep track of which components have finished
    bothContrastComponents = [];
    bothContrastComponents.push(radial_stim_2);
    bothContrastComponents.push(bulls_stim_2);
    bothContrastComponents.push(brightInst_2);
    bothContrastComponents.push(key_resp_cont_3);
    
    bothContrastComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function bothContrastRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'bothContrast'-------
    // get current time
    t = bothContrastClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *radial_stim_2* updates
    if (t >= 0.0 && radial_stim_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radial_stim_2.tStart = t;  // (not accounting for frame time here)
      radial_stim_2.frameNStart = frameN;  // exact frame index
      
      radial_stim_2.setAutoDraw(true);
    }

    
    // *bulls_stim_2* updates
    if (t >= 0.0 && bulls_stim_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bulls_stim_2.tStart = t;  // (not accounting for frame time here)
      bulls_stim_2.frameNStart = frameN;  // exact frame index
      
      bulls_stim_2.setAutoDraw(true);
    }

    
    // *brightInst_2* updates
    if (t >= 0.0 && brightInst_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      brightInst_2.tStart = t;  // (not accounting for frame time here)
      brightInst_2.frameNStart = frameN;  // exact frame index
      
      brightInst_2.setAutoDraw(true);
    }

    
    // *key_resp_cont_3* updates
    if (t >= 0.0 && key_resp_cont_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_cont_3.tStart = t;  // (not accounting for frame time here)
      key_resp_cont_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_cont_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_cont_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_cont_3.clearEvents(); });
    }

    if (key_resp_cont_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_cont_3.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_cont_3_allKeys = _key_resp_cont_3_allKeys.concat(theseKeys);
      if (_key_resp_cont_3_allKeys.length > 0) {
        key_resp_cont_3.keys = _key_resp_cont_3_allKeys[_key_resp_cont_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_cont_3.rt = _key_resp_cont_3_allKeys[_key_resp_cont_3_allKeys.length - 1].rt;
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
    bothContrastComponents.forEach( function(thisComponent) {
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


function bothContrastRoutineEnd() {
  return async function () {
    //------Ending Routine 'bothContrast'-------
    bothContrastComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_cont_3.keys', key_resp_cont_3.keys);
    if (typeof key_resp_cont_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_cont_3.rt', key_resp_cont_3.rt);
        routineTimer.reset();
        }
    
    key_resp_cont_3.stop();
    if ((key_resp_cont_3.keys === "y")) {
        redoContAdj.finished = true;
    } else {
        contB = 0.7;
        contR = 1.0;
    }
    
    // the Routine "bothContrast" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var contrastTrialsComponents;
function contrastTrialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'contrastTrials'-------
    t = 0;
    contrastTrialsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    contCounter += 1;
    contrastRange.append(contB);
    tempCont += contB;
    
    // keep track of which components have finished
    contrastTrialsComponents = [];
    
    contrastTrialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function contrastTrialsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'contrastTrials'-------
    // get current time
    t = contrastTrialsClock.getTime();
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
    contrastTrialsComponents.forEach( function(thisComponent) {
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


function contrastTrialsRoutineEnd() {
  return async function () {
    //------Ending Routine 'contrastTrials'-------
    contrastTrialsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((contCounter === 5)) {
        contB = (tempCont / 5);
    }
    
    // the Routine "contrastTrials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var txtContB;
var _key_resp_2_allKeys;
var finalContComponents;
function finalContRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'finalCont'-------
    t = 0;
    finalContClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    contB = (tempCont / 5);
    txtContB = Math.round(contB, 2);
    txtVar = ("Your contrast number is " + txtContB.toString());
    psychoJS.experiment.addData("contrastRange", contrastRange);
    
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    finalContComponents = [];
    finalContComponents.push(instContNum);
    finalContComponents.push(displayContNum);
    finalContComponents.push(key_resp_2);
    
    finalContComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function finalContRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'finalCont'-------
    // get current time
    t = finalContClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instContNum* updates
    if (t >= 0.0 && instContNum.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instContNum.tStart = t;  // (not accounting for frame time here)
      instContNum.frameNStart = frameN;  // exact frame index
      
      instContNum.setAutoDraw(true);
    }

    
    // *displayContNum* updates
    if (t >= 0.0 && displayContNum.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      displayContNum.tStart = t;  // (not accounting for frame time here)
      displayContNum.frameNStart = frameN;  // exact frame index
      
      displayContNum.setAutoDraw(true);
    }

    
    if (displayContNum.status === PsychoJS.Status.STARTED){ // only update if being drawn
      displayContNum.setText(txtContB, false);
    }
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['y', 'n', 'left', 'right', 'space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
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
    finalContComponents.forEach( function(thisComponent) {
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


function finalContRoutineEnd() {
  return async function () {
    //------Ending Routine 'finalCont'-------
    finalContComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_2.stop();
    // the Routine "finalCont" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var binRivInst_sess1Components;
function binRivInst_sess1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'binRivInst_sess1'-------
    t = 0;
    binRivInst_sess1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.125000);
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    radialEye_2.setOpacity(contR);
    radialEye_2.setImage(image_radialEye);
    bullseye_2.setOpacity(contB);
    bullseye_2.setImage(image_bullsEye);
    constSize = (imgSizeCm * pxPerCm);
    minVal = constSize;
    maxVal = (constSize + 30);
    brd = ((constSize + 45) + 40);
    
    // keep track of which components have finished
    binRivInst_sess1Components = [];
    binRivInst_sess1Components.push(warning_2);
    binRivInst_sess1Components.push(describeBR);
    binRivInst_sess1Components.push(key_resp_3);
    binRivInst_sess1Components.push(radialEye_2);
    binRivInst_sess1Components.push(bullseye_2);
    
    binRivInst_sess1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function binRivInst_sess1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'binRivInst_sess1'-------
    // get current time
    t = binRivInst_sess1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *warning_2* updates
    if (t >= 0.0 && warning_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      warning_2.tStart = t;  // (not accounting for frame time here)
      warning_2.frameNStart = frameN;  // exact frame index
      
      warning_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (warning_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      warning_2.setAutoDraw(false);
    }
    
    // *describeBR* updates
    if (t >= 0.0 && describeBR.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      describeBR.tStart = t;  // (not accounting for frame time here)
      describeBR.frameNStart = frameN;  // exact frame index
      
      describeBR.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (describeBR.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      describeBR.setAutoDraw(false);
    }
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_3.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
      }
    }
    
    
    // *radialEye_2* updates
    if (t >= 0.0 && radialEye_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radialEye_2.tStart = t;  // (not accounting for frame time here)
      radialEye_2.frameNStart = frameN;  // exact frame index
      
      radialEye_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (radialEye_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      radialEye_2.setAutoDraw(false);
    }
    
    // *bullseye_2* updates
    if (t >= 0.0 && bullseye_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bullseye_2.tStart = t;  // (not accounting for frame time here)
      bullseye_2.frameNStart = frameN;  // exact frame index
      
      bullseye_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bullseye_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bullseye_2.setAutoDraw(false);
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
    binRivInst_sess1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function binRivInst_sess1RoutineEnd() {
  return async function () {
    //------Ending Routine 'binRivInst_sess1'-------
    binRivInst_sess1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_3.stop();
    if ((key_resp_3.keys === "space")) {
        instBR_drift_sess1.finished = true;
    }
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_BR_allKeys;
var binRivComponents;
function binRivRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'binRiv'-------
    t = 0;
    binRivClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.125000);
    // update component parameters for each repeat
    key_resp_BR.keys = undefined;
    key_resp_BR.rt = undefined;
    _key_resp_BR_allKeys = [];
    border_4.setSize([brd, brd]);
    border_4.setImage(checkBorder);
    radialEye_BR.setOpacity(contR);
    radialEye_BR.setSize([maxVal, maxVal]);
    radialEye_BR.setImage(image_radialEye);
    bullsEye_BR.setOpacity(contB);
    bullsEye_BR.setSize([maxVal, maxVal]);
    bullsEye_BR.setImage(image_bullsEye);
    fixation_5.setColor(new util.Color('white'));
    // keep track of which components have finished
    binRivComponents = [];
    binRivComponents.push(reminder);
    binRivComponents.push(key_resp_BR);
    binRivComponents.push(border_4);
    binRivComponents.push(radialEye_BR);
    binRivComponents.push(bullsEye_BR);
    binRivComponents.push(fixation_5);
    
    binRivComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function binRivRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'binRiv'-------
    // get current time
    t = binRivClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *reminder* updates
    if (t >= 0.0 && reminder.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reminder.tStart = t;  // (not accounting for frame time here)
      reminder.frameNStart = frameN;  // exact frame index
      
      reminder.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reminder.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reminder.setAutoDraw(false);
    }
    
    // *key_resp_BR* updates
    if (t >= 0.0 && key_resp_BR.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_BR.tStart = t;  // (not accounting for frame time here)
      key_resp_BR.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_BR.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_BR.start(); }); // start on screen flip
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_BR.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_BR.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_BR.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_BR.getKeys({keyList: ['down', 'right', 'left'], waitRelease: false});
      _key_resp_BR_allKeys = _key_resp_BR_allKeys.concat(theseKeys);
      if (_key_resp_BR_allKeys.length > 0) {
        key_resp_BR.keys = _key_resp_BR_allKeys.map((key) => key.name);  // storing all keys
        key_resp_BR.rt = _key_resp_BR_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *border_4* updates
    if (t >= 0.0 && border_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      border_4.tStart = t;  // (not accounting for frame time here)
      border_4.frameNStart = frameN;  // exact frame index
      
      border_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (border_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      border_4.setAutoDraw(false);
    }
    
    // *radialEye_BR* updates
    if (t >= 0.0 && radialEye_BR.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radialEye_BR.tStart = t;  // (not accounting for frame time here)
      radialEye_BR.frameNStart = frameN;  // exact frame index
      
      radialEye_BR.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (radialEye_BR.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      radialEye_BR.setAutoDraw(false);
    }
    
    // *bullsEye_BR* updates
    if (t >= 0.0 && bullsEye_BR.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bullsEye_BR.tStart = t;  // (not accounting for frame time here)
      bullsEye_BR.frameNStart = frameN;  // exact frame index
      
      bullsEye_BR.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bullsEye_BR.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bullsEye_BR.setAutoDraw(false);
    }
    
    // *fixation_5* updates
    if (t >= 0.0 && fixation_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_5.tStart = t;  // (not accounting for frame time here)
      fixation_5.frameNStart = frameN;  // exact frame index
      
      fixation_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_5.setAutoDraw(false);
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
    binRivComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function binRivRoutineEnd() {
  return async function () {
    //------Ending Routine 'binRiv'-------
    binRivComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_BR.keys', key_resp_BR.keys);
    if (typeof key_resp_BR.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_BR.rt', key_resp_BR.rt);
        }
    
    key_resp_BR.stop();
    return Scheduler.Event.NEXT;
  };
}


var currSize;
var blockSetUpComponents;
function blockSetUpRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'blockSetUp'-------
    t = 0;
    blockSetUpClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    imgSizeCm = ((2 * dist2screen) * tan((0.5 * desiredVisAngl)));
    
    constSize = (imgSizeCm * pxPerCm);
    minVal = constSize;
    maxVal = (constSize + 30);
    finChanges = [];
    for (var i = 0, _pj_a = stairSteps.length; (i < _pj_a); i += 1) {
        finChanges.append(0);
    }
    for (var i = 0, _pj_a = stairSteps.length; (i < _pj_a); i += 1) {
        if ((i === 0)) {
            finChanges[i] = minVal;
        } else {
            finChanges[i] = (finChanges[(i - 1)] + stairSteps[(i - 1)]);
        }
    }
    if ((thisInd === 0)) {
        currSize = finChanges[0];
    }
    brd = ((constSize + 45) + 40);
    
    // keep track of which components have finished
    blockSetUpComponents = [];
    
    blockSetUpComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blockSetUpRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'blockSetUp'-------
    // get current time
    t = blockSetUpClock.getTime();
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
    blockSetUpComponents.forEach( function(thisComponent) {
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


function blockSetUpRoutineEnd() {
  return async function () {
    //------Ending Routine 'blockSetUp'-------
    blockSetUpComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "blockSetUp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_const_trial1_allKeys;
var trial1ConstComponents;
function trial1ConstRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial1Const'-------
    t = 0;
    trial1ConstClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.125000);
    // update component parameters for each repeat
    key_resp_const_trial1.keys = undefined;
    key_resp_const_trial1.rt = undefined;
    _key_resp_const_trial1_allKeys = [];
    border.setSize([brd, brd]);
    border.setImage(checkBorder);
    radialEye_stim_const_trial1.setOpacity(contR);
    radialEye_stim_const_trial1.setSize([((imgSizeCm * pxPerCm) + 30), ((imgSizeCm * pxPerCm) + 30)]);
    radialEye_stim_const_trial1.setImage(image_radialEye);
    bullseye_stim_const_trial1.setOpacity(contB);
    bullseye_stim_const_trial1.setSize([((imgSizeCm * pxPerCm) + 30), ((imgSizeCm * pxPerCm) + 30)]);
    bullseye_stim_const_trial1.setImage(image_bullsEye);
    // keep track of which components have finished
    trial1ConstComponents = [];
    trial1ConstComponents.push(key_resp_const_trial1);
    trial1ConstComponents.push(border);
    trial1ConstComponents.push(radialEye_stim_const_trial1);
    trial1ConstComponents.push(bullseye_stim_const_trial1);
    trial1ConstComponents.push(fixation_6);
    trial1ConstComponents.push(Instruction_4);
    
    trial1ConstComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trial1ConstRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial1Const'-------
    // get current time
    t = trial1ConstClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_const_trial1* updates
    if (t >= 0.0 && key_resp_const_trial1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_const_trial1.tStart = t;  // (not accounting for frame time here)
      key_resp_const_trial1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_const_trial1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_const_trial1.start(); }); // start on screen flip
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_const_trial1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_const_trial1.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_const_trial1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_const_trial1.getKeys({keyList: ['up', 'right'], waitRelease: false});
      _key_resp_const_trial1_allKeys = _key_resp_const_trial1_allKeys.concat(theseKeys);
      if (_key_resp_const_trial1_allKeys.length > 0) {
        key_resp_const_trial1.keys = _key_resp_const_trial1_allKeys[_key_resp_const_trial1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_const_trial1.rt = _key_resp_const_trial1_allKeys[_key_resp_const_trial1_allKeys.length - 1].rt;
      }
    }
    
    
    // *border* updates
    if (t >= 0.0 && border.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      border.tStart = t;  // (not accounting for frame time here)
      border.frameNStart = frameN;  // exact frame index
      
      border.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (border.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      border.setAutoDraw(false);
    }
    
    // *radialEye_stim_const_trial1* updates
    if (t >= 0.0 && radialEye_stim_const_trial1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radialEye_stim_const_trial1.tStart = t;  // (not accounting for frame time here)
      radialEye_stim_const_trial1.frameNStart = frameN;  // exact frame index
      
      radialEye_stim_const_trial1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (radialEye_stim_const_trial1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      radialEye_stim_const_trial1.setAutoDraw(false);
    }
    
    // *bullseye_stim_const_trial1* updates
    if (t >= 0.0 && bullseye_stim_const_trial1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bullseye_stim_const_trial1.tStart = t;  // (not accounting for frame time here)
      bullseye_stim_const_trial1.frameNStart = frameN;  // exact frame index
      
      bullseye_stim_const_trial1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bullseye_stim_const_trial1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bullseye_stim_const_trial1.setAutoDraw(false);
    }
    
    // *fixation_6* updates
    if (t >= 0.0 && fixation_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_6.tStart = t;  // (not accounting for frame time here)
      fixation_6.frameNStart = frameN;  // exact frame index
      
      fixation_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_6.setAutoDraw(false);
    }
    
    // *Instruction_4* updates
    if (t >= 0.0 && Instruction_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_4.tStart = t;  // (not accounting for frame time here)
      Instruction_4.frameNStart = frameN;  // exact frame index
      
      Instruction_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Instruction_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Instruction_4.setAutoDraw(false);
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
    trial1ConstComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial1ConstRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial1Const'-------
    trial1ConstComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_const_trial1.keys', key_resp_const_trial1.keys);
    if (typeof key_resp_const_trial1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_const_trial1.rt', key_resp_const_trial1.rt);
        }
    
    key_resp_const_trial1.stop();
    return Scheduler.Event.NEXT;
  };
}


var tall_wide;
var newW;
var newH;
var wrongAns;
var keypresses;
var rtList;
var resp;
var gradH;
var gradW;
var gradSize;
var reps;
var cueTime;
var cueTxt;
var trialSetUpComponents;
function trialSetUpRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trialSetUp'-------
    t = 0;
    trialSetUpClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    tall_wide = Math.random();
    while ((tall_wide === 0.5)) {
        tall_wide = Math.random();
    }
    if ((tall_wide > 0.5)) {
        newW = finChanges[thisInd];
        newH = maxVal;
        currSize = newW;
    } else {
        newH = finChanges[thisInd];
        newW = maxVal;
        currSize = newH;
    }
    if ((newW < maxVal)) {
        corrAns = "up";
        wrongAns = "right";
    } else {
        if ((newH < maxVal)) {
            corrAns = "right";
            wrongAns = "up";
        }
    }
    keypresses = [];
    rtList = [];
    resp = "";
    gradH = maxVal;
    gradW = gradH;
    gradSize = 0;
    if ((newH < maxVal)) {
        gradSize = (Math.abs((newH - maxVal)) / gradDur);
    }
    if ((newW < maxVal)) {
        gradSize = (Math.abs((newW - maxVal)) / gradDur);
    }
    reps = util.randint(3, finalTrialDur);
    if ((newH < maxVal)) {
        whichTrial = "wide trial";
    }
    if ((newW < maxVal)) {
        whichTrial = "tall trial";
    }
    totTrialCount += 1;
    
    currPos = 0;
    cueTime = Math.random();
    currRatio = "";
    while ((cueTime === 0.5)) {
        cueTime = Math.random();
    }
    cueTxt = cueTime.toString();
    if ((cueTime < 0.5)) {
        cueColor = "black";
        cueChngColor = "black";
        cueType = "notDisp";
    } else {
        cueColor = "white";
        cueChngColor = "green";
        cueType = "disp";
    }
    
    // keep track of which components have finished
    trialSetUpComponents = [];
    
    trialSetUpComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialSetUpRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trialSetUp'-------
    // get current time
    t = trialSetUpClock.getTime();
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
    trialSetUpComponents.forEach( function(thisComponent) {
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


function trialSetUpRoutineEnd() {
  return async function () {
    //------Ending Routine 'trialSetUp'-------
    trialSetUpComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "trialSetUp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _gradDecResp_allKeys;
var gradDecComponents;
function gradDecRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'gradDec'-------
    t = 0;
    gradDecClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.125000);
    // update component parameters for each repeat
    if ((tcount_1 > (nFrames - (gradDur * 2)))) {
        if ((newH < maxVal)) {
            gradH -= gradSize;
            if ((tcount_1 > (nFrames - gradDur))) {
                gradH = newH;
            }
        }
        if ((newW < maxVal)) {
            gradW -= gradSize;
            if ((tcount_1 > (nFrames - gradDur))) {
                gradW = newW;
            }
        }
    }
    
    gradDecResp.keys = undefined;
    gradDecResp.rt = undefined;
    _gradDecResp_allKeys = [];
    border_2.setSize([brd, brd]);
    border_2.setImage(checkBorder);
    radialEye_change.setOpacity(contR);
    radialEye_change.setSize([maxVal, maxVal]);
    radialEye_change.setImage(image_radialEye);
    bullsEye_gradChange.setOpacity(contB);
    bullsEye_gradChange.setSize([gradW, gradH]);
    bullsEye_gradChange.setImage(image_bullsEye);
    noChangeMarker_2.setFillColor(new util.Color(cueColor));
    noChangeMarker_2.setLineColor(new util.Color(cueColor));
    currChange_2.setFillColor(new util.Color(cueChngColor));
    currChange_2.setLineColor(new util.Color(cueChngColor));
    // keep track of which components have finished
    gradDecComponents = [];
    gradDecComponents.push(gradDecResp);
    gradDecComponents.push(border_2);
    gradDecComponents.push(radialEye_change);
    gradDecComponents.push(bullsEye_gradChange);
    gradDecComponents.push(fixation);
    gradDecComponents.push(Instruction);
    gradDecComponents.push(tallMarker_2);
    gradDecComponents.push(wideMarker_2);
    gradDecComponents.push(noChangeMarker_2);
    gradDecComponents.push(currChange_2);
    
    gradDecComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function gradDecRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'gradDec'-------
    // get current time
    t = gradDecClock.getTime();
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
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("right", keys)) {
            currPos = (currPos + change);
            if ((currPos > 0.2)) {
                currPos = 0.2;
            }
        } else {
            if (_pj.in_es6("left", keys)) {
                currPos = (currPos - change);
                if ((currPos < (- 0.2))) {
                    currPos = (- 0.2);
                }
            }
        }
    }
    
    
    // *gradDecResp* updates
    if (t >= 0.0 && gradDecResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gradDecResp.tStart = t;  // (not accounting for frame time here)
      gradDecResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { gradDecResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { gradDecResp.start(); }); // start on screen flip
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gradDecResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gradDecResp.status = PsychoJS.Status.FINISHED;
  }

    if (gradDecResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = gradDecResp.getKeys({keyList: ['right', 'up'], waitRelease: false});
      _gradDecResp_allKeys = _gradDecResp_allKeys.concat(theseKeys);
      if (_gradDecResp_allKeys.length > 0) {
        gradDecResp.keys = _gradDecResp_allKeys[_gradDecResp_allKeys.length - 1].name;  // just the last key pressed
        gradDecResp.rt = _gradDecResp_allKeys[_gradDecResp_allKeys.length - 1].rt;
      }
    }
    
    
    // *border_2* updates
    if (t >= 0.0 && border_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      border_2.tStart = t;  // (not accounting for frame time here)
      border_2.frameNStart = frameN;  // exact frame index
      
      border_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (border_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      border_2.setAutoDraw(false);
    }
    
    // *radialEye_change* updates
    if (t >= 0.0 && radialEye_change.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radialEye_change.tStart = t;  // (not accounting for frame time here)
      radialEye_change.frameNStart = frameN;  // exact frame index
      
      radialEye_change.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (radialEye_change.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      radialEye_change.setAutoDraw(false);
    }
    
    // *bullsEye_gradChange* updates
    if (t >= 0.0 && bullsEye_gradChange.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bullsEye_gradChange.tStart = t;  // (not accounting for frame time here)
      bullsEye_gradChange.frameNStart = frameN;  // exact frame index
      
      bullsEye_gradChange.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bullsEye_gradChange.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bullsEye_gradChange.setAutoDraw(false);
    }
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *Instruction* updates
    if (t >= 0.0 && Instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction.tStart = t;  // (not accounting for frame time here)
      Instruction.frameNStart = frameN;  // exact frame index
      
      Instruction.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Instruction.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Instruction.setAutoDraw(false);
    }
    
    // *tallMarker_2* updates
    if (t >= 0.0 && tallMarker_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tallMarker_2.tStart = t;  // (not accounting for frame time here)
      tallMarker_2.frameNStart = frameN;  // exact frame index
      
      tallMarker_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (tallMarker_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      tallMarker_2.setAutoDraw(false);
    }
    
    if (tallMarker_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tallMarker_2.setFillColor(new util.Color(cueColor), false);
      tallMarker_2.setLineColor(new util.Color(cueColor), false);
    }
    
    // *wideMarker_2* updates
    if (t >= 0.0 && wideMarker_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wideMarker_2.tStart = t;  // (not accounting for frame time here)
      wideMarker_2.frameNStart = frameN;  // exact frame index
      
      wideMarker_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (wideMarker_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      wideMarker_2.setAutoDraw(false);
    }
    
    if (wideMarker_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wideMarker_2.setFillColor(new util.Color(cueColor), false);
      wideMarker_2.setLineColor(new util.Color(cueColor), false);
    }
    
    // *noChangeMarker_2* updates
    if (t >= 0.0 && noChangeMarker_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      noChangeMarker_2.tStart = t;  // (not accounting for frame time here)
      noChangeMarker_2.frameNStart = frameN;  // exact frame index
      
      noChangeMarker_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (noChangeMarker_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      noChangeMarker_2.setAutoDraw(false);
    }
    
    // *currChange_2* updates
    if (t >= 0.0 && currChange_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      currChange_2.tStart = t;  // (not accounting for frame time here)
      currChange_2.frameNStart = frameN;  // exact frame index
      
      currChange_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (currChange_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      currChange_2.setAutoDraw(false);
    }
    
    if (currChange_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      currChange_2.setPos([currPos, (- 0.2)], false);
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
    gradDecComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function gradDecRoutineEnd() {
  return async function () {
    //------Ending Routine 'gradDec'-------
    gradDecComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    tcount_1 += 1;
    if ((tcount_1 > (nFrames - (gradDur * 2)))) {
        keypresses.push(gradDecResp.keys);
        rtList.push(gradDecResp.rt);
    }
    if ((cueType === "disp")) {
        if ((currPos > 0)) {
            currRatio = "wide";
        } else {
            if ((currPos < 0)) {
                currRatio = "tall";
            } else {
                currRatio = "noChange";
            }
        }
    } else {
        if ((cueType === "notDisp")) {
            currRatio = "noTrial";
        }
    }
    
    psychoJS.experiment.addData('gradDecResp.keys', gradDecResp.keys);
    if (typeof gradDecResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('gradDecResp.rt', gradDecResp.rt);
        }
    
    gradDecResp.stop();
    return Scheduler.Event.NEXT;
  };
}


var _gradIncResp_allKeys;
var gradIncComponents;
function gradIncRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'gradInc'-------
    t = 0;
    gradIncClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.125000);
    // update component parameters for each repeat
    if ((tcount_2 > (nFrames - gradDur))) {
        if ((newH < maxVal)) {
            gradH += gradSize;
            if ((gradH > maxVal)) {
                gradH = maxVal;
            }
        }
        if ((newW < maxVal)) {
            gradW += gradSize;
            if ((gradW > maxVal)) {
                gradW = maxVal;
            }
        }
    }
    
    gradIncResp.keys = undefined;
    gradIncResp.rt = undefined;
    _gradIncResp_allKeys = [];
    border_3.setSize([brd, brd]);
    border_3.setImage(checkBorder);
    radialEye_change_3.setOpacity(contR);
    radialEye_change_3.setSize([maxVal, maxVal]);
    radialEye_change_3.setImage(image_radialEye);
    bullsEye_gradChange_3.setOpacity(contB);
    bullsEye_gradChange_3.setSize([gradW, gradH]);
    bullsEye_gradChange_3.setImage(image_bullsEye);
    noChangeMarker_3.setFillColor(new util.Color(cueColor));
    noChangeMarker_3.setLineColor(new util.Color(cueColor));
    currChange_3.setFillColor(new util.Color(cueChngColor));
    currChange_3.setLineColor(new util.Color(cueChngColor));
    // keep track of which components have finished
    gradIncComponents = [];
    gradIncComponents.push(gradIncResp);
    gradIncComponents.push(border_3);
    gradIncComponents.push(radialEye_change_3);
    gradIncComponents.push(bullsEye_gradChange_3);
    gradIncComponents.push(fixation_3);
    gradIncComponents.push(Instruction_3);
    gradIncComponents.push(tallMarker_3);
    gradIncComponents.push(wideMarker_3);
    gradIncComponents.push(noChangeMarker_3);
    gradIncComponents.push(currChange_3);
    
    gradIncComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function gradIncRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'gradInc'-------
    // get current time
    t = gradIncClock.getTime();
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
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("right", keys)) {
            currPos = (currPos + change);
            if ((currPos > 0.2)) {
                currPos = 0.2;
            }
        } else {
            if (_pj.in_es6("left", keys)) {
                currPos = (currPos - change);
                if ((currPos < (- 0.2))) {
                    currPos = (- 0.2);
                }
            }
        }
    }
    
    
    // *gradIncResp* updates
    if (t >= 0.0 && gradIncResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gradIncResp.tStart = t;  // (not accounting for frame time here)
      gradIncResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { gradIncResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { gradIncResp.start(); }); // start on screen flip
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (gradIncResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      gradIncResp.status = PsychoJS.Status.FINISHED;
  }

    if (gradIncResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = gradIncResp.getKeys({keyList: ['right', 'up'], waitRelease: false});
      _gradIncResp_allKeys = _gradIncResp_allKeys.concat(theseKeys);
      if (_gradIncResp_allKeys.length > 0) {
        gradIncResp.keys = _gradIncResp_allKeys[_gradIncResp_allKeys.length - 1].name;  // just the last key pressed
        gradIncResp.rt = _gradIncResp_allKeys[_gradIncResp_allKeys.length - 1].rt;
      }
    }
    
    
    // *border_3* updates
    if (t >= 0.0 && border_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      border_3.tStart = t;  // (not accounting for frame time here)
      border_3.frameNStart = frameN;  // exact frame index
      
      border_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (border_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      border_3.setAutoDraw(false);
    }
    
    // *radialEye_change_3* updates
    if (t >= 0.0 && radialEye_change_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radialEye_change_3.tStart = t;  // (not accounting for frame time here)
      radialEye_change_3.frameNStart = frameN;  // exact frame index
      
      radialEye_change_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (radialEye_change_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      radialEye_change_3.setAutoDraw(false);
    }
    
    // *bullsEye_gradChange_3* updates
    if (t >= 0.0 && bullsEye_gradChange_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bullsEye_gradChange_3.tStart = t;  // (not accounting for frame time here)
      bullsEye_gradChange_3.frameNStart = frameN;  // exact frame index
      
      bullsEye_gradChange_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bullsEye_gradChange_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bullsEye_gradChange_3.setAutoDraw(false);
    }
    
    // *fixation_3* updates
    if (t >= 0.0 && fixation_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_3.tStart = t;  // (not accounting for frame time here)
      fixation_3.frameNStart = frameN;  // exact frame index
      
      fixation_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_3.setAutoDraw(false);
    }
    
    // *Instruction_3* updates
    if (t >= 0.0 && Instruction_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_3.tStart = t;  // (not accounting for frame time here)
      Instruction_3.frameNStart = frameN;  // exact frame index
      
      Instruction_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Instruction_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Instruction_3.setAutoDraw(false);
    }
    
    // *tallMarker_3* updates
    if (t >= 0.0 && tallMarker_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tallMarker_3.tStart = t;  // (not accounting for frame time here)
      tallMarker_3.frameNStart = frameN;  // exact frame index
      
      tallMarker_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (tallMarker_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      tallMarker_3.setAutoDraw(false);
    }
    
    if (tallMarker_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tallMarker_3.setFillColor(new util.Color(cueColor), false);
      tallMarker_3.setLineColor(new util.Color(cueColor), false);
    }
    
    // *wideMarker_3* updates
    if (t >= 0.0 && wideMarker_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wideMarker_3.tStart = t;  // (not accounting for frame time here)
      wideMarker_3.frameNStart = frameN;  // exact frame index
      
      wideMarker_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (wideMarker_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      wideMarker_3.setAutoDraw(false);
    }
    
    if (wideMarker_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wideMarker_3.setFillColor(new util.Color(cueColor), false);
      wideMarker_3.setLineColor(new util.Color(cueColor), false);
    }
    
    // *noChangeMarker_3* updates
    if (t >= 0.0 && noChangeMarker_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      noChangeMarker_3.tStart = t;  // (not accounting for frame time here)
      noChangeMarker_3.frameNStart = frameN;  // exact frame index
      
      noChangeMarker_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (noChangeMarker_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      noChangeMarker_3.setAutoDraw(false);
    }
    
    // *currChange_3* updates
    if (t >= 0.0 && currChange_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      currChange_3.tStart = t;  // (not accounting for frame time here)
      currChange_3.frameNStart = frameN;  // exact frame index
      
      currChange_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (currChange_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      currChange_3.setAutoDraw(false);
    }
    
    if (currChange_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      currChange_3.setPos([currPos, (- 0.2)], false);
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
    gradIncComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function gradIncRoutineEnd() {
  return async function () {
    //------Ending Routine 'gradInc'-------
    gradIncComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    tcount_2 += 1;
    keypresses.push(gradIncResp.keys);
    rtList.push(gradIncResp.rt);
    if ((cueType === "disp")) {
        if ((currPos > 0)) {
            currRatio = "wide";
        } else {
            if ((currPos < 0)) {
                currRatio = "tall";
            } else {
                currRatio = "noChange";
            }
        }
    } else {
        if ((cueType === "notDisp")) {
            currRatio = "noTrial";
        }
    }
    
    psychoJS.experiment.addData('gradIncResp.keys', gradIncResp.keys);
    if (typeof gradIncResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('gradIncResp.rt', gradIncResp.rt);
        }
    
    gradIncResp.stop();
    return Scheduler.Event.NEXT;
  };
}


var changeDirComponents;
function changeDirRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'changeDir'-------
    t = 0;
    changeDirClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    
            // add-on: list(s: string): string[]
            function list(s) {
                // if s is a string, we return a list of its characters
                if (typeof s === 'string')
                    return s.split('');
                else
                    // otherwise we return s:
                    return s;
            }
    
            direction = random();
    driftLs = list(range(((nFrames + 1) * 2)));
    if ((direction > 0.5)) {
        driftrows = driftLs.slice(0, (nFrames + 1));
    } else {
        driftrows = driftLs.slice((nFrames + 1));
    }
    
    // keep track of which components have finished
    changeDirComponents = [];
    
    changeDirComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function changeDirRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'changeDir'-------
    // get current time
    t = changeDirClock.getTime();
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
    changeDirComponents.forEach( function(thisComponent) {
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


function changeDirRoutineEnd() {
  return async function () {
    //------Ending Routine 'changeDir'-------
    changeDirComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "changeDir" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _constResp_allKeys;
var trialConstComponents;
function trialConstRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trialConst'-------
    t = 0;
    trialConstClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.125000);
    // update component parameters for each repeat
    constResp.keys = undefined;
    constResp.rt = undefined;
    _constResp_allKeys = [];
    border_6.setSize([brd, brd]);
    border_6.setImage(checkBorder);
    radialEye_stim_const.setOpacity(contR);
    radialEye_stim_const.setSize([maxVal, maxVal]);
    radialEye_stim_const.setImage(image_radialEye);
    bullsEye_stim_const.setOpacity(contB);
    bullsEye_stim_const.setSize([maxVal, maxVal]);
    bullsEye_stim_const.setImage(image_bullsEye);
    fixation_4.setColor(new util.Color(col));
    fixation_4.setHeight(hght);
    noChangeMarker_4.setFillColor(new util.Color(cueColor));
    noChangeMarker_4.setLineColor(new util.Color(cueColor));
    currChange_4.setFillColor(new util.Color(cueChngColor));
    currChange_4.setLineColor(new util.Color(cueChngColor));
    // keep track of which components have finished
    trialConstComponents = [];
    trialConstComponents.push(constResp);
    trialConstComponents.push(border_6);
    trialConstComponents.push(radialEye_stim_const);
    trialConstComponents.push(bullsEye_stim_const);
    trialConstComponents.push(fixation_4);
    trialConstComponents.push(Instruction_5);
    trialConstComponents.push(tallMarker_4);
    trialConstComponents.push(wideMarker_4);
    trialConstComponents.push(noChangeMarker_4);
    trialConstComponents.push(currChange_4);
    
    trialConstComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialConstRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trialConst'-------
    // get current time
    t = trialConstClock.getTime();
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
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("right", keys)) {
            currPos = (currPos + change);
            if ((currPos > 0.2)) {
                currPos = 0.2;
            }
        } else {
            if (_pj.in_es6("left", keys)) {
                currPos = (currPos - change);
                if ((currPos < (- 0.2))) {
                    currPos = (- 0.2);
                }
            }
        }
    }
    
    
    // *constResp* updates
    if (t >= 0.0 && constResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      constResp.tStart = t;  // (not accounting for frame time here)
      constResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { constResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { constResp.start(); }); // start on screen flip
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (constResp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      constResp.status = PsychoJS.Status.FINISHED;
  }

    if (constResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = constResp.getKeys({keyList: ['up', 'right'], waitRelease: false});
      _constResp_allKeys = _constResp_allKeys.concat(theseKeys);
      if (_constResp_allKeys.length > 0) {
        constResp.keys = _constResp_allKeys[_constResp_allKeys.length - 1].name;  // just the last key pressed
        constResp.rt = _constResp_allKeys[_constResp_allKeys.length - 1].rt;
      }
    }
    
    
    // *border_6* updates
    if (t >= 0.0 && border_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      border_6.tStart = t;  // (not accounting for frame time here)
      border_6.frameNStart = frameN;  // exact frame index
      
      border_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (border_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      border_6.setAutoDraw(false);
    }
    
    // *radialEye_stim_const* updates
    if (t >= 0.0 && radialEye_stim_const.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      radialEye_stim_const.tStart = t;  // (not accounting for frame time here)
      radialEye_stim_const.frameNStart = frameN;  // exact frame index
      
      radialEye_stim_const.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (radialEye_stim_const.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      radialEye_stim_const.setAutoDraw(false);
    }
    
    // *bullsEye_stim_const* updates
    if (t >= 0.0 && bullsEye_stim_const.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bullsEye_stim_const.tStart = t;  // (not accounting for frame time here)
      bullsEye_stim_const.frameNStart = frameN;  // exact frame index
      
      bullsEye_stim_const.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (bullsEye_stim_const.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      bullsEye_stim_const.setAutoDraw(false);
    }
    
    // *fixation_4* updates
    if (t >= 0.0 && fixation_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_4.tStart = t;  // (not accounting for frame time here)
      fixation_4.frameNStart = frameN;  // exact frame index
      
      fixation_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_4.setAutoDraw(false);
    }
    
    // *Instruction_5* updates
    if (t >= 0.0 && Instruction_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruction_5.tStart = t;  // (not accounting for frame time here)
      Instruction_5.frameNStart = frameN;  // exact frame index
      
      Instruction_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Instruction_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Instruction_5.setAutoDraw(false);
    }
    
    // *tallMarker_4* updates
    if (t >= 0.0 && tallMarker_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tallMarker_4.tStart = t;  // (not accounting for frame time here)
      tallMarker_4.frameNStart = frameN;  // exact frame index
      
      tallMarker_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (tallMarker_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      tallMarker_4.setAutoDraw(false);
    }
    
    if (tallMarker_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      tallMarker_4.setFillColor(new util.Color(cueColor), false);
      tallMarker_4.setLineColor(new util.Color(cueColor), false);
    }
    
    // *wideMarker_4* updates
    if (t >= 0.0 && wideMarker_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wideMarker_4.tStart = t;  // (not accounting for frame time here)
      wideMarker_4.frameNStart = frameN;  // exact frame index
      
      wideMarker_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (wideMarker_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      wideMarker_4.setAutoDraw(false);
    }
    
    if (wideMarker_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      wideMarker_4.setFillColor(new util.Color(cueColor), false);
      wideMarker_4.setLineColor(new util.Color(cueColor), false);
    }
    
    // *noChangeMarker_4* updates
    if (t >= 0.0 && noChangeMarker_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      noChangeMarker_4.tStart = t;  // (not accounting for frame time here)
      noChangeMarker_4.frameNStart = frameN;  // exact frame index
      
      noChangeMarker_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (noChangeMarker_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      noChangeMarker_4.setAutoDraw(false);
    }
    
    // *currChange_4* updates
    if (t >= 0.0 && currChange_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      currChange_4.tStart = t;  // (not accounting for frame time here)
      currChange_4.frameNStart = frameN;  // exact frame index
      
      currChange_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.125 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (currChange_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      currChange_4.setAutoDraw(false);
    }
    
    if (currChange_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      currChange_4.setPos([currPos, (- 0.2)], false);
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
    trialConstComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialConstRoutineEnd() {
  return async function () {
    //------Ending Routine 'trialConst'-------
    trialConstComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    tcount_3 += 1;
    if ((tcount_3 < ((nFrames + 1) * 2))) {
        keypresses.push(constResp.keys);
        rtList.push(constResp.rt);
    }
    if ((cueType === "disp")) {
        if ((currPos > 0)) {
            currRatio = "wide";
        } else {
            if ((currPos < 0)) {
                currRatio = "tall";
            } else {
                currRatio = "noChange";
            }
        }
    } else {
        if ((cueType === "notDisp")) {
            currRatio = "noTrial";
        }
    }
    
    psychoJS.experiment.addData('constResp.keys', constResp.keys);
    if (typeof constResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('constResp.rt', constResp.rt);
        }
    
    constResp.stop();
    return Scheduler.Event.NEXT;
  };
}


var nextTrialComponents;
function nextTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'nextTrial'-------
    t = 0;
    nextTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
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
    if (_pj.in_es6(wrongAns, keypresses)) {
        indWrng = keypresses.index(wrongAns);
    }
    
    // keep track of which components have finished
    nextTrialComponents = [];
    
    nextTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function nextTrialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'nextTrial'-------
    // get current time
    t = nextTrialClock.getTime();
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
    nextTrialComponents.forEach( function(thisComponent) {
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


var currAns;
var indCorr;
var currRT;
function nextTrialRoutineEnd() {
  return async function () {
    //------Ending Routine 'nextTrial'-------
    nextTrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    trials.addData("corrAns", corrAns);
    trials.addData("allKeyResp", keypresses);
    trials.addData("bullsContrast", contB);
    trials.addData("radialContrast", contR);
    trials.addData("allKeyRT", rtList);
    trials.addData("whichTrial", whichTrial);
    trials.addData("tall_wide", tall_wide);
    trials.addData("totalTrialCount", totTrialCount);
    trials.addData("currRatio", currRatio);
    trials.addData("cueType", cueType);
    findx = util.index(finChanges, currSize);
    if ((_pj.in_es6(corrAns, keypresses) && (! _pj.in_es6(wrongAns, keypresses)))) {
        currAns = corrAns;
        indCorr = util.index(keypresses, corrAns);
        currRT = rtList[indCorr];
    } else {
        if ((wrongAns && _pj.in_es6(corrAns, keypresses))) {
            indCorr = util.index(keypresses, corrAns);
            indWrng = util.index(keypresses, wrongAns);
            if (((indWrng < indCorr) && ((indCorr - indWrng) < 4))) {
                currAns = corrAns;
                currRT = rtList[indCorr];
            }
        } else {
            if ((! _pj.in_es6(wrongAns, keypresses))) {
                currAns = "none";
                currRT = 0;
            } else {
                currAns = wrongAns;
                indWrng = util.index(keypresses, wrongAns);
                currRT = rtList[indWrng];
            }
        }
    }
    if ((currAns === corrAns)) {
        corrCount += 1;
        if (((corrCount % 2) === 0)) {
            if ((currSize === finChanges.slice((- 1))[0])) {
                this_AR = currSize;
                thisInd = (finChanges.length - 1);
            } else {
                currSize = finChanges[(findx + 1)];
                this_AR = currSize;
                thisInd = (findx + 1);
            }
        }
    } else {
        corrCount = 0;
        if ((currSize === finChanges[0])) {
            this_AR = currSize;
            thisInd = 0;
        } else {
            currSize = finChanges[(findx - 1)];
            this_AR = currSize;
            thisInd = (findx - 1);
        }
    }
    tcount_1 = tcount_2 = tcount_3 = 0;
    trials.addData("resp", currAns);
    trials.addData("rt", currRT);
    trials.addData("thisInd", thisInd);
    trials.addData("currSize", currSize);
    
    // the Routine "nextTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _nextTrialResp_allKeys;
var endBlockComponents;
function endBlockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'endBlock'-------
    t = 0;
    endBlockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    blkCount += 1;
    txtVar = (((("You completed " + blkCount) + " of ") + blockReps) + " blocks");
    
    nextTrialResp.keys = undefined;
    nextTrialResp.rt = undefined;
    _nextTrialResp_allKeys = [];
    whichBlock.setText(txtVar);
    // keep track of which components have finished
    endBlockComponents = [];
    endBlockComponents.push(nextTrialResp);
    endBlockComponents.push(endblockInst);
    endBlockComponents.push(whichBlock);
    
    endBlockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endBlockRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'endBlock'-------
    // get current time
    t = endBlockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *nextTrialResp* updates
    if (t >= 0.0 && nextTrialResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextTrialResp.tStart = t;  // (not accounting for frame time here)
      nextTrialResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { nextTrialResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { nextTrialResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { nextTrialResp.clearEvents(); });
    }

    if (nextTrialResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = nextTrialResp.getKeys({keyList: ['space', 'right'], waitRelease: false});
      _nextTrialResp_allKeys = _nextTrialResp_allKeys.concat(theseKeys);
      if (_nextTrialResp_allKeys.length > 0) {
        nextTrialResp.keys = _nextTrialResp_allKeys[_nextTrialResp_allKeys.length - 1].name;  // just the last key pressed
        nextTrialResp.rt = _nextTrialResp_allKeys[_nextTrialResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *endblockInst* updates
    if (t >= 0.0 && endblockInst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endblockInst.tStart = t;  // (not accounting for frame time here)
      endblockInst.frameNStart = frameN;  // exact frame index
      
      endblockInst.setAutoDraw(true);
    }

    
    // *whichBlock* updates
    if (t >= 0.0 && whichBlock.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      whichBlock.tStart = t;  // (not accounting for frame time here)
      whichBlock.frameNStart = frameN;  // exact frame index
      
      whichBlock.setAutoDraw(true);
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
    endBlockComponents.forEach( function(thisComponent) {
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


var numReps;
function endBlockRoutineEnd() {
  return async function () {
    //------Ending Routine 'endBlock'-------
    endBlockComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((nextTrialResp.keys === "right")) {
        numReps = 0;
    } else {
        numReps = 1;
    }
    
    psychoJS.experiment.addData('nextTrialResp.keys', nextTrialResp.keys);
    if (typeof nextTrialResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('nextTrialResp.rt', nextTrialResp.rt);
        routineTimer.reset();
        }
    
    nextTrialResp.stop();
    // the Routine "endBlock" was not non-slip safe, so reset the non-slip timer
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
