const Home = () => {
  return (
    <div className="xl:mt-20   flex justify-evenly flex-wrap">
      <div className="xl:w-2/5 sm:w-full py-20  ">
        <p className="2xl:text-5xl text-white mb-10 leading-tight md:text-2xl " >
          Searching for
          <span className="font-bold"> Augmented Development</span> Teams to
          steer your product towards triumph?"
        </p>
        <div className="flex gap-9 justify-between xl:flex-nowrap flex-wrap ">
          <div  >
            <p className="font-bold md:text-xl 2xl:text-4xl text-white">50+</p>
            <p className="text-base text-white">Clients</p>
          </div>
          <div  >
            <p className="font-bold md:text-xl 2xl:text-4xl text-white">80+</p>
            <p className="text-base text-white ">Projects successfully completed</p>
          </div>
          <div >
            <p className="font-bold md:text-xl 2xl:text-4xl text-white">60%</p>
            <p className="text-base text-white ">of the clients converted into long term engagement partne</p>
          </div>
        </div>
      </div>

      <form
        action="#"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          width: "652px",
          height: "493px",
          padding: "50px 27.436px 58.076px 27.438px",
          borderRadius: "20px",
          background: "linear-gradient(180deg, #DBDBDB 12.35%, #AAB1BA 100%)",
        }}
      >
        <div>
          <p className="font-bold text-black text-2xl">Fill out the form.</p>
          <p className="text-black">
            Our team will touch base with you within 24 hours.
          </p>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Full Name*"
            style={{
              background: "transparent",
              borderBottom: "1px solid black",
              paddingBottom: "10px",
              width: "50%",
            }}
            className="placeholder:text-gray-700"
          />
          <input
            type="text"
            placeholder="Email ID*"
            style={{
              background: "transparent",
              borderBottom: "1px solid black",
              paddingBottom: "10px",
              width: "50%",
            }}
            className="placeholder:text-gray-700"
          />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Country"
            style={{
              background: "transparent",
              borderBottom: "1px solid black",
              paddingBottom: "10px",
              width: "50%",
            }}
            className="placeholder:text-gray-700"
          />
          <input
            type="text"
            placeholder="Contact Number"
            style={{
              background: "transparent",
              borderBottom: "1px solid black",
              paddingBottom: "10px",
              width: "50%",
            }}
            className="placeholder:text-gray-700"
          />
        </div>

        <input
          type="text"
          placeholder="Tell us your requirements*"
          style={{
            background: "transparent",
            borderBottom: "1px solid black",
            paddingBottom: "10px",
          }}
          className="placeholder:text-gray-700"
        />

        <div className="flex gap-4 items-center">
          <button className="bg-black py-2 px-9 rounded-full">Submit</button>
          <i className="fa-solid fa-arrow-right rounded-full p-3 bg-black text-white"></i>
        </div>
      </form>
    </div>
  );
};

export default Home;
