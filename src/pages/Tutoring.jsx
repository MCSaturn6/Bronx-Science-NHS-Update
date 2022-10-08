import React, { Component } from "react";
import { useEffect } from 'react'
import Hero from "../components/Hero.jsx";

export default function Tutoring() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section class="page">
      <Hero
      title="Tutoring"
      image="https://www.bxscience.edu/pics/mainLibraryeading19.jpg"
      />
      <section class="body-text">
        <br></br>
        <div class="page-body-text">

        <h2 className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
          Documenting Tutoring Hours (for NHS Members)
          </h2>
          <p>
          NHS members who are matched with a tutor must document their tutoring hours using <a href="https://www.bxscience.edu/ourpages/auto/2014/4/24/65108071/NHS%20Tutoring%20Form.pdf" target="_blank">this</a> log. Uplaod the log at the end of each semester <a href="https://docs.google.com/forms/d/e/1FAIpQLSeTSMYDdIc9Eusj27kwEXhmZoZb9fosGQz0Jdtm23JfpTV3RA/viewform" target="_blank">here</a>.
          </p>
          <br></br>
          <br></br>

          <h2 className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
            Requesting a Tutor (for Students)
          </h2>
          <p>
          If you would like assistance in any of your subjects, please use <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvi6WwtPg67LyQNDJ1Gikk6dggVUF_oibhug6B3xbMuO7nCg/viewform" target="_blank">this</a> form to request a tutor. 
          </p>
          <br></br>
          <br></br>

          <h2 className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
            Requesing a Tutor (for Teachers)
          </h2>
          <p>
          Teachers may request an NHS tutor to assist them during SGI by submitting <a href="https://docs.google.com/forms/d/e/1FAIpQLScwbBzHgWnDTu6L9YpjqVxYo4UCBo5SdGpQzwWdJgN8gf8JYA/viewform" target="_blank">this</a> form.
          </p>
          <br></br>
          <br></br>

          <h2 className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
            Qualifying a Tutor (for Teachers)
          </h2>
          <p>
          Please use <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgAFUTGbrrBstj6KcHTk0ZEqasbEzpCcYtzwGU9H5xRLzQsg/viewform" target="_blank">this</a> google form to verify that your non-NHS member student is qualified to tutor in the subject that you teach.
          </p>
          <br></br>
          <br></br>


        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}
