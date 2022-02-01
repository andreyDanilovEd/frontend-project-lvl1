#!/usr/bin/env node
import { gameRule, getQuestionAndAnswer } from '../src/games/playBrainCalc.js';
import gameEngine from '../src/index.js';

gameEngine(gameRule, getQuestionAndAnswer);
