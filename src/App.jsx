import { Hero, About, Download, Earn, Faq, Footer, Nav, Services } from './sections'

const App = () => (
    <main className="relative">

      <Nav />

      <section className="xl:padding-l wide:padding-r padding-b">
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
      <footer className="padding-x padding-t pb-8">
        <Footer />
      </footer>
    </main>
)

export default App;