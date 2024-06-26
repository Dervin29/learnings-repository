import React, { useCallback, useEffect, useRef } from "react";

// function for generating password
const PasswordGenerator = () => {
  // state variables
  const [length, setLength] = React.useState(8);
  const [includeNumbers, setIncludeNumbers] = React.useState(false);
  const [includeSymbols, setIncludeSymbols] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [isCopied, setIsCopied] = React.useState(false);

  //useRef hook is used to access the input element
  const passwordRef =useRef(null);

  // function for generating password
  //useCallback hook is used to prevent unnecessary re-rendering
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeSymbols) str += "!@#$%^&*()";
    if (includeNumbers) str += "0123456789";

    // loop for generating password
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length,  includeNumbers, includeSymbols]);

  // function for copying password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // set selection range to select the whole password
    passwordRef.current?.setSelectionRange(0,99);
    // navigator clipboard api needs a secure context to work
    window.navigator.clipboard.writeText(password);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  },[password,isCopied]);

  //useEffect hook is used to run the generatePassword function when the 
  //length, includeNumbers, includeSymbols state variables change to
  // avoid unnecessary re-rendering
  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSymbols]);

  return (
    <div className="w-full max-w-md mx-auto p-4 shadow-md rounded my-8 text-orange-500 bg-gray-700 mb-4">
      <h1 className="text-2xl font-bold mb-4 ">Generate a Password</h1>
      <div className=" flex shadow-sm rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="w-full p-3 text-gray-500 text-lg bg-gray-800 outline-none"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button className=" outline-none bg-blue-700 text-white px-3 py-0.5 "
          onClick={copyPasswordToClipboard}>
          copy
        </button>
      </div>

      <div className=" flex text-sm gap-x-2">
        <div className=" flex items-center gap-x-1">
          <input
            type="range"
            min="8"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label> length: {length}</label>
        </div>

        <div className=" flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={includeNumbers}
            id="numberInput"
            onChange={(e) => setIncludeNumbers((prev)=> !prev)} 
          />
          <label> Numbers</label>
      </div>

        <div className=" flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={includeSymbols}
            id="symbolInput"
            onChange={(e) => setIncludeSymbols((prev)=> !prev)} 
          />
          <label> Symbols</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
