import { Hero, About, Download, Earn, Faq, Footer, Nav, Services } from './sections'

const App = () => (
    <main className="relative">

      <Nav />

      <section className="padding sm:py-32 py-16 w-full bg-[url('./assets/images/landing.png')] bg-cover bg-no-repeat bg-center">
        <Hero />
      </section>
      <section className="padding">
        <Earn />
      </section>
      <section className="padding">
        <About />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Download />
      </section>
      <section className="padding">
        <Faq />
      </section>
      <footer className="padding py-8 text-white bg-grad">
        <Footer />
      </footer>
    </main>
)

export default App;