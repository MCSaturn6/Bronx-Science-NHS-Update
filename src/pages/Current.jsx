import React, { Component } from "react";
import { useEffect } from "react";
import Hero from "../components/Hero.jsx";

export default function Current() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="page pb-16">
      <Hero
        title="Current Members"
        image="https://www.bxscience.edu/pics/landing/Students-SchedulesLanding19.jpg"
      />

      <div class="page-section-buttons">
        <a className="no-underline" href="#membership">
          {" "}
          <button class="button-27" role="button">
            Membership
          </button>
        </a>
        <a className="no-underline" href="#attendance">
          {" "}
          <button class="button-27" role="button">
            Attendance
          </button>
        </a>
        <a className="no-underline" href="#probations">
          {" "}
          <button class="button-27" role="button">
            Probations
          </button>
        </a>
      </div>

      <section class="body-text">
        <div class="page-body-text">
          <br></br>
          <h2
            id="membership"
            className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8"
          >
            Maintaining NHS Membership
          </h2>
          <p className="mb-32">
            To maintain NHS membership you must fulfill the following
            requirements every semester. Please consistently check the
            spreadsheet linked below to see if you meet the requirements.
          </p>
          <table className="table table-bordered table-hover text-center">
            <thead>
              <tr>
                <th
                  className="bg-blue-500 text-3xl th-current-grade"
                  colspan="6"
                  scope="col"
                >
                  Credit Requirements / Semester
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="font-500">
                <th>Scholarship</th>
                <td>90 GPA</td>
              </tr>

              <tr className="font-500">
                <th scope="row">Project Credits</th>
                <td>2</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Service Credits</th>
                <td>10</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Tutoring Credits</th>
                <td>10</td>
              </tr>
            </tbody>
          </table>
          <div className="spreadsheet-image-button -translate-y-10">
            <div class="spreadsheet-images-container">
              <img
                class="nhs-spread-image"
                src={require("../images/nhs-spread-attendance.png")}
              />
              <img
                class="nhs-spread-image"
                src={require("../images/nhs-spread-credits.png")}
              />
            </div>

            <div class="page-section-buttons">
              <a
                className="no-underline"
                href="https://docs.google.com/spreadsheets/d/1K38L6o8PH6u-HJBKw0NJc11_Oj-m8GJvJY1HI7frgB0/edit#gid=353657329"
                target="_blank"
              >
                {""}
                <button class="button-27 application-button" role="button">
                  NHS 23-24 Master Spreadsheet
                </button>
              </a>
            </div>
          </div>
          <h2
            id="attendance"
            className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8"
          >
            Attendance
          </h2>
          <b>Excused Absence (per semester)</b> <br></br>
          <ul>
            <li>
              First absence: You are allowed one excused absence per semester.
            </li>
            <li>Second absence: 1 probation.</li>
            <li>
              Any excused absences after the second one is another probation.
            </li>
            <li>
              If you submit an absence note late (after the meeting begins), you
              will receive 1 level of probation.
            </li>
          </ul>
          <b>Absence Notes</b>
          <ul>
            <li>
              <p>
                Fill out{" "}
                <a href="https://forms.gle/YccAyVeHP4jnYzCw7" target="_blank">
                  this form
                </a>{" "}
                at least 24 hours in advance if you will be absent for the
                meeting.
              </p>
            </li>
          </ul>
          <b>Unexcused Absence (per semester)</b>
          <ul>
            <li>First absence: You will be placed on 2 levels of probation.</li>
            <li>Second absence: You will be dismissed from NHS.</li>
          </ul>
          <h2
            id="probations"
            className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8"
          >
            Probation System
          </h2>
          You are allowed a maximum of two probations per semester.
          <br></br>
          <br></br>
          <b>Examples of probations but not limited to...</b>
          <ul>
            <li>
              Failure to sign up for a mandatory project before a deadline.
            </li>
            <li>
              Failure to attend a project for which you volunteered without
              notifying an NHS Officer or Mr. DeSilva in advance.
            </li>
            <li>Anything mentioned previously above.</li>
          </ul>
          <p className="text-red-700">
            On your third probation, you will be dismissed from National Honor
            Society. You will receive an email from the NHS Board stating why
            you are being dismissed, and your guidance counselor will be
            notified that you are no longer an NHS member. An option to appeal
            will be provided.
          </p>
          <h2
            id="probations"
            className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8"
          >
            Removing Probations
          </h2>
          To be removed from one level of probation, you may complete an extra
          project after you have completed your other project requirements. You
          may not clear probations once you hit 3. If you go to every NHS
          meeting and attend your assigned NHS activities, you won't ever need
          this!
        </div>
      </section>
    </section>
  );
}
