import Button from '../components/Button';
const Download = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h3 className="text-2xl font-bold">Download Our App</h3>
      <Button 
          variant='bg-fill'
          px='px-10'
          label='Download'
        />
      <div className="flex justify-end items-center self-stretch text-white bg-grad px-10 pt-10 relative overflow-hidden md:h-[600px] h-[750px]">
        <div className="flex justify-center md:flex-row flex-col-reverse items-start sm:w-3/4 w-full gap-5 p-4 absolute left-1/2 transform -translate-x-1/2 -bottom-5"  >
          <img src="../assets/images/image3.png" alt="phone" className="w-full md:w-[400px] object-contain"/>
          <div className="flex flex-col justify-center self-center items-center gap-5 flex-1">
            <h3 className="mt-4 text-3xl font-bold">Download our app and better experience Dispatch Hub</h3>
            <p className="text-lg font-medium">Download our app today and better experience our services. Dispatch your goods through us to any part of the country.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download