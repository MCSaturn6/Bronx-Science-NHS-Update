import React, { Component } from "react";

export default function About() {
  return (
    <section className="page">
      <h1 class="heading">About</h1>

      <div class="page-section-buttons">
        <a href="#what">
          {" "}
          <button class="button-27" role="button">
            What
          </button>
        </a>
        <a href="#board">
          {" "}
          <button class="button-27" role="button">
            Who
          </button>
        </a>
      </div>

      <section class="body-text">
        <h2 id="what" class="body-text-heading-2">
          What is NHS?
        </h2>
        <div class="page-body-text">
          <p>
            With over 300 members, Bronx Science National Honor Society (NHS)
            elevates the school's commitment to the values of scholarship,
            service, leadership, and character. By providing volunteering
            opportunities around the school, such as being a tutor and being a
            tour guide, members get first-hand experience building these four
            skills. To become a member, navigate to the{" "}
            <a class="link" href="join.html">
              Join Us
            </a>{" "}
            page.
            <br></br>
            <br></br>
            Once accepted into NHS, members attend monthly meetings, typically
            held in the school auditorium. Members will check their emails
            regularly on project, service, and tutoring opportunities,
            dedicating an average of 1-2 hours a week on NHS.
            <br></br>
            <br></br>
            To learn more about NHS, visit{" "}
            <a class="link" href="https://www.nhs.us" target="_blank">
              nhs.us.
            </a>
          </p>
        </div>

        <h2 id="board" class="body-text-heading-2">
          Meet the Board
        </h2>
        <div class="page-body-text">
          <div class="board">
            <div class="user-container">
              <div class="user-item user-item-1">
                <i class="fa-solid fa-circle-user"></i>
              </div>

              <div class="user-item user-item-2">
                <i class="fa-solid fa-circle-user"></i>
              </div>
            </div>

            <div class="flexbox-container">
              <div class="flexbox-item flexbox-item-1">
                <div class="name">Mr. DeSilva</div>
                <div class="position">Advisor</div>
                <div class="email">@bxscience.edu</div>
              </div>

              <div class="flexbox-item flexbox-item-2">
                <div class="name">Kaitlyn Youn</div>
                <div class="position">President</div>
                <div class="email">@bxscience.edu</div>
              </div>
            </div>

            <div class="user-container">
              <div class="user-item user-item-1">
                <i class="fa-solid fa-circle-user"></i>
              </div>

              <div class="user-item user-item-2">
                <i class="fa-solid fa-circle-user"></i>
              </div>

              <div class="user-item user-item-3">
                <i class="fa-solid fa-circle-user"></i>
              </div>
            </div>

            <div class="flexbox-container">
              <div class="flexbox-item flexbox-item-1">
                <div class="name">Mr. DeSilva</div>
                <div class="position">Advisor</div>
                <div class="email">@bxscience.edu</div>
              </div>

              <div class="flexbox-item flexbox-item-2">
                <div class="name">Kaitlyn Youn</div>
                <div class="position">President</div>
                <div class="email">@bxscience.edu</div>
              </div>

              <div class="flexbox-item flexbox-item-2">
                <div class="name">Kaitlyn Youn</div>
                <div class="position">President</div>
                <div class="email">@bxscience.edu</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
    </section>
    
  );
}
