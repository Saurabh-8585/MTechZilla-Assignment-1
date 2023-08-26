const Button = ({ btnText, btnIcon, handleOnClick }) => {
    return (
        <button
            className="flex justify-center  items-center gap-4  md:px-5 px-3 py-2 rounded-md bg-purple-500 text-white hover:bg-white hover:text-purple-500 border border-purple-500  ease-linear transition-all duration-150 font-medium shadow-md hover:shadow-lg"
            onClick={handleOnClick}
        >
            {btnText}
            {btnIcon && btnIcon}
        </button>
    )
}

export default Button