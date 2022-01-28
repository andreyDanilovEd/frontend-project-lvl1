#!/usr/bin/env node
import { gameRule, getQuestionAndAnswer } from '../games/brain-even.js';
import gameEngine from '../src/index.js';

gameEngine(gameRule, getQuestionAndAnswer);
