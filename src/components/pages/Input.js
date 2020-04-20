import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage }  from 'formik';

// const validate = ({ name, type, neighborhood, latitude, longtitude, rating }) => {
const validate = ({ name, type }) => {
  const errors = {};

  if (!name) {
    errors.name = `you need a name`
  } else if (name.length < 3) {
    errors.name = 'you need a longer name'
  }

  return errors;
}

export default function Input() {
const [ newSpot, setNewSpot ] = useState({});

  const handleSubmit = (values, tools) => {
    // console.log(values);
    const newSpot = {
      position: {
        lat: values.latitude,
        lng: values.longtitude,
      },
      ...values
    }
    delete newSpot.longtitude
    delete newSpot.latitude
    console.log(newSpot);

    axios({
      method: 'post',
      url: 'https://sf-spots-back-copy.sagdi.now.sh/api/spots',
      data: newSpot,
      headers: {'Access-Control-Allow-Origin': '*'},
    })
      .then(res => {
        tools.resetForm();
        console.log(res);
      })
      .catch(err => console.log("server error: ", err))
      .finally();
  }
  return (
    <Formik 
      initialValues={{ name: '', type: '', neighborhood: '', latitude: '', longtitude: '', rating: '' }}
      onSubmit={handleSubmit}
      // introductory Onsubmit:
      // onSubmit={(values, tools) => {
      //   console.log(values, tools);
      //   tools.resetForm();
      // }}
      validate={validate}
    >
      
      {(props) => (
        <Form>
          <Field name='name' type='text' placeholder="name" />
          <ErrorMessage name='name' component='div' className='red' />
          
          <Field name='type' type='text' placeholder="type" />
          <ErrorMessage name='type' component='div' className='red' />

          <Field name='neighborhood' type='text' placeholder="neighborhood" />
          <ErrorMessage name='neighborhood' component='div' className='red' />

          <Field name='latitude' type='number' placeholder="latitude" />
          <ErrorMessage name='latitude' component='div' className='red' />

          <Field name='longtitude' type='number' placeholder="longtitude" />
          <ErrorMessage name='longtitude' component='div' className='red' />

          <Field name='rating' type='number' placeholder="rating" />
          <ErrorMessage name='rating' component='div' className='red' />

          <input type='submit' />
          {/* {console.log(props)} */}
        </Form>
      )}
    </Formik>
  )
}
 