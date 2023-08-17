
// import { aboutPage } from 'lib/schema';

export default function AboutPage() {

  

  return (
    <>
    {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPage) }}
        key="product-jsonld"
      /> */}
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
      Hi guys! My name is Erin I am a Fitness Trainer. Being a fitness trainer has given me the opportunity to help strengthen clients mind, body, and spirit through fitness and health! 
        I believe that everyone deserves the opportunity to be the best version of them, starting with fitness and health.
      <br />
        <hr />
      A little about my journey, I grew up doing gymnastics and was blessed to get an athletic scholarship to the University of Nebraska. 
        After graduating I struggled with learning what makes me happy. The one thing that was consistent in my life during this time was working out.
        That's when everything clicked; fitness is my passion. I love helping others find themselves through fitness. 
        My goal is to help you reach your goals but most importantly enjoy your fitness journey!
      </p>
    </section>
    </>
  );
}
