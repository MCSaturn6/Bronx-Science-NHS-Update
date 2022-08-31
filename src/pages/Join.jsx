import React, { Component } from "react";

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
            Bronx Science students can apply to NHS in the spring of their
            junior year or in the fall of their senior year. However, your
            application ultimately depends on your activities as a Freshmen and
            Sophomore (and Junior if you apply as a Senior in the fall). This
            includes joining clubs, partaking in school volunteering
            opportunities, out-of-school community service, and leadership
            opportunities. So start early!
            <br></br>
            <br></br>
            Once you are accepted as a junior, you don't need to reapply if you
            weren't dismissed. (Read more about dismissal in Current Members).
            <br></br>
            <br></br>
            Before applying, please note the following:
          </p>
          <ul>
            <br></br>
            <li>
              <b>Deadline:</b> __________.
            </li>
            <li>
              Incomplete and improperly submitted applications will not be
              considered.
            </li>
            <li>
              Any applicant that is caught forging a teacher's or organization's
              signature will be rejected from NHS and subject to disciplinary
              action.
            </li>
            <li>
              If you have any questions, please read the FAQ. If you still have
              questions, please email nhs@bxscience.edu.
            </li>
          </ul>
          <br></br>
        </div>

        <div class="page-section-buttons">
          <a href="#">
            {" "}
            <button class="button-27 application-button" role="button">
              NHS 22-23 Application Form
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
                <th >Freshman</th>
                <th>Sophomore</th>
              </tr>

              <tr className="font-500">
                <th scope="row">Scholarship</th>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Service</th>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Leadership</th>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Citizenship</th>
                <td>#</td>
                <td>10</td>
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
                <th >Freshman</th>
                <th>Sophomore</th>
              </tr>

              <tr className="font-500">
                <th scope="row">Scholarship</th>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Service</th>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Leadership</th>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr className="font-500">
                <th scope="row">Citizenship</th>
                <td>#</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>

        </div>

        <h2 id="credit-table" class="body-text-heading-2">
          Credit Table
        </h2>
      </section>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
}
