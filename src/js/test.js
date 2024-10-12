import { expect } from 'chai';
import { Card } from './logic.js';

describe('Card', () => {
    it('should create a card with correct properties', () => {
        const card = new Card({ name: 'A', type: 'Spades 🗡️', value: 14 });
        expect(card).to.have.property('name', 'A');
        expect(card).to.have.property('type', 'Spades 🗡️');
        expect(card).to.have.property('value', 14);
    });
});

