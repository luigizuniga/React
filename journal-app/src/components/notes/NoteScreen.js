import React from 'react'
import { NoteAppBar } from './NoteAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NoteAppBar />


            <div className="notes__content">
                <input
                    type="text"
                    placeholder="some awesome title"
                    className="notes__title-input"
                    autocomplete="off"
                />

                <textarea placeholder="what happened today"
                          className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                         alt="imagen" />
                </div>


            </div>

        </div>
    )
}
