import React, { useState , useEffect } from 'react';
import './StepperComponent.css';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import  useStyles  from './style';


function getSteps() {
    return ['Order has been placed', 'Your food is preparing', 'Order delivered'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Your order has been placed and our admin will approve your request`;
        case 1:
            return 'An ad group contains one or more ads which target a shared set of keywords.';
        case 2:
            return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
        default:
            return 'Unknown step';
    }
}
const a =0;

const StepperComponent = () => {


    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();


    useEffect(() => {
        if(a === 1 ) {
            setActiveStep(1);
        } else if(a ===2 ) {
            setActiveStep(2);
        } else if(a === 3) {
            setActiveStep(3);
        } 
    }, [] )


    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}

export default StepperComponent;
