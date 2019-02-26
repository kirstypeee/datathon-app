import * as React from 'react';
import { ICarerSummary } from 'src/types';
import './home.css';

interface IProps {
    carers: ICarerSummary[];
}

class CarerList extends React.Component<IProps, {}> {
    public render() {
        return (
            <div className="ibm__page-home">
                Hello World
            </div>
        );
    }
}

export default CarerList;
