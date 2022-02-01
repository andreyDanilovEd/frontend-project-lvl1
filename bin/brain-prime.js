#!/usr/bin/env node
import { gameRule, getQuestionAndAnswer } from '../src/games/playPrime.js';
import gameEngine from '../src/index.js';

gameEngine(gameRule, getQuestionAndAnswer);
