import React from "react";
import Sketch from "react-p5";
export default (props) => {

    let canvasWidth = 500;
    let canvasHeight = 200;

    let maxPoints = canvasWidth * canvasHeight / 100;

    let totalPoints = 0;

    let maxX = canvasWidth
    let minX = 0;
    let maxY = canvasHeight;
    let minY = 0;

    let pastPositions = [];

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    };

    const draw = (p5) => {
        let randomX = p5.random(minX, maxX);
        let randomY = p5.random(minY, maxY);

        for (let i = 0; i < pastPositions.length; i++) {
            let pos = pastPositions[i];
            if (pos.x === randomX && pos.y === randomY) {
                return; // Si le point est trop proche d'un point existant, on ne le dessine pas
            }
            else{
                p5.fill(255);
                p5.circle(p5.random(minX, maxX), p5.random(minY, maxY), 3);
                totalPoints++;
            }
        }
        pastPositions.push(p5.createVector(p5.random(minX, maxX), p5.random(minY, maxY)));
        if(pastPositions.length > maxPoints) {
            p5.noLoop();
            console.log("Max points reached, stopping the loop.");
        }
    };

    return  <div className="mojibake">
                <p>Mojibake</p>
                <Sketch setup={setup} draw={draw}  className={"sketch"}/>
            </div>
    };