const { Component, render } = wp.element;
import DeviceTab from "./tab-components/DeviceTab";
import InfoTab from './tab-components/InfoTab';
import NeedTab from './tab-components/NeedTab';
import ProblemTab from './tab-components/ProblemTab'


export class VisioForm extends Component {
    state = {
        step: 1,
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
        devices:[],
        singleDatas:'',
    }

    fetchDevice = () => {
        fetch('http://localhost:3000/devices')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        devices: result
                    })
                }
            )    
    }

    fetchData = () => {
        fetch('http://localhost:3000/devices?name=' + this.state.device)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        singleDatas: result 
                    })
                }
            )    
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

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const { device, brand, model, symptom, need, piece, prbDesc, deviceAge, access, level, tools, devices, singleDatas } = this.state ;
        const values = {device, brand,model, symptom, need, piece, prbDesc, deviceAge, access, level, tools, devices, singleDatas };

        switch (step) {
            case 1:
                return (
                    <DeviceTab
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        fetchDevice={this.fetchDevice}
                        fetchData={this.fetchData}
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
