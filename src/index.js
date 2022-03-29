const { Component, render } = wp.element
import App from './App';
import './index.css'


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