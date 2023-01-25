
import React, { useState } from 'react'
import './Faq.css'


const Faq = () => {

  const [faqs, setfaqs] = useState([{
    question: `When is Prastuti being held?`,
    answer: `Prastuti’23 is commencing on 24th January and will continue up to the month of March.
    Registrations for the events are open.`,
    open: false
  },
  {
    question: `How do I register for the events?`,
    answer: `Participants can register for various events through the website or the App which contains basic info about the event, the allowable team size and other requirements.`,
    open: false
  },
  {
    question: `Is participation in the events paid?`,
    answer: `No, the participation is free of cost.`,
    open: false
  },
  {
    question: `Can I register for multiple events?`,
    answer: `Yes, a person can register for as many events as desired. The teams for the events need not be the same as well.`,
    open: false
  },
  {
    question: `Are all events of the same duration?`,
    answer: `The workshop phase will go on for approximately the same duration for all the events.`,
    open: false
  },
  {
    question: `How can I get essential updates?`,
    answer: `All the updates will be regularly and timely shared on our App and social media handles such as Instagram, Linkedin, and Facebook under the name of Prastuti. Do follow these pages and download the App to stay updated.`,
    open: false
  },
]);



  const toggleFAQ = (index) => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }

      return faq;
    }))

  }

  // console.log(faqs);
  function FAQ({ faq, index, toggleFAQ }) {
    return (
      <div className={"faq " + (faq.open ? 'open' : ' ')}
        key={index}
        onClick={() => toggleFAQ(index)}
      >
        {/* console.log(faq);
          console.log(index); */}
        <div className="faq-question">
          {faq.question}
        </div>
        <div className="faq-answer">
          {faq.answer}
        </div>
        <div className="faqline"></div>
      </div >

    )
  }



  return (

    <div className="app" id="faqs">
      <header>
        <h1>Frequently <br/> <span className="ask">Asked</span> <br/> Questions</h1>

      </header>

      <div className="faq">
        {faqs.map((faq, i) => (
          <FAQ key={i} faq={faq} index={i}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </div>
  )

}


export default Faq
