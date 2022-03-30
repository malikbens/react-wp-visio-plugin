const { Component, render } = wp.element;
import DeviceTab from "./tab-components/DeviceTab";
import InfoTab from './tab-components/InfoTab';
import NeedTab from './tab-components/NeedTab';
import ProblemTab from './tab-components/ProblemTab'

export class VisioForm extends Component {
    state = {
        step: 1,
        displayed: false ,
        device: '',
        brand: '',
        model: '',
        symptom: '',
        need: '',
        piece: '',
        prbDesc:'',
        deviceAge:'',
        access:'',
        level:'',
        tools:'',
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    displayInput = () => {
        this.setState({
            displayed: true
        })
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const { device, brand, model, symptom, need, piece, prbDesc, deviceAge, access, level, tools, displayed } = this.state ;
        const values = {device, brand,model, symptom, need, piece, prbDesc, deviceAge, access, level, tools, displayed};

        switch (step) {
            case 1:
                return (
                    <DeviceTab
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        displayed={this.displayInput}
                        displayInput={this.displayInput}
                    />
                );
            case 2:
                return (
                    <NeedTab
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <ProblemTab
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <InfoTab
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            default:
                (console.log('This is a multi-step form built with React.'))
        }
    }
}

export default VisioForm;
