#!/usr/bin/env node
import { gameRule, getQuestionAndAnswer } from '../games/playBrainCalc.js';
import gameEngine from '../src/index.js';

gameEngine(gameRule, getQuestionAndAnswer);
