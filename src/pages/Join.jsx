import React, { Component } from "react";
import Timer from "../components/Timer.jsx";
import "../styles/timer.css";
import "../styles/styles.css";
import "../scripts/timer.js";

export default function join() {
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
        <div class="page-body-text">
          <p class="join-intro">
            <u>
              <b>PLEASE READ BEFORE PROCEEDING.</b>
            </u>{" "}
            Bronx Science students can apply to NHS in the spring of their
            junior year or in the fall of their senior year. However, your
            application ultimately depends on your activities as a Freshmen and
            Sophomore (and Junior if you apply as a Senior in the fall). This
            includes joining clubs, partaking in school volunteering
            opportunities, out-of-school community service, and leadership
            opportunities. So start early!
            <br></br>
            <br></br>
            See the requirements below for the number of credits needed to
            apply. Credits are determined in the credit table below. Once you
            are accepted as a junior, you don't need to reapply if you weren't
            dismissed. (Read more about dismissal in Current Members).
            <br></br>
          </p>
          <ul>
            <br></br>
            <li>
              Incomplete and improperly submitted applications will not be
              considered.
              <br></br>
              <br></br>
              <div className="text-red-700">
                {" "}
                Any applicant that is caught forging a teacher's or
                organization's signature will be rejected from NHS and subject
                to disciplinary action.
              </div>
            </li>
            <li>
              <br></br>
              <b>Senior Deadline: Friday, 09/30/22 @ 11:59 PM.</b>
              <br></br>
              <br></br>
              <b>Junior Deadline: __/__/22 @ 11:59 PM.</b>
              <br></br>
              <br></br>
              If you have any further questions, please read the FAQ. If you
              still have questions, please email nhs@bxscience.edu.
            </li>
          </ul>
          <br></br>
          <h2 className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
            Application Procedure
          </h2>
          <p><b>1. </b>Read the application requirements, instructions, and credit table.</p>
          <br></br>
          <p><b>2. </b>Submit an electronic application.</p>
          <br></br>
          <p><b>3. </b>Upload supporting documents for out-of-school activities.</p>
          <br></br>
          <p><b>3. </b>Wait for an email reply from the NHS Officers (1-2 weeks) after the deadline.</p>
          <br></br>
          <br></br>

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

          <h2 id="req" class="body-text-heading-2">
            Requirements
            <br></br>
            <br></br>
            <br></br>
          </h2>

          <div class="page-body-text text-center">
            <table class="table table-bordered table-hover ">
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
                  <th scope="row">Service</th>
                  <td>13</td>
                  <td>8</td>
                </tr>
                <tr className="font-500">
                  <th scope="row">Leadership & Citizenship</th>
                  <td>50</td>
                  <td>30</td>
                </tr>
              </tbody>
            </table>
            <br></br>
            <br></br>
            <br></br>

            <table class="table table-bordered table-hover ">
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
                  <th scope="row">Service</th>
                  <td>15</td>
                  <td>10</td>
                </tr>
                <tr className="font-500">
                  <th scope="row">Leadership & Citizenship</th>
                  <td>60</td>
                  <td>45</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="credit-table" class="body-text-heading-2">
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
