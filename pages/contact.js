import Head from "next/head";
function Contact() {
  return (
    <>
      <Head>
        <title>Faith Hope Love | Contact</title>
      </Head>
      <div className="contact">
        <h1>Reach Out To Us</h1>
        <p>
          With this we will receive your message in our email and please expect
          a response as soon as possible.
        </p>
        <form action="https://formsubmit.co/fhl.npo@gmail.com" method="post">
          <div className="top">
            <div className="left">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="Name"
                placeholder="Enter Your Name"
                required={true}
              />
            </div>
            <div className="right">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="Email"
                placeholder="Enter Your Email"
                required={true}
              />
            </div>
          </div>
          <div className="bottom">
            <label htmlFor="comment">Please Enter Your Comment</label>
            <textarea
              id="comment"
              name="Comment"
              cols="30"
              rows="10"
              required={true}
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.target.preventDefault();
            }}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
