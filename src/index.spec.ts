import 'core-js/es6';
import 'core-js/es7/reflect';
import 'reflect-metadata';

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';

import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

chai.use(sinonChai);

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
