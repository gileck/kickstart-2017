# React LifeCycle - Exercise 5
## componentDidUpdate & componentWillUpdate

### Task Overview - Pushing Boxes
Create an App that has 2 Box components on the screen - Box A and Box B.
The Boxes should be freely draggable on the screen.

Box A, is a “Pushing” Box, while Box B is a “Pushed” Box.

A "Pushed box" when dragged can move anywhere on the screen without affecting Box A, up to an euclidean distance of 100px from Box A.

While dragging a "Pushing Box" you will need to check if you’re nearing Box B (the Euclidean distance is reduced).
  * **Case 1** - The distance is kept, or grows - Box A has no affect on Box B’s position.
  * **Case 2** - The distance is diminished, Box A can only be dragged to a minimal euclidean distance of 100px from Box B, after which it will start pushing Box B (according to the vector of movement).



> **Note** The Boxes must not be pushed out of the screen borders. - Dragging outside the screen borders is allowed.
