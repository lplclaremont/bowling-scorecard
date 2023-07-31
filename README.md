
Bowling Challenge
=================

# Overview
In this challenge I have created a javascript program which will score a bowling game (10 frames) based on the rolls thrown in each frame, which will be inputted by the user.
The logic for this proved very difficult - since when a spare or a strike is thrown, the total score for that frame is unknown until the next roll(s) are complete.
I have a frame class which handles the behaviour of a frame. This includes checking whether the frame is a spare or strike, finding the number of pins knocked down and updating the spare/strike frame's score based on the following frame (or following two frames if a strike is followed by another strike).
Then I created a scorecard class which allows a user to add a frame and calculate the total score up to a given point. This is useful since on the scorecard, if a spare is thrown, we do not want to update the current score straight away since we need to wait for the following frame. Hence, we would like to know the score up to the previous frame (to retrospectively show the running total at that point) in order to correctly score the frames one by one.

**NOTE** --
In my tests, I refer to a frame which is not a spare or a strike as a 'simple frame'.

## Further
I have added a server.js file which runs an express application, so that you can view the scorecard. I have added a POST /frame route so that you are able to add a frame through body parameters. This can be built upon to create a UI for users to add frames and view their scorecard.
