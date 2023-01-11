export default function ProfileForm() {
  const handleSubmit=async(event)=>{
    event.preventDefault();
    console.log(event.target.first.value);
  }
  return (
    <>
      <div>
        <div className="w-full bg-cyan-600 text-slate-50 text-center">
          profile
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="first">First Name</label>
          <input type="text" id="first" name="first" required />

          <label htmlFor="last">Last Name</label>
          <input type="text" id="last" name="last" required />

          <button className="bg-white" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
