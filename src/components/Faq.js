
import React, { useState } from 'react'
import '..//assets/faq/Faq.css'


const Faq = () => {

  const [faqs, setfaqs] = useState([{
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur',
    open: false
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur',
    open: false
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur',
    open: false
  },
  
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur',
    open: false
  }]);



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
      </div >

    )
  }



  return (

    <div className="app">
      <header>
        <h1>Frequently <br/> <spam className="ask">Asked</spam> <br/> Questions</h1>

      </header>

      <div className="faq">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </div>
  )

}


export default Faq