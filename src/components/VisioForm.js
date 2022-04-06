const { Component, render } = wp.element;
import DeviceTab from "./tab-components/DeviceTab";
import InfoTab from './tab-components/InfoTab';
import NeedTab from './tab-components/NeedTab';
import ProblemTab from './tab-components/ProblemTab'
import Devices from '/data/devices.json'
import ProductTab from "./tab-components/ProductTab";



export class VisioForm extends Component {
    state = {
        step: 1,
        device: '',
        brand: '',
        model: '',
        symptom: '',
        need: '',
        piece: '',
        prbDesc: '',
        age: '',
        access: '',
        level: '',
        tools: '',
        datas: [],
    }

    fetchData = () => {
        const device = Devices.devices.find(o => o.name === this.state.device)
        this.setState({
            datas: device
        })
    };

    setData = () => e => {
        this.setState({
            device: e.target.value
        }, () => {
            this.fetchData()
        })
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

    handleAge = age => {
        this.setState({
            age: [age]
        })
    }

    render() {
        const { step } = this.state;
        const { device, brand, model, symptom, need, piece, prbDesc, age, access, level, tools, datas } = this.state;
        const values = { device, brand, model, symptom, need, piece, prbDesc, age, access, level, tools, datas };

        switch (step) {
            case 1:
                return (
                    <DeviceTab
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        setData={this.setData}
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
                        handleAge={this.handleAge}
                        values={values}
                    />
                );
            case 5:
                return (
                    <ProductTab
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            default:
                (console.log('This is a multi-step form built with React.'))
        }
    }
}

export default VisioForm;
