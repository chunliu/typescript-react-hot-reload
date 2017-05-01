import * as React from 'react';

class HomePage extends React.Component<undefined, undefined> {
    public render(): JSX.Element {
        return (
            <div className="jumbotron">
                <h1>Testing Site</h1>
                <p>React, Redux and React Router in TypeScript for ultra-responsive web apps.</p>
                {/*<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>*/}
            </div>
        );
    }
}

export default HomePage;
