import { image4 } from '../assets/images'
const About = () => {
  return (
    <div className="flex flex-col justify-center gap-3 p-9">
      <h3 className="text-3xl font-bold">About Dispatch Hub</h3>
      <div className="flex md:flex-row flex-col gap-5">
        <img src={image4} alt="image" className="md:w-2/5 object-contain rounded-md"/>
        <p className="font-medium text-lg md:w-3/5">Dispatch hub is a mobile delivery platform where customers can book a dispatch rider for delivering good. We offer a reliable way for customers to request and track the delivery process of their goods. We also offer additional features such as wallet payments, photo capture for goods verification, real-time rider tracking, and the option to choose between a bike or a cab based size of goods.</p>
      </div>
    </div>
  )
}

export default About