import React from 'react';

const ErrorPage = () => {
  return (
    <>
      <div className="m-grid m-grid--hor m-grid--root m-page">

        <div className="m-grid__item m-grid__item--fluid m-grid m-error-4" style={{backgroundImage: `url(assets/app/media/img//error/bg4.jpg)` }}>
          
          <div className="m-error_container">

            <h1 className="m-error_number">
              404
            </h1>

            <p className="m-error_title">
              ERROR
            </p>

            <p className="m-error_description">
              Nothing left to do here.
            </p>

          </div>

        </div>

      </div>
    </>
  )
}

export default ErrorPage;