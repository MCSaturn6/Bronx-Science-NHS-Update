import Hero from "../components/Hero.jsx";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="page pb-16">
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

      <section className="bg-whiteish px-12 rounded-lg sm:mx-4 lg:mx-8 pb-12">
        {/* <section className="mx-32"> */}

        <h2 id="applicant" class="body-text-heading-2">
          NHS Applicants
        </h2>

        <Faq data={nhsApplicants} styles={styles} config={config} />
        {/* <div class="page-body-text">
          <ol>
            {nhsApplicants.map(qa => (
              <div>
                <li>
                  <b>{qa.question}</b>
                </li>
                <br></br>
                <p>{qa.answer}</p>
                <br></br>
              </div>
            ))}
          </ol>
        </div> */}

        <h2 id="tutoring" className="body-text-heading-2">
          Becoming a Tutor
        </h2>
        <Faq data={becomingATutor} styles={styles} config={config} />
        {/* <div class="page-body-text">
          <ol>
          {becomingATutor.map(qa => (
              <div>
                <li>
                  <b>{qa.question}</b>
                </li>
                <br></br>
                <p>{qa.answer}</p>
                <br></br>
              </div>
            ))}
          </ol>
        </div> */}

        <h2 class="body-text-heading-2">Requesting a Tutor</h2>
        <Faq data={requestingATutor} styles={styles} config={config} />
        {/* <div class="page-body-text">
          <ol>
          {requestingATutor.map(qa => (
              <div>
                <li>
                  <b>{qa.question}</b>
                </li>
                <br></br>
                <p>{qa.answer}</p>
                <br></br>
              </div>
            ))}
          </ol>
        </div> */}
      </section>
    </section>
  );
}


const nhsApplicants = {
  rows: [
    {
      title: (
        <p className="font-semibold">
          Can I get credit for off-season sports practice?
        </p>
      ),
      content:
        "If you practice regularly during the off-season, you may receive one citizenship credit for every day of the week that you practice during that season on a weekly basis (single days of practice are not acceptable). For example: if you have lacrosse practice in the fall every Tuesday and Thursday, you receive 2 credits for that semester (with a coach’s verification).",
    },
    {
      title: (
        <p className="font-semibold">
          What do I include on an out-of-school tutoring verification letter?
        </p>
      ),
      content:
        "Please state when and for how long you tutored a certain student. Have an adult supervisor (parent/guardian, librarian, teacher, etc.) sign the letter and provide his or her contact information (email or phone number).",
    },
    {
      title: (
        <p className="font-semibold">
          Can I get credit for a volunteer event in which I participated as a
          member of another club or organization?
        </p>
      ),
      content:
        "You may only get credit for events that are not mandatory to maintain membership in a certain club or organization. For example: You can get service credit for volunteering at the Kids Walk for Kids With Cancer, even though you went with the Cancer Society, because the event was not mandatory. You cannot get credit for participating in Big Bronx as a member of the Speech & Debate team, since it is a mandatory event for all debaters.",
    },
    {
      title: (
        <p className="font-semibold">
          Can I get credit for being part of yearbook or newspaper?
        </p>
      ),
      content:
        "Since the yearbook and newspaper are classes, you may not receive credit for being a member of either.",
    },
    {
      title: (
        <p className="font-semibold">
          How can I complete my service requirements?
        </p>
      ),
      content:
        "Students can take part in service projects offered both in school and outside of school. If it's outside of school, be sure to get a letter signed by the supervisor.",
    },
  ],
};

const becomingATutor = {
  rows: [
    {
      title: (
        <p className="font-semibold">
          I am an NHS member who signed up to become a tutor, but my tutee is
          not responding. What do I do?
        </p>
      ),
      content:
        "Email them again, and be sure to CC the VP of Tutoring. It is your responsibility to keep track of your tutoring assignments. If the student still doesn't respond, please notify the VP of Tutoring and he/she/they will inform Mr. DeSilva, who will then take further action to contact the student.",
    },
    {
      title: (
        <p className="font-semibold">
          How many tutoring hours can I do outside of school?
        </p>
      ),
      content:
        "Because not every NHS member will be paired up with a tutee from the school, we allow members to get their tutoring credits outside of school as well. There is no limit to the number of hours you can do outside of school. Every 4 hours of outside tutoring equates to 1 tutoring credit.",
    },
    {
      title: (
        <p className="font-semibold">
          I am a student who would like to tutor for NHS even though I am not a
          member. How can I register?
        </p>
      ),
      content:
        "You will need a teacher to qualify you as a tutor. More information about that under Tutoring.",
    },
  ],
};

const requestingATutor = {
  rows: [
    {
      title: <p className="font-semibold">How do I request a tutor?</p>,
      content:
        "Submit the form linked under Tutoring. Students requesting a tutor must use their Bronx Science email address.",
    },
    {
      title: (
        <p className="font-semibold">
          I requested a tutor but haven’t heard back yet. What do I do?
        </p>
      ),
      content:
        "Please be patient. If it has been more than a week, and you still don't have a tutor, you may email the VP of Tutoring to inquire about your request.",
    },
    {
      title: (
        <p className="font-semibold">
          I am a parent. How do I sign my child up for a tutor?
        </p>
      ),
      content:
        "Have your child fill out the Tutoring Request form for all students under Tutoring (there is no paper form) and he/she/they will be matched with a NHS tutor who can tutor in the requested subject. Students requesting a tutor must use their Bronx Science email address.",
    },
    {
      title: (
        <p className="font-semibold">
          Can I meet with my tutor outside of school?
        </p>
      ),
      content:
        "Unfortunately, no. All tutoring must be done in school, in a space with teacher supervision such as the library or a classroom during SGI.",
    },
    {
      title: <p className="font-semibold">Will tutoring save my grade?</p>,
      content:
        "We hope it will, but, ultimately, our tutors are not professionals. We recommend going to SGI, using resources such as review books, KhanAcademy, or seeking additional outside help if you are really struggling.",
    },
  ],
};

const styles = {
  bgColor: "#ebfaf8",
  titleTextColor: "#014f43",
  rowTitleColor: "#014f43",
  rowContentColor: "#014f43",
  // arrowColor: "red",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};
