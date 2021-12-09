#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Thu Dec  9 10:51:49 2021
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'eyeDomExp'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': ['practice', '1', '2', '3'], 'which eye is blue': ['right', 'left'], 'eye tested': ['right', 'left'], 'previous contrast': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/navar135/Documents/GitHub/eyeDomPL/eyeDomExp_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=False, screen=0, 
    winType='pyglet', allowGUI=True, allowStencil=False,
    monitor='testMonitor', color='black', colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='pix')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "contWarning"
contWarningClock = core.Clock()
warningESC = visual.TextStim(win=win, name='warningESC',
    text='',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "findScreenResol"
findScreenResolClock = core.Clock()
x_pix = 400  
pxPerCm = x_pix/8.56 #8.56 is standard size of credit card width
pxChange = 1

instructTop = visual.TextStim(win=win, name='instructTop',
    text="Please use a credit card or any card of the same size (drivers license, grocery store membership card, etc.)\n \nHold it onto the screen, and adjust the image on screen to match the size of your card.\n\n(If you don't have access to a real card, you can use a ruler to measure image width to 3.37inch or 85.6mm, or make your best guess!)\n",
    font='Arial',
    units='norm', pos=(0, .7), height=.05, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
instructBottom = visual.TextStim(win=win, name='instructBottom',
    text='UP arrow = Bigger\nDOWN arrow = Smaller\n\nClick “Next” when done',
    font='Arial',
    units='norm', pos=(0, -.6), height=.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
cardImage = visual.ImageStim(
    win=win,
    name='cardImage', units='pix', 
    image='images/bankImage.png', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)
line_R_vert = visual.Rect(
    win=win, name='line_R_vert',units='pix', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1,1,1],
    opacity=1, depth=-5.0, interpolate=True)
line_L_vert = visual.Rect(
    win=win, name='line_L_vert',units='pix', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1,1,1],
    opacity=1, depth=-6.0, interpolate=True)
line_T_horiz = visual.Rect(
    win=win, name='line_T_horiz',units='pix', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1,1,1],
    opacity=1, depth=-7.0, interpolate=True)
line_B_horiz = visual.Rect(
    win=win, name='line_B_horiz',units='pix', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1,1,1],
    opacity=1, depth=-8.0, interpolate=True)
nextPoly = visual.Rect(
    win=win, name='nextPoly',units='norm', 
    width=(0.12, 0.06)[0], height=(0.12, 0.06)[1],
    ori=0, pos=(.8, -.8),
    lineWidth=2,     colorSpace='rgb',  lineColor=[-1,-1,-1], fillColor=[1,0,0],
    opacity=1, depth=-9.0, interpolate=True)
nextButton = visual.TextStim(win=win, name='nextButton',
    text='',
    font='Arial',
    units='norm', pos=(.8, -.8), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);
nextMouse = event.Mouse(win=win)
x, y = [None, None]
nextMouse.mouseClock = core.Clock()

