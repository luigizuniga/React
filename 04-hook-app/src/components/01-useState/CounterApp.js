import React, { useState, Fragment } from 'react';

export const CounterApp = () => {
    const [ normalState, setNormalState ] = useState(100);
    const [ state, setState ] = useState({
        counter_1: 0,
        counter_2: 2,
        counter_3: 9
    });

    const { counter_1, counter_2 } = state;

    return (
        <Fragment>
             <h1 className="bd-title mt-5" id="content">CounterApp Component</h1>
            <div className="row lign-items-center mt-2">
                <div className="col-md-6">
                    <label for="control_1" className="form-label"> COUNTER PROPERTY 1 </label>
                    <input type="text" className="form-control " placeholder="value"
                           aria-label="control_1" id="control_1" value={ counter_1 }/>
                </div>
                <div className="col-md-6">
                    <label for="control_2" className="form-label">COUNTER PROPERTY 2</label>
                    <input type="text" className="form-control " placeholder="value"
                           aria-label="control_2" id="control_2" value={ counter_2 }/>
                </div>
                <div className="col-md-6">
                    <label for="normalState" className="form-label">COUNTER NORMAL</label>
                    <input type="text" className="form-control " placeholder="value"
                          aria-label="normalState" id="normalState" value={ normalState }/>
                </div>
            </div>
            <hr/>
            <div className="d-grid gap-2 d-md-flex justify-content-lg-end">
                <button className="btn btn-primary me-md-2" type="button"
                         onClick={ () => {
                            setState({
                                ...state,
                                counter_1: counter_1 + 1,
                                counter_2: counter_2 + 2
                            });
                        }}
                > + : CP1 </button>
                <button className="btn btn-danger" type="button"
                         onClick={ () =>
                            setState({
                                ...state,
                                counter_1: counter_1 - 1,
                                counter_2: counter_2 - 2
                            })
                         }
                > - : CP2 </button>
                              <button className="btn btn-warning" type="button"
                         onClick={ () => setNormalState( normalState + 100 )
                         }
                > + 100 </button>
            </div>
        </Fragment>
    )
}
