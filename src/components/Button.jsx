function Button({ children }) {
  return (
    <button className="justify-center items-center px-5 py-2.5 bg-yellow-400 rounded">
      {children}
    </button>
  );
}

export default Button;