# Initialize components for Routine "findScreenEdge"
findScreenEdgeClock = core.Clock()
instruct = visual.TextStim(win=win, name='instruct',
    text='Click and slide the red circle so that it lines up with the blue line. \n\nOnce they are aligned click “Next”.\n\n',
    font='Arial',
    units='norm', pos=(0, .7), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
slider = visual.Slider(win=win, name='slider',
    startValue=None, size=(10000.0, 20), pos=(-5000, 0), units=None,
    labels=None, ticks=(-1, 0.5, 0), granularity=0.0,
    style='slider', styleTweaks=('labels45', 'triangleMarker'), opacity=None,
    color='LightGray', fillColor='Red', borderColor='White', colorSpace='rgb',
    font='Open Sans', labelHeight=0.05,
    flip=False, depth=-1, readOnly=False)
screenEdgePx = 0.0
skip_checkEdge = False

# note that this code has to go below the slider
# in builder or else the marker doesn't show
# until you click on the slider bar
targetTri = visual.ShapeStim(
    win=win, name='targetTri',units='norm', 
    size=(0.09, 0.15), vertices='triangle',
    ori=0, pos=(-.95, 0),
    lineWidth=1,     colorSpace='rgb',  lineColor=[-1,-1,1], fillColor=[-1,-1,1],
    opacity=1, depth=-3.0, interpolate=True)
nextPoly1 = visual.Rect(
    win=win, name='nextPoly1',units='norm', 
    width=(0.12, 0.06)[0], height=(0.12, 0.06)[1],
    ori=0, pos=(0.8, -.8),
    lineWidth=1,     colorSpace='rgb',  lineColor=[-1,-1,-1], fillColor=[1,0,0],
    opacity=1, depth=-4.0, interpolate=True)
nextButton1 = visual.TextStim(win=win, name='nextButton1',
    text='',
    font='Arial',
    units='norm', pos=(.8, -.8), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
nextMouse1 = event.Mouse(win=win)
x, y = [None, None]
nextMouse1.mouseClock = core.Clock()

# Initialize components for Routine "startBlindSpot"
startBlindSpotClock = core.Clock()
num_repeat = 3 # how many trials to avg over
dot2square_dist = 6 # in cm, choose; default was 6cm
square2center_dist = 9 # in cm right of center, choose; default was 6cm

desiredVisAngl = 0.029147 # in radians; paper says within 1.67 deg

# better to choose params here since other code
# component in findBlindSpot is type "both"
loopN = 0
instruct1 = visual.ImageStim(
    win=win,
    name='instruct1', units='pix', 
    image='images/instruct1.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
startKey = keyboard.Keyboard()
squareStart = visual.Rect(
    win=win, name='squareStart',units='pix', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[0,0,0], fillColor=[0,0,0],
    opacity=1, depth=-4.0, interpolate=True)
dotStart = visual.ShapeStim(
    win=win, name='dotStart', vertices=20,units='pix', 
    size=[1.0, 1.0],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,0,0], fillColor=[1,0,0],
    opacity=1, depth=-5.0, interpolate=True)
tinyDotStart = visual.ShapeStim(
    win=win, name='tinyDotStart', vertices=10,units='pix', 
    size=[1.0, 1.0],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1,1,1],
    opacity=1, depth=-6.0, interpolate=True)
dumiTrialCount = visual.TextStim(win=win, name='dumiTrialCount',
    text=f"0 out of {num_repeat}"
,
    font='Arial',
    units='norm', pos=(0, -.8), height=0.07, wrapWidth=None, ori=0, 
    color='blue', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
dumiRestrtPoly = visual.Rect(
    win=win, name='dumiRestrtPoly',units='norm', 
    width=(0.4, 0.14)[0], height=(0.4, 0.14)[1],
    ori=0, pos=(.7, -.8),
    lineWidth=2,     colorSpace='rgb',  lineColor=[-1,-1,-1], fillColor=[-.3,-.3,-.3],
    opacity=1, depth=-8.0, interpolate=True)
dumiRestrtButt = visual.TextStim(win=win, name='dumiRestrtButt',
    text='click here to start over\n(if you made a mistake)',
    font='Arial',
    units='norm', pos=(0.7, -0.8), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-9.0);

# Initialize components for Routine "findBlindSpot"
findBlindSpotClock = core.Clock()
dot_dist_list = []
dist2screen = 0

square = visual.Rect(
    win=win, name='square',units='pix', 
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[0,0,0], fillColor=[0,0,0],
    opacity=1, depth=-1.0, interpolate=True)
dot = visual.ShapeStim(
    win=win, name='dot', vertices=20,units='pix', 
    size=[1.0, 1.0],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,0,0], fillColor=[1,0,0],
    opacity=1, depth=-2.0, interpolate=True)
tinyDot = visual.ShapeStim(
    win=win, name='tinyDot', vertices=10,units='pix', 
    size=[1.0, 1.0],
    ori=0, pos=[0,0],
    lineWidth=1,     colorSpace='rgb',  lineColor=[1,1,1], fillColor=[1,1,1],
    opacity=1, depth=-3.0, interpolate=True)
endRound = keyboard.Keyboard()
trialCounter = visual.TextStim(win=win, name='trialCounter',
    text='',
    font='Arial',
    units='norm', pos=(0, -.8), height=0.07, wrapWidth=None, ori=0, 
    color='blue', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
restartPoly = visual.Rect(
    win=win, name='restartPoly',units='norm', 
    width=(0.4, 0.14)[0], height=(0.4, 0.14)[1],
    ori=0, pos=(.7, -.8),
    lineWidth=2,     colorSpace='rgb',  lineColor=[-1,-1,-1], fillColor=[-.3,-.3,-.3],
    opacity=1, depth=-6.0, interpolate=True)
restartText = visual.TextStim(win=win, name='restartText',
    text='click here to start over\n(if you made a mistake)',
    font='Arial',
    units='norm', pos=(0.7, -0.8), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);
restartMouse = event.Mouse(win=win)
x, y = [None, None]
restartMouse.mouseClock = core.Clock()

# Initialize components for Routine "checkForRestart"
checkForRestartClock = core.Clock()
skipTrials = False
clickedRestart = False



# Initialize components for Routine "warning"
warningClock = core.Clock()
instructOops = visual.TextStim(win=win, name='instructOops',
    text='oops! Looks like we ran out of space. \n\nTry moving a little closer to the screen and click the button to try again.',
    font='Arial',
    units='norm', pos=(0, 0), height=0.07, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
tryAgainPoly1 = visual.Rect(
    win=win, name='tryAgainPoly1',units='norm', 
    width=(0.15, 0.08)[0], height=(0.15, 0.08)[1],
    ori=0, pos=(.8, -.8),
    lineWidth=2,     colorSpace='rgb',  lineColor=[-1,-1,-1], fillColor=[1,0,0],
    opacity=1, depth=-2.0, interpolate=True)
tryAgainButton1 = visual.TextStim(win=win, name='tryAgainButton1',
    text='',
    font='Arial',
    units='norm', pos=(0.8, -0.8), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
tryAgainMouse1 = event.Mouse(win=win)
x, y = [None, None]
tryAgainMouse1.mouseClock = core.Clock()

# Initialize components for Routine "goodJob_prepForExp"
goodJob_prepForExpClock = core.Clock()
instruct2 = visual.TextStim(win=win, name='instruct2',
    text='Great job! \n\n** Please keep this distance from your screen until the very end! ** \n\nYou can uncover/open your right eye now. \nMake sure you are wearing the colored glasses, and prepare for the next block. \n\nPress the spacebar to continue to the main experiment. ',
    font='Arial',
    pos=(0, 0), height=0.03, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
keyToMoveOn = keyboard.Keyboard()
contrastRange = []
contR=1.0

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "contWarning"-------
continueRoutine = True
# update component parameters for each repeat
#display txt to verify the calculated contrast was properly input 
if expInfo['previous contrast'] =='' and expInfo['session']!='practice':
    txtVar = 'You did not input the correct contrast value.  Please restart the session and input the value you wrote down from the practice session to the last entry of the dialog box'
    continueRoutine = True
else:
    continueRoutine=False
    txtVar='' #this has to always be defined
warningESC.setText(txtVar)
# keep track of which components have finished
contWarningComponents = [warningESC]
for thisComponent in contWarningComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
contWarningClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "contWarning"-------
while continueRoutine:
    # get current time
    t = contWarningClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=contWarningClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *warningESC* updates
    if warningESC.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        warningESC.frameNStart = frameN  # exact frame index
        warningESC.tStart = t  # local t and not account for scr refresh
        warningESC.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(warningESC, 'tStartRefresh')  # time at next scr refresh
        warningESC.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in contWarningComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "contWarning"-------
for thisComponent in contWarningComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('warningESC.started', warningESC.tStartRefresh)
thisExp.addData('warningESC.stopped', warningESC.tStopRefresh)
# the Routine "contWarning" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
screenEdgeLoop = data.TrialHandler(nReps=50.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='screenEdgeLoop')
thisExp.addLoop(screenEdgeLoop)  # add the loop to the experiment
thisScreenEdgeLoop = screenEdgeLoop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisScreenEdgeLoop.rgb)
if thisScreenEdgeLoop != None:
    for paramName in thisScreenEdgeLoop:
        exec('{} = thisScreenEdgeLoop[paramName]'.format(paramName))

for thisScreenEdgeLoop in screenEdgeLoop:
    currentLoop = screenEdgeLoop
    # abbreviate parameter names if possible (e.g. rgb = thisScreenEdgeLoop.rgb)
    if thisScreenEdgeLoop != None:
        for paramName in thisScreenEdgeLoop:
            exec('{} = thisScreenEdgeLoop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "findScreenResol"-------
    continueRoutine = True
    # update component parameters for each repeat
    nextButton.setText('Next')
    # setup some python lists for storing info about the nextMouse
    nextMouse.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    findScreenResolComponents = [instructTop, instructBottom, cardImage, line_R_vert, line_L_vert, line_T_horiz, line_B_horiz, nextPoly, nextButton, nextMouse]
    for thisComponent in findScreenResolComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    findScreenResolClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "findScreenResol"-------
    while continueRoutine:
        # get current time
        t = findScreenResolClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=findScreenResolClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        keys=event.getKeys()
        #calculate the pixels per cm from the actual size of the card
        if len(keys):
            if 'up' in keys:
                x_pix = x_pix + pxChange
            elif 'down' in keys:
                x_pix = x_pix - pxChange
            pxPerCm = x_pix/8.56     # divide num of pixels 
                                                   # wide by the size in cm
                                                   # of standard card to get
                                                   # resolution (px/cm)
        
        
        # *instructTop* updates
        if instructTop.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instructTop.frameNStart = frameN  # exact frame index
            instructTop.tStart = t  # local t and not account for scr refresh
            instructTop.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructTop, 'tStartRefresh')  # time at next scr refresh
            instructTop.setAutoDraw(True)
        
        # *instructBottom* updates
        if instructBottom.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instructBottom.frameNStart = frameN  # exact frame index
            instructBottom.tStart = t  # local t and not account for scr refresh
            instructBottom.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructBottom, 'tStartRefresh')  # time at next scr refresh
            instructBottom.setAutoDraw(True)
        
        # *cardImage* updates
        if cardImage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cardImage.frameNStart = frameN  # exact frame index
            cardImage.tStart = t  # local t and not account for scr refresh
            cardImage.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cardImage, 'tStartRefresh')  # time at next scr refresh
            cardImage.setAutoDraw(True)
        if cardImage.status == STARTED:  # only update if drawing
            cardImage.setSize((x_pix, x_pix * 0.6265625), log=False)
        
        # *line_R_vert* updates
        if line_R_vert.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            line_R_vert.frameNStart = frameN  # exact frame index
            line_R_vert.tStart = t  # local t and not account for scr refresh
            line_R_vert.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(line_R_vert, 'tStartRefresh')  # time at next scr refresh
            line_R_vert.setAutoDraw(True)
        if line_R_vert.status == STARTED:  # only update if drawing
            line_R_vert.setPos((x_pix/2, 0), log=False)
            line_R_vert.setSize((1, (x_pix * 0.6304906542)+80), log=False)
        
        # *line_L_vert* updates
        if line_L_vert.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            line_L_vert.frameNStart = frameN  # exact frame index
            line_L_vert.tStart = t  # local t and not account for scr refresh
            line_L_vert.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(line_L_vert, 'tStartRefresh')  # time at next scr refresh
            line_L_vert.setAutoDraw(True)
        if line_L_vert.status == STARTED:  # only update if drawing
            line_L_vert.setPos((-x_pix/2, 0), log=False)
            line_L_vert.setSize((1, (x_pix * 0.6304906542)+80), log=False)
        
        # *line_T_horiz* updates
        if line_T_horiz.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            line_T_horiz.frameNStart = frameN  # exact frame index
            line_T_horiz.tStart = t  # local t and not account for scr refresh
            line_T_horiz.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(line_T_horiz, 'tStartRefresh')  # time at next scr refresh
            line_T_horiz.setAutoDraw(True)
        if line_T_horiz.status == STARTED:  # only update if drawing
            line_T_horiz.setPos((0, (x_pix * 0.6304906542)/2), log=False)
            line_T_horiz.setSize((x_pix +80, 1), log=False)
        
        # *line_B_horiz* updates
        if line_B_horiz.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            line_B_horiz.frameNStart = frameN  # exact frame index
            line_B_horiz.tStart = t  # local t and not account for scr refresh
            line_B_horiz.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(line_B_horiz, 'tStartRefresh')  # time at next scr refresh
            line_B_horiz.setAutoDraw(True)
        if line_B_horiz.status == STARTED:  # only update if drawing
            line_B_horiz.setPos((0, -(x_pix * 0.6304906542)/2), log=False)
            line_B_horiz.setSize((x_pix +80, 1), log=False)
        
        # *nextPoly* updates
        if nextPoly.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            nextPoly.frameNStart = frameN  # exact frame index
            nextPoly.tStart = t  # local t and not account for scr refresh
            nextPoly.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(nextPoly, 'tStartRefresh')  # time at next scr refresh
            nextPoly.setAutoDraw(True)
        
        # *nextButton* updates
        if nextButton.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            nextButton.frameNStart = frameN  # exact frame index
            nextButton.tStart = t  # local t and not account for scr refresh
            nextButton.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(nextButton, 'tStartRefresh')  # time at next scr refresh
            nextButton.setAutoDraw(True)
        # *nextMouse* updates
        if nextMouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            nextMouse.frameNStart = frameN  # exact frame index
            nextMouse.tStart = t  # local t and not account for scr refresh
            nextMouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(nextMouse, 'tStartRefresh')  # time at next scr refresh
            nextMouse.status = STARTED
            nextMouse.mouseClock.reset()
            prevButtonState = nextMouse.getPressed()  # if button is down already this ISN'T a new click
        if nextMouse.status == STARTED:  # only update if started and not finished!
            buttons = nextMouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(nextButton)
                        clickableList = nextButton
                    except:
                        clickableList = [nextButton]
                    for obj in clickableList:
                        if obj.contains(nextMouse):
                            gotValidClick = True
                            nextMouse.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in findScreenResolComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "findScreenResol"-------
    for thisComponent in findScreenResolComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('px per cm', pxPerCm)
    
    screenEdgeLoop.addData('instructTop.started', instructTop.tStartRefresh)
    screenEdgeLoop.addData('instructTop.stopped', instructTop.tStopRefresh)
    screenEdgeLoop.addData('instructBottom.started', instructBottom.tStartRefresh)
    screenEdgeLoop.addData('instructBottom.stopped', instructBottom.tStopRefresh)
    screenEdgeLoop.addData('line_R_vert.started', line_R_vert.tStartRefresh)
    screenEdgeLoop.addData('line_R_vert.stopped', line_R_vert.tStopRefresh)
    screenEdgeLoop.addData('line_L_vert.started', line_L_vert.tStartRefresh)
    screenEdgeLoop.addData('line_L_vert.stopped', line_L_vert.tStopRefresh)
    screenEdgeLoop.addData('line_T_horiz.started', line_T_horiz.tStartRefresh)
    screenEdgeLoop.addData('line_T_horiz.stopped', line_T_horiz.tStopRefresh)
    screenEdgeLoop.addData('line_B_horiz.started', line_B_horiz.tStartRefresh)
    screenEdgeLoop.addData('line_B_horiz.stopped', line_B_horiz.tStopRefresh)
    screenEdgeLoop.addData('nextPoly.started', nextPoly.tStartRefresh)
    screenEdgeLoop.addData('nextPoly.stopped', nextPoly.tStopRefresh)
    # store data for screenEdgeLoop (TrialHandler)
    screenEdgeLoop.addData('nextMouse.started', nextMouse.tStart)
    screenEdgeLoop.addData('nextMouse.stopped', nextMouse.tStop)
    # the Routine "findScreenResol" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "findScreenEdge"-------
    continueRoutine = True
    # update component parameters for each repeat
    slider.reset()
    slider.markerPos=0
    
    
    # setup some python lists for storing info about the nextMouse1
    nextMouse1.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    findScreenEdgeComponents = [instruct, slider, targetTri, nextPoly1, nextButton1, nextMouse1]
    for thisComponent in findScreenEdgeComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    findScreenEdgeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "findScreenEdge"-------
    while continueRoutine:
        # get current time
        t = findScreenEdgeClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=findScreenEdgeClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instruct* updates
        if instruct.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instruct.frameNStart = frameN  # exact frame index
            instruct.tStart = t  # local t and not account for scr refresh
            instruct.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instruct, 'tStartRefresh')  # time at next scr refresh
            instruct.setAutoDraw(True)
        
        # *slider* updates
        if slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider.frameNStart = frameN  # exact frame index
            slider.tStart = t  # local t and not account for scr refresh
            slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider, 'tStartRefresh')  # time at next scr refresh
            slider.setAutoDraw(True)
        
        # *targetTri* updates
        if targetTri.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            targetTri.frameNStart = frameN  # exact frame index
            targetTri.tStart = t  # local t and not account for scr refresh
            targetTri.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(targetTri, 'tStartRefresh')  # time at next scr refresh
            targetTri.setAutoDraw(True)
        
        # *nextPoly1* updates
        if nextPoly1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            nextPoly1.frameNStart = frameN  # exact frame index
            nextPoly1.tStart = t  # local t and not account for scr refresh
            nextPoly1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(nextPoly1, 'tStartRefresh')  # time at next scr refresh
            nextPoly1.setAutoDraw(True)
        
        # *nextButton1* updates
        if nextButton1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            nextButton1.frameNStart = frameN  # exact frame index
            nextButton1.tStart = t  # local t and not account for scr refresh
            nextButton1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(nextButton1, 'tStartRefresh')  # time at next scr refresh
            nextButton1.setAutoDraw(True)
        if nextButton1.status == STARTED:  # only update if drawing
            nextButton1.setText('Next', log=False)
        # *nextMouse1* updates
        if nextMouse1.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            nextMouse1.frameNStart = frameN  # exact frame index
            nextMouse1.tStart = t  # local t and not account for scr refresh
            nextMouse1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(nextMouse1, 'tStartRefresh')  # time at next scr refresh
            nextMouse1.status = STARTED
            nextMouse1.mouseClock.reset()
            prevButtonState = nextMouse1.getPressed()  # if button is down already this ISN'T a new click
        if nextMouse1.status == STARTED:  # only update if started and not finished!
            buttons = nextMouse1.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(nextButton1)
                        clickableList = nextButton1
                    except:
                        clickableList = [nextButton1]
                    for obj in clickableList:
                        if obj.contains(nextMouse1):
                            gotValidClick = True
                            nextMouse1.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in findScreenEdgeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "findScreenEdge"-------
    for thisComponent in findScreenEdgeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    screenEdgeLoop.addData('instruct.started', instruct.tStartRefresh)
    screenEdgeLoop.addData('instruct.stopped', instruct.tStopRefresh)
    screenEdgeLoop.addData('slider.response', slider.getRating())
    screenEdgeNorm = slider.getRating()
    screenEdgePx = 10000*screenEdgeNorm
    
    if screenEdgeNorm<0:
        skip_checkEdge = True
        screenEdgeLoop.finished = True
        
    thisExp.addData('screenEdgeNorm', screenEdgeNorm)
    thisExp.addData('screenEdgePx', screenEdgePx)
    
    screenEdgeLoop.addData('targetTri.started', targetTri.tStartRefresh)
    screenEdgeLoop.addData('targetTri.stopped', targetTri.tStopRefresh)
    screenEdgeLoop.addData('nextPoly1.started', nextPoly1.tStartRefresh)
    screenEdgeLoop.addData('nextPoly1.stopped', nextPoly1.tStopRefresh)
    # store data for screenEdgeLoop (TrialHandler)
    # the Routine "findScreenEdge" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 50.0 repeats of 'screenEdgeLoop'


