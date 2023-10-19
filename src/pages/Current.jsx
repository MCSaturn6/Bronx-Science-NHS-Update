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
          <p>You are allowed a maximum of two probations per semester.</p>
          <p>
            You will not be allowed to appeal probations unless it is an error
            on our part.{" "}
          </p>
          <b>Examples of probations but not limited to...</b>
          <ul>
            <li>Unexcused meetings (2 probations)</li>
            <li>
              Submitting an assignment posted on Google Classroom late (1
              probation)
            </li>
            <li>
              Unexcused absence for an event you signed up for (1 probation).
              This includes canceling a sign up less than 24 hours before the
              event
            </li>
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
            Clearing Probations
          </h2>
          <p>
            Once you receive your third probation, you will be dismissed from
            NHS. You will not have any opportunity to reapply and will not be
            eligible to clear any of your probations.
          </p>
          <p>
            2 service credits will clear one probation 1 project credit will
            clear one probation These credits will not be counted towards either
            of the two categories, but rather it will only clear the probation
            You may not clear a probation with past earned service and project
            credits. Only credits awarded AFTER a probation has been received
            will be acceptable for clearance.
          </p>
        </div>
      </section>
    </section>
  );
}
