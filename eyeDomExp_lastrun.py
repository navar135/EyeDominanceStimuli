﻿#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Mon Jan  3 15:56:15 2022
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
    units='norm', pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
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
    text='Use the left and right arrow keys to move the red vertical line so that it lines up with the blue line. \nYou may hold down the arrow key to speed up the movement of the red line\n\nOnce they are aligned click “Next”.\n\n',
    font='Arial',
    units='norm', pos=(0, .7), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
#we want to measure the edge of the screen 
# we will need this measurement for the next task
# of estimating the blindspot

screenEdgePx = 0.0
skip_checkEdge = False
#set variables for moving the triangle horizontally
xPos = -300
posChange = 1

line = visual.Line(
    win=win, name='line',units='norm', 
    start=(-(1, 0.05)[0]/2.0, 0), end=(+(1, 0.05)[0]/2.0, 0),
    ori=0, pos=(-.7,.01),
    lineWidth=5,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1, depth=-2.0, interpolate=True)
moveTri = visual.Line(
    win=win, name='moveTri',units='pix', 
    start=(-(30,70)[0]/2.0, 0), end=(+(30,70)[0]/2.0, 0),
    ori=90, pos=[0,0],
    lineWidth=3,     colorSpace='rgb',  lineColor='red', fillColor='red',
    opacity=1, depth=-3.0, interpolate=True)
targetTri = visual.Line(
    win=win, name='targetTri',units='norm', 
    start=(-(0.05, 0.25)[0]/2.0, 0), end=(+(0.05, 0.25)[0]/2.0, 0),
    ori=90, pos=(-.95, -.01),
    lineWidth=5,     colorSpace='rgb',  lineColor=[-1,-1,1], fillColor=[-1,-1,1],
    opacity=1, depth=-4.0, interpolate=True)
nextPoly1 = visual.Rect(
    win=win, name='nextPoly1',units='norm', 
    width=(0.12, 0.06)[0], height=(0.12, 0.06)[1],
    ori=0, pos=(0.8, -.8),
    lineWidth=1,     colorSpace='rgb',  lineColor=[-1,-1,-1], fillColor=[1,0,0],
    opacity=1, depth=-5.0, interpolate=True)
nextButton1 = visual.TextStim(win=win, name='nextButton1',
    text='',
    font='Arial',
    units='norm', pos=(.8, -.8), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-6.0);
nextMouse1 = event.Mouse(win=win)
x, y = [None, None]
nextMouse1.mouseClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='',
    font='Open Sans',
    units='norm', pos=(.2, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);

