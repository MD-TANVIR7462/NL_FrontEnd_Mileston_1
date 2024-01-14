import React, { useEffect, useRef } from "react";

const M3v1Useref = () => {
   const myRef = useRef<HTMLInputElement | null>(null)
   useEffect(()=>{
      myRef.current?.focus()
   },[])
  return (
    <div>
      <form>
        <input
        ref={myRef}
          type="text"
          placeholder="Name"
          name="name"
          className="input input-bordered"
          required
        />
        <button type="submit" className="btn btn-outline bg-red-500">submit</button>
      </form>
    </div>
  );
};

export default M3v1Useref;
