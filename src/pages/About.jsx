import React, { Component } from "react";
import { useEffect } from 'react'
import Hero from "../components/Hero.jsx";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="page">
      <Hero
      title="About Us"
      image="http://static1.squarespace.com/static/5bfc3ff0a2772c55740f3539/5cd43e2515fcc078dcb9b019/5ec563178c4ae53c938cf74c/1591573794835/Bronx+Science+Mural+-+Eventbrite+banner.jpg?format=1500w"
      />

      <div class="page-section-buttons">
        <a className="no-underline" href="#what">
          {" "}
          <button className="button-27">
            What
          </button>
        </a>
        <a className="no-underline" href="#board">
          {" "}
          <button class="button-27">
            Who
          </button>
        </a>
      </div>

      <section class="body-text">
        <div class="page-body-text">
        <h2 id="what" class="body-text-heading-2">
          What is NHS?
        </h2>
          <p>
            With over 300 members, Bronx Science National Honor Society (NHS)
            elevates the school's commitment to the values of scholarship,
            service, leadership, and character. By providing volunteering
            opportunities around the school, such as being a tutor and being a
            tour guide, members get first-hand experience building these four
            skills. To become a member, navigate to the{" "}
            <a class="link" href="/join">
              Join
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
            <u><a class="link" href="https://www.nhs.us" target="_blank">
              nhs.us.
            </a></u>
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
                <div class="email"><u>desilva@bxscience.edu</u></div>
              </div>

              <div class="flexbox-item flexbox-item-2">
                <div class="name">Kaitlyn Youn</div>
                <div class="position">President</div>
                <div class="email"><u>younk@bxscience.edu</u></div>
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
                <div class="name">Hannah Nadler</div>
                <div class="position">VP of Tutoring</div>
                <div class="email"><u>nadlerh@bxscience.edu</u></div>
              </div>

              <div class="flexbox-item flexbox-item-2">
                <div class="name">Ridwan Azam</div>
                <div class="position">VP of Organization</div>
                <div class="email"><u>azamr@bxscience.edu</u></div>
              </div>

              <div class="flexbox-item flexbox-item-2">
                <div class="name">Jeffrey Li</div>
                <div class="position">VP of Technology</div>
                <div class="email"><u>lij12@bxscience.edu</u></div>
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
