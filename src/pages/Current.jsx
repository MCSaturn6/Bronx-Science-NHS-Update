import React, { Component } from "react";

export default function current() {
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
        <a href="#forms">
          {" "}
          <button class="button-27" role="button">
            Forms
          </button>
        </a>
      </div>

      <section class="body-text">
        <h2 id="membership" class="body-text-heading-2">
          Maintaining NHS Membership
        </h2>

        <div class="page-body-text">
          <p>
            To maintain NHS membership you must fulfill the following
            requirements every semester:
          </p>
          <br></br>
          <ul>
            <li>
              <b>Scholarship:</b> You must maintain a 90 or above.
            </li>
            <li>
              <b>Projects:</b> You must have a total of _ project credits per
              semester.
            </li>
            <li>
              <b>Service:</b> You must have a total of _ service credits per
              semester.
            </li>
            <li>
              <b>Tutoring:</b> You must have a total of _ tutoring credits per
              semester.
            </li>
            <li>
              <b>Character:</b> You must demonstrate strong character. An
              approval email will be sent out to teachers.
            </li>
          </ul>
          <br></br>
          <p>
            Please consistently check the spreadsheet linked below to see if you
            meet the requirements.
          </p>
        </div>

        <div class="spreadsheet-image-button">
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
            <a href="#">
              {" "}
              <button class="button-27 application-button" role="button">
                NHS 22-23 Master Spreadsheet
              </button>
            </a>
          </div>
        </div>

        <h2 id="attendance" class="body-text-heading-2">
          Attendance
        </h2>
        <p class="page-body-text">
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
          to your Bronx Science email in order to view these documents.
          Attendance records for juniors and seniors may be found here. If you
          have any questions about the attendance policy or your personal
          attendance record, please contact the Vice President of Organization,
          Ridwan Azam at azamr@bxscience.edu.
        </p>

        <h2 id="probations" class="body-text-heading-2">
          Probation System
        </h2>
        <p class="page-body-text">
          There are 3 levels of probations. Once you hit your third one, you'll
          be dismissed from NHS, following a dismissal email. However, you can
          always reapply the following year if you are a Junior. You will
          receive... One Probation Failure to answer an email sent by an NHS
          Officer, Mr. DeSilva, or another faculty member. Failure to sign up
          for a mandatory project before a deadline. Failure to attend a project
          for which you volunteered without notifying an NHS Officer or Mr.
          DeSilva in advance. 2 excused absences from meetings (each additional
          absence beyond this equals one level). Submitting a late absence note
          (please note that absence notes received 24 hours after the meeting
          will not be considered). Two Probations Failure to attend a mandatory
          project (unless you have been cleared by the officers). One unexcused
          absence. (If you receive two unexcused absences, you will be
          dismissed.) After 3 levels of probations, you will be dismissed from
          National Honor Society, you will receive an email from the NHS Board
          stating why you are being dismissed, and your guidance counselor will
          be notified that you are no longer an NHS member.
        </p>

        <h2 id="forms" class="body-text-heading-2">
          Removing Probations
        </h2>

        <p class="page-body-text">
          To be removed from one level of probation, you may complete an extra
          project after you have completed your other project requirements. If
          you go to every NHS meeting and attend your assigned NHS activities,
          you won't ever need this! Note that you can't clear probations once
          you hit 3 probations. Example 1: An NHS member decides to skip an NHS
          meeting without submitting an absence note and is assigned two levels
          of probation. Later in the semester, the same NHS member completes two
          additional projects and is removed from probation. Example 2: An NHS
          member misses two meetings (excused absences) and is given one level
          of probation. The following week, they fail to attend a mandatory
          project and are given two additional levels of probation. If they get
          one more level of probation, they will be dismissed from NHS. Example
          3: An NHS member decides to skip a project for which they volunteered
          and is given one level of probation. The following week, they decide
          to skip a meeting without providing an absence note and receive two
          additional levels of probation. Finally, they fail to sign up for a
          mandatory project before a given deadline and are dismissed from NHS
          because they have exceeded three levels of probation.
        </p>
      </section>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}
