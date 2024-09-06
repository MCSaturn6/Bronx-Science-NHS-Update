import React, { Component } from "react";
import { useEffect } from "react";
import "../styles/styles.css";

import Hero from "../components/Hero.jsx";

export default function Apply() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="page pb-16">
      <Hero
        title="Applying to NHS"
        image="https://www.bxscience.edu/pics/landing/About-Admissions-MainLanding19.jpg"
      />
      <div class="page-section-buttons">
        <a className="no-underline" href="#req">
          {" "}
          <button class="button-27" role="button">
            Requirements
          </button>
        </a>
        <a className="no-underline" href="#credit-table">
          {" "}
          <button class="button-27" role="button">
            Credit Table
          </button>
        </a>
      </div>
      <section class="body-text">
        <div class="page-body-text pb-40">
          <h2 className="text-3xl font-bold pt-12 mb-3 underline decoration-yellow-500 underline-offset-8">
            Who Should Apply
          </h2>
          <p>
            Only Bronx Science{" "}
            <b>second semester Juniors and first semester Seniors</b> may apply
            to NHS. If you are an underclassman, however, your application
            ultimately depends on your activities as a Freshman, Sophomore, and
            Junior. This includes joining clubs, partaking in school
            volunteering opportunities, out-of-school community service, and
            leadership opportunities, so start early!
          </p>
          <h2 className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8">
            How to Apply
          </h2>
          <p>
            <ol>
              <li>
                Read the application instructions, requirements, and credit
                table.
              </li>
              <li>Submit an electronic application.</li>
              <li>
                Upload supporting document(s) for out-of-school activities. The
                document(s) should include what the activity entails, number of
                hours acquired, and name and signature of an adult in charge.
              </li>
              <li>
                Wait for an email reply from the NHS Officers (1-2 weeks) after
                the deadline.
              </li>
            </ol>

            <div className="text-red-700">
              Any applicant that is caught forging a teacher's or organization's
              signature will be rejected from NHS and subject to disciplinary
              action.
            </div>
            <br></br>
            <b>Senior Deadline: Monday, 09/30/2024 at 11:59 PM</b>
            <br></br>
            <br></br>
          </p>
          <div class="page-section-buttons">
            <a
              className="no-underline"
              href="https://docs.google.com/forms/d/e/1FAIpQLScVEd455EMR_Ccy4Ujjg4vfQE7Jpo4GswO1zHLajWCrv0B2rw/viewform?edit_requested=true"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button class="button-27 application-button" role="button">
                NHS 24-25 Senior Application Form
              </button>
            </a>
            <a
              className="no-underline"
              href="https://forms.gle/9251EEcVJV2wUesTA"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button class="button-27 application-button" role="button">
                NHS 24-25 Senior Verification Form
              </button>
            </a>
          </div>
          <h2
            id="req"
            className="text-3xl font-bold mt-6 mb-32 underline decoration-yellow-500 underline-offset-8"
          >
            Credit Requirements
          </h2>
          <table className="table table-bordered table-hover text-center mb-16">
            <thead>
              <tr>
                <th
                  className="bg-blue-500 text-4xl th-current-grade"
                  colspan="6"
                  scope="col"
                >
                  Applying as a Junior
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-2xl font-bold">
                <th></th>
                <th colspan="6">Grade Entered Bronx Science</th>
              </tr>

              <tr className="text-xl font-bold">
                <th>Credit Category</th>
                <th>Freshman</th>
                <th>Sophomore</th>
              </tr>

              <tr className="font-500">
                <th scope="row">Scholarship</th>
                <td>93 GPA</td>
                <td>93 GPA</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Service Credits</th>
                <td>13</td>
                <td>8</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Leadership + Citizenship Credits</th>
                <td>45</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>

          <table class="table table-bordered table-hover text-center">
            <thead>
              <tr>
                <th
                  className="bg-blue-500 text-4xl th-current-grade"
                  colspan="6"
                  scope="col"
                >
                  Applying as a Senior
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-2xl font-bold">
                <th></th>
                <th colspan="6">Grade Entered Bronx Science</th>
              </tr>

              <tr className="text-xl font-bold">
                <th>Credit Category</th>
                <th>Freshman</th>
                <th>Sophomore</th>
              </tr>

              <tr className="font-500">
                <th scope="row">Scholarship</th>
                <td>93 GPA</td>
                <td>93 GPA</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Service Credits</th>
                <td>15</td>
                <td>10</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Leadership + Citizenship Credits</th>
                <td>60</td>
                <td>45</td>
              </tr>
            </tbody>
          </table>

          <h2
            id="credit-table"
            className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8"
          >
            Credit Table
          </h2>
          <div className="credit-table-container">
            <img
              className="credit-table-images"
              src={require("../images/service-table.png")}
            />
            <img
              className="credit-table-images"
              src={require("../images/leadership-table.png")}
            />
            <img
              className="credit-table-images"
              src={require("../images/citizenship-table.png")}
            />
          </div>
          {/* footnotes */}
          <p>
            1 semester = 3 marking periods
            <br></br>2 semesters = 1 year
          </p>
          <br></br>
          <p>
            For each activity name, please specify. For example, if you are are
            the president of Key Club, you would not write "Officer" but rather
            "President of Key Club" and so on for each activity name.
          </p>

          <h2
            id="credit-table"
            className="text-3xl font-bold mt-12 mb-3 underline decoration-yellow-500 underline-offset-8"
          >
            Credit Conversions
          </h2>
          <p>
            We will automatically convert excess credits in either category
            automatically, so please ENTER EVERYTHING YOU'VE DONE. Don't just
            add enough activities to fulfill a category's requirement because we
            won't be able to convert those excess credits for you if we don't
            know about them.
          </p>
          <p>3 EXCESS service credit = 1 L/C credit</p>
          <p>3 EXCESS L/C credit = 1 service credit</p>
        </div>
      </section>
    </section>
  );
}
