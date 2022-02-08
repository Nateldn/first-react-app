// Import Images
/* Netflix */ 
import Discovery from './images/Discovery.png';
import Fate from './images/Fate.png';
import Outside from './images/Outside.png'; 
import Queens from './images/Queens.png'; 
import Witcher from './images/Witcher.png'; 

/* AirBNB */
import Water from './images/water-home.jpg';
import Cabin from './images/cabin.jpg';
import Studio from './images/studio-in-japan.jpg'; 
import Pets from './images/pets-allowed.jpg'; 


/* BBC */
import Biden from './images/biden.jpeg';
import Spine from './images/spine-guy.jpeg';
import Students from './images/students.jpg'; 
import Blood from './images/blood-pressure.jpeg'; 
import TimestampClock from './images/timestamp-clock.png'; 

const App = () => {
  return (
  <main>
    <section>
      <article className="netflixshows">
      <Show poster={Fate}/>
      <Show poster={Outside}/>
      <Show poster={Discovery}/>
      <Show poster={Queens}/>
      <Show poster={Witcher}/>
      </article>
      <article className="airbnb_listings">
      <AirBnB 
      placeImage={Cabin} 
      title='Cabins and Cottages'
      />
      <AirBnB 
      placeImage={Water} 
      title='Unique Stays' 
      />
      <AirBnB 
      placeImage={Studio} 
      title='City Apartments'
      />
      <AirBnB 
      placeImage={Pets} 
      title='Pets Allowed' 
      />
      </article>
      <article className='latest_news'>
        
        <BBC headlineImg={Biden} headline="Us will end Russian pipeline if Ukraine invaded" lede="Echo park letterpress DIY neutra, tacos semiotics hammock. Authentic post-ironic sriracha wayfarers godard bushwick trust fund keffiyeh knausgaard readymade." timeImg={TimestampClock} timestamp="1hr" category="Europe" />
        
        <BBC headlineImg={Spine} headline="Man with severed spine walks in world first" lede="Echo park letterpress DIY neutra, tacos semiotics hammock. Authentic post-ironic sriracha wayfarers godard bushwick trust fund keffiyeh knausgaard readymade." timeImg={TimestampClock} timestamp="1hr" category="Europe" />

        <BBC headlineImg={Students} headline="More generous grading for GCSE and A-level exams" lede="Echo park letterpress DIY neutra, tacos semiotics hammock. Authentic post-ironic sriracha wayfarers godard bushwick trust fund keffiyeh knausgaard readymade." timeImg={TimestampClock} timestamp="1hr" category="Europe" />

        <BBC headlineImg={Blood} headline="Blood pressure warning over long-term paracetamol use" lede="Echo park letterpress DIY neutra, tacos semiotics hammock. Authentic post-ironic sriracha wayfarers godard bushwick trust fund keffiyeh knausgaard readymade." timeImg={TimestampClock} timestamp=" 1hr" category="Europe" />

      </article>
      
    </section>
    
  </main>
  )
}

// Row 1 - Netflix 
const Show = (props) => {
  return (
    <figure class="show_poster">
      <img src={props.poster}  alt=""/>
    </figure>
  
  )   
}

// Row 2 - Airbnb 

const AirBnB = (props) => {
  return (
    <figure class="property"> 
      <img src={props.placeImage} alt="" />
      <h2>{props.title}</h2>
    </figure>
  )
}

//  Row 3 - BBC

const BBC = (props) => {
  return (
    <article class="newstory"> 
      <img class="story_img" src={props.headlineImg} alt="" />
      <h2><a href="#">{props.headline}</a></h2>
      <p>{props.lede}</p>
      <ul> 
        <li><img src={props.timeImg} alt=''/> | {props.timestamp}</li>
        <li>{props.category}</li>
      </ul>
    </article>
  )
}



export default App
