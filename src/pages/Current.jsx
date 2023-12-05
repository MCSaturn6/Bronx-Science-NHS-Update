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
                <td>93 GPA</td>
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
                href="https://docs.google.com/spreadsheets/d/1uNOCmTFOgucpe1mhAYu1hAZqBHnHEAyuSiqSrghKFXc/edit#gid=1436749846"
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
            id="credit-info"
            className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8"
          >
            Credit Information
          </h2>
          <p>Credits will not be transferred between the three requirements.</p>
          <p>
            Tutoring non-Bronx Science students will not count towards your
            credit requirement. You must either tutor during school, during SGI,
            or tutor your matched Bronx Science student outside of school. You
            may only tutor a tutee once being matched through NHS by receiving
            the “Tutoring Pairing Email”.
          </p>
          <p>
            Students can tutor in SGI for credit without being matched. You must
            have a teacher's signature on the tutoring log.
          </p>
          <h2
            id="24-hr-policy"
            className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8"
          >
            24 Hour Policy
          </h2>
          <p>
            If you have an excused reason for being unable to attend a volunteer
            event you have signed up for, you must cancel within 24 hours{" "}
            <b>of the day</b> of the event. For example, if the event is at{" "}
            <b>ANY TIME</b> on a Wednesday, you must email us by <b>Monday</b>{" "}
            at 11:59pm. Please provide an excused absence note (OB pass, teacher
            note, screenshot of attendance form submitted to the attendance
            office)
          </p>
          <p>
            Please reply to all emails requesting a reply within 24 hours (this
            includes confirming tutor match emails).
          </p>
          <p>
            If an event is canceled within 24 hours of the day of the event, we
            will automatically reward you with your credits.
          </p>
          <h2
            id="attendance"
            className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8"
          >
            Attendance
          </h2>
          <p>
            You get one excused absence per year. You must fill out the excused
            absence form 24 hours before the meeting{" "}
            <a
              href="https://docs.google.com/forms/d/1UbOtlbepM5Ea64TSWt9mq94PyRfqEceyqh1x24Vkm5I/edit"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
          <p>
            All other <b>excused</b> absences will result in 1 probation A other
            excused absences after will also result in 1 probation If you submit
            your absence note late (it must be 24 hours before the meeting), you
          </p>
          <p>
            Unexcused absences will automatically result in two probations. A
            second unexcused absence will result in dismissal.
          </p>
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
          <b>Examples of probations include but are not limited to...</b>
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

          <h2
            id="probations"
            className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8"
          >
            Google Classroom Policies
          </h2>
          <p>
            Please select "mark as done" for all assignments, even if they are
            irrelevant to you (aka if it is not an event you want to participate
            in). This way, we know you have seen the information posted. (It
            also cleans up your Google Classroom To-Do list 😃).
          </p>
          <p>
            Smaller events will all be found under the Service category.
            Volunteers for short-term events will be chosen on a
            first-come-first-serve basis. For example, if volunteers for a tour
            is requested within the next few days, we will need to assign
            volunteers ASAP.
          </p>
          <p>
            If it is an event in which we have more time, we will close the
            google form on a certain date and review which volunteers need the
            most service credits. (We will indicate the date of form closing.)
          </p>
        </div>
      </section>
    </section>
  );
}
