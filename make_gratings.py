#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Dec  2 20:40:48 2020

@author: caolman

We want red/blue radial and tangential gratings for a rivalry experiment.

PsychoPy has tools for that, but the Grating stim doesn't seem to work on
pavlovia. That's a shocking oversight, near as I can tell, but shit happens.
So we'll manually make our gratings and load them as images.

To avoid creating 1000 images, we'll stretch the grating size in pavlovia when
we need to do a task on aspect ratio, and just make a single family of each
kind of grating.

Since I don't know off the bat if we want to contrast reverse them or drift
them, we'll have code that can do either.

KTN edits: This code now makes four csv files for all possible scenerios where
we are testing different eyes and the glasses could have red and blue tint 
in different eyes. It also creates the checkerboard used to fuse the two gratings.


"""
import numpy as np
import imageio
from scipy.ndimage import gaussian_filter
import matplotlib.pyplot as plt
import random

animationType = 'drifting'
blue = (0., 0., 1.) # not cyan but blue
red = (0.8, 0., 0.) # probably not true

grating_size = 66 # pixels, assume square
ncycles = 10 # keep this even so the theta grating looks good
bg = 0 # background gray
maxIntensity = 255

x, y = np.meshgrid(np.arange(-grating_size/2, grating_size/2),
                   np.arange(-grating_size/2, grating_size/2))
# create r and theta matrices that both go from 0 to 1
r = np.sqrt(x**2 + y**2)/np.max(x)
theta = (np.arctan2(x, y) + np.pi)/2/np.pi

#change this to have all necessary images 
testedEye=['right','left'] #which eye is being tested
blueGlass = testedEye #which eye has the blue glass

for test in testedEye:
    for glass in blueGlass:
        if test =='left' and glass =='left':#blueGlass in left and testing left
            colB = blue
            colR =red
            colB_name ='blue'
            colR_name = 'red'
        elif test =='left' and glass =='right': #blueGlass in right and testing left
            colB = red
            colR =blue
            colB_name ='red'
            colR_name = 'blue'
        elif test =='right' and glass =='right':
            colB = blue
            colR =red
            colB_name ='blue'
            colR_name = 'red'
        elif test =='right' and glass =='left':    
            colB = red
            colR =blue
            colB_name ='red'
            colR_name = 'blue'
        # define the gratings
        bullsEye = {'name': 'bullsEye',
                'color': colB,
                'coord': r,
                'nCycles': 7,
                'colorName':colB_name}
        radialEye = {'name': 'radialEye',
                 'color': colR,
                 'coord': theta,
                 'nCycles': 20,
                 'colorName': colR_name}
        
        # make a mask for all stim, with soft edges
        aes_ratio = ((grating_size-30)/grating_size) #since the grating will stretch by 30px we want a background that is 30 pix
        mask = (r < aes_ratio)*(r > 0.05) 
        mask = gaussian_filter(1.*mask, 0.02*grating_size)
        
        nFrames = 8
        imageNames = {'bullsEye': [], 'radialEye': []}
        for eye in [bullsEye, radialEye]:
            for iF in range(nFrames):
                if animationType == 'contrast_reversing':
                    rel_contrast = np.abs(nFrames/2-iF)/(nFrames/2)
                    modulation = np.cos(2*np.pi*eye['coord']*eye['nCycles'])
                    modulation *= rel_contrast
                elif animationType == 'drifting':
                    phase = 2*np.pi*iF/nFrames
                    modulation = np.cos(2*np.pi*eye['coord']*eye['nCycles'] + phase)
                template = modulation/2. + .5
                # make a gray stimulus
                stim = bg*np.ones((grating_size, grating_size, 3), dtype=np.uint8)
                for iChannel in range(3): # RGB
                    # make the colorful stripey pattern
                    thisChannel = np.uint8(mask*template*eye['color'][iChannel]*maxIntensity)
                    # blend it into background gray
                    stim[:, :, iChannel] += thisChannel
                imageName = 'images/%s_%s_%.2d.png' %(eye['name'],eye['colorName'], iF)
                imageio.imsave(imageName, stim)
                imageNames[eye['name']].append(imageName)
        
        
        if animationType == 'drifting':
            for eye in [bullsEye, radialEye]:
                for iF in reversed(range(nFrames)):
                    imageName = 'images/%s_%s_%.2d.png' %(eye['name'], eye['colorName'], iF)
                    imageNames[eye['name']].append(imageName)
                
        ####Make checkerboard 
        check_size = 148
        sq =4    # width of each checker-square
        brd = 12 #width of border (multiple of sq)
        check = np.zeros((check_size, check_size, 3), dtype=np.uint8)
        #make checkerboard
        checkNum=14 #number of checks in a column
        for col in range(check_size): 
            if (col/sq)%2==0 or (col/sq)%2==1:#pick every 4 columns of images to repeat adding white
                #make a list of random row positions in a column 
                numy=[]
                for i in range(checkNum): #do this 10 times
                    rnumy = random.randrange(0,check_size,step=4)
                    while rnumy in numy: 
                        rnumy = random.randrange(0,check_size,step=4) 
                    numy.append(rnumy)
                numy.sort() #sort them in ascending order
                for row in range(check_size): #go through every row in the column 
                    #change color for random elements 
                    for i in range(checkNum): 
                        if row==numy[i]:#if the row location is same as the list value 
                            check[numy[i]:numy[i]+sq,col:col+sq] = (255,255,255) #turn white
        #black out the center of the checkerboard
        for x in range(brd,check_size-brd):
            for y in range(brd,check_size-brd):
                check[x,y] = 0
        
        #save out image file 
        checkImgName = 'images/checkbrdBorder.png' 
        imageio.imsave(checkImgName, check)       
        
        fileName = 'image_list_%s_%s.csv' %(test,glass) #tested eye 1st and where blue glass is 2nd
        with open(fileName, 'w') as fid:
            fid.write('image_bullsEye,image_radialEye,checkBorder\n')
            for iImg in range(len(imageNames['bullsEye'])):
                fid.write('%s,%s,%s\n' %(imageNames['bullsEye'][iImg], imageNames['radialEye'][iImg], 
                                      checkImgName))
        

        
    
    
    
    
    
    
    
    
    
