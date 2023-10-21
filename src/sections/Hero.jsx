// import Button from "../components/Button"

const Hero = () => {
  return (
    <section
        id="hero"
        className="w-full border-2 border-red-500 md:px-8 p-2 flex xl:flex-row min-h-screen max-container bg-orange-200">
            <div className="relative xl:w-2/5 flex flex-col justify-center w-full max-xl:padding-x">
                <h1 className="text-4xl mr-12">Dispatch wherever you want, and track in real-time</h1>
                <p className=" pt-3">We manage and schedule deliveries for a variety of user segments, ranging from business establishments to individual clients. We ensure quality delivery services at great prices, and you can track your deliveries at real-time</p>
            </div>
            {/* <div className="relative  w-full max-xl:padding-x">
                <Button 
                    type={"submit"}
                    label={"Get Started"}
                    to={'/'}
                />
            </div> */}
        </section>
  )
}

export default Hero