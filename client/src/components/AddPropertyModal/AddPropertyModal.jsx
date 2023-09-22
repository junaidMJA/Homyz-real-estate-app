import React, { useState } from 'react'
import { Container, Modal, Stepper, Group, Button } from '@mantine/core'
import { useAuth0 } from '@auth0/auth0-react'

import AddLocation from '../AddLocation/AddLocation';
import UploadImage from '../UploadImage/UploadImage';
import BasicDetails from '../BasicDetails/BasicDetails';
import Facilities from '../Facilities/Facilities';

const AddPropertyModal = ({ opened, setOpened }) => {

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const { user } = useAuth0()

    const [propertyDetails, setPropertyDetails] = useState({
        title: "",
        description: "",
        price: 0,
        country: "",
        city: "",
        address: "",
        image: null,
        facilities: {
            bedrooms: 0,
            parkings: 0,
            bathrooms: 0,
        },
        userEmail: user?.email,
    })

    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            size={"90rem"}
        >
            <Container h={"40rem"} w={"100%"} >

                <Stepper 
                    active={active}
                    onStepClick={setActive}
                    breakpoint="sm"
                    allowNextStepsSelect={false}
                >
                    <Stepper.Step label="Location" description="Address of Your Property">
                        <AddLocation
                            nextStep={nextStep}
                            propertyDetails={propertyDetails}
                            setPropertyDetails={setPropertyDetails}
                        />
                    </Stepper.Step>
                    <Stepper.Step label="Cover Photo" description="Upload an Image">
                        <UploadImage
                            prevStep={prevStep}
                            nextStep={nextStep}
                            propertyDetails={propertyDetails}
                            setPropertyDetails={setPropertyDetails}
                        />
                    </Stepper.Step>
                    <Stepper.Step label="Basic Details" description="About Your Residence">
                        <BasicDetails 
                            prevStep={prevStep}
                            nextStep={nextStep}
                            propertyDetails={propertyDetails}
                            setPropertyDetails={setPropertyDetails}
                        />
                    </Stepper.Step>
                    <Stepper.Step label="Rooms" description="Insider Details">
                        <Facilities
                            prevStep={prevStep}
                            propertyDetails={propertyDetails}
                            setPropertyDetails={setPropertyDetails}
                            setOpened={setOpened}
                            setActiveStep={setActive}
                        />
                    </Stepper.Step>
                    <Stepper.Completed>
                        Completed, click back button to get to previous step
                    </Stepper.Completed>
                </Stepper>

            </Container>
        </Modal>
    )
}

export default AddPropertyModal