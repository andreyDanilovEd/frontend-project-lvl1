#!/usr/bin/env node
import { gameRule, getQuestionAndAnswer } from '../src/games/playBrain-prog.js';
import gameEngine from '../src/index.js';

gameEngine(gameRule, getQuestionAndAnswer);
