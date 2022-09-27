import React, { Component } from "react";
import { useEffect } from "react";

export default function Current() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section class="page">
      <h1 class="heading">Current Members</h1>
      <div class="page-section-buttons">
        <a href="#membership">
          {" "}
          <button class="button-27" role="button">
            Membership
          </button>
        </a>
        <a href="#attendance">
          {" "}
          <button class="button-27" role="button">
            Attendance
          </button>
        </a>
        <a href="#probations">
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
            id="credit-table"
            className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8"
          >
            Maintaining NHS Membership
          </h2>
          <p>
            To maintain NHS membership you must fulfill the following
            requirements every semester. Please consistently check the
            spreadsheet linked below to see if you meet the requirements.
          </p>
          <br></br>
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
                <td>__</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Service Credits</th>
                <td>__</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Tutoring Credits</th>
                <td>__</td>
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

          <br></br>
          <div class="page-section-buttons">
            <a href="#">
              {" "}
              <button class="button-27 application-button" role="button">
                NHS 22-23 Master Spreadsheet
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
          <b>→</b> First absence: You are allowed one excused absence per
          semester.
          <br></br>
          <b>→</b> Second absence: You will be placed on 1 level of probation.
          <br></br>
          <b>→</b> Any excused absences after the second one is another level of
          probation.
          <br></br>
          <br></br>
          <b>Unexcused Absence (per semester)</b>
          <br></br>
          <b>→</b> First absence: You will be placed on 2 levels of probation.
          <br></br>
          <b>→</b> Second absence: You will be dismissed from NHS.
          <br></br>
          <br></br>
          <b>Late Absence Note</b>
          <br></br>
          <b>→</b> If you submit an absence note late (after the meeting
          begins), you will receive 1 level of probation.
          <br></br>
          <br></br>
          <b>Absence Notes</b>
          <br></br>
          <b>→</b> Absence notes must be submitted before the meeting that you
          plan to miss.
          <br></br>
          <b>→</b> Click here to download an absence note, fill it out
          completely, and obtain the appropriate signature(s).
          <br></br>
          <b>→</b> Click here to upload your absence note.
          <br></br>
          <b>→</b> Absence notes that are submitted by hand or placed in Mr.
          DeSilva's mailbox will not be accepted. You must upload your absence
          note to the Google Form.
          <br></br>
          <br></br>
          <b>Attendance Records </b>
          <br></br>
          It is the responsibility of every NHS member to verify that his/her
          attendance records are accurate and up-to-date. You must be logged in
          to your Bronx Science email in order to view the master spreadsheet.
          <br></br>
          <br></br>


        <h2
            id="probations"
            className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8"
          >
            Probation System
          </h2>
          There are 3 levels of probations. Once you hit your third one, you'll
          be dismissed from NHS, following a dismissal email. However, you can
          always reapply the following year if you are a Junior.
          <br></br>
          <br></br>
          <b>One Probation</b>
          <br></br>
          <b>1. </b>Failure to sign up for a mandatory project before a
          deadline.
          <br></br>
          <b>2. </b>Failure to attend a project for which you volunteered
          without notifying an NHS Officer or Mr. DeSilva in advance.
          <br></br>
          <b>3. </b>Two excused absences from meetings (each additional absence
          beyond this equals one level).
          <br></br>
          <b>4. </b>Submitting a late absence note (please note that absence
          notes received 24 hours after the meeting will not be considered).
          <br></br>
          <br></br>
          <b>Two Probations</b>
          <br></br>
          <b>1. </b>Failure to attend a mandatory project (unless you have been
          cleared by the officers).
          <br></br>
          <b>2. </b>One unexcused absence. (If you receive two unexcused
          absences, you will be dismissed.)
          <br></br>
          <br></br>
          <p className="text-red-700">
            After 3 levels of probations, you will be dismissed from National
            Honor Society, you will receive an email from the NHS Board stating
            why you are being dismissed, and your guidance counselor will be
            notified that you are no longer an NHS member.
          </p>


        <h2
            id="probations"
            className="text-3xl font-bold mt-6 mb-3 underline decoration-yellow-500 underline-offset-8"
          >
            Removing Probations
          </h2>


          To be removed from one level of probation, you may complete an extra
          project after you have completed your other project requirements. If
          you go to every NHS meeting and attend your assigned NHS activities,
          you won't ever need this!
          </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}
