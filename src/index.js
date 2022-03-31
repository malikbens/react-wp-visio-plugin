const { Component, render } = wp.element
import App from './App';

class Index extends Component {
    render() {
        return (
           <App />
        );
    }
}

render(
    <Index />,
    document.getElementById('app')
);