# Initialize components for Routine "checkScreenEdge"
checkScreenEdgeClock = core.Clock()
instructPls = visual.TextStim(win=win, name='instructPls',
    text='Please move the red line to line up with the blue line before continuing. \n',
    font='Arial',
    units='norm', pos=(0, 0), height=0.07, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
tryAgainPoly = visual.Rect(
    win=win, name='tryAgainPoly',units='norm', 
    width=(0.15, 0.08)[0], height=(0.15, 0.08)[1],
    ori=0, pos=(0.8, -0.8),
    lineWidth=2,     colorSpace='rgb',  lineColor=[-1,-1,-1], fillColor=[1,0,0],
    opacity=1, depth=-2.0, interpolate=True)
tryAgainButton = visual.TextStim(win=win, name='tryAgainButton',
    text='',
    font='Arial',
    units='norm', pos=(.8, -.8), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
tryAgainMouse = event.Mouse(win=win)
x, y = [None, None]
tryAgainMouse.mouseClock = core.Clock()

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
    units='norm', pos=(0, 0), height=.05, wrapWidth=2, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
keyToMoveOn = keyboard.Keyboard()
contrastRange = []
contR=0.5
contb=0.5

# Initialize components for Routine "instContrast"
instContrastClock = core.Clock()
instructions = visual.TextStim(win=win, name='instructions',
    text='Welcome! \nPlease wear your glasses throughout the experiment. \n\nFirst you will be presented two images side by side. A bull’s eye grating and a radial grating.\nAdjust the contrast of the bull’s eye grating until they are equally as bright.\nYou will redo this adjustment 5 times.\n\nPress any key to continue',
    font='Arial',
    units='norm', pos=(0, .1), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_start = keyboard.Keyboard()
#make the csv based on user input set this to a 
#variable for easier readability 
fileCSV= 'image_list_'+expInfo['eye tested']+'_'+expInfo['which eye is blue']+'.csv'

nFrames = 7 #how many images to loop through from 0 
#change direction of drift for pre trial
direction = random() #random number from 0-1
driftLs =list(range((nFrames+1)*2)) #make  list that is the same size as the csv files and increases by 1 
if direction >0.5: 
    driftrows= driftLs[:(nFrames+1)] #grab the first nFrames images
else:
    driftrows = driftLs[(nFrames+1):] # grab the last nFrames images 
    
blockCount = visual.TextStim(win=win, name='blockCount',
    text='',
    font='Arial',
    units='norm', pos=(0, -.3), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
whichCSV_2 = visual.TextStim(win=win, name='whichCSV_2',
    text='',
    font='Arial',
    units='norm', pos=(0, -.35), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "gratingContrast"
gratingContrastClock = core.Clock()
brightInst = visual.TextStim(win=win, name='brightInst',
    text='Press ‘space’ if brightness is equal',
    font='Arial',
    units='height', pos=(0, -.3), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
keyPressInst = visual.TextStim(win=win, name='keyPressInst',
    text='Press ‘up’ to increase the brightness of the bull’s eye grating\nPress ‘down’ to decrease the brightness of the bull’s eye grating\n\n',
    font='Arial',
    units='height', pos=(0, .3), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
bulls_stim = visual.ImageStim(
    win=win,
    name='bulls_stim', units='pix', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(80,80),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
radial_stim = visual.ImageStim(
    win=win,
    name='radial_stim', units='pix', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(80,80),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
overlayRadial = visual.Rect(
    win=win, name='overlayRadial',units='pix', 
    width=(80,80)[0], height=(80,80)[1],
    ori=0, pos=[0,0],
    lineWidth=0,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=1.0, depth=-4.0, interpolate=True)
contrastResp = keyboard.Keyboard()
#place the right picture in the proper location
if expInfo['eye tested'] =='right':
    placeB=(150, 0)
    placeR = (-150, 0)
    labelB = (.2, -.1)
    labelR =(-.2, -.1)
else: 
    placeB=(-150, 0)
    placeR = (150, 0)
    labelB = (-.2, -.1)
    labelR =(.2, -.1)


radialLabel = visual.TextStim(win=win, name='radialLabel',
    text='Radial grating',
    font='Arial',
    units='height', pos=[0,0], height=0.015, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-7.0);
bullsLabel = visual.TextStim(win=win, name='bullsLabel',
    text='Bull’s eye grating',
    font='Arial',
    units='height', pos=[0,0], height=0.015, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-8.0);

# Initialize components for Routine "gratingCode"
gratingCodeClock = core.Clock()

# Initialize components for Routine "bothContrast"
bothContrastClock = core.Clock()
radial_stim_2 = visual.ImageStim(
    win=win,
    name='radial_stim_2', units='pix', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(80,80),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
bulls_stim_2 = visual.ImageStim(
    win=win,
    name='bulls_stim_2', units='pix', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(80,80),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
brightInst_2 = visual.TextStim(win=win, name='brightInst_2',
    text='Are the two images equally bright? \nPress ‘Y’ for yes ’N’ for no',
    font='Arial',
    units='height', pos=(0, .3), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_cont_3 = keyboard.Keyboard()

# Initialize components for Routine "contrastTrials"
contrastTrialsClock = core.Clock()
tempCont = 0

# Initialize components for Routine "finalCont"
finalContClock = core.Clock()
instContNum = visual.TextStim(win=win, name='instContNum',
    text='Please write down your contrast number. You will input this number in the initial dialog box in all future sessions. Once you record the number press ‘space’ to continue',
    font='Arial',
    units='height', pos=(0, .1), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
displayContNum = visual.TextStim(win=win, name='displayContNum',
    text='',
    font='Arial',
    units='height', pos=(0, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "binRivInst_sess1"
binRivInst_sess1Clock = core.Clock()
warning_2 = visual.TextStim(win=win, name='warning_2',
    text='STOP: PLEASE READ THE INSTRUCTIONS FOR THIS PART',
    font='Arial',
    units='height', pos=(0, .4), height=0.05, wrapWidth=None, ori=0.0, 
    color='red', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
describeBR = visual.TextStim(win=win, name='describeBR',
    text='Both gratings will be presented simultaneously. They will both continuously drift (example below). Your task is to report which grating you see at any given time, The grating you perceive will switch back and forth rapidly. Press the appropriate key everytime you notice ONE of the gratings or if you see a mix of the two gratings. Press the key as soon as you notice a change. \n\nPress ‘left’ if you see the radial grating\nPress ‘right’ if you see the bulls eye grating\nPress ‘down’ if you see a mixture of the two gratings\n\nPlease take a minute to look at the gratings below so you can experience the perceived switching of the gratings before moving onto the actual task\n\nTo begin the task press ‘space’',
    font='Arial',
    units='height', pos=(0, 0), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_3 = keyboard.Keyboard()
radialEye_2 = visual.ImageStim(
    win=win,
    name='radialEye_2', units='pix', 
    image='sin', mask=None,
    ori=0, pos=(0, -200), size=(80,80),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
bullseye_2 = visual.ImageStim(
    win=win,
    name='bullseye_2', units='pix', 
    image='sin', mask=None,
    ori=0, pos=(0, -200), size=(80,80),
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)

# Initialize components for Routine "binRiv"
binRivClock = core.Clock()
reminder = visual.TextStim(win=win, name='reminder',
    text='Remember: \n‘left’ = radial\n‘right’ = bull’s eye\n‘down’ = mix',
    font='Arial',
    units='height', pos=(.3, .3), height=0.03, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_BR = keyboard.Keyboard()
border_4 = visual.ImageStim(
    win=win,
    name='border_4', units='pix', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
radialEye_BR = visual.ImageStim(
    win=win,
    name='radialEye_BR', units='pix', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
bullsEye_BR = visual.ImageStim(
    win=win,
    name='bullsEye_BR', units='pix', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-4.0)
fixation_5 = visual.TextStim(win=win, name='fixation_5',
    text='+',
    font='Arial',
    units='height', pos=(0, 0), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);

# Initialize components for Routine "colorCode"
colorCodeClock = core.Clock()
cueColor = 'black'
cueChngColor = 'black'

# Initialize components for Routine "testCursor"
testCursorClock = core.Clock()
gradDecResp_2 = keyboard.Keyboard()
radialEye_change_2 = visual.ImageStim(
    win=win,
    name='radialEye_change_2', units='pix', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
bullsEye_gradChange_2 = visual.ImageStim(
    win=win,
    name='bullsEye_gradChange_2', units='pix', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
fixation_2 = visual.TextStim(win=win, name='fixation_2',
    text='+',
    font='Arial',
    units='height', pos=(0, 0), height=0.025, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
Instruction_2 = visual.TextStim(win=win, name='Instruction_2',
    text='Remember: \n\nPress ‘Left’ =Taller \nPress ‘Right’ = Wider ',
    font='Arial',
    units='height', pos=(.3, .3), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
tallMarker = visual.ShapeStim(
    win=win, name='tallMarker',units='height', 
    size=(0.01, 0.05), vertices='circle',
    ori=0.0, pos=(-.2, -.2),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-5.0, interpolate=True)
wideMarker = visual.ShapeStim(
    win=win, name='wideMarker',units='height', 
    size=(0.05, 0.01), vertices='circle',
    ori=0.0, pos=(.2, -.2),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-6.0, interpolate=True)
noChangeMarker = visual.ShapeStim(
    win=win, name='noChangeMarker',units='height', 
    size=(0.03, 0.03), vertices='circle',
    ori=0.0, pos=(0,-.2),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-7.0, interpolate=True)
currChange = visual.ShapeStim(
    win=win, name='currChange', vertices='cross',units='height', 
    size=(0.03, 0.03),
    ori=0.0, pos=[0,0],
    lineWidth=0.05,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-8.0, interpolate=True)
currPos = 0
change = .2
currRatio = ''
cueColor = 'black'
cueChngColor = 'black'
dispOrNot = visual.TextStim(win=win, name='dispOrNot',
    text='',
    font='Arial',
    units='height', pos=(0, .3), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-10.0);

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
    
    # ------Prepare to start Routine "findScreenEdge"-------
    continueRoutine = True
    # update component parameters for each repeat
    
    
    # setup some python lists for storing info about the nextMouse1
    nextMouse1.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    findScreenEdgeComponents = [instruct, line, moveTri, targetTri, nextPoly1, nextButton1, nextMouse1, text]
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
        #check for any key press
        keys=event.getKeys()
        #move the cursor in different sizes as you get closer 
        #to the target line
        if xPos > -500:
            posChange = 10
        elif (xPos < -500) and (xPos > -610):
            posChange = 5
        else:
            posChange = 3
        #calculate the pixels to move based on keypresses
        if len(keys):
            if 'right' in keys:
                xPos = xPos + posChange
            elif 'left' in keys:
                xPos = xPos - posChange 
        
        
        # *line* updates
        if line.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            line.frameNStart = frameN  # exact frame index
            line.tStart = t  # local t and not account for scr refresh
            line.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(line, 'tStartRefresh')  # time at next scr refresh
            line.setAutoDraw(True)
        
        # *moveTri* updates
        if moveTri.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            moveTri.frameNStart = frameN  # exact frame index
            moveTri.tStart = t  # local t and not account for scr refresh
            moveTri.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(moveTri, 'tStartRefresh')  # time at next scr refresh
            moveTri.setAutoDraw(True)
        if moveTri.status == STARTED:  # only update if drawing
            moveTri.setPos((xPos, 35), log=False)
        
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
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        if text.status == STARTED:  # only update if drawing
            text.setText(xPos, log=False)
        
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
    #screenEdgeNorm = slider.getRating()
    screenEdgeNorm = xPos
    #screenEdgePx = 10000*screenEdgeNorm
    screenEdgePx =screenEdgeNorm
    if screenEdgePx <(-300):
        skip_checkEdge = True
        screenEdgeLoop.finished = True
        
    #thisExp.addData('screenEdgeNorm', screenEdgeNorm)
    thisExp.addData('screenEdgePx', screenEdgePx)
    
    screenEdgeLoop.addData('line.started', line.tStartRefresh)
    screenEdgeLoop.addData('line.stopped', line.tStopRefresh)
    screenEdgeLoop.addData('moveTri.started', moveTri.tStartRefresh)
    screenEdgeLoop.addData('moveTri.stopped', moveTri.tStopRefresh)
    screenEdgeLoop.addData('targetTri.started', targetTri.tStartRefresh)
    screenEdgeLoop.addData('targetTri.stopped', targetTri.tStopRefresh)
    screenEdgeLoop.addData('nextPoly1.started', nextPoly1.tStartRefresh)
    screenEdgeLoop.addData('nextPoly1.stopped', nextPoly1.tStopRefresh)
    # store data for screenEdgeLoop (TrialHandler)
    screenEdgeLoop.addData('text.started', text.tStartRefresh)
    screenEdgeLoop.addData('text.stopped', text.tStopRefresh)
    # the Routine "findScreenEdge" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "checkScreenEdge"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the tryAgainMouse
    tryAgainMouse.clicked_name = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    checkScreenEdgeComponents = [instructPls, tryAgainPoly, tryAgainButton, tryAgainMouse]
    for thisComponent in checkScreenEdgeComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    checkScreenEdgeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "checkScreenEdge"-------
    while continueRoutine:
        # get current time
        t = checkScreenEdgeClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=checkScreenEdgeClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        if skip_checkEdge==True:
            continueRoutine = False
        
        # if spacebar is hit locally before moving triangle
        # you get a crash, but if online, you get a screen
        # asking you to align the red arrow to the blue
        
        # also slider looks like trash locally, but good 
        # online which is where it matters
        
        # *instructPls* updates
        if instructPls.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instructPls.frameNStart = frameN  # exact frame index
            instructPls.tStart = t  # local t and not account for scr refresh
            instructPls.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instructPls, 'tStartRefresh')  # time at next scr refresh
            instructPls.setAutoDraw(True)
        
        # *tryAgainPoly* updates
        if tryAgainPoly.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            tryAgainPoly.frameNStart = frameN  # exact frame index
            tryAgainPoly.tStart = t  # local t and not account for scr refresh
            tryAgainPoly.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(tryAgainPoly, 'tStartRefresh')  # time at next scr refresh
            tryAgainPoly.setAutoDraw(True)
        
        # *tryAgainButton* updates
        if tryAgainButton.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            tryAgainButton.frameNStart = frameN  # exact frame index
            tryAgainButton.tStart = t  # local t and not account for scr refresh
            tryAgainButton.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(tryAgainButton, 'tStartRefresh')  # time at next scr refresh
            tryAgainButton.setAutoDraw(True)
        if tryAgainButton.status == STARTED:  # only update if drawing
            tryAgainButton.setText('Try again', log=False)
        # *tryAgainMouse* updates
        if tryAgainMouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            tryAgainMouse.frameNStart = frameN  # exact frame index
            tryAgainMouse.tStart = t  # local t and not account for scr refresh
            tryAgainMouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(tryAgainMouse, 'tStartRefresh')  # time at next scr refresh
            tryAgainMouse.status = STARTED
            tryAgainMouse.mouseClock.reset()
            prevButtonState = tryAgainMouse.getPressed()  # if button is down already this ISN'T a new click
        if tryAgainMouse.status == STARTED:  # only update if started and not finished!
            buttons = tryAgainMouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    try:
                        iter(tryAgainButton)
                        clickableList = tryAgainButton
                    except:
                        clickableList = [tryAgainButton]
                    for obj in clickableList:
                        if obj.contains(tryAgainMouse):
                            gotValidClick = True
                            tryAgainMouse.clicked_name.append(obj.name)
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in checkScreenEdgeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "checkScreenEdge"-------
    for thisComponent in checkScreenEdgeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    screenEdgeLoop.addData('instructPls.started', instructPls.tStartRefresh)
    screenEdgeLoop.addData('instructPls.stopped', instructPls.tStopRefresh)
    screenEdgeLoop.addData('tryAgainPoly.started', tryAgainPoly.tStartRefresh)
    screenEdgeLoop.addData('tryAgainPoly.stopped', tryAgainPoly.tStopRefresh)
    screenEdgeLoop.addData('tryAgainButton.started', tryAgainButton.tStartRefresh)
    screenEdgeLoop.addData('tryAgainButton.stopped', tryAgainButton.tStopRefresh)
    # store data for screenEdgeLoop (TrialHandler)
    screenEdgeLoop.addData('tryAgainMouse.started', tryAgainMouse.tStart)
    screenEdgeLoop.addData('tryAgainMouse.stopped', tryAgainMouse.tStop)
    # the Routine "checkScreenEdge" was not non-slip safe, so reset the non-slip timer
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
    eyeDom = 1 #run BR to define which eye will be tested
    binRivRun = 0 # skip BR at end of practice exp 
    #current numbers will make practice last 2 min tot
    trialReps = 30 #have 10 trials in each block of the actual experiment
    blockReps = 1 # only run 3 blocks
    finalTrialDur =3 #shorten the amount of time between trials
    #contrast variables
    contrastTrials =5 # run contrast 5 times 
    contCounter = 1 #dont skip
    skipContrast = 1 #don't skip
    
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

# set up handler to look after randomisation of conditions etc
contAveraging = data.TrialHandler(nReps=skipContrast, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='contAveraging')
thisExp.addLoop(contAveraging)  # add the loop to the experiment
thisContAveraging = contAveraging.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisContAveraging.rgb)
if thisContAveraging != None:
    for paramName in thisContAveraging:
        exec('{} = thisContAveraging[paramName]'.format(paramName))

for thisContAveraging in contAveraging:
    currentLoop = contAveraging
    # abbreviate parameter names if possible (e.g. rgb = thisContAveraging.rgb)
    if thisContAveraging != None:
        for paramName in thisContAveraging:
            exec('{} = thisContAveraging[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    contTrials = data.TrialHandler(nReps=contrastTrials, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='contTrials')
    thisExp.addLoop(contTrials)  # add the loop to the experiment
    thisContTrial = contTrials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisContTrial.rgb)
    if thisContTrial != None:
        for paramName in thisContTrial:
            exec('{} = thisContTrial[paramName]'.format(paramName))
    
    for thisContTrial in contTrials:
        currentLoop = contTrials
        # abbreviate parameter names if possible (e.g. rgb = thisContTrial.rgb)
        if thisContTrial != None:
            for paramName in thisContTrial:
                exec('{} = thisContTrial[paramName]'.format(paramName))
        
        # set up handler to look after randomisation of conditions etc
        redoContAdj = data.TrialHandler(nReps=10.0, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(fileCSV),
            seed=None, name='redoContAdj')
        thisExp.addLoop(redoContAdj)  # add the loop to the experiment
        thisRedoContAdj = redoContAdj.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisRedoContAdj.rgb)
        if thisRedoContAdj != None:
            for paramName in thisRedoContAdj:
                exec('{} = thisRedoContAdj[paramName]'.format(paramName))
        
        for thisRedoContAdj in redoContAdj:
            currentLoop = redoContAdj
            # abbreviate parameter names if possible (e.g. rgb = thisRedoContAdj.rgb)
            if thisRedoContAdj != None:
                for paramName in thisRedoContAdj:
                    exec('{} = thisRedoContAdj[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "instContrast"-------
            continueRoutine = True
            # update component parameters for each repeat
            key_start.keys = []
            key_start.rt = []
            _key_start_allKeys = []
            contStrCounter = str(contCounter)
            txtVar = 'You are starting trial ' + contStrCounter + ' of 5 trials' 
            #reset contrast every trial
            contB= 0.7
            
            blockCount.setText(txtVar)
            whichCSV_2.setText(fileCSV)
            # keep track of which components have finished
            instContrastComponents = [instructions, key_start, blockCount, whichCSV_2]
            for thisComponent in instContrastComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            instContrastClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "instContrast"-------
            while continueRoutine:
                # get current time
                t = instContrastClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=instContrastClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *instructions* updates
                if instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    instructions.frameNStart = frameN  # exact frame index
                    instructions.tStart = t  # local t and not account for scr refresh
                    instructions.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(instructions, 'tStartRefresh')  # time at next scr refresh
                    instructions.setAutoDraw(True)
                
                # *key_start* updates
                if key_start.status == NOT_STARTED and t >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_start.frameNStart = frameN  # exact frame index
                    key_start.tStart = t  # local t and not account for scr refresh
                    key_start.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_start, 'tStartRefresh')  # time at next scr refresh
                    key_start.status = STARTED
                    # keyboard checking is just starting
                    key_start.clock.reset()  # now t=0
                    key_start.clearEvents(eventType='keyboard')
                if key_start.status == STARTED:
                    theseKeys = key_start.getKeys(keyList=None, waitRelease=False)
                    _key_start_allKeys.extend(theseKeys)
                    if len(_key_start_allKeys):
                        key_start.keys = _key_start_allKeys[-1].name  # just the last key pressed
                        key_start.rt = _key_start_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # *blockCount* updates
                if blockCount.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    blockCount.frameNStart = frameN  # exact frame index
                    blockCount.tStart = t  # local t and not account for scr refresh
                    blockCount.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(blockCount, 'tStartRefresh')  # time at next scr refresh
                    blockCount.setAutoDraw(True)
                
                # *whichCSV_2* updates
                if whichCSV_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    whichCSV_2.frameNStart = frameN  # exact frame index
                    whichCSV_2.tStart = t  # local t and not account for scr refresh
                    whichCSV_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(whichCSV_2, 'tStartRefresh')  # time at next scr refresh
                    whichCSV_2.setAutoDraw(True)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in instContrastComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "instContrast"-------
            for thisComponent in instContrastComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # the Routine "instContrast" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            
            # set up handler to look after randomisation of conditions etc
            adjustContrast = data.TrialHandler(nReps=1000.0, method='random', 
                extraInfo=expInfo, originPath=-1,
                trialList=data.importConditions(fileCSV, selection='1'),
                seed=None, name='adjustContrast')
            thisExp.addLoop(adjustContrast)  # add the loop to the experiment
            thisAdjustContrast = adjustContrast.trialList[0]  # so we can initialise stimuli with some values
            # abbreviate parameter names if possible (e.g. rgb = thisAdjustContrast.rgb)
            if thisAdjustContrast != None:
                for paramName in thisAdjustContrast:
                    exec('{} = thisAdjustContrast[paramName]'.format(paramName))
            
            for thisAdjustContrast in adjustContrast:
                currentLoop = adjustContrast
                # abbreviate parameter names if possible (e.g. rgb = thisAdjustContrast.rgb)
                if thisAdjustContrast != None:
                    for paramName in thisAdjustContrast:
                        exec('{} = thisAdjustContrast[paramName]'.format(paramName))
                
                # ------Prepare to start Routine "gratingContrast"-------
                continueRoutine = True
                # update component parameters for each repeat
                bulls_stim.setOpacity(contB)
                bulls_stim.setPos(placeB)
                bulls_stim.setImage(image_bullsEye)
                radial_stim.setOpacity(contR)
                radial_stim.setPos(placeR)
                radial_stim.setImage(image_radialEye)
                overlayRadial.setOpacity(contB)
                overlayRadial.setPos(placeR)
                contrastResp.keys = []
                contrastResp.rt = []
                _contrastResp_allKeys = []
                radialLabel.setPos(labelR)
                bullsLabel.setPos(labelB)
                # keep track of which components have finished
                gratingContrastComponents = [brightInst, keyPressInst, bulls_stim, radial_stim, overlayRadial, contrastResp, radialLabel, bullsLabel]
                for thisComponent in gratingContrastComponents:
                    thisComponent.tStart = None
                    thisComponent.tStop = None
                    thisComponent.tStartRefresh = None
                    thisComponent.tStopRefresh = None
                    if hasattr(thisComponent, 'status'):
                        thisComponent.status = NOT_STARTED
                # reset timers
                t = 0
                _timeToFirstFrame = win.getFutureFlipTime(clock="now")
                gratingContrastClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
                frameN = -1
                
                # -------Run Routine "gratingContrast"-------
                while continueRoutine:
                    # get current time
                    t = gratingContrastClock.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=gratingContrastClock)
                    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                    # update/draw components on each frame
                    
                    # *brightInst* updates
                    if brightInst.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        brightInst.frameNStart = frameN  # exact frame index
                        brightInst.tStart = t  # local t and not account for scr refresh
                        brightInst.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(brightInst, 'tStartRefresh')  # time at next scr refresh
                        brightInst.setAutoDraw(True)
                    
                    # *keyPressInst* updates
                    if keyPressInst.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        keyPressInst.frameNStart = frameN  # exact frame index
                        keyPressInst.tStart = t  # local t and not account for scr refresh
                        keyPressInst.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(keyPressInst, 'tStartRefresh')  # time at next scr refresh
                        keyPressInst.setAutoDraw(True)
                    
                    # *bulls_stim* updates
                    if bulls_stim.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        bulls_stim.frameNStart = frameN  # exact frame index
                        bulls_stim.tStart = t  # local t and not account for scr refresh
                        bulls_stim.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(bulls_stim, 'tStartRefresh')  # time at next scr refresh
                        bulls_stim.setAutoDraw(True)
                    
                    # *radial_stim* updates
                    if radial_stim.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        radial_stim.frameNStart = frameN  # exact frame index
                        radial_stim.tStart = t  # local t and not account for scr refresh
                        radial_stim.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(radial_stim, 'tStartRefresh')  # time at next scr refresh
                        radial_stim.setAutoDraw(True)
                    
                    # *overlayRadial* updates
                    if overlayRadial.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        overlayRadial.frameNStart = frameN  # exact frame index
                        overlayRadial.tStart = t  # local t and not account for scr refresh
                        overlayRadial.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(overlayRadial, 'tStartRefresh')  # time at next scr refresh
                        overlayRadial.setAutoDraw(True)
                    
                    # *contrastResp* updates
                    waitOnFlip = False
                    if contrastResp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        contrastResp.frameNStart = frameN  # exact frame index
                        contrastResp.tStart = t  # local t and not account for scr refresh
                        contrastResp.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(contrastResp, 'tStartRefresh')  # time at next scr refresh
                        contrastResp.status = STARTED
                        # keyboard checking is just starting
                        waitOnFlip = True
                        win.callOnFlip(contrastResp.clock.reset)  # t=0 on next screen flip
                        win.callOnFlip(contrastResp.clearEvents, eventType='keyboard')  # clear events on next screen flip
                    if contrastResp.status == STARTED and not waitOnFlip:
                        theseKeys = contrastResp.getKeys(keyList=['up', 'down', 'space'], waitRelease=False)
                        _contrastResp_allKeys.extend(theseKeys)
                        if len(_contrastResp_allKeys):
                            contrastResp.keys = _contrastResp_allKeys[-1].name  # just the last key pressed
                            contrastResp.rt = _contrastResp_allKeys[-1].rt
                            # a response ends the routine
                            continueRoutine = False
                    
                    # *radialLabel* updates
                    if radialLabel.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        radialLabel.frameNStart = frameN  # exact frame index
                        radialLabel.tStart = t  # local t and not account for scr refresh
                        radialLabel.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(radialLabel, 'tStartRefresh')  # time at next scr refresh
                        radialLabel.setAutoDraw(True)
                    
                    # *bullsLabel* updates
                    if bullsLabel.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                        # keep track of start time/frame for later
                        bullsLabel.frameNStart = frameN  # exact frame index
                        bullsLabel.tStart = t  # local t and not account for scr refresh
                        bullsLabel.tStartRefresh = tThisFlipGlobal  # on global time
                        win.timeOnFlip(bullsLabel, 'tStartRefresh')  # time at next scr refresh
                        bullsLabel.setAutoDraw(True)
                    
                    # check for quit (typically the Esc key)
                    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                        core.quit()
                    
                    # check if all components have finished
                    if not continueRoutine:  # a component has requested a forced-end of Routine
                        break
                    continueRoutine = False  # will revert to True if at least one component still running
                    for thisComponent in gratingContrastComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # -------Ending Routine "gratingContrast"-------
                for thisComponent in gratingContrastComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                # check responses
                if contrastResp.keys in ['', [], None]:  # No response was made
                    contrastResp.keys = None
                adjustContrast.addData('contrastResp.keys',contrastResp.keys)
                if contrastResp.keys != None:  # we had a response
                    adjustContrast.addData('contrastResp.rt', contrastResp.rt)
                if contrastResp.keys =='space':
                    adjustContrast.finished=True
                    
                adjustContrast.addData('radialLabel.started', radialLabel.tStartRefresh)
                adjustContrast.addData('radialLabel.stopped', radialLabel.tStopRefresh)
                adjustContrast.addData('bullsLabel.started', bullsLabel.tStartRefresh)
                adjustContrast.addData('bullsLabel.stopped', bullsLabel.tStopRefresh)
                # the Routine "gratingContrast" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
                
                # ------Prepare to start Routine "gratingCode"-------
                continueRoutine = True
                # update component parameters for each repeat
                # keep track of which components have finished
                gratingCodeComponents = []
                for thisComponent in gratingCodeComponents:
                    thisComponent.tStart = None
                    thisComponent.tStop = None
                    thisComponent.tStartRefresh = None
                    thisComponent.tStopRefresh = None
                    if hasattr(thisComponent, 'status'):
                        thisComponent.status = NOT_STARTED
                # reset timers
                t = 0
                _timeToFirstFrame = win.getFutureFlipTime(clock="now")
                gratingCodeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
                frameN = -1
                
                # -------Run Routine "gratingCode"-------
                while continueRoutine:
                    # get current time
                    t = gratingCodeClock.getTime()
                    tThisFlip = win.getFutureFlipTime(clock=gratingCodeClock)
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
                    for thisComponent in gratingCodeComponents:
                        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                            continueRoutine = True
                            break  # at least one component has not yet finished
                    
                    # refresh the screen
                    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                        win.flip()
                
                # -------Ending Routine "gratingCode"-------
                for thisComponent in gratingCodeComponents:
                    if hasattr(thisComponent, "setAutoDraw"):
                        thisComponent.setAutoDraw(False)
                #manipulate stim
                if contrastResp.keys == 'up':
                    contB +=0.01
                    if contB > 1:
                        contB=1
                if contrastResp.keys == 'down':
                    contB -=0.01
                    if contB <=0:
                        contB= 0
                
                # the Routine "gratingCode" was not non-slip safe, so reset the non-slip timer
                routineTimer.reset()
            # completed 1000.0 repeats of 'adjustContrast'
            
            
            # ------Prepare to start Routine "bothContrast"-------
            continueRoutine = True
            # update component parameters for each repeat
            radial_stim_2.setOpacity(contR)
            radial_stim_2.setImage(image_radialEye)
            bulls_stim_2.setOpacity(contB)
            bulls_stim_2.setImage(image_bullsEye)
            key_resp_cont_3.keys = []
            key_resp_cont_3.rt = []
            _key_resp_cont_3_allKeys = []
            # keep track of which components have finished
            bothContrastComponents = [radial_stim_2, bulls_stim_2, brightInst_2, key_resp_cont_3]
            for thisComponent in bothContrastComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            bothContrastClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "bothContrast"-------
            while continueRoutine:
                # get current time
                t = bothContrastClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=bothContrastClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *radial_stim_2* updates
                if radial_stim_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    radial_stim_2.frameNStart = frameN  # exact frame index
                    radial_stim_2.tStart = t  # local t and not account for scr refresh
                    radial_stim_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(radial_stim_2, 'tStartRefresh')  # time at next scr refresh
                    radial_stim_2.setAutoDraw(True)
                
                # *bulls_stim_2* updates
                if bulls_stim_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bulls_stim_2.frameNStart = frameN  # exact frame index
                    bulls_stim_2.tStart = t  # local t and not account for scr refresh
                    bulls_stim_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bulls_stim_2, 'tStartRefresh')  # time at next scr refresh
                    bulls_stim_2.setAutoDraw(True)
                
                # *brightInst_2* updates
                if brightInst_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    brightInst_2.frameNStart = frameN  # exact frame index
                    brightInst_2.tStart = t  # local t and not account for scr refresh
                    brightInst_2.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(brightInst_2, 'tStartRefresh')  # time at next scr refresh
                    brightInst_2.setAutoDraw(True)
                
                # *key_resp_cont_3* updates
                waitOnFlip = False
                if key_resp_cont_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_cont_3.frameNStart = frameN  # exact frame index
                    key_resp_cont_3.tStart = t  # local t and not account for scr refresh
                    key_resp_cont_3.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_cont_3, 'tStartRefresh')  # time at next scr refresh
                    key_resp_cont_3.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_cont_3.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_cont_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_cont_3.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_cont_3.getKeys(keyList=['y', 'n'], waitRelease=False)
                    _key_resp_cont_3_allKeys.extend(theseKeys)
                    if len(_key_resp_cont_3_allKeys):
                        key_resp_cont_3.keys = _key_resp_cont_3_allKeys[-1].name  # just the last key pressed
                        key_resp_cont_3.rt = _key_resp_cont_3_allKeys[-1].rt
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in bothContrastComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "bothContrast"-------
            for thisComponent in bothContrastComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if key_resp_cont_3.keys in ['', [], None]:  # No response was made
                key_resp_cont_3.keys = None
            redoContAdj.addData('key_resp_cont_3.keys',key_resp_cont_3.keys)
            if key_resp_cont_3.keys != None:  # we had a response
                redoContAdj.addData('key_resp_cont_3.rt', key_resp_cont_3.rt)
            #don't repeat if contrast is the same
            if key_resp_cont_3.keys =='y':
                    redoContAdj.finished=True
            else: 
                contB=0.7
                contR=1.0
            # the Routine "bothContrast" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed 10.0 repeats of 'redoContAdj'
        
        
        # ------Prepare to start Routine "contrastTrials"-------
        continueRoutine = True
        # update component parameters for each repeat
        contCounter +=1 #count each trials for display
        contrastRange.append(contB) #make a list of the contrast
        tempCont += contB #temporarily add each contrast for averaging
        # keep track of which components have finished
        contrastTrialsComponents = []
        for thisComponent in contrastTrialsComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        contrastTrialsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "contrastTrials"-------
        while continueRoutine:
            # get current time
            t = contrastTrialsClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=contrastTrialsClock)
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
            for thisComponent in contrastTrialsComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "contrastTrials"-------
        for thisComponent in contrastTrialsComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        if contCounter ==5: 
            contB= tempCont/5 #find average of 5 trials
            
        
        # the Routine "contrastTrials" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed contrastTrials repeats of 'contTrials'
    
    
    # ------Prepare to start Routine "finalCont"-------
    continueRoutine = True
    # update component parameters for each repeat
    contB= tempCont/5
    txtContB = round(contB,2)
    txtVar = 'Your contrast number is ' + str(txtContB)
    thisExp.addData('contrastRange', contrastRange)
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    finalContComponents = [instContNum, displayContNum, key_resp_2]
    for thisComponent in finalContComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    finalContClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "finalCont"-------
    while continueRoutine:
        # get current time
        t = finalContClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=finalContClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instContNum* updates
        if instContNum.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instContNum.frameNStart = frameN  # exact frame index
            instContNum.tStart = t  # local t and not account for scr refresh
            instContNum.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instContNum, 'tStartRefresh')  # time at next scr refresh
            instContNum.setAutoDraw(True)
        
        # *displayContNum* updates
        if displayContNum.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            displayContNum.frameNStart = frameN  # exact frame index
            displayContNum.tStart = t  # local t and not account for scr refresh
            displayContNum.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(displayContNum, 'tStartRefresh')  # time at next scr refresh
            displayContNum.setAutoDraw(True)
        if displayContNum.status == STARTED:  # only update if drawing
            displayContNum.setText(txtContB, log=False)
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['y', 'n', 'left', 'right', 'space'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in finalContComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "finalCont"-------
    for thisComponent in finalContComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    contAveraging.addData('instContNum.started', instContNum.tStartRefresh)
    contAveraging.addData('instContNum.stopped', instContNum.tStopRefresh)
    contAveraging.addData('displayContNum.started', displayContNum.tStartRefresh)
    contAveraging.addData('displayContNum.stopped', displayContNum.tStopRefresh)
    # the Routine "finalCont" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed skipContrast repeats of 'contAveraging'


# set up handler to look after randomisation of conditions etc
defineEye = data.TrialHandler(nReps=eyeDom, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='defineEye')
thisExp.addLoop(defineEye)  # add the loop to the experiment
thisDefineEye = defineEye.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisDefineEye.rgb)
if thisDefineEye != None:
    for paramName in thisDefineEye:
        exec('{} = thisDefineEye[paramName]'.format(paramName))

for thisDefineEye in defineEye:
    currentLoop = defineEye
    # abbreviate parameter names if possible (e.g. rgb = thisDefineEye.rgb)
    if thisDefineEye != None:
        for paramName in thisDefineEye:
            exec('{} = thisDefineEye[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    instBR_drift_sess1 = data.TrialHandler(nReps=1000.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(fileCSV, selection=':8'),
        seed=None, name='instBR_drift_sess1')
    thisExp.addLoop(instBR_drift_sess1)  # add the loop to the experiment
    thisInstBR_drift_sess1 = instBR_drift_sess1.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisInstBR_drift_sess1.rgb)
    if thisInstBR_drift_sess1 != None:
        for paramName in thisInstBR_drift_sess1:
            exec('{} = thisInstBR_drift_sess1[paramName]'.format(paramName))
    
    for thisInstBR_drift_sess1 in instBR_drift_sess1:
        currentLoop = instBR_drift_sess1
        # abbreviate parameter names if possible (e.g. rgb = thisInstBR_drift_sess1.rgb)
        if thisInstBR_drift_sess1 != None:
            for paramName in thisInstBR_drift_sess1:
                exec('{} = thisInstBR_drift_sess1[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "binRivInst_sess1"-------
        continueRoutine = True
        routineTimer.add(0.125000)
        # update component parameters for each repeat
        key_resp_3.keys = []
        key_resp_3.rt = []
        _key_resp_3_allKeys = []
        radialEye_2.setOpacity(contR)
        radialEye_2.setImage(image_radialEye)
        bullseye_2.setOpacity(contB)
        bullseye_2.setImage(image_bullsEye)
        #set sizes of visual stimuli
        constSize=imgSizeCm*pxPerCm #set the calculated size to a new varibale 
        #WARNING: when the images are generated the actual aespect ratio we want 
        #is 20 px, but b/c we need background so the opacity is consistent when the image is 
        # stretch we will add another 20 px to both images 
        minVal =constSize#maximum aspect ratio
        maxVal = constSize+30 #minimum aspect ratio
        #finalize border size
        brd = (constSize+45) + 40 #the max the image can stretch + extra pix to avoid overlap
        
        # keep track of which components have finished
        binRivInst_sess1Components = [warning_2, describeBR, key_resp_3, radialEye_2, bullseye_2]
        for thisComponent in binRivInst_sess1Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        binRivInst_sess1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "binRivInst_sess1"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = binRivInst_sess1Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=binRivInst_sess1Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *warning_2* updates
            if warning_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                warning_2.frameNStart = frameN  # exact frame index
                warning_2.tStart = t  # local t and not account for scr refresh
                warning_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(warning_2, 'tStartRefresh')  # time at next scr refresh
                warning_2.setAutoDraw(True)
            if warning_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > warning_2.tStartRefresh + 0.125-frameTolerance:
                    # keep track of stop time/frame for later
                    warning_2.tStop = t  # not accounting for scr refresh
                    warning_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(warning_2, 'tStopRefresh')  # time at next scr refresh
                    warning_2.setAutoDraw(False)
            
            # *describeBR* updates
            if describeBR.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                describeBR.frameNStart = frameN  # exact frame index
                describeBR.tStart = t  # local t and not account for scr refresh
                describeBR.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(describeBR, 'tStartRefresh')  # time at next scr refresh
                describeBR.setAutoDraw(True)
            if describeBR.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > describeBR.tStartRefresh + .125-frameTolerance:
                    # keep track of stop time/frame for later
                    describeBR.tStop = t  # not accounting for scr refresh
                    describeBR.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(describeBR, 'tStopRefresh')  # time at next scr refresh
                    describeBR.setAutoDraw(False)
            
            # *key_resp_3* updates
            waitOnFlip = False
            if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_3.frameNStart = frameN  # exact frame index
                key_resp_3.tStart = t  # local t and not account for scr refresh
                key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
                key_resp_3.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
            if key_resp_3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_resp_3.tStartRefresh + .125-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp_3.tStop = t  # not accounting for scr refresh
                    key_resp_3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp_3, 'tStopRefresh')  # time at next scr refresh
                    key_resp_3.status = FINISHED
            if key_resp_3.status == STARTED and not waitOnFlip:
                theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
                _key_resp_3_allKeys.extend(theseKeys)
                if len(_key_resp_3_allKeys):
                    key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                    key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            
            # *radialEye_2* updates
            if radialEye_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                radialEye_2.frameNStart = frameN  # exact frame index
                radialEye_2.tStart = t  # local t and not account for scr refresh
                radialEye_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(radialEye_2, 'tStartRefresh')  # time at next scr refresh
                radialEye_2.setAutoDraw(True)
            if radialEye_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > radialEye_2.tStartRefresh + .125-frameTolerance:
                    # keep track of stop time/frame for later
                    radialEye_2.tStop = t  # not accounting for scr refresh
                    radialEye_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(radialEye_2, 'tStopRefresh')  # time at next scr refresh
                    radialEye_2.setAutoDraw(False)
            
            # *bullseye_2* updates
            if bullseye_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                bullseye_2.frameNStart = frameN  # exact frame index
                bullseye_2.tStart = t  # local t and not account for scr refresh
                bullseye_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(bullseye_2, 'tStartRefresh')  # time at next scr refresh
                bullseye_2.setAutoDraw(True)
            if bullseye_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > bullseye_2.tStartRefresh + .125-frameTolerance:
                    # keep track of stop time/frame for later
                    bullseye_2.tStop = t  # not accounting for scr refresh
                    bullseye_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(bullseye_2, 'tStopRefresh')  # time at next scr refresh
                    bullseye_2.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in binRivInst_sess1Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "binRivInst_sess1"-------
        for thisComponent in binRivInst_sess1Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        #if the space button is pressed end this routine
        if key_resp_3.keys =='space':
            instBR_drift_sess1.finished=True
        
        
    # completed 1000.0 repeats of 'instBR_drift_sess1'
    
    
    # set up handler to look after randomisation of conditions etc
    binRiv_trials_sess1 = data.TrialHandler(nReps=5.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='binRiv_trials_sess1')
    thisExp.addLoop(binRiv_trials_sess1)  # add the loop to the experiment
    thisBinRiv_trials_sess1 = binRiv_trials_sess1.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisBinRiv_trials_sess1.rgb)
    if thisBinRiv_trials_sess1 != None:
        for paramName in thisBinRiv_trials_sess1:
            exec('{} = thisBinRiv_trials_sess1[paramName]'.format(paramName))
    
    for thisBinRiv_trials_sess1 in binRiv_trials_sess1:
        currentLoop = binRiv_trials_sess1
        # abbreviate parameter names if possible (e.g. rgb = thisBinRiv_trials_sess1.rgb)
        if thisBinRiv_trials_sess1 != None:
            for paramName in thisBinRiv_trials_sess1:
                exec('{} = thisBinRiv_trials_sess1[paramName]'.format(paramName))
        
        # set up handler to look after randomisation of conditions etc
        drift_BR_sess1 = data.TrialHandler(nReps=6.0, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions(fileCSV, selection=driftrows),
            seed=None, name='drift_BR_sess1')
        thisExp.addLoop(drift_BR_sess1)  # add the loop to the experiment
        thisDrift_BR_sess1 = drift_BR_sess1.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisDrift_BR_sess1.rgb)
        if thisDrift_BR_sess1 != None:
            for paramName in thisDrift_BR_sess1:
                exec('{} = thisDrift_BR_sess1[paramName]'.format(paramName))
        
        for thisDrift_BR_sess1 in drift_BR_sess1:
            currentLoop = drift_BR_sess1
            # abbreviate parameter names if possible (e.g. rgb = thisDrift_BR_sess1.rgb)
            if thisDrift_BR_sess1 != None:
                for paramName in thisDrift_BR_sess1:
                    exec('{} = thisDrift_BR_sess1[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "binRiv"-------
            continueRoutine = True
            routineTimer.add(0.125000)
            # update component parameters for each repeat
            key_resp_BR.keys = []
            key_resp_BR.rt = []
            _key_resp_BR_allKeys = []
            border_4.setSize((brd,brd))
            border_4.setImage(checkBorder)
            radialEye_BR.setOpacity(contR)
            radialEye_BR.setSize((maxVal, maxVal))
            radialEye_BR.setImage(image_radialEye)
            bullsEye_BR.setOpacity(contB)
            bullsEye_BR.setSize((maxVal, maxVal))
            bullsEye_BR.setImage(image_bullsEye)
            fixation_5.setColor('white', colorSpace='rgb')
            # keep track of which components have finished
            binRivComponents = [reminder, key_resp_BR, border_4, radialEye_BR, bullsEye_BR, fixation_5]
            for thisComponent in binRivComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            binRivClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "binRiv"-------
            while continueRoutine and routineTimer.getTime() > 0:
                # get current time
                t = binRivClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=binRivClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *reminder* updates
                if reminder.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    reminder.frameNStart = frameN  # exact frame index
                    reminder.tStart = t  # local t and not account for scr refresh
                    reminder.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(reminder, 'tStartRefresh')  # time at next scr refresh
                    reminder.setAutoDraw(True)
                if reminder.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > reminder.tStartRefresh + .125-frameTolerance:
                        # keep track of stop time/frame for later
                        reminder.tStop = t  # not accounting for scr refresh
                        reminder.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(reminder, 'tStopRefresh')  # time at next scr refresh
                        reminder.setAutoDraw(False)
                
                # *key_resp_BR* updates
                waitOnFlip = False
                if key_resp_BR.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_BR.frameNStart = frameN  # exact frame index
                    key_resp_BR.tStart = t  # local t and not account for scr refresh
                    key_resp_BR.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_BR, 'tStartRefresh')  # time at next scr refresh
                    key_resp_BR.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_BR.clock.reset)  # t=0 on next screen flip
                if key_resp_BR.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp_BR.tStartRefresh + .125-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp_BR.tStop = t  # not accounting for scr refresh
                        key_resp_BR.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(key_resp_BR, 'tStopRefresh')  # time at next scr refresh
                        key_resp_BR.status = FINISHED
                if key_resp_BR.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_BR.getKeys(keyList=['down', 'right', 'left'], waitRelease=False)
                    _key_resp_BR_allKeys.extend(theseKeys)
                    if len(_key_resp_BR_allKeys):
                        key_resp_BR.keys = [key.name for key in _key_resp_BR_allKeys]  # storing all keys
                        key_resp_BR.rt = [key.rt for key in _key_resp_BR_allKeys]
                
                # *border_4* updates
                if border_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    border_4.frameNStart = frameN  # exact frame index
                    border_4.tStart = t  # local t and not account for scr refresh
                    border_4.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(border_4, 'tStartRefresh')  # time at next scr refresh
                    border_4.setAutoDraw(True)
                if border_4.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > border_4.tStartRefresh + .125-frameTolerance:
                        # keep track of stop time/frame for later
                        border_4.tStop = t  # not accounting for scr refresh
                        border_4.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(border_4, 'tStopRefresh')  # time at next scr refresh
                        border_4.setAutoDraw(False)
                
                # *radialEye_BR* updates
                if radialEye_BR.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    radialEye_BR.frameNStart = frameN  # exact frame index
                    radialEye_BR.tStart = t  # local t and not account for scr refresh
                    radialEye_BR.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(radialEye_BR, 'tStartRefresh')  # time at next scr refresh
                    radialEye_BR.setAutoDraw(True)
                if radialEye_BR.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > radialEye_BR.tStartRefresh + .125-frameTolerance:
                        # keep track of stop time/frame for later
                        radialEye_BR.tStop = t  # not accounting for scr refresh
                        radialEye_BR.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(radialEye_BR, 'tStopRefresh')  # time at next scr refresh
                        radialEye_BR.setAutoDraw(False)
                
                # *bullsEye_BR* updates
                if bullsEye_BR.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    bullsEye_BR.frameNStart = frameN  # exact frame index
                    bullsEye_BR.tStart = t  # local t and not account for scr refresh
                    bullsEye_BR.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(bullsEye_BR, 'tStartRefresh')  # time at next scr refresh
                    bullsEye_BR.setAutoDraw(True)
                if bullsEye_BR.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > bullsEye_BR.tStartRefresh + .125-frameTolerance:
                        # keep track of stop time/frame for later
                        bullsEye_BR.tStop = t  # not accounting for scr refresh
                        bullsEye_BR.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(bullsEye_BR, 'tStopRefresh')  # time at next scr refresh
                        bullsEye_BR.setAutoDraw(False)
                
                # *fixation_5* updates
                if fixation_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    fixation_5.frameNStart = frameN  # exact frame index
                    fixation_5.tStart = t  # local t and not account for scr refresh
                    fixation_5.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(fixation_5, 'tStartRefresh')  # time at next scr refresh
                    fixation_5.setAutoDraw(True)
                if fixation_5.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > fixation_5.tStartRefresh + .125-frameTolerance:
                        # keep track of stop time/frame for later
                        fixation_5.tStop = t  # not accounting for scr refresh
                        fixation_5.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(fixation_5, 'tStopRefresh')  # time at next scr refresh
                        fixation_5.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in binRivComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "binRiv"-------
            for thisComponent in binRivComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # check responses
            if key_resp_BR.keys in ['', [], None]:  # No response was made
                key_resp_BR.keys = None
            drift_BR_sess1.addData('key_resp_BR.keys',key_resp_BR.keys)
            if key_resp_BR.keys != None:  # we had a response
                drift_BR_sess1.addData('key_resp_BR.rt', key_resp_BR.rt)
            drift_BR_sess1.addData('key_resp_BR.started', key_resp_BR.tStartRefresh)
            drift_BR_sess1.addData('key_resp_BR.stopped', key_resp_BR.tStopRefresh)
            thisExp.nextEntry()
            
        # completed 6.0 repeats of 'drift_BR_sess1'
        
        thisExp.nextEntry()
        
    # completed 5.0 repeats of 'binRiv_trials_sess1'
    
    thisExp.nextEntry()
    
# completed eyeDom repeats of 'defineEye'


# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=200.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "colorCode"-------
    continueRoutine = True
    # update component parameters for each repeat
    #flip a coin if 0 then don't display response cues
    #if 1 then display the response cues
    cueTime = random()
    while cueTime ==0.5:
        cueTime = random()
    
    cueTxt = str(cueTime)
    
    if cueTime < 0.5:
        cueColor = 'black'
        cueChngColor = 'black'
    else:
        cueColor = 'white'
        cueChngColor ='green'
    # keep track of which components have finished
    colorCodeComponents = []
    for thisComponent in colorCodeComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    colorCodeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "colorCode"-------
    while continueRoutine:
        # get current time
        t = colorCodeClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=colorCodeClock)
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
        for thisComponent in colorCodeComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "colorCode"-------
    for thisComponent in colorCodeComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "colorCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    driftTest = data.TrialHandler(nReps=10.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(fileCSV, selection=driftrows),
        seed=None, name='driftTest')
    thisExp.addLoop(driftTest)  # add the loop to the experiment
    thisDriftTest = driftTest.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisDriftTest.rgb)
    if thisDriftTest != None:
        for paramName in thisDriftTest:
            exec('{} = thisDriftTest[paramName]'.format(paramName))
    
    for thisDriftTest in driftTest:
        currentLoop = driftTest
        # abbreviate parameter names if possible (e.g. rgb = thisDriftTest.rgb)
        if thisDriftTest != None:
            for paramName in thisDriftTest:
                exec('{} = thisDriftTest[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "testCursor"-------
        continueRoutine = True
        routineTimer.add(0.125000)
        # update component parameters for each repeat
        gradDecResp_2.keys = []
        gradDecResp_2.rt = []
        _gradDecResp_2_allKeys = []
        radialEye_change_2.setOpacity(.5)
        radialEye_change_2.setSize((80,80))
        radialEye_change_2.setImage(image_radialEye)
        bullsEye_gradChange_2.setOpacity(.5)
        bullsEye_gradChange_2.setSize((80,80))
        bullsEye_gradChange_2.setImage(image_bullsEye)
        noChangeMarker.setFillColor(cueColor)
        noChangeMarker.setLineColor(cueColor)
        currChange.setFillColor(cueChngColor)
        currChange.setLineColor(cueChngColor)
        dispOrNot.setText(cueTxt)
        # keep track of which components have finished
        testCursorComponents = [gradDecResp_2, radialEye_change_2, bullsEye_gradChange_2, fixation_2, Instruction_2, tallMarker, wideMarker, noChangeMarker, currChange, dispOrNot]
        for thisComponent in testCursorComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        testCursorClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "testCursor"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = testCursorClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=testCursorClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *gradDecResp_2* updates
            waitOnFlip = False
            if gradDecResp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                gradDecResp_2.frameNStart = frameN  # exact frame index
                gradDecResp_2.tStart = t  # local t and not account for scr refresh
                gradDecResp_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(gradDecResp_2, 'tStartRefresh')  # time at next scr refresh
                gradDecResp_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(gradDecResp_2.clock.reset)  # t=0 on next screen flip
            if gradDecResp_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > gradDecResp_2.tStartRefresh + .125-frameTolerance:
                    # keep track of stop time/frame for later
                    gradDecResp_2.tStop = t  # not accounting for scr refresh
                    gradDecResp_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(gradDecResp_2, 'tStopRefresh')  # time at next scr refresh
                    gradDecResp_2.status = FINISHED
            if gradDecResp_2.status == STARTED and not waitOnFlip:
                theseKeys = gradDecResp_2.getKeys(keyList=['right', 'left'], waitRelease=False)
                _gradDecResp_2_allKeys.extend(theseKeys)
                if len(_gradDecResp_2_allKeys):
                    gradDecResp_2.keys = _gradDecResp_2_allKeys[-1].name  # just the last key pressed
                    gradDecResp_2.rt = _gradDecResp_2_allKeys[-1].rt
            
            # *radialEye_change_2* updates
            if radialEye_change_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                radialEye_change_2.frameNStart = frameN  # exact frame index
                radialEye_change_2.tStart = t  # local t and not account for scr refresh
                radialEye_change_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(radialEye_change_2, 'tStartRefresh')  # time at next scr refresh
                radialEye_change_2.setAutoDraw(True)
            if radialEye_change_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > radialEye_change_2.tStartRefresh + .125-frameTolerance:
                    # keep track of stop time/frame for later
                    radialEye_change_2.tStop = t  # not accounting for scr refresh
                    radialEye_change_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(radialEye_change_2, 'tStopRefresh')  # time at next scr refresh
                    radialEye_change_2.setAutoDraw(False)
            
            # *bullsEye_gradChange_2* updates
            if bullsEye_gradChange_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                bullsEye_gradChange_2.frameNStart = frameN  # exact frame index
                bullsEye_gradChange_2.tStart = t  # local t and not account for scr refresh
                bullsEye_gradChange_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(bullsEye_gradChange_2, 'tStartRefresh')  # time at next scr refresh
                bullsEye_gradChange_2.setAutoDraw(True)
            if bullsEye_gradChange_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > bullsEye_gradChange_2.tStartRefresh + .125-frameTolerance:
                    # keep track of stop time/frame for later
                    bullsEye_gradChange_2.tStop = t  # not accounting for scr refresh
                    bullsEye_gradChange_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(bullsEye_gradChange_2, 'tStopRefresh')  # time at next scr refresh
                    bullsEye_gradChange_2.setAutoDraw(False)
            
            # *fixation_2* updates
            if fixation_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixation_2.frameNStart = frameN  # exact frame index
                fixation_2.tStart = t  # local t and not account for scr refresh
                fixation_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation_2, 'tStartRefresh')  # time at next scr refresh
                fixation_2.setAutoDraw(True)
            if fixation_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixation_2.tStartRefresh + .125-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation_2.tStop = t  # not accounting for scr refresh
                    fixation_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixation_2, 'tStopRefresh')  # time at next scr refresh
                    fixation_2.setAutoDraw(False)
            
            # *Instruction_2* updates
            if Instruction_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Instruction_2.frameNStart = frameN  # exact frame index
                Instruction_2.tStart = t  # local t and not account for scr refresh
                Instruction_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Instruction_2, 'tStartRefresh')  # time at next scr refresh
                Instruction_2.setAutoDraw(True)
            if Instruction_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > Instruction_2.tStartRefresh + 0.125-frameTolerance:
                    # keep track of stop time/frame for later
                    Instruction_2.tStop = t  # not accounting for scr refresh
                    Instruction_2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(Instruction_2, 'tStopRefresh')  # time at next scr refresh
                    Instruction_2.setAutoDraw(False)
            
            # *tallMarker* updates
            if tallMarker.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                tallMarker.frameNStart = frameN  # exact frame index
                tallMarker.tStart = t  # local t and not account for scr refresh
                tallMarker.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(tallMarker, 'tStartRefresh')  # time at next scr refresh
                tallMarker.setAutoDraw(True)
            if tallMarker.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > tallMarker.tStartRefresh + .125-frameTolerance:
                    # keep track of stop time/frame for later
                    tallMarker.tStop = t  # not accounting for scr refresh
                    tallMarker.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(tallMarker, 'tStopRefresh')  # time at next scr refresh
                    tallMarker.setAutoDraw(False)
            if tallMarker.status == STARTED:  # only update if drawing
                tallMarker.setFillColor(cueColor, log=False)
                tallMarker.setLineColor(cueColor, log=False)
            
            # *wideMarker* updates
            if wideMarker.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                wideMarker.frameNStart = frameN  # exact frame index
                wideMarker.tStart = t  # local t and not account for scr refresh
                wideMarker.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(wideMarker, 'tStartRefresh')  # time at next scr refresh
                wideMarker.setAutoDraw(True)
            if wideMarker.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > wideMarker.tStartRefresh + .125-frameTolerance:
                    # keep track of stop time/frame for later
                    wideMarker.tStop = t  # not accounting for scr refresh
                    wideMarker.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(wideMarker, 'tStopRefresh')  # time at next scr refresh
                    wideMarker.setAutoDraw(False)
            if wideMarker.status == STARTED:  # only update if drawing
                wideMarker.setFillColor(cueColor, log=False)
                wideMarker.setLineColor(cueColor, log=False)
            
            # *noChangeMarker* updates
            if noChangeMarker.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                noChangeMarker.frameNStart = frameN  # exact frame index
                noChangeMarker.tStart = t  # local t and not account for scr refresh
                noChangeMarker.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(noChangeMarker, 'tStartRefresh')  # time at next scr refresh
                noChangeMarker.setAutoDraw(True)
            if noChangeMarker.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > noChangeMarker.tStartRefresh + .125-frameTolerance:
                    # keep track of stop time/frame for later
                    noChangeMarker.tStop = t  # not accounting for scr refresh
                    noChangeMarker.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(noChangeMarker, 'tStopRefresh')  # time at next scr refresh
                    noChangeMarker.setAutoDraw(False)
            
            # *currChange* updates
            if currChange.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                currChange.frameNStart = frameN  # exact frame index
                currChange.tStart = t  # local t and not account for scr refresh
                currChange.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(currChange, 'tStartRefresh')  # time at next scr refresh
                currChange.setAutoDraw(True)
            if currChange.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > currChange.tStartRefresh + .125-frameTolerance:
                    # keep track of stop time/frame for later
                    currChange.tStop = t  # not accounting for scr refresh
                    currChange.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(currChange, 'tStopRefresh')  # time at next scr refresh
                    currChange.setAutoDraw(False)
            if currChange.status == STARTED:  # only update if drawing
                currChange.setPos((currPos, -.2), log=False)
            #check for any key press
            keys=event.getKeys()
            
            if len(keys):
                if 'right' in keys:
                    currPos = currPos + change
                elif 'left' in keys:
                    currPos = currPos - change 
                if 'space' in keys:
                    if currPos >0:
                        currRatio = 'wide'
                    elif currPos <0:
                        currRatio = 'tall'
                    else:
                        currRatio = 'noChange'
            
            # *dispOrNot* updates
            if dispOrNot.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                dispOrNot.frameNStart = frameN  # exact frame index
                dispOrNot.tStart = t  # local t and not account for scr refresh
                dispOrNot.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(dispOrNot, 'tStartRefresh')  # time at next scr refresh
                dispOrNot.setAutoDraw(True)
            if dispOrNot.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > dispOrNot.tStartRefresh + 0.125-frameTolerance:
                    # keep track of stop time/frame for later
                    dispOrNot.tStop = t  # not accounting for scr refresh
                    dispOrNot.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(dispOrNot, 'tStopRefresh')  # time at next scr refresh
                    dispOrNot.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in testCursorComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "testCursor"-------
        for thisComponent in testCursorComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # check responses
        if gradDecResp_2.keys in ['', [], None]:  # No response was made
            gradDecResp_2.keys = None
        driftTest.addData('gradDecResp_2.keys',gradDecResp_2.keys)
        if gradDecResp_2.keys != None:  # we had a response
            driftTest.addData('gradDecResp_2.rt', gradDecResp_2.rt)
        driftTest.addData('gradDecResp_2.started', gradDecResp_2.tStartRefresh)
        driftTest.addData('gradDecResp_2.stopped', gradDecResp_2.tStopRefresh)
        driftTest.addData('Instruction_2.started', Instruction_2.tStartRefresh)
        driftTest.addData('Instruction_2.stopped', Instruction_2.tStopRefresh)
        driftTest.addData('dispOrNot.started', dispOrNot.tStartRefresh)
        driftTest.addData('dispOrNot.stopped', dispOrNot.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 10.0 repeats of 'driftTest'
    
    thisExp.nextEntry()
    
# completed 200.0 repeats of 'trials'


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
