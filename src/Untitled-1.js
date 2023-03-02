

<Formik
        initialValues={{
          userName: "",
          name:  "",
          email:  "",
          phoneNumber: "",
          gender: "",
        }}
        // validationSchema={this.checkUserInfo(t)}
        // validateOnMount={true}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue
        }) => (
          <Form
            translate="yes"
            style={{
              width: "100%",
            }}
          >
          <Grid container className='formContainer'>

            <Grid container className='fieldBlock'>
              <Typography className='fieldName'>Ideal-Name</Typography>
              <Field className='formField' name="name" placeholder="name"/>
            </Grid>
            <Grid container className='fieldBlock'>
              <Typography className='fieldName'>Ideal-Name</Typography>
              <Field className='formField' name="projectName" placeholder="name"/>
            </Grid>
            <Grid container className='fieldBlock'>
              <Typography className='fieldName'>Ideal-Name</Typography>
              <Select
              styles={selectStyles}
                options={options}
                // onChange={handleTypeSelect}
                  name="tag"
                  label="Single select"
               />
            </Grid>
          </Grid>
          </Form>
        )}
      </Formik>