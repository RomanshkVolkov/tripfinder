import React from 'react';
import Head from 'next/head';
import ForgetPassWord from 'containers/Auth/ForgetPassword';

export default function forgetPasswordPage() {
  return (
    <>
      <Head>
        <title>Forget password | TripFinder.</title>
      </Head>
      <ForgetPassWord />
    </>
  );
}
