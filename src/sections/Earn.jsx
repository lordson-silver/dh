import Button from '../components/Button'
const Earn = () => {
  return (
    <div className="flex flex-col gap-5 shrink-0 items-center justify-center p-3 w-full min-h-screen">
      <div>
        <h3 className="text-3xl font-bold">Earn With Dispatch Hub</h3>
      </div>
      <div className='flex gap-3'>
        <Button 
          variant='bg-fill'
          px='px-3'
          label='Courier'
        />
        <Button 
          variant='bg-outline'
          px='px-3'
          label='Vehicle Owner'
        />
      </div>
      <div className="flex md:flex-row flex-col px-8 p-3 justify-center items-start self-stretch gap-6 flex-1">
        <div className="flex flex-col justify-center items-start gap-5 flex-1">
          <img src="./../assets/images/image2.png" alt="image" className="w-full object-contain"/>
          <h3 className="text-3xl font-bold">Earn With Dispatch Hub</h3>
          <p className="text-lg font-semibold">Are you a motorcycle or car owner, and looking to earn  with Dispatch Hub? <br />Join us today</p>
          <Button 
          variant='bg-outline'
          px='px-3'
          label='Learn More'
        />
        </div>
        <div className="flex flex-col p-2 gap-5 flex-1 items-center">
          <h3 className="md:text-3xl text-2xl font-bold">How to earn with Dispatch Hub</h3>
          <div className="flex flex-col justify-center items-start self-stretch gap-2">
            <h4 className="flex items-center gap-3 font-bold text-lg md:px-9"><div className="h-4 w-4 bg-orange-600 rounded-full"></div> Drive more, earn more</h4>
            <p className="md:px-16 px-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic saepe cum unde commodi quisquam sint necessitatibus voluptate expedita delectus aspernatur.</p>
          </div>
          <div className="flex flex-col justify-center items-start self-stretch gap-2">
            <h4 className="flex items-center gap-3 font-bold text-lg md:px-9"><div className="h-4 w-4 bg-orange-600 rounded-full"></div> Drive more, earn more</h4>
            <p className="md:px-16 px-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic saepe cum unde commodi quisquam sint necessitatibus voluptate expedita delectus aspernatur.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Earn