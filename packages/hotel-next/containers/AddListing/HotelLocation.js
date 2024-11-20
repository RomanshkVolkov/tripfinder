import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useStateMachine } from 'little-state-machine';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Input, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import MapWithSearchBox from 'components/Map/MapSearchBox';
import { mapDataHelper } from 'components/Map/mapDataHelper';
import addListingAction from './AddListingAction';
import { FormHeader, Title, FormContent, FormAction } from './AddListing.style';

const HotelLocation = ({ setStep }) => {
  let tempLocationData = [];
  const { actions, state } = useStateMachine({ addListingAction });
  const [location, setLocation] = useState([]);
  const {
    control,
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    register('locationData', { required: true });
  }, [register]);

  const onSubmit = (data) => {
    actions.addListingAction(data);
    setStep(4);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <FormHeader>
          <Title>Step 3: Hotel Location</Title>
        </FormHeader>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="Contact number"
              htmlFor="contactNumber"
              error={
                errors.contactNumber && (
                  <>
                    {errors.contactNumber?.type === 'required' && (
                      <span>This field is required!</span>
                    )}
                    {errors.contactNumber?.type === 'pattern' && (
                      <span>Please enter your valid number!</span>
                    )}
                  </>
                )
              }
            >
              <Controller
                name="contactNumber"
                defaultValue={state?.data?.contactNumber}
                control={control}
                rules={{
                  required: true,
                  pattern: /^[0-9]*$/,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Phone"
                  />
                )}
              />
            </FormControl>
          </Col>
        </Row>
        <FormControl
          label="Details description"
          htmlFor="locationDescription"
          error={
            errors.locationDescription && <span>This field is required!</span>
          }
        >
          <Controller
            name="locationDescription"
            defaultValue={state?.data?.locationDescription}
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input.TextArea
                rows={5}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Write your hotel direction in details , it may help traveler to find your hotel easily"
              />
            )}
          />
        </FormControl>
        <FormControl
          error={errors.locationData && <span>This field is required!</span>}
        >
          <MapWithSearchBox
            name="locationData"
            updateValue={(value) => {
              tempLocationData = mapDataHelper(value);
              setValue('locationData', tempLocationData);
              setLocation(value);
            }}
          />
        </FormControl>
      </FormContent>
      <FormAction>
        <div className="inner-wrapper">
          <Button
            className="back-btn"
            htmlType="button"
            onClick={() => setStep(2)}
          >
            <IoIosArrowBack /> Back
          </Button>
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </div>
      </FormAction>
    </form>
  );
};

export default HotelLocation;
