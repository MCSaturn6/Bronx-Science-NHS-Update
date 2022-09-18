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
          <br></br><br></br>
        </p>

        <h2 id="probations" class="body-text-heading-2">
          Probation System
        </h2>
        <p class="page-body-text">
          There are 3 levels of probations. Once you hit your third one, you'll
          be dismissed from NHS, following a dismissal email. However, you can
          always reapply the following year if you are a Junior.
          <br></br><br></br>

          <b>One Probation</b>
          <br></br> 
          <b>1. </b>Failure to sign up for a mandatory project before a
          deadline. 
          <br></br>
          <b>2. </b>Failure to attend a project for which you volunteered
          without notifying an NHS Officer or Mr. DeSilva in advance. 
          <br></br>
          <b>3. </b>Two excused absences from meetings (each additional absence beyond this equals one
          level). 
          <br></br>
          <b>4. </b>Submitting a late absence note (please note that absence notes
          received 24 hours after the meeting will not be considered).
          
          <br></br><br></br>
          
          <b>Two Probations</b>
          <br></br> 
          <b>1. </b>Failure to attend a mandatory project (unless you have been cleared by the officers). 
          <br></br>
          <b>2. </b>One unexcused absence. (If you receive two unexcused absences, you will be dismissed.)

          <br></br><br></br>

          <p className="text-red-700">After 3 levels of probations, you will be dismissed from National Honor Society, you will receive an email from the NHS Board stating why you are being dismissed, and your guidance counselor will be notified that you are no longer an NHS member.</p>
        </p>

        <h2 id="forms" class="body-text-heading-2">
          Removing Probations
        </h2>

        <p class="page-body-text">
          To be removed from one level of probation, you may complete an extra
          project after you have completed your other project requirements. If
          you go to every NHS meeting and attend your assigned NHS activities,
          you won't ever need this!
        </p>
      </section>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}
