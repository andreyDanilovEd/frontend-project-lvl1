#!/usr/bin/env node
import { gameRule, getQuestionAndAnswer } from '../games/playPrime.js';
import gameEngine from '../src/index.js';

gameEngine(gameRule, getQuestionAndAnswer);
