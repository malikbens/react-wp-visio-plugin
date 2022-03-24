const { Component, render } = wp.element;
import VisioForm from './components/VisioForm';

class Index extends Component {     
    render() {
        return (
            <div>
                <VisioForm />
            </div>
        );
    }
}

render(
    <Index />,
    document.getElementById('app')
);