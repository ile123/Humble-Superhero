# Humble-Hero

## Description

This project is built using **NestJS** on the backend and **React** on the frontend. It can save superheores to an array and return all of them back.
Supoorts both GET and POST requests. For POST requests there is validation in order to ensure that the Hero trying to be added to the collection is valid.
For tests, the Jest testing framework was used to make simple tests for both functionalities. React95 was used as the UI library for this project.

## How to run the project

In the root of the project directory, first run the command **npm install**.
After the dependecies are installed run the following command in the root directory **npm start**(no need to run **npm install** separately in each project, for more information please check the package.json in the root directory).

## Collaboration with Teammates

- **Active Engagement**: I would actively reach out to teammates with more experience or knowledge to ask for their opinions on design decisions or challenges I might be facing.
- **Seeking Feedback**: I would make it a habit to ask for feedback regularly. This can include code reviews, design feedback, or suggestions for better practices.
- **Sharing Ideas and Solutions**: I would start discussions to talk about possible solutions, share ideas, and decide on the best approach together.
- **Constructive Criticism**: If I received constructive criticism, I would do my best to listen to it as much as possible.

## If I Had More Time

Given more time, I would have done the following:

- **More responsive layout**: CSS is one of my more weaker skills, and I used TailwindCSS to simplify the development process, however some areas of the frontend are not very responsive and do not have overflow protection.
- **NestJS piping**: Instead of doing basic checks in the controller/service, I would have liked to implement a validation pipe for the Hero type.
- **Better error handling**: In retrospect, my approach to error handling was not optimal. If given the chance, I would refactor it more and remove the ducktape fixes in some places.
