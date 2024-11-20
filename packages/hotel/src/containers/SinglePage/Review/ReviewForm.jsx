import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Input, Rate, Checkbox, Button } from 'antd';
import FormControl from 'components/UI/FormControl/FormControl';
import RadioGroup from 'components/UI/RadioGroup/RadioGroup';
import DragAndDropUploader from 'components/UI/ImageUploader/DragAndDropUploader';
import { Form, Label, GroupTitle, Description } from './Review.style';

const reviewPhotos = [
  {
    uid: '1',
    name: 'hotel-1.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '2',
    name: 'hotel-2.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '3',
    name: 'hotel-3.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];

export default function ReviewForm() {
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      reviewPhotos,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        label="Overall Rating"
        htmlFor="ratings"
        error={errors.ratings && <span>This field is required!</span>}
      >
        <Controller
          name="ratings"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Rate onChange={onChange} onBlur={onBlur} value={value} />
          )}
        />
      </FormControl>
      <FormControl
        label="Title of your review"
        htmlFor="reviewTitle"
        error={errors.reviewTitle && <span>This field is required!</span>}
      >
        <Controller
          name="reviewTitle"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Summarize your visit  or highlight an interesting details"
            />
          )}
        />
      </FormControl>
      <FormControl
        label="Details of your review"
        htmlFor="reviewDetails"
        error={errors.reviewDetails && <span>This field is required!</span>}
      >
        <Controller
          name="reviewDetails"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input.TextArea
              rows={5}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Tell people about your experience: your room, location, amenities?"
            />
          )}
        />
      </FormControl>
      <FormControl
        label="What Sort of trip was this?"
        htmlFor="tripType"
        error={errors.tripType && <span>This field is required!</span>}
      >
        <Controller
          name="tripType"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <RadioGroup
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              buttonStyle="solid"
              size="large"
              options={[
                { label: 'Business', value: 'business' },
                { label: 'Couples', value: 'couple' },
                { label: 'Family', value: 'family' },
                { label: 'Friends', value: 'friend' },
                { label: 'Solo', value: 'solo' },
              ]}
            />
          )}
        />
      </FormControl>
      <FormControl className="optional-section">
        <GroupTitle>
          Could You Say a Little More About It? <span>(optional)</span>
        </GroupTitle>
        <Description>
          We'd love your opinion ! Anything you can share will help other
          travelers choose their perfect hotel . Thanks
        </Description>
      </FormControl>
      <FormControl className="radio-group-area">
        <Row>
          <Col lg={8}>
            <Label>Is this a quaint hotel?</Label>
          </Col>
          <Col lg={16}>
            <Controller
              name="quaint"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <RadioGroup
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  buttonStyle="solid"
                  options={[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                    { label: 'Not Sure', value: 'not-sure' },
                  ]}
                />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Label>Does this hotel offer rooms with great views?</Label>
          </Col>
          <Col lg={16}>
            <Controller
              name="roomViews"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <RadioGroup
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  buttonStyle="solid"
                  options={[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                    { label: 'Not Sure', value: 'not-sure' },
                  ]}
                />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Label>Does this hotel have an indoor pool?</Label>
          </Col>
          <Col lg={16}>
            <Controller
              name="indoorPool"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <RadioGroup
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  buttonStyle="solid"
                  options={[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                    { label: 'Not Sure', value: 'not-sure' },
                  ]}
                />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Label>Is this a trendy hotel?</Label>
          </Col>
          <Col lg={16}>
            <Controller
              name="isTrendy"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <RadioGroup
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  buttonStyle="solid"
                  options={[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                    { label: 'Not Sure', value: 'not-sure' },
                  ]}
                />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={8}>
            <Label>Is this a romantic hotel?</Label>
          </Col>
          <Col xs={24} lg={16}>
            <Controller
              name="isRomantic"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <RadioGroup
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  buttonStyle="solid"
                  options={[
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' },
                    { label: 'Not Sure', value: 'not-sure' },
                  ]}
                />
              )}
            />
          </Col>
        </Row>
      </FormControl>
      <Row type="flex" justify="space-between">
        <Col>
          <FormControl label="Service" htmlFor="serviceRatings">
            <Controller
              name="serviceRatings"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Rate onChange={onChange} onBlur={onBlur} value={value} />
              )}
            />
          </FormControl>
        </Col>
        <Col>
          <FormControl label="Rooms" htmlFor="roomsRatings">
            <Controller
              name="roomsRatings"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Rate onChange={onChange} onBlur={onBlur} value={value} />
              )}
            />
          </FormControl>
        </Col>
        <Col>
          <FormControl label="Cleanliness" htmlFor="cleanlinessRatings">
            <Controller
              name="cleanlinessRatings"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Rate onChange={onChange} onBlur={onBlur} value={value} />
              )}
            />
          </FormControl>
        </Col>
        <Col>
          <FormControl label="Food" htmlFor="foodRatings">
            <Controller
              name="foodRatings"
              defaultValue=""
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Rate onChange={onChange} onBlur={onBlur} value={value} />
              )}
            />
          </FormControl>
        </Col>
      </Row>
      <FormControl
        label="Add a tip to help travelers choose a good room"
        htmlFor="tips"
      >
        <Controller
          name="tips"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="E. g. Best views, quieter floors, accessibility, etc."
            />
          )}
        />
      </FormControl>
      <FormControl label="Do You have photos to share? (Optional)">
        <DragAndDropUploader
          name="reviewPhotos"
          onUploadChange={(data) => setValue('reviewPhotos', data)}
        />
      </FormControl>
      <FormControl>
        <Controller
          control={control}
          name="termsAndCondition"
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <Checkbox onChange={onChange} checked={value}>
              I certify that this review is based on my own experience and is my
              genuine opinion of this hotel, and that I have no personal or
              business relationship with this establishment, and have not been
              offered any incentive or payment originating from the
              establishment to write this review. I understand that TripFinder
              has a zero-tolerance policy on fake reviews.
            </Checkbox>
          )}
        />
      </FormControl>
      <FormControl className="submit-container">
        <Button htmlType="submit" type="primary" size="large">
          Submit Your Review
        </Button>
      </FormControl>
    </Form>
  );
}
