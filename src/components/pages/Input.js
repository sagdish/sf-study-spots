import React from 'react';
import { Formik, Form, Field }  from 'formik';


export default function Input() {
  return (
    <div>
      <Formik 
        initialValues={{ name: '', type: '', neighborhood: '', latitude: '', longtitude: '', rating: '' }}
        onSubmit={(values, tools) => {
          console.log(values, tools);
          tools.resetForm();
        }}>
          { (props) => ( 
            <Form>
              <Field name='name' type='text' placeholder="name" />
              <Field name='type' type='text' placeholder="type" />
              <Field name='neighborhood' type='text' placeholder="neighborhood" />
              <Field name='latitude' type='number' placeholder="latitude" />
              <Field name='longtitude' type='number' placeholder="longtitude" />
              <Field name='rating' type='number' placeholder="rating" />

              <input type='submit' />
              {/* {console.log(props)} */}
            </Form>
          )
          }
      </Formik>
      
    </div>
  )
}
 