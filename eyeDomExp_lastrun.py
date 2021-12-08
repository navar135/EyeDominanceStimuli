#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Wed Dec  8 13:03:17 2021
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
    units='height')
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
    text="‘Please use a credit card or any card of the same size (drivers license, grocery store membership card, etc.)\n \nHold it onto the screen, and adjust the image on screen to match the size of your card.\n\n(If you don't have access to a real card, you can use a ruler to measure image width to 3.37inch or 85.6mm, or make your best guess!)’\n",
    font='Arial',
    units='norm', pos=(0, .7), height=.05, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
instructBottom = visual.TextStim(win=win, name='instructBottom',
    text='‘UP arrow = Bigger\nDOWN arrow = Smaller\n\nClick “Next” when done.’',
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
    txtVar=''
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

# ------Prepare to start Routine "findScreenResol"-------
continueRoutine = True
# update component parameters for each repeat
nextButton.setText('‘Next’')
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

thisExp.addData('instructTop.started', instructTop.tStartRefresh)
thisExp.addData('instructTop.stopped', instructTop.tStopRefresh)
thisExp.addData('instructBottom.started', instructBottom.tStartRefresh)
thisExp.addData('instructBottom.stopped', instructBottom.tStopRefresh)
thisExp.addData('line_R_vert.started', line_R_vert.tStartRefresh)
thisExp.addData('line_R_vert.stopped', line_R_vert.tStopRefresh)
thisExp.addData('line_L_vert.started', line_L_vert.tStartRefresh)
thisExp.addData('line_L_vert.stopped', line_L_vert.tStopRefresh)
thisExp.addData('line_T_horiz.started', line_T_horiz.tStartRefresh)
thisExp.addData('line_T_horiz.stopped', line_T_horiz.tStopRefresh)
thisExp.addData('line_B_horiz.started', line_B_horiz.tStartRefresh)
thisExp.addData('line_B_horiz.stopped', line_B_horiz.tStopRefresh)
thisExp.addData('nextPoly.started', nextPoly.tStartRefresh)
thisExp.addData('nextPoly.stopped', nextPoly.tStopRefresh)
# store data for thisExp (ExperimentHandler)
thisExp.addData('nextMouse.started', nextMouse.tStart)
thisExp.addData('nextMouse.stopped', nextMouse.tStop)
thisExp.nextEntry()
# the Routine "findScreenResol" was not non-slip safe, so reset the non-slip timer
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
