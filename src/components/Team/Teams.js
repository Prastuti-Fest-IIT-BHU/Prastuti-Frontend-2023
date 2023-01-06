import List from './Lists/List';
import classes from './Sponsors.module.css';
import SponsorSection from './Final/SponsorSection';


function PrastutiTeam() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.sidebar}>
        <List />
      </div>
      <div className={classes.main}>
        <SponsorSection sponsorId="sponsor_1" href="#sponsor_1" />
      </div>
    </div>
  );
}

export default PrastutiTeam;
