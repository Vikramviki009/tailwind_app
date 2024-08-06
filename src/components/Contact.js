import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useStore } from "../store";
import { StoreActions } from "../store/actions";

const Contact = () => {
  const [state, dispatch] = useStore();
  const [name, setName] = useState("");
  const [count] = useState(0);
  const focusRef = useRef(null);

  useEffect(() => {
    console.log(state);
  }, [dispatch, state]);

  useLayoutEffect(() => {
    console.log("Runs before useEffect");
  }, []);

  const handleChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const expensiveCalculation = useMemo(() => {
    // Simulating an expensive calculation
    for (let i = 0; i < 100000000; i++) {}
    return count * 2;
  }, [count]);

  console.log(expensiveCalculation);

  return (
    <main>
      <div className="w-11/12 md:w-10/12 mx-auto grid md:grid-cols-12 m-10">
        <section className="col-span-6 md:w-10/12">
          <p className="text-yellow-400 font-semibold tracking-widest font-family text-center md:text-left pb-3 md:pb-0">
            GET IN TOUCH
          </p>
          <p className="font-family text-lg tracking-wide">Contact Us</p>
          <p className="text-gray-500 text-sm tracking-wide pt-2">
            This Contact Us page is for a marketing agency that works directly
            with businesses. Since it knows its audience, Brandaffair encourages
            visitors to "have a talk" one-on-one rather than providing a one-way
            communication channel via support resources.
          </p>
        </section>
        <section className="col-span-6">
          <p className="text-gray-500 text-xs pt-10 pb-3 tracking-wide">
            Thank you for your interest, kindly fill the below form and we will
            get tou you soon.
          </p>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => handleChange(e)}
              className="border-b text-sm p-1 w-6/12"
              ref={focusRef}
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              className="border-b text-sm p-1 w-6/12 my-3"
              value={state.email}
              onChange={(e) =>
                dispatch(StoreActions.updateEmail(e.target.value))
              }
            />
            <br />
            <textarea
              type="text"
              placeholder="Message"
              className="border-b text-sm p-1 w-6/12"
            />
            <br />
            <div className="flex gap-1">
              <button className="bg-yellow-900 rounded text-white py-1 px-6 mt-3 w-24">
                Send
              </button>
              <button
                className="bg-yellow-700 rounded text-white py-1 px-6 mt-3 w-lg"
                onClick={() => focusRef.current.focus()}
              >
                Click to focus on name input field
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* fotter */}
      <section className="grid grid-cols-12 border-t py-2 px-2">
        <div className="text-sm col-span-8 flex justify-between">
          <div>Blog |</div>
          <div className="md:px-3 hidden md:block">Help Center |</div>
          <div>Terms |</div>
          <div className="md:pl-3">Privacy |</div>
        </div>

        <div className="col-span-4 flex justify-end">
          <div>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className="px-4">
            <i className="fa-brands fa-google"></i>
          </div>
          <div>
            <i className="fa-brands fa-snapchat"></i>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
