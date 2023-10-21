
const Button = ({type, label, to}) => {
  return (
    <button
        type={type}
        className="flex px-3 py-3 justify-center gap-3 rounded-full border"
    >
        <label htmlFor={to} className="pointer">{label}</label>
    </button>
  )
}

export default Button