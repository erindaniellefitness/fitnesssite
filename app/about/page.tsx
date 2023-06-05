
import { aboutPage } from 'lib/schema';

export default function AboutPage() {

  

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPage) }}
        key="product-jsonld"
      />
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        This is my about page.
      </p>
    </section>
    </>
  );
}