# set up handler to look after randomisation of conditions etc
outerLoop = data.TrialHandler(nReps=20.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='outerLoop')
thisExp.addLoop(outerLoop)  # add the loop to the experiment
thisOuterLoop = outerLoop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisOuterLoop.rgb)
if thisOuterLoop != None:
    for paramName in thisOuterLoop:
        exec('{} = thisOuterLoop[paramName]'.format(paramName))

for thisOuterLoop in outerLoop:
    currentLoop = outerLoop
    # abbreviate parameter names if possible (e.g. rgb = thisOuterLoop.rgb)
    if thisOuterLoop != None:
        for paramName in thisOuterLoop:
            exec('{} = thisOuterLoop[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    midLoop = data.TrialHandler(nReps=50.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='midLoop')
    thisExp.addLoop(midLoop)  # add the loop to the experiment
    thisMidLoop = midLoop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisMidLoop.rgb)
    if thisMidLoop != None:
        for paramName in thisMidLoop:
            exec('{} = thisMidLoop[paramName]'.format(paramName))
    
    for thisMidLoop in midLoop:
        currentLoop = midLoop
        # abbreviate parameter names if possible (e.g. rgb = thisMidLoop.rgb)
        if thisMidLoop != None:
            for paramName in thisMidLoop:
                exec('{} = thisMidLoop[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "startBlindSpot"-------
        continueRoutine = True
        # update component parameters for each repeat
        square_x = pxPerCm * square2center_dist # it is important to have this defined here and not in begin exp where original incorrect pxPerCm will be used
        loopN = 0     # yes need it in both places
        clickedRestart = False
        
        
        startKey.keys = []
        startKey.rt = []
        _startKey_allKeys = []
        # keep track of which components have finished
        startBlindSpotComponents = [instruct1, startKey, squareStart, dotStart, tinyDotStart, dumiTrialCount, dumiRestrtPoly, dumiRestrtButt]
        for thisComponent in startBlindSpotComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        startBlindSpotClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "startBlindSpot"-------
        while continueRoutine:
            # get current time
            t = startBlindSpotClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=startBlindSpotClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *instruct1* updates
            if instruct1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                instruct1.frameNStart = frameN  # exact frame index
                instruct1.tStart = t  # local t and not account for scr refresh
                instruct1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(instruct1, 'tStartRefresh')  # time at next scr refresh
                instruct1.setAutoDraw(True)
            if instruct1.status == STARTED:  # only update if drawing
                instruct1.setPos((0, pxPerCm*3.5), log=False)
                instruct1.setSize((pxPerCm*20, pxPerCm*7.09), log=False)
            
            # *startKey* updates
            waitOnFlip = False
            if startKey.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                startKey.frameNStart = frameN  # exact frame index
                startKey.tStart = t  # local t and not account for scr refresh
                startKey.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(startKey, 'tStartRefresh')  # time at next scr refresh
                startKey.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(startKey.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(startKey.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if startKey.status == STARTED and not waitOnFlip:
                theseKeys = startKey.getKeys(keyList=['space'], waitRelease=False)
                _startKey_allKeys.extend(theseKeys)
                if len(_startKey_allKeys):
                    startKey.keys = _startKey_allKeys[-1].name  # just the last key pressed
                    startKey.rt = _startKey_allKeys[-1].rt
                    # a response ends the routine
                    continueRoutine = False
            
            # *squareStart* updates
            if squareStart.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                squareStart.frameNStart = frameN  # exact frame index
                squareStart.tStart = t  # local t and not account for scr refresh
                squareStart.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(squareStart, 'tStartRefresh')  # time at next scr refresh
                squareStart.setAutoDraw(True)
            if squareStart.status == STARTED:  # only update if drawing
                squareStart.setPos((square_x, -pxPerCm*3), log=False)
                squareStart.setSize((pxPerCm*.6, pxPerCm*.6), log=False)
            
            # *dotStart* updates
            if dotStart.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                dotStart.frameNStart = frameN  # exact frame index
                dotStart.tStart = t  # local t and not account for scr refresh
                dotStart.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dotStart, 'tStartRefresh')  # time at next scr refresh
                dotStart.setAutoDraw(True)
            if dotStart.status == STARTED:  # only update if drawing
                dotStart.setPos((square_x - (pxPerCm * dot2square_dist), -pxPerCm*3), log=False)
                dotStart.setSize((pxPerCm*.6, pxPerCm*.6), log=False)
            
            # *tinyDotStart* updates
            if tinyDotStart.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                tinyDotStart.frameNStart = frameN  # exact frame index
                tinyDotStart.tStart = t  # local t and not account for scr refresh
                tinyDotStart.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(tinyDotStart, 'tStartRefresh')  # time at next scr refresh
                tinyDotStart.setAutoDraw(True)
            if tinyDotStart.status == STARTED:  # only update if drawing
                tinyDotStart.setPos((square_x, -pxPerCm*3), log=False)
                tinyDotStart.setSize((pxPerCm*.1, pxPerCm*.1), log=False)
            
            # *dumiTrialCount* updates
            if dumiTrialCount.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                dumiTrialCount.frameNStart = frameN  # exact frame index
                dumiTrialCount.tStart = t  # local t and not account for scr refresh
                dumiTrialCount.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dumiTrialCount, 'tStartRefresh')  # time at next scr refresh
                dumiTrialCount.setAutoDraw(True)
            
            # *dumiRestrtPoly* updates
            if dumiRestrtPoly.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                dumiRestrtPoly.frameNStart = frameN  # exact frame index
                dumiRestrtPoly.tStart = t  # local t and not account for scr refresh
                dumiRestrtPoly.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dumiRestrtPoly, 'tStartRefresh')  # time at next scr refresh
                dumiRestrtPoly.setAutoDraw(True)
            
            # *dumiRestrtButt* updates
            if dumiRestrtButt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                dumiRestrtButt.frameNStart = frameN  # exact frame index
                dumiRestrtButt.tStart = t  # local t and not account for scr refresh
                dumiRestrtButt.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dumiRestrtButt, 'tStartRefresh')  # time at next scr refresh
                dumiRestrtButt.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in startBlindSpotComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "startBlindSpot"-------
        for thisComponent in startBlindSpotComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        midLoop.addData('instruct1.started', instruct1.tStartRefresh)
        midLoop.addData('instruct1.stopped', instruct1.tStopRefresh)
        midLoop.addData('squareStart.started', squareStart.tStartRefresh)
        midLoop.addData('squareStart.stopped', squareStart.tStopRefresh)
        midLoop.addData('dotStart.started', dotStart.tStartRefresh)
        midLoop.addData('dotStart.stopped', dotStart.tStopRefresh)
        midLoop.addData('tinyDotStart.started', tinyDotStart.tStartRefresh)
        midLoop.addData('tinyDotStart.stopped', tinyDotStart.tStopRefresh)
        midLoop.addData('dumiTrialCount.started', dumiTrialCount.tStartRefresh)
        midLoop.addData('dumiTrialCount.stopped', dumiTrialCount.tStopRefresh)
        midLoop.addData('dumiRestrtPoly.started', dumiRestrtPoly.tStartRefresh)
        midLoop.addData('dumiRestrtPoly.stopped', dumiRestrtPoly.tStopRefresh)
        midLoop.addData('dumiRestrtButt.started', dumiRestrtButt.tStartRefresh)
        midLoop.addData('dumiRestrtButt.stopped', dumiRestrtButt.tStopRefresh)
        # the Routine "startBlindSpot" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        inLoop = data.TrialHandler(nReps=num_repeat, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='inLoop')
        thisExp.addLoop(inLoop)  # add the loop to the experiment
        thisInLoop = inLoop.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisInLoop.rgb)
        if thisInLoop != None:
            for paramName in thisInLoop:
                exec('{} = thisInLoop[paramName]'.format(paramName))
        
        for thisInLoop in inLoop:
            currentLoop = inLoop
            # abbreviate parameter names if possible (e.g. rgb = thisInLoop.rgb)
            if thisInLoop != None:
                for paramName in thisInLoop:
                    exec('{} = thisInLoop[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "findBlindSpot"-------
            continueRoutine = True
            # update component parameters for each repeat
            dot_x =  square_x - (pxPerCm * dot2square_dist)
            square_x = pxPerCm * square2center_dist # it is important to have this defined here and not in begin exp where original incorrect pxPerCm will be used
            
            loopN += 1
            
            
            endRound.keys = []
            endRound.rt = []
            _endRound_allKeys = []
            # setup some python lists for storing info about the restartMouse
            restartMouse.clicked_name = []
            gotValidClick = False  # until a click is received
            # keep track of which components have finished
            findBlindSpotComponents = [square, dot, tinyDot, endRound, trialCounter, restartPoly, restartText, restartMouse]
            for thisComponent in findBlindSpotComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            findBlindSpotClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "findBlindSpot"-------
            while continueRoutine:
                # get current time
                t = findBlindSpotClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=findBlindSpotClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                if dot_x>screenEdgePx:
                    dot_x = dot_x-1
                
                else:
                    continueRoutine = False
                    inLoop.finished = True
                    midLoop.finished = True
                
                # *square* updates
                if square.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    square.frameNStart = frameN  # exact frame index
                    square.tStart = t  # local t and not account for scr refresh
                    square.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(square, 'tStartRefresh')  # time at next scr refresh
                    square.setAutoDraw(True)
                if square.status == STARTED:  # only update if drawing
                    square.setPos((square_x, -pxPerCm*3), log=False)
                    square.setSize((pxPerCm*.6, pxPerCm*.6), log=False)
                
                # *dot* updates
                if dot.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    dot.frameNStart = frameN  # exact frame index
                    dot.tStart = t  # local t and not account for scr refresh
                    dot.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(dot, 'tStartRefresh')  # time at next scr refresh
                    dot.setAutoDraw(True)
                if dot.status == STARTED:  # only update if drawing
                    dot.setPos((dot_x, -pxPerCm*3), log=False)
                    dot.setSize((pxPerCm*.6, pxPerCm*.6), log=False)
                
                # *tinyDot* updates
                if tinyDot.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    tinyDot.frameNStart = frameN  # exact frame index
                    tinyDot.tStart = t  # local t and not account for scr refresh
                    tinyDot.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(tinyDot, 'tStartRefresh')  # time at next scr refresh
                    tinyDot.setAutoDraw(True)
                if tinyDot.status == STARTED:  # only update if drawing
                    tinyDot.setPos((square_x, -pxPerCm*3), log=False)
                    tinyDot.setSize((pxPerCm*.1, pxPerCm*.1), log=False)
                
                # *endRound* updates
                waitOnFlip = False
                if endRound.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    endRound.frameNStart = frameN  # exact frame index
                    endRound.tStart = t  # local t and not account for scr refresh
                    endRound.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(endRound, 'tStartRefresh')  # time at next scr refresh
                    endRound.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(endRound.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(endRound.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if endRound.status == STARTED and not waitOnFlip:
                    theseKeys = endRound.getKeys(keyList=['space'], waitRelease=False)
                    _endRound_allKeys.extend(theseKeys)
                    if len(_endRound_allKeys):
                        endRound.keys = _endRound_allKeys[-1].name  # just the last key pressed
                        endRound.rt = _endRound_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # *trialCounter* updates
                if trialCounter.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    trialCounter.frameNStart = frameN  # exact frame index
                    trialCounter.tStart = t  # local t and not account for scr refresh
                    trialCounter.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(trialCounter, 'tStartRefresh')  # time at next scr refresh
                    trialCounter.setAutoDraw(True)
                if trialCounter.status == STARTED:  # only update if drawing
                    trialCounter.setText(f"{loopN} out of {num_repeat}"
, log=False)
                
                # *restartPoly* updates
                if restartPoly.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    restartPoly.frameNStart = frameN  # exact frame index
                    restartPoly.tStart = t  # local t and not account for scr refresh
                    restartPoly.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(restartPoly, 'tStartRefresh')  # time at next scr refresh
                    restartPoly.setAutoDraw(True)
                
                # *restartText* updates
                if restartText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    restartText.frameNStart = frameN  # exact frame index
                    restartText.tStart = t  # local t and not account for scr refresh
                    restartText.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(restartText, 'tStartRefresh')  # time at next scr refresh
                    restartText.setAutoDraw(True)
                # *restartMouse* updates
                if restartMouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    restartMouse.frameNStart = frameN  # exact frame index
                    restartMouse.tStart = t  # local t and not account for scr refresh
                    restartMouse.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(restartMouse, 'tStartRefresh')  # time at next scr refresh
                    restartMouse.status = STARTED
                    restartMouse.mouseClock.reset()
                    prevButtonState = restartMouse.getPressed()  # if button is down already this ISN'T a new click
                if restartMouse.status == STARTED:  # only update if started and not finished!
                    buttons = restartMouse.getPressed()
                    if buttons != prevButtonState:  # button state changed?
                        prevButtonState = buttons
                        if sum(buttons) > 0:  # state changed to a new click
                            # check if the mouse was inside our 'clickable' objects
                            gotValidClick = False
                            try:
                                iter(restartText)
                                clickableList = restartText
                            except:
                                clickableList = [restartText]
                            for obj in clickableList:
                                if obj.contains(restartMouse):
                                    gotValidClick = True
                                    restartMouse.clicked_name.append(obj.name)
                            if gotValidClick:  # abort routine on response
                                continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in findBlindSpotComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "findBlindSpot"-------
            for thisComponent in findBlindSpotComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            dot_dist_list.append((square2center_dist*pxPerCm)-dot_x)
            avg_dot_dist = sum(dot_dist_list[-num_repeat:])/num_repeat # only avg the last n valid rounds
            dot_edge_dist = avg_dot_dist - ((pxPerCm*.6)/2) # need dist to right-most edge of dot, not center
            # note that I haven't implemented this ^ in the js code, b/c the diff is negligible, & if anything the est dist is usually shorter than reality 
            dot_dist_cm = dot_edge_dist/pxPerCm
            dist2screen = dot_dist_cm/.24 # the angle between
            # fovea and blind spot in eye is usually around 
            # 13.5 degrees (tan(13.5) = .24)
            
            thisExp.addData('num_repeat', num_repeat)
            thisExp.addData('square_x', square_x)
            thisExp.addData('square2center_dist', square2center_dist)
            thisExp.addData('dot2square_dist', dot2square_dist)
            thisExp.addData('dot_dist_list', dot_dist_list)
            thisExp.addData('avg_dot_dist', avg_dot_dist)
            thisExp.addData('dist2screen', dist2screen)
            inLoop.addData('square.started', square.tStartRefresh)
            inLoop.addData('square.stopped', square.tStopRefresh)
            inLoop.addData('dot.started', dot.tStartRefresh)
            inLoop.addData('dot.stopped', dot.tStopRefresh)
            inLoop.addData('tinyDot.started', tinyDot.tStartRefresh)
            inLoop.addData('tinyDot.stopped', tinyDot.tStopRefresh)
            inLoop.addData('trialCounter.started', trialCounter.tStartRefresh)
            inLoop.addData('trialCounter.stopped', trialCounter.tStopRefresh)
            inLoop.addData('restartPoly.started', restartPoly.tStartRefresh)
            inLoop.addData('restartPoly.stopped', restartPoly.tStopRefresh)
            inLoop.addData('restartText.started', restartText.tStartRefresh)
            inLoop.addData('restartText.stopped', restartText.tStopRefresh)
            # store data for inLoop (TrialHandler)
            inLoop.addData('restartMouse.started', restartMouse.tStart)
            inLoop.addData('restartMouse.stopped', restartMouse.tStop)
            # the Routine "findBlindSpot" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # ------Prepare to start Routine "checkForRestart"-------
            continueRoutine = True
            # update component parameters for each repeat
            if restartMouse.clicked_name:
                if restartMouse.clicked_name[0] =='restartText':
                    inLoop.finished = True
                    clickedRestart = True
                    
            if loopN ==num_repeat and dot_x>screenEdgePx and clickedRestart == False:
                continueRoutine = False
                inLoop.finished = True
                midLoop.finished = True
                outerLoop.finished = True
                skipTrials = True    
            
            
            # keep track of which components have finished
            checkForRestartComponents = []
            for thisComponent in checkForRestartComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            checkForRestartClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "checkForRestart"-------
            while continueRoutine:
                # get current time
                t = checkForRestartClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=checkForRestartClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in checkForRestartComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "checkForRestart"-------
            for thisComponent in checkForRestartComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "checkForRestart" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            thisExp.nextEntry()
            
        # completed num_repeat repeats of 'inLoop'
        
        thisExp.nextEntry()
        
    # completed 50.0 repeats of 'midLoop'
    
    
    # ------Prepare to start Routine "warning"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the tryAgainMouse1
    tryAgainMouse1.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    warningComponents = [instructOops, tryAgainPoly1, tryAgainButton1, tryAgainMouse1]
    for thisComponent in warningComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    warningClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "warning"-------
    while continueRoutine:
        # get current time
        t = warningClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=warningClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        if skipTrials==True:
            continueRoutine = False
        
        # *instructOops* updates
        if instructOops.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instructOops.frameNStart = frameN  # exact frame index
            instructOops.tStart = t  # local t and not account for scr refresh
            instructOops.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructOops, 'tStartRefresh')  # time at next scr refresh
            instructOops.setAutoDraw(True)
        
        # *tryAgainPoly1* updates
        if tryAgainPoly1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            tryAgainPoly1.frameNStart = frameN  # exact frame index
            tryAgainPoly1.tStart = t  # local t and not account for scr refresh
            tryAgainPoly1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(tryAgainPoly1, 'tStartRefresh')  # time at next scr refresh
            tryAgainPoly1.setAutoDraw(True)
        
        # *tryAgainButton1* updates
        if tryAgainButton1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            tryAgainButton1.frameNStart = frameN  # exact frame index
            tryAgainButton1.tStart = t  # local t and not account for scr refresh
            tryAgainButton1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(tryAgainButton1, 'tStartRefresh')  # time at next scr refresh
            tryAgainButton1.setAutoDraw(True)
        if tryAgainButton1.status == STARTED:  # only update if drawing
            tryAgainButton1.setText('Try again', log=False)
        # *tryAgainMouse1* updates
        if tryAgainMouse1.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            tryAgainMouse1.frameNStart = frameN  # exact frame index
            tryAgainMouse1.tStart = t  # local t and not account for scr refresh
            tryAgainMouse1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(tryAgainMouse1, 'tStartRefresh')  # time at next scr refresh
            tryAgainMouse1.status = STARTED
            tryAgainMouse1.mouseClock.reset()
            prevButtonState = tryAgainMouse1.getPressed()  # if button is down already this ISN'T a new click
        if tryAgainMouse1.status == STARTED:  # only update if started and not finished!
            buttons = tryAgainMouse1.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(tryAgainButton1)
                        clickableList = tryAgainButton1
                    except:
                        clickableList = [tryAgainButton1]
                    for obj in clickableList:
                        if obj.contains(tryAgainMouse1):
                            gotValidClick = True
                            tryAgainMouse1.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in warningComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "warning"-------
    for thisComponent in warningComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    outerLoop.addData('instructOops.started', instructOops.tStartRefresh)
    outerLoop.addData('instructOops.stopped', instructOops.tStopRefresh)
    outerLoop.addData('tryAgainPoly1.started', tryAgainPoly1.tStartRefresh)
    outerLoop.addData('tryAgainPoly1.stopped', tryAgainPoly1.tStopRefresh)
    outerLoop.addData('tryAgainButton1.started', tryAgainButton1.tStartRefresh)
    outerLoop.addData('tryAgainButton1.stopped', tryAgainButton1.tStopRefresh)
    # store data for outerLoop (TrialHandler)
    outerLoop.addData('tryAgainMouse1.started', tryAgainMouse1.tStart)
    outerLoop.addData('tryAgainMouse1.stopped', tryAgainMouse1.tStop)
    # the Routine "warning" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 20.0 repeats of 'outerLoop'


# ------Prepare to start Routine "goodJob_prepForExp"-------
continueRoutine = True
# update component parameters for each repeat
keyToMoveOn.keys = []
keyToMoveOn.rt = []
_keyToMoveOn_allKeys = []
imgSizeCm = 2 * dist2screen * tan(.5*desiredVisAngl)
#set at beginning of routine since this is calculated in prev routines
constSize=imgSizeCm*pxPerCm


#the first session should measure eye dominance and
#allow for some practice trials of the experiment
if expInfo['session'] =='practice':
    eyeDom = 0 #run BR to define which eye will be tested
    binRivRun = 0 # skip BR at end of actual exp 
    #current numbers will make practice last 2 min tot
    trialReps = 30 #have 10 trials in each block of the actual experiment
    blockReps = 1 # only run 3 blocks
    finalTrialDur =3 #shorten the amount of time between trials
    contR = 0 #DELETE after checking
    contB=1 #DELETE after
    #contrast variables
    contrastTrials =5 # run contrast 5 times 
    contCounter = 0 #dont skip
    skipContrast = 0 #don't skip
    
else: 
    eyeDom = 0 #skip BR measurement
    binRivRun = 1 # run BR at end of actual exp 
    #current numbers will make the  task last ~30min
    trialReps = 30 # have 30 trials in each block ~4-5min
    blockReps = 6 
    finalTrialDur =10 #at most 10s 
    contrastTrials = 0 #skip contrast 
    skipContrast = 0#skip contrast 
# keep track of which components have finished
goodJob_prepForExpComponents = [instruct2, keyToMoveOn]
for thisComponent in goodJob_prepForExpComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
goodJob_prepForExpClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "goodJob_prepForExp"-------
while continueRoutine:
    # get current time
    t = goodJob_prepForExpClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=goodJob_prepForExpClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruct2* updates
    if instruct2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruct2.frameNStart = frameN  # exact frame index
        instruct2.tStart = t  # local t and not account for scr refresh
        instruct2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruct2, 'tStartRefresh')  # time at next scr refresh
        instruct2.setAutoDraw(True)
    
    # *keyToMoveOn* updates
    waitOnFlip = False
    if keyToMoveOn.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        keyToMoveOn.frameNStart = frameN  # exact frame index
        keyToMoveOn.tStart = t  # local t and not account for scr refresh
        keyToMoveOn.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(keyToMoveOn, 'tStartRefresh')  # time at next scr refresh
        keyToMoveOn.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(keyToMoveOn.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(keyToMoveOn.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if keyToMoveOn.status == STARTED and not waitOnFlip:
        theseKeys = keyToMoveOn.getKeys(keyList=['space'], waitRelease=False)
        _keyToMoveOn_allKeys.extend(theseKeys)
        if len(_keyToMoveOn_allKeys):
            keyToMoveOn.keys = _keyToMoveOn_allKeys[-1].name  # just the last key pressed
            keyToMoveOn.rt = _keyToMoveOn_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in goodJob_prepForExpComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "goodJob_prepForExp"-------
for thisComponent in goodJob_prepForExpComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instruct2.started', instruct2.tStartRefresh)
thisExp.addData('instruct2.stopped', instruct2.tStopRefresh)
# the Routine "goodJob_prepForExp" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
