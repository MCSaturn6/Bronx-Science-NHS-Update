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
        <a href="#credits">
          {" "}
          <button class="button-27" role="button">
            Credits
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
              <b>Scholarship:</b> You must maintain a __ or above.
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          ad quo. Ex expedita, itaque aliquid porro, fuga aperiam necessitatibus
          quam nobis quasi laboriosam, adipisci deleniti? Excepturi voluptatum
          nihil non vero.
        </p>

        <h2 id="credits" class="body-text-heading-2">
          Credits & Probation
        </h2>
        <p class="page-body-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea amet eos
          corrupti, fugit minima, ratione omnis, distinctio vel perferendis
          pariatur quasi voluptatum eius? Error explicabo commodi numquam,
          consequuntur natus aut?
        </p>

        <h2 id="forms" class="body-text-heading-2">
          Important Forms
        </h2>

        <p class="page-body-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea amet eos
          corrupti, fugit minima, ratione omnis, distinctio vel perferendis
          pariatur quasi voluptatum eius? Error explicabo commodi numquam,
          consequuntur natus aut?
        </p>
      </section>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}
