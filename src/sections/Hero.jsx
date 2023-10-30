import Button from '../components/Button'

const Hero = () => {
  return (
    <section
        id="hero"
        className="w-full md:px-10 p-4 flex xl:flex-row min-h-screen ">
            <div className="relative xl:w-3/5 flex flex-col text-white justify-center w-[800px] items-center gap-7 max-xl:padding-x">
                <h1 className="flex px-4 xl:text-6xl text-4xl leading-12 font-bold font-normal-700 self-stretch items-center justify-center">Dispatch wherever you want, and track in real-time</h1>
                <p className="xl:text-xl text-lg px-4 font-medium font-display flex justify-center items-center self-center">We manage and schedule deliveries for a variety of user segments, ranging from business establishments to individual clients. We ensure quality delivery services at great prices, and you can track your deliveries at real-time</p>
            <div className="flex self-start px-4">
                <Button
                    className=""
                    variant={"bg-fill"}
                    px={'px-6'}
                    label={"Get Started"}
                />
            </div>
            </div>
        </section>
  )
}

export default Hero