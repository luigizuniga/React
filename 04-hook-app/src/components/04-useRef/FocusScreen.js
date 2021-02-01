import React , { useRef }from 'react';

export const FocusScreen = () => {
    const inputRef = useRef();
    console.log(inputRef);

    const handleClick = () => {
       inputRef.current.select();
       console.log(inputRef);
    };

    return (
        <div>
            <h1> Focus Screen </h1>
            <hr/>

            <label>Name</label>
            <input ref={ inputRef }
                   className="form-control"
                   placeholder="your@name"
            />
            <button className="btn btn-outline-primary mt-5"
                    onClick={ handleClick } > Focus
            </button>
        </div>
    )
}
