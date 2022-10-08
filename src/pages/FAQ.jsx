import React, { Component } from "react";
import { useEffect } from 'react'
import Hero from "../components/Hero.jsx";

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
   <section class="page">
    <Hero
    title="Frequently Asked Questions"
    image="https://www.bxscience.edu/pics/landing/ParentsQuestions-TOP-PhotoLanding19.jpg"
    />
      <div class="page-section-buttons">
        <a className="no-underline" href="#applicant">
          {" "}
          <button class="button-27" role="button">
            Applying
          </button>
        </a>
        <a className="no-underline" href="#tutoring">
          {" "}
          <button class="button-27" role="button">
            Tutoring
          </button>
        </a>
      </div>

      <section class="body-text">
        <h2 id="applicant" class="body-text-heading-2">
          NHS Applicants
        </h2>
        <div class="page-body-text">
          <ol>
            <li>
              <b>Can I get credit for off-season sports practice?</b>
            </li>
            <br></br>
            <p>
              If you practice regularly during the off-season, you may receive
              one citizenship credit for every day of the week that you practice
              during that season on a weekly basis (single days of practice are
              not acceptable). For example: if you have lacrosse practice in the
              fall every Tuesday and Thursday, you receive 2 credits for that
              semester (with a coach’s verification).
            </p>

            <br></br>

            <li>
              <b>
                What do I include on an out-of-school tutoring verification
                letter?
              </b>
            </li>
            <br></br>
            <p>
              Please state when and for how long you tutored a certain student.
              Have an adult supervisor (parent/guardian, librarian, teacher,
              etc.) sign the letter and provide his or her contact information
              (email or phone number).
            </p>

            <br></br>

            <li>
              <b>
                {" "}
                Can I get credit for a volunteer event in which I participated
                as a member of another club or organization?
              </b>
            </li>
            <br></br>
            <p>
              You may only get credit for events that are not mandatory to
              maintain membership in a certain club or organization. For
              example: You can get service credit for volunteering at the Kids
              Walk for Kids With Cancer, even though you went with the Cancer
              Society, because the event was not mandatory. You cannot get
              credit for participating in Big Bronx as a member of the Speech &
              Debate team, since it is a mandatory event for all debaters.
            </p>
            <br></br>

            <li>
              <b> Can I get credit for being part of yearbook or newspaper?</b>
            </li>
            <br></br>
            <p>
              Since the yearbook and newspaper are classes, you may not receive
              credit for being a member of either. You may, however, receive
              credit for an editor position.
            </p>
            <br></br>

            <li>
              <b> How can I complete my project requirements?</b>
            </li>
            <br></br>
            <p>
              Students can take part in service projects offered both in school
              and outside of school. A comprehensive list of the year's
              projects, which is updated periodically, may be found here. If
              there is an event you participated in outside of school, (teens
              for justice, cancer walks, soup kitchen…) be sure to get a letter
              signed by the supervisor.
            </p>
            <br></br>

            <li>
              <b> Are there any projects that are mandatory?</b>
            </li>
            <br></br>
            <p>
              Both fall and spring Open Houses are mandatory for all NHS
              members, and Graduation is mandatory for all junior NHS members.
            </p>
            <br></br>

            <li>
              <b>
                {" "}
                Can I receive credit for a musical group (orchestra, band,
                chorus)?
              </b>
            </li>
            <br></br>
            <p>
              Service credit can be awarded on the basis of one credit per week
              for participation as a librarian for any school music ensemble.
              However, no credit will be awarded for participation in a musical
              performance (winter/spring concert).
            </p>

            {/* FAQ 8 and 9 were omitted from original website */}
          </ol>
        </div>

        <h2 id="tutoring" class="body-text-heading-2">
          Becoming a Tutor
        </h2>
        <div class="page-body-text">
          <ol>
            <li>
              <b>
                I am an NHS member who signed up to become a tutor, but my tutee
                is not responding. What do I do?
              </b>
            </li>
            <br></br>
            <p>
              Email them again, and be sure to CC Hannah. It is your
              responsibility to keep track of your tutoring assignments. If the
              student still doesn't respond, please notify Hannah and she will
              inform Mr. DeSilva, who will then take further action to contact
              the student.
            </p>
            <br></br>

            <li>
              <b>How many tutoring hours can I do outside of school?</b>
            </li>
            <br></br>
            <p>There is no limit to the number of hours you can do outside of school.</p>
            <br></br>

            <li>
              <b>
                {" "}
                I am a student who would like to tutor for NHS even though I am
                not a member. How can I register?
              </b>
            </li>
            <br></br>
            <p>You will need a teacher to qualify you as a tutor. More information about that under <a href="/tutoring">Tutoring</a>.</p>
            <br></br>
          </ol>
        </div>

        <h2 class="body-text-heading-2">Requesting a Tutor</h2>
        <div class="page-body-text">
          <ol>
            <li>
              <b>How do I request a tutor?</b>
            </li>
            <br></br>
            <p>Submit the form linked under <a href="/tutoring">Tutoring</a>.</p>
            <br></br>

            <li>
              <b>
                I requested a tutor but haven’t heard back yet. What do I do?
              </b>
            </li>
            <br></br>
            <p>
              Please be patient. If it has been more than a week, and you still
              don't have a tutor, you may email Hannah Nadler (VP of Tutoring)
              to inquire about your request.
            </p>
            <br></br>

            <li>
              <b> I am a parent. How do I sign my child up for a tutor?</b>
            </li>
            <br></br>
            <p>
              Have your child fill out the Tutoring Request form for all students under <a href="/tutoring">Tutoring</a> (there is no paper form) and he/she will be matched with a NHS
              tutor who can tutor in the requested subject. Students requesting
              a tutor must use their Bronx Science email address.
            </p>
            <br></br>

            <li>
              <b> Can I meet with my tutor outside of school?</b>
            </li>
            <br></br>
            <p>
              Unfortunately, no. All tutoring must be done in school, in a space
              with teacher supervision such as the library or a classroom during
              SGI.
            </p>
            <br></br>

            <li>
              <b> Will tutoring save my grade?</b>
            </li>
            <br></br>
            <p>
              We hope it will, but, ultimately, our tutors are not
              professionals. We recommend going to SGI, using resources such as
              review books or KhanAcademy, or seeking additional outside help if
              you are really struggling.
            </p>
            <br></br>
          </ol>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      </section>
  );
}
