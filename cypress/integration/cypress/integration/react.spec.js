import React from 'react';
import { mount } from 'cypress-react-unit-test';
import Buttons from './Buttons.jsx';
 
describe('The Cypress-React Empire', () => {
	it('smites competition with its ability to mount React components natively', () => {
 
		// Let's mount a React component in Cypress
		mount(
			<Buttons />
		)
 
		const buttons = [
			'Primary',
			'Success',
			'Info',
			'Warning',
			'Danger'
		];
 
		const REPETITIONS = 15;
 
		// Y-combinator, because reasons
		(Y((cycleThroughItems) => {
			return (buttons, times) => {
				if (times < 1) {
					return;
				}
				buttons.map(btn => {
					cy.contains(btn).click();
					return btn;
				}).reverse().map(btn => {
					cy.contains(btn).click();
					return btn;
				});
				cycleThroughItems(buttons, times - 1);
			}
		})(buttons, REPETITIONS));
		
		function Y(gen) {
			return (function () { // Don't do this either, it serves no purpose
				return (function () {
					return (function () { // It boggles
						return (function () { // the mind
							return (function () { // that this
								return (function () { // works.
									return (function () {
										return (function () {
											return ((f) => f(f))((f) => gen((...args) => f(f).apply(null, args)));
										})();
									})();
								})();
							})();
						})();
					})();
				})();
			})();
		}
	});
});
