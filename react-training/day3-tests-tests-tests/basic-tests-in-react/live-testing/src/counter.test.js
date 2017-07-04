import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import Counter from './counter';


describe('Counter tests', () => {
    describe('DOM structure of Counter', () => {
        it('should have a wrapping DIV with a proper class name', () => {
            // ============ NATIVE DOM TEST ============
            const counterDOMNode = {};
        });

        it('should have a heading element with "Count:" in it', () => {
            // ============ TEST UTILS TEST ============
            const counterDOMNode = {};
        });

        it('should have a span element wrapping the value of the counter', () => {
            const counterDOMNode = {};
        });
    });

    describe('Behavior of Counter', () => {
        it('should increase the value of the counter when clicking the title', () => {
            // ============ TEST UTILS TEST WITH SIMULATE ============
        });
    });
});