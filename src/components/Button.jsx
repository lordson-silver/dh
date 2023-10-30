
const Button = ({variant, px, label}) => {
  return (
    <button
        className={`pointer ${variant} ${px}`}
    >
        <label className="pointer">{label}</label>
    </button>
  )
}

export default Button