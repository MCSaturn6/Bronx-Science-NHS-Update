import React, { Component } from "react";
import { useEffect } from "react";
import Hero from "../components/Hero.jsx";

const board = [
  {
    name: "Simone G.",
    position: "President",
    email: "simoneg28@nycstudents.net",
  },
  {
    name: "Suren Reddy",
    position: "VP of Organization",
    email: "surenr@nycstudents.net",
  },
  {
    name: "Kyle Qu",
    position: "VP of Tutoring",
    email: "kyleq3@nycstudents.net",
  },
  {
    name: "Menqian Cai",
    position: "VP of Technology",
    email: "Menqianc@nycstudents.net",
  },
  {
    name: "Mr. DeSilva",
    position: "Advisor",
    email: "pdesilva@schools.nyc.gov ",
  },
];
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="page pb-16">
      <Hero
        title="About Us"
        image="http://static1.squarespace.com/static/5bfc3ff0a2772c55740f3539/5cd43e2515fcc078dcb9b019/5ec563178c4ae53c938cf74c/1591573794835/Bronx+Science+Mural+-+Eventbrite+banner.jpg?format=1500w"
      />

      <section className="body-text">
        <div class="page-body-text">
          <h2 id="what" class="body-text-heading-2">
            What is NHS?
          </h2>
          <p>
            Bronx Science National Honor Society (NHS) elevates the school's
            commitment to the values of scholarship, service, leadership, and
            character. By providing volunteering opportunities around the
            school, such as being a tutor and tour guide, members get first-hand
            experience building these four skills.
            <br></br>
            <br></br>
            Once accepted into NHS, members attend monthly meetings on Mondays,
            typically held in the school auditorium. Members will check their
            emails regularly on project, service, and tutoring opportunities,
            dedicating an average of 1-2 hours a week on NHS.
            <br></br>
            <br></br>
            To learn more about NHS, visit the{" "}
            <u>
              <a class="link" href="https://docs.google.com/document/d/1fnT5oGd8EI96poSIEUtkbQbuF62CSNc85T9Ew-O-GPw/edit?usp=sharing" target="_blank">
                NHS Guide.
              </a>
            </u>
          </p>
        </div>

        <h2 id="board" class="body-text-heading-2">
          Meet the Board
        </h2>
        <div class="page-body-text">
          <div class="board">
            <div class="flexbox-container">
              {board.map((person) => (
                <div class="flexbox-item flexbox-item-1">
                  <div class="name">{person.name}</div>
                  <div class="position">{person.position}</div>
                  <div class="email">
                    <u>{person.email}</u>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="flex justify-center mt-10 font-bold text-2xl underline">
            Contact nhs@bxscience.edu for any inquiries.{" "}
          </p>
        </div>
      </section>
    </section>
  );
}
