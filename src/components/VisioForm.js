const { Component, render } = wp.element;
import React from 'react'
import DeviceTab from "./tab-components/DeviceTab";
import InfoTab from './tab-components/InfoTab';
import NeedTab from './tab-components/NeedTab';
import ProblemTab from './tab-components/ProblemTab'
import ProductTab from "./tab-components/ProductTab";
import LoginRegisterTab from "./tab-components/LoginRegisterTab";


export class VisioForm extends Component {

    render() {
        const  step  = this.props.values.step;
            switch (step) {
                case 1: 
                    return (
                        <DeviceTab
                            nextStep={this.props.nextStep}
                            handleChange={this.props.handleChange}
                            values={this.props.values}
                            setData={this.props.setData}
                            fetchData={this.propsfetchData}
                        />
                        
                    );
                case 2:
                    return (
                        <NeedTab
                            nextStep={this.props.nextStep}
                            prevStep={this.props.prevStep}
                            handleChange={this.props.handleChange}
                            values={this.props.values}
                        />
                       
                    );
                case 3:
                    return (
                        <ProblemTab
                            nextStep={this.props.nextStep}
                            prevStep={this.props.prevStep}
                            handleChange={this.props.handleChange}
                            values={values}
                        />
                        
                    );
                case 4:
                    return (
                        <InfoTab
                            nextStep={this.props.nextStep}
                            prevStep={this.props.prevStep}
                            handleChange={this.props.handleChange}
                            handleAge={this.props.handleAge}
                            values={this.props.values}
                        />
                    
                    );
                case 5:
                    return (
                        <ProductTab
                            nextStep={this.props.nextStep}
                            prevStep={this.props.prevStep}
                            handleChange={this.props.handleChange}
                            values={this.props.values}
                        />
                        
                    );
                case 6:
                    return (
                        <LoginRegisterTab
                            nextStep={this.props.nextStep}
                            prevStep={this.props.prevStep}
                            handleChange={this.props.handleChange}
                            values={this.props.values}
                        />
                        
                    );
                default:
                    (console.log('This is a multi-step form built with React.'))
            }
    }
}

export default VisioForm;
