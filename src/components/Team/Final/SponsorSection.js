
import Card from './Card.js';
import classes from './SponsorSection.module.css';
import data from '../TeamData'

function PosSection(props) {
  return (
    <>
      <div className={classes.pos_title} id="pos_1">
        <h1>Convenors</h1>

        <div className={classes.cards} id="pos_1">
          {data.convener.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.pos_title} id="pos_2">
        <h1>Content Team</h1>

        <div className={classes.cards}>
          {data.content.map((item, index) => (
                <Card img={item.img} position={item.position} name={item.name} key={item.id} />
              ))}
        </div>
      </div>
      <div className={classes.pos_title} id="pos_3">
        <h1>Design Team</h1>

        <div className={classes.cards}>
          {data.design.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.pos_title} id="pos_4">
        <h1>Event Team</h1>

        <div className={classes.cards}>
          {data.event.map((item, index) => (
                <Card img={item.img} position={item.position} name={item.name} key={index} />
              ))}
        </div>
      </div>

      <div className={classes.pos_title} id="pos_5">
        <h1>Marketing Team</h1>

        <div className={classes.cards}>
          {data.marketing.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.pos_title} id="pos_6">
        <h1 id="pos_2">Publicity Team</h1>
        <div className={classes.cards}>
          {data.public.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.pos_title} id="pos_7">
        <h1 id="pos_3">Finance Team</h1>
        <div className={classes.cards}>
          {data.pr.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.pos_title} id="pos_8">
        <h1>Social Media Team</h1>
        <div className={classes.cards}>
          {data.socialMedia.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.pos_title} id="pos_9">
        <h1>Tech Team</h1>
        <div className={classes.cards}>
          {data.tech.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.pos_title} id="pos_10">
        <h1>E-Sport Team</h1>
        <div className={classes.cards}>
          {data.sport.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
      </div>
      <div className={classes.pos_title} id="pos_11">
        <h1>Workshop Heads</h1>
        <div className={classes.cards}>
          {data.workshop.map((item, index) => (
            <Card img={item.img} position={item.position} name={item.name} key={index} />
          ))}
        </div>
        <div className={classes.pos_title} id="pos_10">
       <h1>E-Sport Team</h1>
       <div className={classes.cards}>
         {data.sport.map((item, index) => (
           <Card img={item.img} position={item.position} name={item.name} key={index} />
         ))}
       </div>
     </div>
     <div className={classes.pos_title} id="pos_11">
       <h1>Workshop Heads</h1>
       <div className={classes.cards}>
         {data.workshop.map((item, index) => (
           <Card img={item.img} position={item.position} name={item.name} key={index} />
         ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default PosSection;
