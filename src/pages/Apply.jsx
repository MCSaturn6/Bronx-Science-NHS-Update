import React, { Component } from "react";
import { useEffect } from "react";

import Timer from "../components/Timer.jsx";
import "../styles/timer.css";
import "../styles/styles.css";
import "../scripts/timer.js";

export default function Apply() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section class="page">
      <h1 class="heading">Applying to NHS</h1>
      <div class="page-section-buttons">
        <a href="#req">
          {" "}
          <button class="button-27" role="button">
            Requirements
          </button>
        </a>
        <a href="#credit-table">
          {" "}
          <button class="button-27" role="button">
            Credit Table
          </button>
        </a>
      </div>
      <section class="body-text">
        <br></br>
        <div class="page-body-text">
          <h2 className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
            Who Should Apply
          </h2>
          <p>
            Only Bronx Science{" "}
            <b>second semester Juniors and first semester Seniors</b> may apply
            to NHS. If you are an underclassman, however, your application
            ultimately depends on your activities as a Freshmen and Sophomore
            (and Junior if you apply as a Senior in the fall). This includes
            joining clubs, partaking in school volunteering opportunities,
            out-of-school community service, and leadership opportunities. So
            start early!
          </p>
          <h2 className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
            How to Apply
          </h2>
          <p>
          <p>
            <b>1. </b>Read the application instructions, requirements, and
            credit table.
          </p>
          <p>
            <b>2. </b>Submit an electronic application.
          </p>
          <p>
            <b>3. </b>Upload supporting documents for out-of-school activities.
          </p>
          <p>
            <b>4. </b>Wait for an email reply from the NHS Officers (1-2 weeks)
            after the deadline.
          </p>
          <br></br>
          <div className="text-red-700">
            {" "}
            Any applicant that is caught forging a teacher's or organization's
            signature will be rejected from NHS and subject to disciplinary
            action.
          </div>
          <br></br>
          <b>Senior Deadline: Friday, 09/30/22 @ 3:00 PM.</b>
          <br></br>
          <br></br>
          <b>Junior Deadline: __/__/22 @ 11:59 PM.</b>
          <br></br><br></br>
          </p>
          <div class="page-section-buttons">
            <a href="https://forms.gle/g81LQZdKR8gRLG7KA">
              {" "}
              <button class="button-27 application-button" role="button">
                NHS 22-23 Senior Application Form
              </button>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSffHPOYuxFRx8cwwmR9jj0q3fgZCX9dR1c-KH2D5WOyMZaNaw/viewform">
              {" "}
              <button class="button-27 application-button" role="button">
                NHS 22-23 Senior Verification Form
              </button>
            </a>
          </div>
          <h2 id="req" className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
            Credit Requirements
          </h2>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <table className="table table-bordered table-hover text-center">
            <thead>
              <tr>
                <th
                  className="bg-blue-500 text-3xl th-current-grade"
                  colspan="6"
                  scope="col"
                >
                  Applying as a Junior
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-xl font-bold">
                <th>Credit Type</th>
                <th>Freshman</th>
                <th>Sophomore</th>
              </tr>

              <tr className="font-500">
                <th scope="row">Scholarship</th>
                <td>90 GPA</td>
                <td>90 GPA</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Service Credits</th>
                <td>13</td>
                <td>8</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Leadership & Citizenship Credits</th>
                <td>50</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <br></br>
          <br></br>
          <table class="table table-bordered table-hover text-center">
            <thead>
              <tr>
                <th
                  className="bg-blue-500 text-3xl th-current-grade"
                  colspan="6"
                  scope="col"
                >
                  Applying as a Senior
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-xl font-bold">
                <th>Credit Type</th>
                <th>Freshman</th>
                <th>Sophomore</th>
              </tr>

              <tr className="font-500">
                <th scope="row">Scholarship</th>
                <td>90 GPA</td>
                <td>90 GPA</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Service Credits</th>
                <td>15</td>
                <td>10</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Leadership & Citizenship Credits</th>
                <td>60</td>
                <td>45</td>
              </tr>
            </tbody>
          </table>
        

          <h2 id="credit-table" className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
            Credit Table
          </h2>
          <div className="credit-table-container">
            <img
              className="credit-table-images"
              src={require("../images/nhs-service-table.png")}
            />
            <img
              className="credit-table-images"
              src={require("../images/nhs-leadership-table.png")}
            />
            <img
              className="credit-table-images"
              src={require("../images/nhs-citizenship-table.png")}
            />
          </div>
          {/* footnotes */}
          <p>
            1 semester = 3 marking periods
            <br></br>2 semesters = 1 year
          </p>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}
