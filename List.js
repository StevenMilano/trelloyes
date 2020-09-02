import React from 'react';
import Card from './Card.js';

export default function List (header, cards) {
    return (
        <section className="List">
            <header className="List-header">
                <h2>First list</h2>
            </header>
            <div className="List-cards">
                {Card(title, content)}
                <button type="button" class="List-add-button">
                + Add Random Card
                </button>
            </div>
        </section>
    );
}
//needs to iterate through content array from app.js


