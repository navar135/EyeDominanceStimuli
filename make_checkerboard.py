#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Feb  9 18:17:06 2021
making a checkerboard border that outputs as a square image with a checkerboard
border and a black center 

The checkeboard works grabbing a black image and adding white to each x,y position. 
It makes a list of random locations in a specific columns and adds white to that position
and the next 4 positions it does the same to the next 3 columns to make 4x4 white squares in random
y locations 
@author: navar135
"""
import numpy as np 
import random
from matplotlib import pyplot as plt
import imageio
from csv import writer
from csv import reader

grating_size = 256
sq =4     # width of each checker-square
brd = sq**2 #width of border
stim = np.zeros((grating_size, grating_size, 3), dtype=np.uint8)
#make checkerboard
checkNum=14 #number of checks in a column
for col in range(grating_size): 
    if (col/4)%2==0 or (col/4)%2==1:#pick every 4 columns of images to repeat adding white
        #make a list of random row positions in a column 
        numy=[]
        for i in range(checkNum): #do this 10 times
            rnumy = random.randrange(0,grating_size,step=4)
            while rnumy in numy: 
                rnumy = random.randrange(0,grating_size,step=4) 
            numy.append(rnumy)
        numy.sort() #sort them in ascending order
        for row in range(grating_size): #go through every row in the column 
            #change color for random elements 
            for i in range(checkNum): 
                if row==numy[i]:#if the row location is same as the list value 
                    stim[numy[i]:numy[i]+sq,col:col+sq] = (255,255,255) #turn white
#black out the center of the checkerboard
for x in range(brd,grating_size-brd):
    for y in range(brd,grating_size-brd):
        stim[x,y] = 0

#save out image file 
imageName = 'images/checkbrdBorder.png' 
imageio.imsave(imageName, stim)

# make a function that adds a column to image list
def add_column_in_csv(input_file, output_file, transform_row):
    """ Append a column in existing csv using csv.reader / csv.writer classes"""
    # Open the input_file in read mode and output_file in write mode
    with open(input_file, 'r') as read_obj, \
            open(output_file, 'w', newline='') as write_obj:
        # Create a csv.reader object from the input file object
        csv_reader = reader(read_obj)
        # Create a csv.writer object from the output file object
        csv_writer = writer(write_obj)
        # Read each row of the input csv file as list
        for row in csv_reader:
            # Pass the list / row in the transform function to add column text for this row
            transform_row(row, csv_reader.line_num)
            # Write the updated row / list to the output file
            csv_writer.writerow(row)
#call that function       
header_of_new_col = 'checkBorder'
# Add the column in csv file with header
add_column_in_csv('image_list_left_pre.csv', 'image_list_left.csv',
                  lambda row, line_num: row.append(header_of_new_col) if line_num == 1 else row.append(
                      imageName))
add_column_in_csv('image_list_right_pre.csv', 'image_list_right.csv',
                  lambda row, line_num: row.append(header_of_new_col) if line_num == 1 else row.append(
                      imageName))